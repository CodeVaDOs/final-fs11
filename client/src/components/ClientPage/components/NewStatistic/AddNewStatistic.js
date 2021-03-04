import 'date-fns';
import React, { createContext, useReducer, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import DatePicker from "react-datepicker";
import Transaction from "./Transaction";
import { TRANSACTION_TYPES } from "./TransactionTypes";
import { useDispatch } from "react-redux";


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

export const FormTransactionsContext = createContext({
  transactions: [],
  setTransactions: () => {
  }
});

export const AddNewStatistic = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  const initFormFieldsState = {
    house: "House 1",
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

  const [formFieldsState, dispatcher] = useReducer(formFieldsReducer, initFormFieldsState);

  const transactionsTypesCountState = {
    income: 1,
    communal: 1,
    service: 1,
    other: 1
  };

  const transactionsTypesReducer = (state, action) => {
    switch (action.type) {
      case 'changeIncome':
        return {
          ...state,
          income: action.payload
        };
      case 'changeCommunal':
        return {
          ...state,
          communal: action.payload
        };
      case 'changeService':
        return {
          ...state,
          service: action.payload
        };
      case 'changeOther':
        return {
          ...state,
          other: action.payload
        };
      default:
        return state;
    }
  };

  const [transactionsState, transactionsDispatcher] = useReducer(transactionsTypesReducer, transactionsTypesCountState);

  const selectHouseChange = (e) =>
    dispatcher({
      type: "setHouse",
      payload: e.target.value
    });

  const handleDateChange = (direction) => (date) => {
    dispatcher({
      type: direction,
      payload: date
    });
  };

  const [transactions, setTransactions] = useState([]);
  const value = { transactions, setTransactions };

  return (
    <FormTransactionsContext.Provider value={value}>
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
              value={formFieldsState.house}
              onChange={selectHouseChange}
            >
              <MenuItem value={"House 1"}>House 1</MenuItem>
              <MenuItem value={"House 2"}>House 2</MenuItem>
              <MenuItem value={"House 3"}>House 3</MenuItem>
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
          <Transaction transactionType={TRANSACTION_TYPES.income}/>
        }

        <Typography
          style={{ margin: "20px 0" }}
          component={"p"}
          className={classes.boldedText}>
          {"Витрати за напрямками:"}
        </Typography>
        <Transaction transactionType={TRANSACTION_TYPES.communal}/>
        <Transaction transactionType={TRANSACTION_TYPES.service}/>
        <Transaction transactionType={TRANSACTION_TYPES.other}/>
      </form>
    </FormTransactionsContext.Provider>
  );
}
;