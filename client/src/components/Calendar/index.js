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
    borderRadius: "20px",
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