import 'date-fns';
import React, { createContext, useEffect, useMemo, useReducer, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import DatePicker from "react-datepicker";
import Transaction from "./Transaction";
import { TRANSACTION_TYPES } from "./TransactionTypes";
import { useFetch } from "../../../../hooks/useFetch";
import { AddTransactionField } from "./AddTransactionFieldBtn";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "1200px",
    width: "100%",
    margin: "0 40px"
  },
  boldedText: {
    fontWeight: "bold",
    marginRight: "20px"
  },
  labelForm: {
    display: "block",
    marginBottom: "30px"
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
  }

}));

export const AddNewStatistic = () => {
  const { t } = useTranslation();
  const classes = useStyles();

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
          house: action.payload
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
      case 'ADD_ITEM':
        return {
          ...state,
          [action.payload.transactionType]: [...state[action.payload.transactionType], action.payload.dataTransaction]
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


  const [houses, setHouses] = useState([]);
  const [houseName, setHouseName] = useState("");
  const [houseId, setHouseId] = useState(undefined);
  const selectHouseChange = (e) => {
    setHouseName(e.target.value);
    setHouseId(e.currentTarget.getAttribute("dataid"));
  };

  useFetch({
    method: "GET",
    url: "houses",
    initData: houses,
    dataTransformer: (data) => {
      setHouses(data);
      setHouseName(data[0]['description']);
    }
  });


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

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <label className={classes.labelForm}>
        <Typography component="span" className={classes.boldedText}>
          {t("Клієнт")}
        </Typography>
        <Typography component="span">
          {"Приходько Андрій Олександрович"}
        </Typography>
      </label>
      <label htmlFor={"house-select"} className={classes.labelForm}>
        <Typography component="span" className={classes.boldedText}>
          {t("Будинок")}
        </Typography>
        <FormControl variant="outlined" className={classes.formControlSelectHouse}>
          <Select
            className={classes.selectHouse}
            labelId="house-select"
            value={houseName}
            dataid={houseId}
            onChange={selectHouseChange}
          >
            {houses.length ? houses.map((h, idx) =>
              <MenuItem
                dataid={h['id']}
                key={idx}
                value={h['description']}>
                {h['description']}
              </MenuItem>) : null}
          </Select>
        </FormControl>
      </label>
      <label className={classes.labelForm}>
        <Typography
          component="p"
          style={{ marginBottom: "10px" }}
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
        style={{ margin: "20px 0" }}
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
      <Button>

      </Button>
    </form>
  );
};