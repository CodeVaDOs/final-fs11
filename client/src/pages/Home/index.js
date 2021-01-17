import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import News from "../../components/News";
import { Button } from "@material-ui/core";

const Home = () => {
  const { t } = useTranslation();
  const [hasError, setHasError] = useState(false);

  const onClick = () => setHasError(true);
  if (hasError) {
    throw new Error('new Problem');
  }
  return (
    <div>
      <h1>{t('home')} </h1>
      <Button onClick={onClick}>Error</Button>

      <News/>
    </div>
  );

};

export default Home;
