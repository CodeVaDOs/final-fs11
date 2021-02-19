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
import { connect } from "react-redux";

const useStyles = makeStyles({
  header: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#293134',
    margin:'20px'
  }
});

const PanelManager =(props)=> {
  const { t } = useTranslation();
  const classes = useStyles();
  return(<>
    <Container>
      <Typography className={classes.header}>{t("hello")} {props.user.name} {"!"}</Typography>
      <Box>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={7}><ClientBigCard userType={"manager"}/></Grid>
          <Grid item xs={5}>
            <Box style={{ textAlign:"start" }}>
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

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  };
};
export default connect(mapStateToProps, null)(PanelManager);