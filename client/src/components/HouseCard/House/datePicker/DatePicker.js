import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useTranslation } from "react-i18next";
import {connect} from "react-redux";
import {bookingHouse} from "../../../../redux/bookingHouse/action";

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
function DatePickers({ bookingHouse }) {
  const classes = useStyles();
  const { t } = useTranslation();

  const handleSubmit =()=>{
    if (true) {
      // bookingHouse({
      //   fromDate: "2021-03-12T13:24:06.981Z",
      //   toDate: "2021-03-12T13:24:06.981Z",
      //   isOwner: true,
      //   houseId: 0,
      //   renter: "string"
      // })
    }
  }
  return (
    <div className={classes.container}>
      <div>
        <TextField
          id="date"
          label={t('bout')}
          type="date"
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
          className={classes.textFieldR}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div>
        <button
            className={classes.btn}
            onClick={handleSubmit}>
          {t("toBook")}
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
   bookingHouse: (data) => dispatch(bookingHouse(data)),
  };
};
export default connect(null, mapDispatchToProps)(DatePickers)