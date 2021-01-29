import React, { useState } from "react";
import { useTranslation } from "react-i18next";
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
      <Button onClick={onClick}>Error</Button>
    </div>
  );

};

export default Home;
