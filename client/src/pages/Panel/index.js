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
import PanelClientSmallCard from '../../components/PanelClientSmallCard';
import Box from "@material-ui/core/Box";
import PanelClientMediumCard from '../../components/PanelClientMediumCard';
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
  return(<Box style={{ width:"890px", height:"350px" }}>
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Grid item xs={7}><ClientBigCard/></Grid>
      <Grid item xs={5}>
        <Box style={{ width: "290px", marginLeft: "-25px", marginTop:"5px" }}>
          <PanelClientSmallCard/>
        </Box>
      </Grid>
    </Grid>
    <MassageBoxAdminPanel/>
    <PanelAdmMemo/>
  </Box>);
};
const renderClientPanel =()=> {
  return(<Box style={{ width:"900px", height:"1000px" }}>
    <Box style={{ width: "890px" }}>
      <PanelClientSmallCard/>
    </Box>
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Grid item xs={8}><ClientBigCard/></Grid>
      <Grid item xs={4}><PanelClientMediumCard/></Grid>
    </Grid>
    <News/>
  </Box>);
};

const Panel =(props)=> {
  const [userType] = useState('client');
  const { t } = useTranslation();
  const classes = useStyles();
  const propsName = "user.name";
  return(<>
    <Container>
      <Typography className={classes.header}>{t("hello")} {propsName} {"!"}</Typography>
      {(userType === "admin" && renderAdminPanel())||
      (userType === "client" && renderClientPanel())||
      (userType === "manager" && renderManagerPanel())}
    </Container>
  </>);
};
export default Panel;
