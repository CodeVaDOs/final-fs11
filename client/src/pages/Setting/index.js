import React from 'react';
import { useTranslation } from "react-i18next";
import ProfileContainer from "../../components/ProfileContainer";
import  Container  from "../../components/Container";
import Box from '@material-ui/core/Box';
const Setting = () => {

  const { t } = useTranslation();
  return (
    <Container>
      <Box style={{ marginLeft:"600px", paddingTop:"20px" }}>{"Останні оновлення: 12.01.2020, 12:58"}</Box>
      <ProfileContainer/>
    </Container>
  );
};

export default Setting;
