import React from "react";
import { useTranslation } from "react-i18next";
import PanelAdminNewUser from "../../components/PanelAdminNewUser";



const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('home')} </h1>
      <PanelAdminNewUser/>
           
    </div>
  );

};

export default Home;
