import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import SelecOptions from "./SelectOptions";
import AddComment from "./AddComment";
import DatePickers from "./datePicker/DatePicker";
import { useTranslation } from "react-i18next";


const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: 'auto',
    borderRadius: '20px',
    paddingTop: '35px',
    paddingBottom: '35px',
    paddingLeft: '20px',
    fontFamily: 'Roboto',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: '10px',
    boxShadow: "0px 3px 6px #00000033",

  },
  p: {
    fontSize: '16px',
    fontWeight: 400,
    color: '#293134'
  }
}));


export const Rent = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <p className={classes.p}>{t('rentThisHouse')}</p>
      <DatePickers/>
      <SelecOptions/>
      <AddComment/>
    </div>
  );
};