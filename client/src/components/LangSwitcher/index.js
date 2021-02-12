import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { useTranslation } from "react-i18next";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    marginLeft: 30,
    marginTop: -22,
    minWidth: 10,
    "@media (min-width:320px)": {
      marginLeft: 15,
      marginTop: 10
    },
    "@media (min-width:1100px)": {
      marginLeft: 30,
      marginTop: -22,
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const NativeSelects =({ lang })=>{
  const checkLang=(type)=>{
    let lan;
    if(type === "UKRAINIAN") return lan="ua";
    if(type === "ENGLISH") return lan="en";
    if(type === "RUSSIAN") return lan="ru";
  };
  console.log(checkLang(lang));
  const classes = useStyles();
  const { i18n } = useTranslation();
  const changeLanguage=(e)=>{
    i18n.changeLanguage(e.target.value);
  };
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="uncontrolled-native"/>
        <NativeSelect
          defaultValue={checkLang(lang)}
          disableUnderline={true}
          inputProps={{
            id: 'uncontrolled-native',
          }}
          onChange={(e) => {
            changeLanguage(e);
          }}
        >
          <option value={"ua"}>UA</option>
          <option value={"ru"}>RU</option>
          <option value={"en"}>EN</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
};
export default NativeSelects;
