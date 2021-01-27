import 'date-fns';
import React, { useState } from 'react';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';

const MaterialUIPickers = () => {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = useState(new Date('2021-01-18T21:11:54'));
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (<></>);
  // <MuiPickersUtilsProvider utils={DateFnsUtils}>
  //   <KeyboardDatePicker
  //     style={{ border: "0.5px solid #B1B4BA", marginLeft: "5px", borderRadius:"5px", height:"21px", padding:10 }}
  //     disableToolbar
  //     variant="outlined"
  //     format="MM/dd/yyyy"
  //     margin="normal"
  //     id="date-picker-inline"
  //     value={selectedDate}
  //     onChange={handleDateChange}
  //     KeyboardButtonProps={{
  //       'aria-label': 'change date',
  //     }}
  //   />
  // </MuiPickersUtilsProvider>
};
export default MaterialUIPickers;
