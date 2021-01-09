import React from 'react';
import { useTranslation } from "react-i18next";
import news from "../../components/news";

const Archive = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1> {t('archive')} </h1>
      <news/>
    </div>
  );
};
export default Archive;
