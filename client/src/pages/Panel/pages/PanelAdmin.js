import React from 'react';
import Container from "@components/Container";
import PanelAdminNewUser from "@components/PanelAdminNewUser";
import PanelAdmMemo from "@components/PanelAdmMemo";
import MassageBoxAdminPanel from "@components/MessageBoxAdminPanel";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#293134',
    margin:'20px'
  }
});
const Panel =()=> {
  const { t } = useTranslation();
  const classes = useStyles();
  const propsName = "user.name";
  return(<>
    <Container>
      <Typography className={classes.header}>{t("hello")} {propsName} {"!"}</Typography>
      <PanelAdminNewUser/>
      <MassageBoxAdminPanel/>
      <PanelAdmMemo/>
    </Container>
  </>);
};
export default Panel;
