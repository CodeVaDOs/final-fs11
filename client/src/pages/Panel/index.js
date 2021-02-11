import React, { useState } from 'react';
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
          <PanelClientSmallCard userType={"client"}/>
        </Box>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={8}><ClientBigCard userType={"client"}/></Grid>
          <Grid item xs={4}><PanelClientMediumCard 
            id={1}
            title={"Останній відгук"}
            user ={"Anatolii"}
            date={"27 Червня - 30 Червня"}
            body={"Це місце дивовижне! Супер чистий, стильний і не надто далеко від усього найкращого, що може запропонувати Україна. Господар був привітним. Однозначно знову затримаюсь тут, повернувшись в Україну"}
            subName={"Огляд"}
            typeCard={"btn"}
            widthT={1}
          /></Grid>
        </Grid>
        <News/>
      </Box>
    </Container>
  </>);
};
export default Panel;
