import React from 'react';
import ModalsContainer from "../../components/ModalsContainer";
import ModalHouseLocation from "../../components/ModalsContainer/ModalChildrens/ModalHouseLocation";
import ModalHouseLocationConfirm from "../../components/ModalsContainer/ModalChildrens/ModalHouseLocationConfirm";
import ModalNewClient from "../../components/ModalsContainer/ModalChildrens/ModalNewClient";
import ModalNewServices from '../../components/ModalsContainer/ModalChildrens/ModalServices';
import ModalManageServices from '../../components/ModalsContainer/ModalChildrens/ModalRequestServices';
import { useTranslation } from "react-i18next";
import Container from "../../components/Container";
const Index =()=> {
  const { t } = useTranslation();
  return(<Container>
    <div> {"HISTORY PAGE"} </div>
    {/*Houses page on Map location*/}
    <ModalsContainer buttonOk={t( "returnBtn")} buttonCancel={t("changeLocal")} buttonActivateDialog={t("changeLocal")} body={<ModalHouseLocation/>}/>
    {/*Houses page on Map location second modal confirm after back-emd response*/}
    <ModalsContainer displayBtn={"none"} buttonOk={t("confBtn")} buttonActivateDialog={"location conf"} body={<ModalHouseLocationConfirm/>}/>
    {/*Create new client/manager Modal -> Admin/Panel -> Створити btn*/}
    <ModalsContainer buttonOk={t("returnBtn")} buttonCancel={t("clientBtnCard")} buttonActivateDialog={t("create")} body={<ModalNewClient/>}/>
    {/*Order Services Modal -> Home -> Замовити Додаткові Послуги btn*/}
    <ModalsContainer buttonOk={t("returnBtn")} buttonCancel={t("serBtn")} buttonActivateDialog={t("btnService")} body={<ModalNewServices/>}/>
    {/*Order Manage Modal -> Home/Manage -> Замовити Послугу управління btn*/}
    <ModalsContainer buttonOk={t("returnBtn")} buttonCancel={t("serBtn")} buttonActivateDialog={t("btnSer2")} body={<ModalManageServices/>}/>
  </Container>);
};
export default Index;
