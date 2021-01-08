import React from 'react';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    borderRadius: 5,
    border: "1.4px solid #254A93",
    fontFamily: "Roboto, sans-serif",
    textTransform: "capitalize",
    fontStyle: "bold",
    fontWeight: 600,
    fontSize: 18,
    textDecoration: "none",
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

const ButtonStyle =({ w, h, bgcolor, ml, text, onClick, type = "button" })=>{
  const classes = useStyles();
  const divStyle = {
    width:w,
    height:h,
    backgroundColor: bgcolor,
    marginLeft:ml
  };
  return(<Button style={divStyle} className={classes.root} type={type} onClick={onClick}>{text}</Button>);
};
export default ButtonStyle;