import React from 'react';
import { useTranslation } from "react-i18next";
const Setting = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('settings')} </h1>
    </div>
  );
};

export default Setting;
