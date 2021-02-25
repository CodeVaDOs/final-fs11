import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CircularProgressWithLabel from '../../components/IncomeCard/CircularProgress/index';

const useStyles = makeStyles({
  statisticContainer: {
    height: '250px',
    width: '100%',
    boxShadow: "0px 3px 6px #00000033",
    borderRadius: '20px',
    backgroundColor:'#fff',
    marginTop:"-3px",
    marginLeft: '10px',
  },
  staticHeader: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#293134',
    marginLeft: "20px",
    paddingTop: "15px"
  },
  staticHeaderSmall: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
    fontWeight: 'normal',
    color: '#293134',
    marginLeft: "20px",
    marginTop: "5px"
  },
  staticSubHeader : {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    fontWeight: 'normal',
    color: '#B1B4BA',
    marginLeft: "20px",
    marginTop: "-5px"
  },

});
const ManagerRentStatistic =()=>{
  const classes = useStyles();
  const { t } = useTranslation();
  return(<>
    <Box className={classes.statisticContainer}>
      <Box style={{ marginTop:"15px" }}>
        <Typography className={classes.staticHeader}>{t("yearRent")}</Typography>
      </Box>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid className={classes.subGrid} item xs={8}>
          <Box style={{ marginTop:"15px" }}>
            <Typography className={classes.staticHeaderSmall}>{"1231"}</Typography>
            <Typography className={classes.staticSubHeader}>{t("renter")} </Typography>
          </Box>
          <Box style={{ marginTop:"10px" }}>
            <Typography className={classes.staticHeaderSmall}>{"253"}</Typography>
            <Typography className={classes.staticSubHeader}>{t("dayRent")}</Typography>
          </Box>
          <Box style={{ marginTop:"10px" }}>
            <Typography className={classes.staticHeaderSmall}>{"253"}</Typography>
            <Typography className={classes.staticSubHeader}>{t("hoseRent")}</Typography>
          </Box>
        </Grid>
        <Grid className={classes.subGrid} item xs={4} >
          <CircularProgressWithLabel size={80} thickness={2} progress={"71%"} color={"#00D0FF"}/>
        </Grid>
      </Grid>
    </Box>
  </>);
};
export default ManagerRentStatistic;
