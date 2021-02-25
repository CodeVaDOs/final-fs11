import React from 'react';
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  container: {
    margin: "o auto",
    overflow: "none"
  },
  header: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '21px',
    fontWeight: 'bold',
    color: '#293134',
    margin:"3% 0%"
  },
  greyText: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    fontWeight: 'normal',
    color: '#6E7375',
    margin:"0% 15%"
  },
  blackText:{
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
    fontWeight: 'normal',
    margin:"2% 0%",
    color:'#293134'
  },
  bold:{
    fontWeight: 'bold',
  },
  blue:{
    fontWeight: 'bold',
    color:"#254A93"
  },
  smallText:{
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
    fontWeight: 'normal',
    color:'#293134'
  }
});
const Index=()=> {
  const classes = useStyles();
  const { t } = useTranslation();
  return(<Box className={classes.container}>
    <Box style={{ textAlign:"center" }}>
      <Typography className={classes.header}>{t("changeLocalHeader")}{"M-2 ID 00170"}</Typography>
    </Box>
    <Box style={{ textAlign:"center" }}>
      <Typography className={classes.blackText}>{t("changeLocalText")}
        <Box className={classes.bold}><span className={classes.smallText}>{t("locFrom")}</span> {"Яблуниця Івано-Франківська область"}</Box>
        <Box className={classes.blue}><span className={classes.smallText}>{t("locTo")}</span> {"Глебівка Київська область, вул. Крайня 11"}<span className={classes.smallText}>{"?"}</span></Box>
      </Typography>
      <Typography className={classes.greyText}>
        {t("changeLocalSubText")}
      </Typography>
    </Box>
  </Box>);
};
export default Index;