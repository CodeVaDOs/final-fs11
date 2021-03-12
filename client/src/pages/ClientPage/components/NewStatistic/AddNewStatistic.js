import React, {useCallback, useEffect, useReducer, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import DatePicker from "react-datepicker";
import Transaction from "./Transaction";
import {TRANSACTION_TYPES} from "./TransactionTypes";
import {AddTransactionField} from "./AddTransactionFieldBtn";
import Button from "@material-ui/core/Button";
import {useSelector} from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import {useFetch} from "../../../../hooks/useFetch";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    margin: "0 40px"
  },
  boldedText: {
    fontWeight: "bold",
    marginRight: "20px"
  },
  labelDate: {
    display: "block"
  },
  labelForm: {
    display: "flex",
    marginBottom: "30px"
  },
  yCenter: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },

  formControlSelectHouse: {
    height: "30px",
    width: "50%",
    maxWidth: "500px"
  },
  selectHouse: {
    height: "30px"
  },
  datePicker: {
    borderRadius: "5px",
    border: "1px solid #c2c2c2",
    padding: "5px",
    width: "150px"
  },

  sendButton: {
    marginTop: "50px",
    display: "block",
    background: "#254A93",
    color: "white"
  }
}));

export const AddNewStatistic = ({user}) => {
  const {t} = useTranslation();
  const classes = useStyles();
  const [isDisabledSendBtn, setDisabledSendBtn] = useState(false);

  const parseDate = (date) => {
    return date.toJSON().split("T")[0];
  }

  const initFormFieldsState = {
    houseId: "",
    fromDate: new Date(),
    toDate: new Date()
  };

  const formFieldsReducer = (state, action) => {
    switch (action.type) {
      case "setHouse":
        return {
          ...state,
          houseId: action.payload
        };
      case "setFromDate":
        return {
          ...state,
          fromDate: action.payload
        };
      case "setToDate":
        return {
          ...state,
          toDate: action.payload
        };
      default:
        return state;
    }
  };

  const [formFieldsState, formFieldsDispatcher] = useReducer(formFieldsReducer, initFormFieldsState);

  const [transactionsCount, setTransactionsCount] = useState({
    income: 1,
    communal: 1,
    service: 1,
    other: 1
  });

  const changeTransactionCount = (transactionType) => (_) => {
    setTransactionsCount(state => {
      return {
        ...state,
        [transactionType]: state[transactionType] + 1
      };
    });
  };

  const updateArrItemByIndex = (inputArray, item) => {
    inputArray.splice(item.index, 1, item.dataTransaction);
    return inputArray;
  };

  const transactionsDataState = {
    income: [],
    communal: [],
    service: [],
    other: []
  };

  const transactionsDataReducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE_INCOME':
        return {
          ...state,
          income: updateArrItemByIndex(state.income, action.payload)
        };
      case 'CHANGE_COMMUNAL':
        return {
          ...state,
          communal: updateArrItemByIndex(state.communal, action.payload)
        };
      case 'CHANGE_SERVICE':
        return {
          ...state,
          service: updateArrItemByIndex(state.service, action.payload)
        };
      case 'CHANGE_OTHER':
        return {
          ...state,
          other: updateArrItemByIndex(state.other, action.payload)
        };
      case 'RESET':
        return {
          ...state,
          income: [],
          communal: [],
          service: [],
          other: []
        };
      default:
        return state;
    }
  };

  const [transactionsData, dataDispatcher] = useReducer(transactionsDataReducer, transactionsDataState);

  const handleDateChange = (direction) => (date) => {
    formFieldsDispatcher({
      type: direction,
      payload: date
    });
  };


  let houses = useSelector(state => state.houses.houses);
  let housesLoading = useSelector(state => state.houses.loading);

  const [houseName, setHouseName] = useState("");

  useEffect(() => {
    if (!housesLoading) {
      setHouseName(`${houses[0].description} ID${houses[0].id}`);
      formFieldsDispatcher({
        type: "setHouse",
        payload: houses[0].id
      })
    }
  }, [housesLoading])

  const selectHouseChange = (e) => {
    setHouseName(e.target.value);
    formFieldsDispatcher({
      type: "setHouse",
      payload: e.currentTarget.getAttribute("dataid")
    })
  };

  const renderTransactions = (count, type) => {
    return Array(count)
      .fill(type)
      .map((t, idx) =>
        <Transaction
          transactionDispatcher={dataDispatcher}
          key={idx}
          index={idx}
          transactionType={t}
        />);
  };


  const [{data: transactionRes, loading}, getData] = useFetch({
    instant: false,
    method: "POST",
    url: "/transactionGroups",
    initData: []
  })

  const submitTransaction = (td, ffState) => (e) => {
    e.preventDefault();
    setDisabledSendBtn(true)
    const transactionGroups = [
      ...td.income.slice(),
      ...td.communal.slice(),
      ...td.other.slice(),
      ...td.service.slice()
    ]
      .filter(t => t.amount)
      .map(t => {
        t.amount = Number.parseInt(t.amount)
        return t;
      })
      .map(t => {
        if (t.transactionType !== TRANSACTION_TYPES.income && t.amount > 0) {
          t.amount = t.amount * -1;
        }
        return {
          ...t,
          ...ffState,
          fromDate: parseDate(ffState.fromDate),
          toDate: parseDate(ffState.toDate)
        }
      });
    getData(
      {
        data: transactionGroups
      }
    );
  }

  useEffect(() => {
    if(!loading) {
      setDisabledSendBtn(false)
      dataDispatcher({
        type: "RESET"
      })
      console.log(transactionRes)
    }
  }, [loading])

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <label className={classes.labelForm}>
        <Typography component="span" className={classes.boldedText}>
          {t("Клієнт")}
        </Typography>
        <Typography component="span">
          {user['name']}
        </Typography>
      </label>
      <label className={`${classes.labelForm} ${classes.yCenter}`}>
        <Typography component="span" className={classes.boldedText}>
          {t("Будинок")}
        </Typography>
        <FormControl variant="outlined" className={classes.formControlSelectHouse}>
          {housesLoading ? <CircularProgress/> :
            <TextField
              size={"small"}
              select
              value={houseName}
              variant="outlined"
              onChange={selectHouseChange}
            >
              {houses.map((h, idx) => (
                <MenuItem
                  dataid={h.id}
                  key={idx}
                  value={`${h.description} ID${h.id}`}>
                  {`${h.description} ID${h.id}`}
                </MenuItem>))}
            </TextField>}
        </FormControl>
      </label>
      <label className={classes.labelDate}>
        <Typography
          component="p"
          style={{marginBottom: "10px"}}
          className={classes.boldedText}>
          {t("Період статистики")}
        </Typography>
        <DatePicker
          selected={formFieldsState.fromDate}
          onChange={handleDateChange("setFromDate")}
          className={classes.datePicker}
        />
        &nbsp;|&nbsp;
        <DatePicker
          selected={formFieldsState.toDate}
          onChange={handleDateChange("setToDate")}
          className={classes.datePicker}
        />
      </label>
      {
        renderTransactions(transactionsCount.income, TRANSACTION_TYPES.income)
      }
      <AddTransactionField
        handler={changeTransactionCount}
        transactionType={"income"}
      />
      <Typography
        style={{margin: "20px 0"}}
        component={"p"}
        className={classes.boldedText}>
        {"Витрати за напрямками:"}
      </Typography>
      {
        renderTransactions(transactionsCount.communal, TRANSACTION_TYPES.communal)
      }

      <AddTransactionField
        handler={changeTransactionCount}
        transactionType={"communal"}
      />
      {
        renderTransactions(transactionsCount.service, TRANSACTION_TYPES.service)
      }
      <AddTransactionField
        handler={changeTransactionCount}
        transactionType={"service"}
      />
      {
        renderTransactions(transactionsCount.other, TRANSACTION_TYPES.other)
      }
      <AddTransactionField
        handler={changeTransactionCount}
        transactionType={"other"}
      />


      <Button
        onClick={submitTransaction(transactionsData, formFieldsState)}
        variant="contained"
        className={classes.sendButton}
        disabled={isDisabledSendBtn}>
        {t("Зберегти")}
      </Button>
    </form>
  );
};