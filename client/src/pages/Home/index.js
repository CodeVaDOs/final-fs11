import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const [hasError, setHasError] = useState(false);

  const onClick = () => setHasError(true);
  if (hasError) {
    throw new Error('new Problem');
  }
  return (
    <>
    </>
  );

};

export default Home;
