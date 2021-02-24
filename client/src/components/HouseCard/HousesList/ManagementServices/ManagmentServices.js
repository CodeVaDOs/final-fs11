import React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosTwoToneIcon from "@material-ui/icons/ArrowForwardIosTwoTone";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
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

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    justifyContent: "space-between",
    display: "flex",
    flexDirection: 'row'

  },
  paper: {
    backgroundColor: 'white',
    margin: "5px",
    borderRadius: '20px',
    height: '70px',
    paddingRight: '15px',
    padding: '5px',
    width:"300px",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",

  },
  icon: {
    borderRadius: 13,
    background: "#EEF5FF",
    marginLeft: "10px",
    marginR: "10px",
    marginTop: 5,
    maxWidth: '100px'
  },
  btn: {
    borderRadius: '50%',
    background: "#EEF5FF",
    marginLeft: "10px",
    marginTop: 5,
    maxWidth: '100px'
  },
  text: {
    fontSize: 16,
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
  }
}));


export const ManagementServices = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const callButtonStyle = {
    backgroundColor: "#EEF5FF",
    width:"50px",
    height:"50px",
    borderRadius:"50%",
    minWidth:"50px"
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

  const modalClicked = (id, service, icon)=>{
    console.log("Click", id, service, icon )

  }

  function FormRow() {
    return (
      <React.Fragment>
        <Grid className={classes.root} item>
          <div>
            {services1.map((s) => (
              <div className={classes.paper} key={s.id}>
                <Typography align="right" paragraph className={classes.details}>
                  <img alt={s.service} src={s.icon} className={classes.icon}/>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
                  {s.service}
                </Typography>
                <Typography align="right" paragraph className={classes.details}>
                    <ModalsContainer onClick={()=> modalClicked(s.id, s.service, s.icon)}
                                     style={callButtonStyle}
                                     clickIcon={<ArrowForwardIosTwoToneIcon/>}
                                     buttonOk={t("returnBtn")}
                                     buttonCancel={t("serBtn")}
                                     body={<ModalManageServices service={s.service} icon={s.icon}/>}
                    />
                </Typography>
              </div>
            ))}
          </div>
          <div>
            {services2.map((s) => (
              <div className={classes.paper} key={s.id}>
                <Typography align="right" paragraph className={classes.details}>
                  <Typography align="right" paragraph className={classes.details}>
                    <img alt={s.service} src={s.icon} className={classes.icon}/>
                  </Typography>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
                  {s.service}
                </Typography>
                <Typography align="right" paragraph className={classes.details}>
                  <ModalsContainer onClick={()=> modalClicked(s.id, s.service, s.icon)}
                                   style={callButtonStyle}
                                   clickIcon={<ArrowForwardIosTwoToneIcon/>}
                                   buttonOk={t("returnBtn")}
                                   buttonCancel={t("serBtn")}
                                   body={<ModalManageServices service={s.service} icon={s.icon}/>}
                  />
                </Typography>
              </div>
            ))}
          </div>
          <div>
            {services3.map((s) => (
              <div className={classes.paper} key={s.id}>
                <Typography align="right" paragraph className={classes.details}>
                  <Typography align="right" paragraph className={classes.details}>
                    <img alt={s.service} src={s.icon} className={classes.icon}/>
                  </Typography>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
                  {s.service}
                </Typography>
                <Typography align="right" paragraph className={classes.details}>
                  <ModalsContainer onClick={()=> modalClicked(s.id, s.service, s.icon)}
                                   style={callButtonStyle}
                                   clickIcon={<ArrowForwardIosTwoToneIcon/>}
                                   buttonOk={t("returnBtn")}
                                   buttonCancel={t("serBtn")}
                                   body={<ModalManageServices service={s.service} icon={s.icon}/>}
                  />
                </Typography>
              </div>
            ))}
          </div>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <>
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        className={classes.title}
        style={{ marginTop: "30px", marginBottom: "20px" }}
      >
        Замовити послуги управління
      </Typography>
      <FormRow/>
    </>

  );
};

