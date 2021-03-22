import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SelectDocument } from "../Documents/SelectDocument";
import TextField from "@material-ui/core/TextField";
import { useTranslation } from "react-i18next";
import PickUsluga from "./PickUsluga";
import { Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(() => ({
  root: {
    margin: 10,
    maxWidth: "620px ",
    position: 'relative',
    display: 'flex',
    fontFamily: 'Roboto',
    overflow: 'hidden',
    flexDirection: 'column',

  },
  textField: {
    width: 135,
    marginRight: 10
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'left',
    "& :nth-child(1)": {
      width: "200px"
    }
  },
  btn: {
    color: "#254A93"
  },
  btnSend: {
    textTransform: 'capitalize',
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    color: 'white',
    textDecoration: 'none',
    backgroundColor: '#254A93',
    width: "143px",
    height: "30px",
    background: "#EEF5FF 0% 0% no-repeat padding-box",
    border: "0.5px solid #ACB5B9",
    borderRadius: "5px",
    opacity: 1,
  },

}));
export const AddNewStatistic = () => {
  const classes = useStyles();
  // const [house, setHouse] = useState(tileData[0]);
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <h4>Створити</h4>
        <SelectDocument options={['Контракт']}/>
      </div>
      <div className={classes.row}>
        <h4>Будинок</h4>
        <SelectDocument options={['Marksem M - 2 House large 00102']}/>
      </div>
      <div className={classes.row}>
        <h4>Перiод статистики</h4>
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

      </div>
      <div>
        <div className={classes.row}>
          <h4>Дохiд</h4>
          <PickUsluga/>
        </div>
        <Button className={classes.btn}>Додати нову колону <AddIcon/></Button>
      </div>

      <h3>Витрати за напрямком:</h3>
      <div>
        <div className={classes.row}>
          <h4>Комунальнi</h4>
          <PickUsluga/>
        </div>
        <Button className={classes.btn}>Додати нову колону <AddIcon/></Button>
      </div>
      <div>
        <div className={classes.row}>
          <h4>Сервiс</h4>
          <PickUsluga/>
        </div>
        <Button className={classes.btn}>Додати нову колону <AddIcon/></Button>
      </div>
      <div>
        <div className={classes.row}>
          <h4>Iнше</h4>
          <PickUsluga/>
        </div>
        <Button className={classes.btn}>Додати нову колону <AddIcon/></Button>
      </div>
      <Button className={classes.btnSend}>
        Зберегти </Button>
    </div>
  );
};