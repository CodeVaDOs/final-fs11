import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    width: '220px',
    right: '0',
    top: '0',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: "center"
  },

}));


const options = ["Всі", 'Орендовані', 'Вільні'];

export default function ControllableStates() {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');
  const classes = useStyles();

  return (
    <div>
      <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br/>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        style={{ width: 200 }}
        renderInput={
          (params) => (
            <div className={classes.root}>Показати: <TextField {...params} label="" variant="outlined"/></div>
          )
        }
      />
    </div>
  );
}