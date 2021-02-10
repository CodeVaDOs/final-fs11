import React from 'react';
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  containerConf: {
    margin: "o auto",
    overflow: "none"
  },
  headerConf: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '21px',
    fontWeight: 'bold',
    color: '#293134',
    margin:"5% 7%"
  },
  greyTextConf: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    fontWeight: 'normal',
    color: '#6E7375',
    margin:"5% 3%"
  },
  blackTextConf:{
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
    fontWeight: 'normal',
    margin:"5% 5%",
    color:'#293134'
  },
  boldConf:{
    fontWeight: 'bold',
  },
  blueConf:{
    fontWeight: 'bold',
    color:"#254A93"
  },
  smallTextConf:{
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
    fontWeight: 'normal',
    color:'#293134'
  }
});
const Index=()=> {
  const classes = useStyles();
  const { t } = useTranslation();
  return(<Box className={classes.containerConf}>
    <Box style={{ textAlign:"center" }}>
      <Typography className={classes.headerConf}>{t("changeLocalHeader")}{"M-2 ID 00170"}</Typography>
    </Box>
    <Box style={{ textAlign:"center" }}>
      <Typography className={classes.blackTextConf}>{t("changeConfText")}
        <Box className={classes.boldConf}><span className={classes.smallTextConf}>{t("locFrom")}</span> {"Яблуниця Івано-Франківська область"}</Box>
        <Box className={classes.blueConf}><span className={classes.smallTextConf}>{t("locTo")}</span> {"Глебівка Київська область, вул. Крайня 11"}<span className={classes.smallTextConf}>{"?"}</span></Box>
        <Box style={{ marginTop:"0px" }} className={classes.blackTextConf}>{t("changeConfSubText")}</Box>
      </Typography>
    </Box>
  </Box>);
};
export default Index;