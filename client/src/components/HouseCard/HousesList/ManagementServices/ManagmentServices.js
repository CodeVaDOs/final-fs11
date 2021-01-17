import React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosTwoToneIcon from "@material-ui/icons/ArrowForwardIosTwoTone";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
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
    height: 'fit-content',
    paddingRight: '15px',
    padding: '5px',
    width: '290px',
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",

  },
  icon: {
    background: "#EEF5FF",
    marginLeft: "10px"
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

const services1 = [
  {
    id: 1,
    service: 'Сантехніка',
    icon: '*_*'
  },
  {
    id: 2,
    service: 'Система охорони',
    icon: '*_*'
  },
  {
    id: 3,
    service: 'Фасадні роботи',
    icon: '*_*'
  },

];

const services2 = [
  {
    id: 4,
    service: 'Електрика',
    icon: '()_()'
  },
  {
    id: 5,
    service: 'Вентиляція та кондиціонування',
    icon: '()_()'
  },
  {
    id: 6,
    service: 'Вікна та двері',
    icon: '()_()'
  },


];
const services3 = [
  {
    id: 7,
    service: 'Благоустрій території',
    icon: '[]_[]'
  },
  {
    id: 8,
    service: 'Опалення',
    icon: '[]_[]'
  },
  {
    id: 9,
    service: 'Інше...',
    icon: '[]_[]'
  },
];


export const ManagementServices = (props) => {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid className={classes.root} item>
          <div>
            {services1.map((s) => (
              <div className={classes.paper} key={s.id}>
                <Typography align="right" paragraph className={classes.details}>
                  <IconButton className={classes.icon}>
                    {s.icon}
                  </IconButton>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
                  {s.service}
                </Typography>
                <Typography align="right" paragraph className={classes.details}>
                  <IconButton className={classes.icon}>
                    <ArrowForwardIosTwoToneIcon/>
                  </IconButton>
                </Typography>
              </div>
            ))}
          </div>
          <div>
            {services2.map((s) => (
              <div className={classes.paper} key={s.id}>
                <Typography align="right" paragraph className={classes.details}>
                  <IconButton className={classes.icon}>
                    {s.icon}
                  </IconButton>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
                  {s.service}
                </Typography>
                <Typography align="right" paragraph className={classes.details}>
                  <IconButton className={classes.icon}>
                    <ArrowForwardIosTwoToneIcon/>
                  </IconButton>
                </Typography>
              </div>
            ))}
          </div>
          <div>
            {services3.map((s) => (
              <div className={classes.paper} key={s.id}>
                <Typography align="right" paragraph className={classes.details}>
                  <IconButton className={classes.icon}>
                    {s.icon}
                  </IconButton>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
                  {s.service}
                </Typography>
                <Typography align="right" paragraph className={classes.details}>
                  <IconButton className={classes.icon}>
                    <ArrowForwardIosTwoToneIcon/>
                  </IconButton>
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

