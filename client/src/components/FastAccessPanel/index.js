import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import BlueHouse from "../../images/blueHouse.png";
import OrangeHouse from "../../images/orangeHouse.png";
import FastAccess from "../FastAccess";
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CallMadeIcon from '@material-ui/icons/CallMade';
import Client from "../../images/client.png";
import Contracts from "../../images/contracts.png";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  boxControl: {
    width: '400px',
    height: 'auto',
    margin:"20px auto",
    backgroundColor:"#EEF5FF"
  },
  boxHeader: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#254A93'
  },
  subHeader: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '13px',
    fontWeight: 'normal',
    color: '#99A0A3',
    marginTop: "10px"
  },
  btn: {
    width: "20px",
    height: "20px",
    minWidth:"0px",
    borderRadius: "50px",
    backgroundColor: '#254A93',
    marginTop: "10px"
  },
});
const FastAccessPanel =()=>{
  const [userType] = useState('manager');
  const classes = useStyles();
  const { t } = useTranslation();
  const handleClick =()=>{
    console.log("change path to analytics");
  //  Back-end should return for
    // Client (number of all houses && number of free house)
    // Manager (qty of clients && qty of contracts)
  };
  const dataClient = [
    {
      "id": "0",
      "icon": BlueHouse,
      "nameTitle": t('privateHouse'),
      "name": '2',
      "onClick": handleClick
    },
    {
      "id": "1",
      "icon": OrangeHouse,
      "nameTitle": t("freeHouses"),
      "name": 'M-2 ID 00170',
      "onClick": handleClick
    },
  ];
  const dataManager = [
    {
      "id": "0",
      "icon": Client,
      "nameTitle": t("clientTitle"),
      "name": '24',
      "onClick": handleClick
    },
    {
      "id": "1",
      "icon": Contracts,
      "nameTitle": t("contractTitle"),
      "name": '333',
      "onClick": handleClick
    },
  ];
  
  const isClient =()=>{
    return(<>
      <Box className={classes.boxControl}>
        <Box style={{ marginLeft:"110px" }}>
          <Typography className={classes.boxHeader}>{t("fastAccess")}</Typography>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            style={{ marginLeft:"-15px" }}
          >
            <Grid className={classes.subGrid} item xs={7} >
              <Typography className={classes.subHeader}>{t("fastAnalytics")}</Typography>
            </Grid>
            <Grid className={classes.subGrid} item xs={5} >
              <Button className={classes.btn} onClick={handleClick}><CallMadeIcon style={{ color:"#fff", fontSize:"14px", marginTop:"1px" }}/></Button>
            </Grid>
          </Grid>
        </Box>
        {dataClient.map(item=>
          <Box key={item.id}>
            <FastAccess icon={item.icon} nameTitle={item.nameTitle} name={item.name} onClick={item.onClick}/>
          </Box>
        )}
      </Box>
    </>);
  };
  const isManager =()=>{
    return(<>
      <Box className={classes.boxControl}>
        <Box style={{ marginLeft:"110px" }}>
          <Typography className={classes.boxHeader}>{t("fastAccess")}</Typography>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            style={{ marginLeft:"-15px" }}
          >
            <Grid className={classes.subGrid} item xs={9} >
              <Typography className={classes.subHeader}>{t("accessContract")}</Typography>     
            </Grid>
            <Grid className={classes.subGrid} item xs={3} >
              <Button className={classes.btn} onClick={handleClick}><CallMadeIcon style={{ color:"#fff", fontSize:"14px", marginTop:"1px" }}/></Button>
            </Grid>
          </Grid>
        </Box>
        {dataManager.map(item=>
          <Box key={item.id}>
            <FastAccess icon={item.icon} nameTitle={item.nameTitle} name={item.name} onClick={item.onClick}/>
          </Box>
        )}
      </Box>
    </>);
  };
  return(<>
    {(userType === "client" && isClient()) || (userType === "manager" && isManager())}
  </>);
};
export default FastAccessPanel;