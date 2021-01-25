import React, { useState } from 'react';
import Container from "../../components/Container";
import PanelAdminNewUser from "../../components/PanelAdminNewUser";
import PanelAdmMemo from "../../components/PanelAdmMemo";
import MassageBoxAdminPanel from "../../components/MessageBoxAdminPanel";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import News from '../../components/News';
import ClientBigCard from '../../components/PanelClientBigCard';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  header: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#293134',
    margin:'20px'
  }
});
const renderAdminPanel =()=> {
  return(<>
    <PanelAdminNewUser/>
    <MassageBoxAdminPanel/>
    <PanelAdmMemo/>
  </>);
};
const renderManagerPanel =()=> {
  return(<>
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={8}><ClientBigCard/></Grid>
      <Grid item xs={4}>{"PanelClientMediumCard"}</Grid>
    </Grid>
    <MassageBoxAdminPanel/>
    <PanelAdmMemo/>
  </>);
};
const renderClientPanel =()=> {
  return(<>
    {"PanelClientSmallCard"}
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={8}><ClientBigCard/></Grid>
      <Grid item xs={4}>{"PanelClientMediumCard"}</Grid>
    </Grid>
    <News/>
  </>);
};

const Panel =(props)=> {
  const [userType] = useState('manager');
  const { t } = useTranslation();
  const classes = useStyles();
  const propsName = "user.name";
  return(<>
    <Container>
      <Typography className={classes.header}>{t("hello")} {propsName} {"!"}</Typography>
      {(userType === "admin" && renderAdminPanel())}
      {(userType === "client" && renderClientPanel())}
      {(userType === "manager" && renderManagerPanel())}
    </Container>
  </>);
};
export default Panel;
