import React, { useState } from "react";
import Calendar from "react-calendar";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import 'react-calendar/dist/Calendar.css';

const useStyles = makeStyles({
  rootCalendar: {
    fontFamily: "Roboto, sans-serif",
    textTransform: "none",
    fontStyle: "normal",
    color:'#818E94',
    fontSize: 20,
  },
  box: {
    width: 356,
    height: 313,
    boxShadow: "0px 2px 4px #00000033",
    borderRadius: "20px",
    backgroundColor:"#fff",
    marginTop:"20px"
  }
});
const CalendarL =()=> {
  const classes = useStyles();
  let [date, setDate] = useState(new Date());

  const handleDateChange = (date) => {
    setDate(date);
  };
  return (
    <Box className={classes.box}>
      <Calendar
        onChange={handleDateChange}
        value={date}
        className={classes.rootCalendar}
      />
    </Box>);
};
export default CalendarL;