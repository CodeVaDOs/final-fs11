import React from "react";
import { TextValidator } from 'react-material-ui-form-validator';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    borderRadius: 5,
    height: 45,
    width: 400,
    padding: 8,
    margin: '6px auto',
    "& label.Mui-focused": {
      color: "#254A93",
      borderRadius: '5px',
    },
    "& .MuiOutlinedInput-input":{
      padding:"12.5px 14px"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "0.5px solid #6E737",
        borderRadius: `5 5 5 5`
      },
      "& .Mui-focused fieldset": {
        borderColor: "#254A93",
        color: "#254A93",
      },
    },
  },
});

const Input=({ icon, name,  valueType, validators, errorMessages, handleBlur, refRef, handleChange })=>{
  const classes = useStyles();
  return(<>
    <TextValidator className={classes.root}
      value={valueType}
      name={name}
      validators={['required', { validators }]}
      errorMessages={['This field is required', { errorMessages }]}
      label={icon}
      onBlur={handleBlur}
      ref={refRef}
      variant="outlined"
      onChange={handleChange}
    />
  </>);
};
export default Input;