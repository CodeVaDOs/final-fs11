import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import SelecOptions from "./SelectOptions";
import AddComment from "./AddComment";
import DatePickers from "./datePicker/DatePicker";
import { useTranslation } from "react-i18next";
import ModalsContainer from "../../ModalsContainer";
import ModalNewServices from "../../ModalsContainer/ModalChildrens/ModalServices";
import Container from "../../Container";


const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: 'auto',
    borderRadius: '20px',
    paddingTop: '35px',
    paddingBottom: '35px',
    paddingLeft: '20px',
    fontFamily: 'Roboto',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: '10px',
    boxShadow: "0px 3px 6px #00000033",

  },
  p: {
    fontSize: '16px',
    fontWeight: 400,
    color: '#293134'
  }
}));


export const Rent = ({houseId}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <p className={classes.p}>{t('rentThisHouse')}</p>
      <DatePickers/>
      <ModalsContainer style={{backgroundColor:"#254A93", color:'white',  borderRadius: "8px", width:"430px", marginLeft:"5px", height:"39px", fontSize: "16px", textTransform:"none", cursor:"pointer"}}
                       buttonOk={t("returnBtn")}
                       buttonCancel={t("serBtn")}
                       buttonActivateDialog={t("btnService")}
                       body={<ModalNewServices id={houseId}/>}/>
      {/*<SelecOptions/>*/}
      {/*<AddComment/>*/}
    </div>
  );
};