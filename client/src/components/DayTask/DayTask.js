import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosTwoToneIcon from '@material-ui/icons/ArrowForwardIosTwoTone';


const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
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

});


const DayTask = ({ title, body }) => {
  const classes = useStyles();

  return (<Card className={classes.root}>
    <CardHeader
      className={classes.header}
      title={title}
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
        {body}
      </Typography>
      <Typography align="right" paragraph className={classes.details}>
        Детально
        <IconButton className={classes.icon}>
          <ArrowForwardIosTwoToneIcon/>
        </IconButton>
      </Typography>
    </CardContent>
  </Card>);
};

DayTask.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
};

export default DayTask;