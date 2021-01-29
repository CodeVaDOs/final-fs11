import React from 'react';
import Container from "@components/Container";
import PanelAdmMemo from "@components/PanelAdmMemo";
import MassageBoxAdminPanel from "@components/MessageBoxAdminPanel";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import ClientBigCard from '@components/PanelClientBigCard';
import Grid from "@material-ui/core/Grid";
import PanelClientSmallCard from '@components/PanelClientSmallCard';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  header: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#293134',
    margin:'20px'
  }
});

const PanelManager =()=> {
  const { t } = useTranslation();
  const classes = useStyles();
  const propsName = "user.name";
  return(<>
    <Container>
      <Typography className={classes.header}>{t("hello")} {propsName} {"!"}</Typography>
      <Box style={{ width:"890px", height:"350px" }}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={7}><ClientBigCard userType={"manager"}/></Grid>
          <Grid item xs={5}>
            <Box style={{ width: "290px", marginLeft: "-25px", marginTop:"5px" }}>
              <PanelClientSmallCard userType={"manager"}/>
            </Box>
          </Grid>
        </Grid>
        <MassageBoxAdminPanel/>
        <PanelAdmMemo/>
      </Box>
    </Container>
  </>);
};
export default PanelManager;