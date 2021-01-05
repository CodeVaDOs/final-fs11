import React from 'react';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    borderRadius: 5,
    border: "1.4px solid #254A93",
    height: 50,
    width: 193,
    fontFamily: "Roboto, sans-serif",
    textTransform: "capitalize",
    fontStyle: "normal",
    fontWeight: 600,
    marginLeft: '40%',
    fontSize: 18,
    textDecoration: "none",
    backgroundColor: "#254A93",
    color: "#FFF",
    boxShadow: "0 4px 26px rgba(198, 170, 176, 0.16)",
    "&:hover": {
      backgroundColor: "#254A93",
      color: "#FFF",
      textDecoration: "none",
    },
    label: {
      textDecoration: "none",
      "&:link": {
        textDecoration: "none",
      },
      "&:visited": {
        textDecoration: "none",
      },
      "&:active": {
        textDecoration: "none",
      },
    }
  },
});

const ButtonStyle =({ text, onClick, type = "button" })=>{
  const classes = useStyles();
  return(<Button className={classes.root} type={type} onClick={onClick}>{text}</Button>);
};
export default ButtonStyle;