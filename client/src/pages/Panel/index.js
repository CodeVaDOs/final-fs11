import React from 'react';
import Container from "../../components/Container";
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

const Panel =()=> {
  const { t } = useTranslation();
  const classes = useStyles();
  const propsName = "user.name";
  return(<>
    <Container>
      <Typography className={classes.header}>{t("hello")} {propsName} {"!"}</Typography>
      <Box>
        <Box>
          <PanelClientSmallCard/>
        </Box>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={8}><ClientBigCard userType={"client"}/></Grid>
          <Grid item xs={4}><PanelClientMediumCard/></Grid>
        </Grid>
        <News/>
      </Box>
    </Container>
  </>);
};
export default Panel;
