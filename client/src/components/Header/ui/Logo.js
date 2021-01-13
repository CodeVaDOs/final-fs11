import React from 'react';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  logo: {
    color: '#254a93',
    fontSize: '24px',
    fontWeight: 700,
    textTransform: 'uppercase',
    margin: 0,
    minWidth: '186px'
  },

  green: {
    fontSize: 'inherit',
    fontWeight: 'inherit',
    color: '#4ad584',
    textTransform: 'inherit'
  }
});

const Logo = () => {
  const classes = useStyles();

  return (
    <h1 className={classes.logo}>
      marksem &nbsp;
      <span className={classes.green}>crm</span>
    </h1>
  );
};

export default React.memo(Logo);
