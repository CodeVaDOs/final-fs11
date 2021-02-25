/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(() => ({
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
  const { t } = useTranslation();
  const additionaServices = [
    { title: t('plumbing'), id: 1 },
    { title: t('securitySystem'), id: 1995 },
    { title: t('facadeWorks'), id: 1948 },
    { title: t("Electricity"), year: 1921 },
    { title: t("VentilationAndAirConditioning"), id: 2009 },
    { title: t("WindowsAndDoors"), id: 2000 },
    { title: t("Landscaping"), id: 2009 },
    { title: t("Heating"), id: 1975 },
    { title: t("Other"), id: 1975 },
  ];
  useEffect(() => {

  }, [additionaServices, t]);
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
          <TextField className={classes.textField} {...params} variant="outlined" label={t('addPoslug')}/>
        )}
      />
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
