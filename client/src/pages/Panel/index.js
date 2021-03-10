import React, { useEffect, useState } from 'react';
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
import { connect, useSelector } from "react-redux";
const useStyles = makeStyles({
  header: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#293134',
    margin:'20px'
  }
});

const Panel =(props)=> {
  const { t } = useTranslation();
  const classes = useStyles();
  const houses = useSelector(state => state.houses?.houses);
  const getBooking = () => houses
    ?.flatMap(h => h?.bookings)
    ?.filter(i => i.feedback)
    ?.sort((a,b) => new Date(b.feedback?.createDate)?.getTime() - new Date(a.feedback?.createDate)?.getTime())[0];

  const [booking, setBooking] = useState(getBooking());

  useEffect(() => setBooking(getBooking()), [houses]);

  return(<>
    <Container>
      <Typography className={classes.header}>{t("hello")} {props.user.name} {"!"}</Typography>
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
            booking={booking}
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

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  };
};
export default connect(mapStateToProps, null)(Panel);
