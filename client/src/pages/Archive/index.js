import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import News from "../../components/News";
import { useFetch } from "../../hooks/useFetch";

const Archive = () => {
  const { t } = useTranslation();
  const [{ data, loading }, getData] = useFetch({
    url: 'users',
  });

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <div>
      <h1> {t('archive')} </h1>
    </div>
  );
};
export default Archive;
