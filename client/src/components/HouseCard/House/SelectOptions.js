/* eslint-disable no-use-before-define */
import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '95%',
    borderRadius: '10%',
    backgroundColor: '#EEF5FF',
  },
  autocomplete: {
    borderRadius: '10%',
    border: " 0px solid",

    "&:hover": {
      outline: "none"
    },
  },
  textField: {}
}));

export default function SelecOptions() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Autocomplete
        className={classes.autocomplete}
        multiple
        blurOnSelect={false}
        size={'medium'}
        autoHighlight={true}
        limitTags={2}
        id="multiple-limit-tags"
        options={additionaServices}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField className={classes.textField} {...params} variant="outlined" label="Замовити Додаткові Послуги"/>
        )}
      />
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const additionaServices = [
  { title: "Сантехніка", id: 1 },
  { title: 'Система охорони', id: 1995 },
  { title: 'Фасадні роботи', id: 1948 },
  { title: 'Електрика', year: 1921 },
  { title: 'Вентиляція та кодиціонування', id: 2009 },
  { title: 'Вікна та двері', id: 2000 },
  { title: 'Благоустрій території', id: 2009 },
  { title: 'Опалення', id: 1975 },
  { title: 'Ну і всьо', id: 1975 },
];
