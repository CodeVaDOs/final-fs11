import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';

const lang = [
  {
    value: 'UA',
    label: SentimentSatisfiedAltIcon,
  },
  {
    value: 'EN',
    label: SentimentVeryDissatisfiedIcon,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50px',
    },
  },
  button: {
    fontSize: '18px',
    margin: theme.spacing(1),
    textDecoration: 'none',
    background: "transparent",
    border: "none",
    textTransform: 'capitalize',
    display: "flex",
    color: '#6E7375',
    width: 'max-content',
    alignItems: "center",
    position: 'relative',
  }
}));

export default function CheckLanguage() {
  const classes = useStyles();
  const [language, setLanguage] = useState('EUR');
  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-select-currency"
          select
          value={language}
          onChange={handleChange}
        >
          {lang.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {<option.label/>}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}