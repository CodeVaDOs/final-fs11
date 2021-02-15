import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { useTranslation } from "react-i18next";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: 0,
  }
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
