import React from 'react';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    borderRadius: 5,
    border: "1.4px solid #254A93",
    fontFamily: "Roboto, sans-serif",
    fontStyle: "bold",
    textDecoration: "none",
    textTransform:'none',
    color: "#FFF",
    backgroundColor: "#254A93",
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
  active:{
    backgroundColor: '#fff',
    color:'#6E7375',
    border: "1.4px solid #6E7375",
    textTransform:'none',
  }
});

const ButtonStyle =({ btnState, w, h, ml, fw="500", fs="18px", text, children, onClick, type = "button" })=>{
  const classes = useStyles();
  const divStyle = {
    width:w,
    height:h,
    marginLeft:ml,
    fontWeight:fw,
    fontSize:fs
  };
  return(<Button style={divStyle} className={ btnState === true ? classes.active: classes.root} type={type} onClick={onClick}>{text || children}</Button>);
};
export default ButtonStyle;