import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Grid from "@material-ui/core/Grid";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
  mediumCardContainer: {
    height: '310px',
    width: '280px',
    boxShadow: "0px 3px 6px #00000033",
    borderRadius: '20px',
    backgroundColor:'#fff',
    marginTop: "10px",
    marginLeft: '5px'
  },
  cardHeader: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#293134',
    marginLeft: "20px",
    marginTop: "12px"
  },
  cardReview: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#293134',
    marginLeft: "20px",
    marginTop: "0px"
  },
  feedback: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    fontWeight: 'normal',
    color: '#6E7375',
    marginLeft: "20px",
    marginTop: "10px"
  },
  subHeader: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    fontWeight: 'normal',
    color: '#6E7375',
    marginLeft: "20px",
  },
  cardAvatar: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
    fontWeight: 'normal',
    color: '#293134',
    marginTop: "14px",
    marginLeft: "25px",
  },
  btn: {
    width:100,
    height:30,
    borderRadius: "20px 20px 20px 20px",
    color: '#fff',
    backgroundColor:'#FA505D',
    marginLeft: "150px",
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    textTransform: "none",
    fontWeight: 'normal',
    "&:hover": {
      backgroundColor: "#FA505D",
      color: "#FFF",
      textDecoration: "none",
    },
  },

});

const PanelClientMediumCard =()=>{
  const classes = useStyles();
  const { t } = useTranslation();
  const [userType] = useState('client');

  const renderClientPanel =()=>{
    return(
      <Box className={classes.mediumCardContainer}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start">
          <Grid item xs={5}>
            <Typography className={classes.cardHeader}>{t("review")}</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography className={classes.cardAvatar}>{"Анатолий"}</Typography>
          </Grid>
          <Grid item xs={2}>
            <AccountCircleIcon style={{ color:"#B1B4BA", width:"34px", height:"34px", marginTop:"10px" }}/>
          </Grid>
        </Grid>

        <Typography className={classes.subHeader}>{"June 27 - June 30"}</Typography>
        <Box style={{ marginLeft:"15px", marginTop:"5px" }}>
          <StarBorderIcon style={{ color:"#F88B38" }}/>
          <StarBorderIcon style={{ color:"#F88B38" }}/>
          <StarBorderIcon style={{ color:"#F88B38" }}/>
          <StarBorderIcon style={{ color:"#F88B38" }}/>
          <StarBorderIcon style={{ color:"#F88B38" }}/>
        </Box>
        <Typography className={classes.cardReview}>{t("reviewTitle")}</Typography>
        <Typography className={classes.feedback}>{"This place is amazing! Super clean, stylish, and not too far from all of the best Ukraine has to offer. The host was friendly and helpful. Would definitely stay here again on a return trip to Ukraine."}</Typography>
        <Box style={{ marginTop:"8px" }}>
          <Button className={classes.btn} onClick={()=>{}}>{t('more')}</Button>
        </Box>
      </Box>
    );
  };
  return(<>
    {(userType === "client" && renderClientPanel())}
  </>);
};
export default PanelClientMediumCard;