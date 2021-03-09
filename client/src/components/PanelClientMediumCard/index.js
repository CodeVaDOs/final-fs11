import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import Grid from "@material-ui/core/Grid";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ReplyIcon from '@material-ui/icons/Reply';
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  mediumCardContainer: {
    height: '310px',
    boxShadow: "0px 3px 6px #00000033",
    borderRadius: '20px',
    backgroundColor:'#fff',
    margin:"10px"
  },
  cardHeader: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#293134',
    marginLeft: "20px",
    marginTop: "12px"
  },
  cardReview: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#293134',
    marginLeft: "20px",
    marginTop: "0px"
  },
  feedback: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    fontWeight: 'normal',
    color: '#6E7375',
    marginLeft: "20px",
    marginTop: "10px",
    paddingRight:"8px"
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
    fontSize: '14px',
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
const PanelClientMediumCard =({ id, title, booking, subName, typeCard, widthT })=>{
  const classes = useStyles();
  const { t } = useTranslation();
  const [userType] = useState('client');
  const language = useSelector(state => state.auth?.user?.language);

  const renderRating = (i) => {
    if (booking?.feedback?.rating > i) return (<StarIcon style={{ color:"#F88B38" }}/>);
    else return (<StarBorderIcon style={{ color:"#F88B38" }}/>);
  };

  const writeDate = (date1, date2) => {
    let local = language === 'UKRAINIAN' ? 'uk-UA' : language === 'RUSSIAN' ? 'ru' : 'en-US';
    const count = (date) => new Date(date).toLocaleDateString(local, {
      day : 'numeric',
      month : 'long'
    });
    return `${count(date1)} - ${count(date2)}`;
  };

  const renderClientPanel =()=>{
    return  (
      <Box className={classes.mediumCardContainer} style={{ width: widthT === 1 ? "96%": "290px" }} key={id}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start">
          <Grid item xs={6}>
            <Typography className={classes.cardHeader}>{title}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.cardAvatar}>{booking?.renter}</Typography>
          </Grid>
          <Grid item xs={2}>
            <AccountCircleIcon style={{ color:"#B1B4BA", width:"34px", height:"34px", marginTop:"10px" }}/>
          </Grid>
        </Grid>
        <Typography className={classes.subHeader}>{booking ? writeDate(booking.fromDate, booking.toDate) : null}</Typography>
        <Box style={{ marginLeft:"15px", marginTop:"5px" }}>
          {renderRating(0)}
          {renderRating(1)}
          {renderRating(2)}
          {renderRating(3)}
          {renderRating(4)}
        </Box>
        <Typography className={classes.cardReview}>{subName}</Typography>
        <Typography className={classes.feedback}>{booking?.feedback.review}</Typography>
        {typeCard === "btn"?
          <Box style={{ margin:"10% -20%", display: "block" }}>
            <Button className={classes.btn} onClick={()=>{}}>{t('more')}</Button>
          </Box>:
          <Box style={{ marginTop:"20px", display: "block", marginLeft:"40%" }}>
            <FavoriteBorderIcon style={{ color:"#B1B4BA", marginLeft:"10px" }}/>
            <ReplyIcon style={{ color:"#B1B4BA",  marginLeft:"10px"  }}/>
          </Box>
        }
      </Box>
    );
  };
  return(<>
    {(userType === "client" && renderClientPanel())}
  </>);
};
export default PanelClientMediumCard;