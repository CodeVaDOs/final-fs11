import React from 'react';
import ModalsContainer from "../../components/ModalsContainer";
import ModalHouseLocation from "../../components/ModalsContainer/ModalChildrens/ModalHouseLocation";
import ModalHouseLocationConfirm from "../../components/ModalsContainer/ModalChildrens/ModalHouseLocationConfirm";
import ModalNewClient from "../../components/ModalsContainer/ModalChildrens/ModalNewClient";
import ModalNeqServices from '../../components/ModalsContainer/ModalChildrens/ModalServices';
import { useTranslation } from "react-i18next";
const Index =()=> {
  const { t } = useTranslation();
  return(<div>
    <h1> {"HISTORY PAGE"} </h1>
    {/*Houses page on Map location*/}
    <ModalsContainer buttonOk={t( "returnBtn")} buttonCancel={t("changeLocal")} buttonActivateDialog={t("changeLocal")} body={<ModalHouseLocation/>}/>
    {/*Houses page on Map location second modal confirm after back-emd response*/}
    <ModalsContainer displayBtn={"none"} buttonOk={t("confBtn")} buttonActivateDialog={"location conf"} body={<ModalHouseLocationConfirm/>}/>
    {/*Create new client/manager Modal -> Admin/Panel -> Створити btn*/}
    <ModalsContainer buttonOk={t("returnBtn")} buttonCancel={t("clientBtnCard")} buttonActivateDialog={t("create")} body={<ModalNewClient/>}/>
    {/*Order Services Modal -> ?????? -> Створити btn*/}
    <ModalsContainer buttonOk={t("returnBtn")} buttonCancel={t("serBtn")} buttonActivateDialog={"order services"} body={<ModalNeqServices/>}/>

  </div>);
};
export default Index;
