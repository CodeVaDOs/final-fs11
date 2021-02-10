import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles({
  rootBox: {
    width: "100%",
    borderRadius: "15px",
    paddingLeft: "25px",
    position: "relative",
    margin: "10px 0",
    "&::before": {
      borderRadius: "7px",
      left: "15px",
      content: '""',
      display: "block",
      width: "10px",
      height: "90%",
      background: "#FA505D",
      position: "absolute",
      margin: "10px 0"
    }
  },
  header: {
    paddingBottom: "5px"
  },
  text: {
    height: "60px",
    overflow: "hidden",
    paddingBottom: "0",
    paddingTop: "0"
  },
  icon: {
    background: "#EEF5FF",
    marginLeft: "10px"
  },
  details: {
    marginBottom: "0",
    marginTop: "10px"
  }
});


const ControlNotification = ({ title, body }) => {
  const classes = useStyles();

  return (<Card className={classes.rootBox}>
    <CardHeader
      className={classes.header}
      title={title}
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
        {body}
      </Typography>
    </CardContent>
  </Card>);
};


export default ControlNotification;