import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useTranslation } from "react-i18next";
import {connect} from "react-redux";
import {bookingHouse} from "../../../../redux/bookingHouse/action";
import ModalsContainer from "../../../ModalsContainer";
import ModalHouseBooking from "../../../ModalsContainer/ModalChildrens/ModalHouseBooking";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
  },
  textField: {
    width: 135,
    marginRight: theme.spacing(1)
  },
  textFieldR: {
    width: 135,
    marginRight: theme.spacing(3)
  },
  btn: {
    fontSize: '16px',
    backgroundColor: '#254A93',
    color: 'white',
    opacity: '95%',
    cursor: 'pointer',
    height: "30px",
    width: '120px',
    marginLeft: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    border: 'none',
    borderRadius: '8px',
    right: 0
  }

}));
function DatePickers({ user, houseId, bookingHouse }) {
  const classes = useStyles();
  const { t } = useTranslation();
  const [dates, setDate] = useState({
    dateFrom:'',
    dateTo:''
  })
  const handleChangeFrom = (e) => {
    setDate({
      dateFrom: e.target.value,
      dateTo: dates.dateTo
    });
  };
  const handleChangeTo = (e) => {
    setDate({
      dateFrom: dates.dateFrom,
      dateTo: e.target.value,
    });
  };
  const handleSubmit =()=>{
    console.log(dates.dateFrom, dates.dateTo)
    if (dates.dateFrom !=='' && dates.dateTo !=='') {
      bookingHouse({
        fromDate: dates.dateFrom,
        toDate: dates.dateTo,
        isOwner: true,
        houseId: houseId,
        renter: user.name
      })
    }
  }
  return (
    <div className={classes.container}>
      <div>
        <TextField
          id="date"
          label={t('bout')}
          type="date"
          value={dates.dateFrom}
          onChange={handleChangeFrom}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>

      <div>
        <TextField
          id="date"
          label={t('departure')}
          type="date"
          value={dates.dateTo}
          onChange={handleChangeTo}
          className={classes.textFieldR}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div>
        <ModalsContainer style={{backgroundColor:"#254A93", color:'white', width:"161px", marginLeft:"5px", height:"39px"}}
                         buttonActivateDialog={t("toBook")}
                         body={<ModalHouseBooking onClick={handleSubmit} houseID={houseId}/>}/>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
   bookingHouse: (data) => dispatch(bookingHouse(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DatePickers)