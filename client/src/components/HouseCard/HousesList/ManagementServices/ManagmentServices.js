import React, {useState} from 'react';
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {useTranslation} from "react-i18next";
import santech from "../../../../images/santech.png";
import secur from "../../../../images/secur.png";
import fasad from "../../../../images/fasad.png";
import electric from "../../../../images/electric.png";
import condition from "../../../../images/condition.png";
import window from "../../../../images/window.png";
import blago from "../../../../images/blago.png";
import temper from "../../../../images/temper.png";
import house from "../../../../images/house.png";

import ModalsContainer from "@components/ModalsContainer";
import ModalManageServices from '@components/ModalsContainer/ModalChildrens/ModalRequestServices';
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosTwoToneIcon from "@material-ui/icons/ArrowForwardIosTwoTone";

const useStyles = makeStyles({
  containerSer: {
    margin: "o auto",
    overflow: "none"
  },
  headerSer: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '19px',
    fontWeight: 'bold',
    color: '#293134',
    margin: "5% 7%"
  },
  greyTextSer: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    fontWeight: 'normal',
    color: '#6E7375',
    margin: "5% 3%"
  },
  blackTextSer: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '19px',
    fontWeight: 'normal',
    margin: "5% 5%",
    color: '#293134'
  },
  smallTextSer: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
    fontWeight: 'normal',
    color: '#293134'
  },
  root: {
    width: '100%',
    justifyContent: "space-between",
    display: "flex",
    flexDirection: 'row'

  },
  paper: {
    margin: "5px",
    borderRadius: '20px',
    boxShadow: "0px 1px 3px #00000033",
    paddingRight: '15px',
    padding: '5px',
    width: '290px',
    height: "60px",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",

  },
  icon: {
    borderRadius:13,
  },
  btn: {
    borderRadius: '50%',
    background: "#EEF5FF",
    marginLeft: "10px",
    marginTop: 5,
    maxWidth: '100px'
  },
  text: {
    fontSize: 14,
    color: '#293134',
    overflow: "hidden",
  },
  title: {
    fontSize: 18,
    color: '#293134',
    overflow: "hidden",
  },
  details: {
    marginBottom: "0",
    marginTop: "0px"
  },
  orangeBox: {
    width: "42px",
    height: "42px",
    textAlign: "center",
    borderRadius: "12px",
    backgroundColor: "#F88B38",
  },
  greenBox: {
    width: "42px",
    height: "42px",
    textAlign: "center",
    borderRadius: "12px",
    backgroundColor: "#4AD584"
  },
  blueBox: {
    width: "42px",
    height: "42px",
    textAlign: "center",
    borderRadius: "12px",
    backgroundColor: "#00D0FF"
  },
});

export const ManagementServices = () => {
  const {t} = useTranslation();

  const callButtonStyle = {
    backgroundColor: "#EEF5FF",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    minWidth: "50px"
  }
  const services1 = [
    {
      "id": "1",
      "service": t('plumbing'),
      "icon": santech,
    },
    {
      "id": "2",
      "service": t('securitySystem'),
      "icon": secur,
    },
    {
      "id": "3",
      "service": t('facadeWorks'),
      "icon": fasad,
    },

  ];
  const services2 = [
    {
      "id": "4",
      "service": t("Electricity"),
      "icon": electric,

    },
    {
      "id": "5",
      "service": t("VentilationAndAirConditioning"),
      "icon": condition,

    },
    {
      "id": "6",
      "service": t("WindowsAndDoors"),
      "icon": window,
    },


  ];
  const services3 = [
    {
      "id": 7,
      "service": t("Landscaping"),
      "icon": blago,
    },
    {
      "id": 8,
      "service": t("Heating"),
      "icon": temper,
    },
    {
      "id": 9,
      "service": t("Other") + "...",
      "icon": house,
    },
  ];
  const classes = useStyles();
  const [input, setInput] = useState({
    selected: "",
  });
  const clickHandler = (id) => {
    setInput({
      selected: id,
    });
    console.log(id);
  };


  return (
      <Box className={classes.containerSer}>
        <Box style={{textAlign: "center"}}>
          <Typography className={classes.headerSer}>{t("serTitle")}</Typography>
        </Box>
        <Box style={{textAlign: "center", marginTop: "-35px"}}>
          <Grid className={classes.root} item>
            <Grid className={classes.subGrid} item xs={4}>
              {services1.map((s) => (
                  <Box style={{backgroundColor: input.selected === s.id ? "#EEF5FF" : "white"}}
                       className={classes.paper}
                       key={s.id}>

                    <Typography align="right" paragraph className={classes.details}>
                      <Box className={classes.orangeBox}>
                        <img alt={s.service} src={s.icon} className={classes.icon}/>
                      </Box>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
                      {s.service}
                    </Typography>
                    <Typography align="right" paragraph className={classes.details}>
                      <ModalsContainer style={callButtonStyle}
                                       clickIcon={<ArrowForwardIosTwoToneIcon/>}
                                       buttonOk={t("returnBtn")}
                                       buttonCancel={t("serBtn")}
                                       body={<ModalManageServices service={s.service} icon={s.icon}/>}
                      />
                    </Typography>
                  </Box>
              ))}
            </Grid>
            <Grid className={classes.subGrid} item xs={4}>
              {services2.map((s) => (
                  <Box style={{backgroundColor: input.selected === s.id ? "#EEF5FF" : "white"}}
                       className={classes.paper}
                       key={s.id}>
                    <Typography align="right" paragraph className={classes.details}>
                      <Typography align="right" paragraph className={classes.details}>
                        <Box className={classes.greenBox}>
                          <img alt={s.service} src={s.icon} className={classes.icon}/>
                        </Box>
                      </Typography>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
                      {s.service}
                    </Typography>
                    <Typography align="right" paragraph className={classes.details}>
                      <ModalsContainer style={callButtonStyle}
                                       clickIcon={<ArrowForwardIosTwoToneIcon/>}
                                       buttonOk={t("returnBtn")}
                                       buttonCancel={t("serBtn")}
                                       body={<ModalManageServices service={s.service} icon={s.icon}/>}
                      />
                    </Typography>
                  </Box>
              ))}
            </Grid>
            <Grid className={classes.subGrid} item xs={4}>
              {services3.map((s) => (
                  <Box style={{backgroundColor: input.selected === s.id ? "#EEF5FF" : "white"}}
                       className={classes.paper}
                       key={s.id}>
                    <Typography align="right" paragraph className={classes.details}>
                      <Typography align="right" paragraph className={classes.details}>
                        <Box className={classes.blueBox}>
                          <img alt={s.service} src={s.icon} className={classes.icon}/>
                        </Box>
                      </Typography>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
                      {s.service}
                    </Typography>
                    <Typography align="right" paragraph className={classes.details}>
                      <ModalsContainer style={callButtonStyle}
                                       clickIcon={<ArrowForwardIosTwoToneIcon/>}
                                       buttonOk={t("returnBtn")}
                                       buttonCancel={t("serBtn")}
                                       body={<ModalManageServices service={s.service} icon={s.icon}/>}
                      />
                    </Typography>
                  </Box>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Box>
  );
};
