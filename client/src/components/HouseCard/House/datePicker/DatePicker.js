import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
  },
  textField: {
    width: 135,
    marginRight: theme.spacing(1)
  },
  textFieldR: {
    width: 135,
    marginRight: theme.spacing(3)
  },
  btn: {
    fontSize: '14px',
    backgroundColor: '#254A93',
    color: 'white',
    opacity: '95%',
    cursor: 'pointer',
    height: "30px",
    width: '120px',
    marginLeft: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    border: 'none',
    borderRadius: '8px',
    right: 0
  }

}));

export default function DatePickers() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <div>
        <TextField
          id="date"
          label={t('bout')}
          type="date"
          defaultValue="2021-01-20"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>

      <div>
        <TextField
          id="date"
          label={t('departure')}
          type="date"
          defaultValue="2021-01-30"
          className={classes.textFieldR}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>

      <div>
        <button className={classes.btn}>
          {t("toBook")}
        </button>
      </div>

    </div>
  );
}
