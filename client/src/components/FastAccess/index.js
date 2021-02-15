import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  fastAccessContainer: {
    width: '356px',
    height: '60px',
    borderRadius: '20px',
    boxShadow: '0px 1px 3px #00000033',
    marginTop:"5px",
    marginBottom:"5px",
    backgroundColor:"#fff"
  },
  btnTitle: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    fontWeight: 'normal',
    color: '#293134',
    marginTop:'20px'
  },
  btnBtn: {
    width: "27px",
    height: "27px",
    minWidth:"0px",
    borderRadius: "50px",
    backgroundColor: '#EEF5FF',
    marginTop:'-43px',
    marginLeft:'75px'
  },
  icon: {
    width: "42px",
    height: "42px",
    marginLeft:'9px',
    marginTop:'5px',
  },
  nameTitle: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    fontWeight: 'normal',
    color: '#99A0A3',
    marginLeft: "5px"
  },
  name: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#293134',
    marginLeft: "5px"
  }

});

const FastAccess =({ icon, nameTitle, name, onClick })=>{
  const classes = useStyles();
  const { t } = useTranslation();
  return(<>
    <Box className={classes.fastAccessContainer}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid  item xs={2} >
          <img className={classes.icon} src={icon}/>
        </Grid>
        <Grid  item xs={6} >
          <Typography className={classes.nameTitle}>{nameTitle}</Typography>
          <Typography className={classes.name}>{name}</Typography>
        </Grid>
        <Grid  item xs={4} >
          <Typography className={classes.btnTitle}>{t("detailSecond")}</Typography>
          <Button className={classes.btnBtn} onClick={onClick}><ArrowForwardIosIcon style={{ color:"#99A0A3", fontSize:"15px" }}/></Button>
        </Grid>
      </Grid>
    </Box>
  </>);
};
export default FastAccess;