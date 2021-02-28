import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { DocSvg } from "../../../ClientPage/components/Documents/DocSvg";
import Typography from "@material-ui/core/Typography";
import GetAppIcon from "@material-ui/icons/GetApp";
import PrintIcon from "@material-ui/icons/Print";

const useStyles = makeStyles(theme => ({
  root: {
    width: "105%",
    //maxWidth: "370px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    boxShadow: "0px 1px 3px #00000033",
    borderRadius: "20px",
    minHeight: "200px",
  },
  infoContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  nameText: {
    color: "#6E7375",
    fontSize: "12px"
  },
  icons: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%"
  },
  btnWidth: {
    color: '#254A93',
    cursor: "pointer"
  },
  btnGetAppIcon: {
    transform: "translateX(-50%)",
    marginLeft: "50%"
  },
  textWrap: {
    margin: "10px 0"
  }
}));

export default ({ name, fromDate, toDate }) => {
  const classes = useStyles();

  return (<Box className={classes.root}>
    <DocSvg/>
    <div className={classes.infoContainer}>
      <Typography align={"center"}>
        {name}
      </Typography>
      <Box className={classes.textWrap}>
        <Typography align={"center"} className={classes.nameText}>
          {"Період"}
        </Typography>
        <Typography align={"center"} className={classes.nameText}>
          {fromDate + "__" + toDate}
        </Typography>
        <Typography align={"center"} className={classes.nameText}>
          {"року"}
        </Typography>
      </Box>
      <div className={classes.icons}>

        <a className={`${classes.btnWidth} ${classes.btnGetAppIcon}`}>
          <GetAppIcon className={classes.blue}/>
        </a>

        <a className={classes.btnWidth}>
          <PrintIcon className={classes.blue}/>
        </a>
      </div>
    </div>
  </Box>);
};