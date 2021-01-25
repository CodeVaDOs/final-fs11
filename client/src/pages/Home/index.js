import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@material-ui/core";
import ClientBigCard from '../../components/PanelClientBigCard';

const Home = () => {
  const { t } = useTranslation();
  const [hasError, setHasError] = useState(false);

  // const onClick = () => setHasError(true);
  // if (hasError) {
  //   throw new Error('new Problem');
  // }
  return (
    <div>
      <ClientBigCard/>
      {/*<Button onClick={onClick}>Error</Button>*/}
    </div>
  );

};

export default Home;
