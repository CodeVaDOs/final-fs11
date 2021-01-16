import React from 'react';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
  root: {
    fontFamily: 'Roboto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'

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

    </div>
  );
};