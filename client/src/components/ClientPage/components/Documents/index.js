import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SelectDocument } from "./SelectDocument";
import { DocumentItem } from "./DocumentItem";
import { Button } from "@material-ui/core";
import MessageIcon from "@material-ui/icons/Message";

const useStyles = makeStyles((theme) => ({
  root: {
    // borderLeft: '1px solid black',
    marginLeft: '3px',
    display: "flex",
    margin: "2px",
    flexDirection: 'column',
    justifyContent: 'space-between',
    textTransform: 'capitalize',
  },
  formControl: {
    margin: theme.spacing(1),
    marginLeft: 20,
    minWidth: 120,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    "& :nth-child(1)": {
      width: "200px"
    }
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


export const Documents = ({ visible }) => {
  const classes = useStyles();
  const createDocument = () => {
    console.log('createDocument func');
  };
  return (
    <>
      {
        visible ?
          <div className={classes.root}>
            <div><h2 style={{ fontFamily: "Roboto", fontSize: '18px' }}>Присвoiти контракт</h2></div>
            <div className={classes.row}>
              <h3>Клiент</h3>
              <SelectDocument options={['Овсiенко Дмитро Вiкторович', 'Дмитро Овсiенко Вiкторович']}/>
            </div>
            <div className={classes.row}>
              <h3>Будинок</h3>
              <SelectDocument options={['Marksem M - 2 House large 00102']}/>
            </div>
            <DocumentItem
              title={'Контракт__001'}
              shortDescription={'Короткий опис документа'}
              type={'edit'}
            />
            <Button
              onClick={createDocument}
              className={classes.btnSend}>
              Зберегти</Button>
          </div> :
          <div className={classes.root}>
            <div><h2 style={{ fontFamily: "Roboto", fontSize: '18px' }}>Створити документ</h2></div>
            <div className={classes.row}>
              <h3>Створити</h3>
              <SelectDocument options={['Контракт']}/>
            </div>
            <div className={classes.row}>
              <h3>Будинок</h3>
              <SelectDocument options={['Marksem M - 2 House large 00102']}/>
            </div>
            <DocumentItem
              title={'Контракт__001'}
              shortDescription={'Короткий опис документа'}
              type={'edit'}
            />
            <Button className={classes.btnSend}>
              Написати <MessageIcon className={classes.editIcon}/></Button>
          </div>

      }


    </>
  );
};