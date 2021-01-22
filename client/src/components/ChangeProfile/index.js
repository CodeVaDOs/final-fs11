import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import ButtonStyle from "../Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import MaterialUIPickers from "../DatePicker";
const useStyles = makeStyles({
  rootProfile: {
    borderRadius: '20px',
    margin:"20px auto",
    height: 463,
    width: 600,
    textDecoration: "none",
    backgroundColor:"#fff",
  },
  text: {
    fontFamily: "Roboto, sans-serif",
    textTransform: "capitalize",
    fontStyle: "normal",
    fontWeight: 500,
    color:'#293134',
    fontSize: 19,
    paddingTop: 8,
    marginLeft:15
  },
  textSubHeader: {
    fontFamily: "Roboto, sans-serif",
    textTransform: "none",
    fontStyle: "normal",
    fontWeight: 500,
    color:'#6E7375',
    fontSize: 15,
    marginTop: 13,
    padding:15
  },
  textSmall: {
    fontFamily: "Roboto, sans-serif",
    textTransform: "none",
    fontStyle: "normal",
    fontWeight: 400,
    color:'#818E94',
    fontSize: 14,
    paddingTop: 8,
    marginLeft:15
  },
  textMini: {
    fontFamily: "Roboto, sans-serif",
    textTransform: "none",
    fontStyle: "normal",
    fontWeight: 400,
    color:'#B1B4BA',
    fontSize: 10,
    marginLeft:15,
    marginTop: -13
  },
  rootInput: {
    borderRadius: 5,
    height: 45,
    width: 400,
    padding: 5,
    margin: '5px auto',
    "& label.Mui-focused": {
      color: "#254A93",
      borderRadius: '5px',
    },
    "& .MuiOutlinedInput-input":{
      padding:"15.5px 14px"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "0.5px solid #6E737",
        borderRadius: `5 5 5 5`
      },
      "& .Mui-focused fieldset": {
        borderColor: "#254A93",
        color: "#254A93",
      },
    },
  },
});

const ChangeProfile =() => {
  const classes = useStyles();
  const { t } = useTranslation();

  //Form Data Managment
  const [dataForm, setDataForm] = useState({
    surname: '',
    phone: '',
    secondPhone: '',
    email: '',
    dateBirth: ''

  });
  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    });
  };
    // Form check for back-end && response status
  const check = (e) => {
    console.log('post to backend with new user');
    e.preventDefault();
    console.log(dataForm.surname, dataForm.phone, dataForm.secondPhone, dataForm.email, dataForm.dateBirth );
  };
    //Form Data Props
  const inputData = [
    {
      "id": "1",
      "label": t("profileSurname"),
      "valueType": dataForm.surname,
      "name": "surname",
      "onChange": handleChange
    },
    {
      "id": "2",
      "label": t('profilePhone'),
      "valueType": dataForm.phone,
      "name": "phone",
      "type":"number",
      "onChange": handleChange
    },
    {
      "id": "3",
      "label": t('profilePhoneAdd'),
      "valueType": dataForm.secondPhone,
      "name": "secondPhone",
      "type":"number",
      "onChange": handleChange
    },
    {
      "id": "4",
      "label": t('Email'),
      "valueType": dataForm.email,
      "name": "email",
      "onChange": handleChange
    },
    {
      "id": "5",
      "label": t('birthDay'),
      "valueType": dataForm.dateBirth,
      "name": "dateBirth",
      "onChange": handleChange
    },
      
  ];
  return( <>
    <Container maxWidth={"xl"}>
      <Box className={classes.rootProfile}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={4} >
            {inputData.map(e=>
              <Typography  key={e.id} className={classes.textSubHeader}>{e.label}</Typography>)}
            <Typography className={classes.textMini}>{t('birthDaySub')}</Typography>
          </Grid>
          <Grid  item xs={8}>
            <ValidatorForm noValidate autoComplete="off" instantValidate={false}>
              { inputData.map(i =>
                (i.name === "dateBirth") ?
                  <MaterialUIPickers/>
                  :
                  (i.name === "phone" || i.name === "secondPhone") ?
                    <TextValidator
                      className={classes.rootInput}
                      key={i.id}
                      value={i.valueType}
                      name={i.name}
                      type="number"
                      validators={['required']}
                      errorMessages={['This field is required']}
                      variant="outlined"
                      onChange={i.onChange}
                    />:
                    <TextValidator
                      className={classes.rootInput}
                      key={i.id}
                      value={i.valueType}
                      name={i.name}
                      type="text"
                      validators={['required']}
                      errorMessages={['This field is required']}
                      variant="outlined"
                      onChange={i.onChange}
                    />)
              }
            </ValidatorForm>
          </Grid>
        </Grid>
        <Box style={{ marginTop:"30px" }}>
          <ButtonStyle w={"240px"} h={"60px"} bgcolor={"#254A93"} ml={"232px"} text={t('save')} onClick={check}/>
        </Box>
      </Box>
    </Container>
  </>);
};
export default ChangeProfile;