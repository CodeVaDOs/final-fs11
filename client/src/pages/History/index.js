import React from 'react';
import ModalsContainer from "../../components/ModalsContainer";
import ModalHouseLocation from "../../components/ModalsContainer/ModalChildrens/ModalHouseLocation";
import ModalHouseLocationConfirm from "../../components/ModalsContainer/ModalChildrens/ModalHouseLocationConfirm";
import ModalNewServices from '../../components/ModalsContainer/ModalChildrens/ModalServices';
import { useTranslation } from "react-i18next";
import Container from "../../components/Container";
const Index =()=> {
  const { t } = useTranslation();
  return(<Container>
    <div> {"HISTORY PAGE"} </div>
    {/*Houses page on Map location*/}
    <ModalsContainer style={{backgroundColor:"green"}} buttonOk={t( "returnBtn")} buttonCancel={t("changeLocal")} buttonActivateDialog={t("changeLocal")} body={<ModalHouseLocation/>}/>
    {/*Houses page on Map location second modal confirm after back-emd response*/}
    <ModalsContainer style={{backgroundColor:"green"}} displayBtn={"none"} buttonOk={t("confBtn")} buttonActivateDialog={"location conf"} body={<ModalHouseLocationConfirm/>}/>


    {/*Order Services Modal -> Home -> Замовити Додаткові Послуги btn*/}
    <ModalsContainer style={{backgroundColor:"green"}} buttonOk={t("returnBtn")} buttonCancel={t("serBtn")} buttonActivateDialog={t("btnService")} body={<ModalNewServices/>}/>

  </Container>);
};
export default Index;
