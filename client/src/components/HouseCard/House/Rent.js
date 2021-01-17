import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import SelecOptions from "./SelectOptions";
import AddComment from "./AddComment";
import DatePickers from "./datePicker/DatePicker";


const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '318px',
    boxShadow: "1px 2px 2px rgba(0,0,0,0.19), 1px 2px 2px rgba(0,0,0,0.23)",
    borderRadius: '20px',
    paddingTop: '35px',
    paddingBottom: '35px',
    paddingLeft: '20px',
    fontFamily: 'Roboto',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: '10px'

  },
  p: {
    fontSize: '16px',
    fontWeight: 400,
    color: '#293134'
  }
}));


export const Rent = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={classes.p}>Забронювати цей Будинок</p>
      <DatePickers/>
      <SelecOptions/>
      <AddComment/>
    </div>
  );
};