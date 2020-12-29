import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    textDecoration: 'none',
    textTransform: 'capitalize',
    display: "flex",
    width: 'max-content',
    textDecorationColor: '#6E7375',
    alignItems: "center",
    position: 'relative',

    // '&:hover': {
    '&::before': {
      position: "absolute",
      bottom: "-5px",
      left: 0,
      right: 0,
      height: '1px',
      backgroundColor: 'black',
      content: '',
    }
    // }
  },

}));

export const Btn = props => {
  const classes = useStyles();
  const { path, title, icon } = props;
  return (
    <Link to={path}>
      <Button
        className={classes.button}
        startIcon={icon}>
        {title}
      </Button>
    </Link>
  );
};
