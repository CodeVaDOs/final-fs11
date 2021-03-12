import React, { useEffect, useReducer, useState } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import clsx from "clsx";


const useStyles = makeStyles(({
  root: {
    border: "none",
    display: "flex",
    margin: "20px 0",
    padding: 0
  },
  wrap: {
    width: "30%",
    display: "flex"
  },
  currencySelect: {
    margin: "0 20px",
    width: "120px"
  },
  boldedText: {
    fontWeight: "bold",
    marginRight: "20px",
  },
  shadow: {
    boxShadow: "0px 2px 4px #00000029"
  },
  grow: {
    flexGrow: 1
  }
}));

const Transaction = ({ transactionType, index, transactionDispatcher }) => {
  const { t } = useTranslation();

  const TRANSACTION_TYPES = {
    "INCOME": t("Дохід"),
    "COMMUNAL": t("Комунальні"),
    "SERVICE": t("Сервіс"),
    "OTHER": t("Інше")
  };

  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'UAH',
      label: '₴',
    }
  ];
  const classes = useStyles();

  const initTransactionState = {
    amount: "",
    currency: "UAH",
    comment: "",
    transactionType
  };

  const transactionReducer = (state, action) => {
    switch (action.type) {
      case 'setAmount':
        return {
          ...state,
          amount: action.payload
        };
      case 'setCurrency':
        return {
          ...state,
          currency: action.payload
        };
      case 'setComment':
        return {
          ...state,
          comment: action.payload
        };
      case 'reset':
        return {
          ...state,
          ...initTransactionState
        }
      default:
        return state;
    }
  };

  const [transactionState, dispatch] = useReducer(transactionReducer, initTransactionState);
  const [selectState, setSelectState] = useState("₴ UAH");

  const fieldHandler = (actionType) => (e) => dispatch({
    type: actionType,
    payload: e.currentTarget.value
  });

  useEffect(() => {
    transactionDispatcher({
      type: `CHANGE_${transactionType}`,
      payload: {
        index,
        dataTransaction: transactionState
      }
    });
  }, [transactionState]);


  return (<fieldset className={classes.root}>
    <Box className={clsx(classes.wrap, classes.grow)}>
      <Typography
        component="span"
        className={clsx(classes.boldedText, classes.grow)}>
        {TRANSACTION_TYPES[transactionType]}
      </Typography>
      <TextField
        InputLabelProps={{ shrink: true }}
        style={{width: "70%"}}
        //value={transactionState.amount}
        onChange={fieldHandler("setAmount")}
      />
    </Box>
    <FormControl className={clsx(classes.currencySelect, classes.grow)}>
      <TextField
        className={classes.shadow}
        select
        value={selectState}
        size={"small"}
        onChange={(e) => {
          setSelectState(e.target.value);
          dispatch({
            type: "setCurrency",
            payload: e.currentTarget.getAttribute('datavalue')
          });
        }}
        variant="outlined"
      >
        {currencies.map((currency, idx) => (
          <MenuItem
            key={idx}
            value={`${currency.label} ${currency.value}`}
            datavalue={currency.value}
            className={classes.currencySelect}>
            {`${currency.label} ${currency.value}`}
          </MenuItem>
        ))}
      </TextField>
    </FormControl>
    <TextField
      className={clsx(classes.shadow, classes.grow)}
      type={"text"}
      variant={"outlined"}
      size={"small"}
      placeholder={t("Комментар")}
      //value={transactionState.comment}
      onChange={fieldHandler("setComment")}/>
  </fieldset>);
};

export default Transaction;