import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@material-ui/core";
import PanelAdminNewUser from "../../components/PanelAdminNewUser";

const Home = () => {
  const { t } = useTranslation();
  const [hasError, setHasError] = useState(false);

  const onClick = () => setHasError(true);
  if (hasError) {
    throw new Error('new Problem');
  }
  return (
    <div>
      <PanelAdminNewUser/>
    </div>
  );

};

export default Home;
