import React from 'react';
import { useTranslation } from "react-i18next";
import News from "../../components/News";

const Archive = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1> {t('archive')} </h1>
      <News/>
    </div>
  );
};
export default Archive;
