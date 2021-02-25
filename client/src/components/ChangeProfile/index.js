import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import ButtonStyle from "../Button";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { updateUser } from "../../redux/auth/action";
import { serialize } from 'object-to-formdata';


const useStyles = makeStyles({
  rootProfile: {
    borderRadius: '20px',
    margin:"20px auto",
    height: 463,
    width: 600,
    textDecoration: "none",
    backgroundColor:"#fff",
  },
  textField: {
    width: "135px",
    marginLeft: "5px",
    marginTop: "25px"
  },
  textProfile: {
    fontFamily: "Roboto, sans-serif",
    textTransform: "capitalize",
    fontStyle: "normal",
    fontWeight: 500,
    color:'#293134',
    fontSize: 19,
    paddingTop: 8,
    marginLeft:15
  },
  textSubHeaderProfile: {
    fontFamily: "Roboto, sans-serif",
    textTransform: "none",
    fontStyle: "normal",
    fontWeight: 500,
    color:'#6E7375',
    fontSize: 15,
    marginTop: 13,
    padding:15
  },
  textSmallProfile: {
    fontFamily: "Roboto, sans-serif",
    textTransform: "none",
    fontStyle: "normal",
    fontWeight: 400,
    color:'#818E94',
    fontSize: 14,
    paddingTop: 8,
    marginLeft:15
  },
  textMiniProfile: {
    fontFamily: "Roboto, sans-serif",
    textTransform: "none",
    fontStyle: "normal",
    fontWeight: 400,
    color:'#B1B4BA',
    fontSize: 10,
    marginLeft:15,
    marginTop: -13
  },
  rootInputProfile: {
    borderRadius: 5,
    height: 45,
    width: 400,
    padding: 5,
    margin: '10px auto',
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

const ChangeProfile =(props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  //Form Data Managment
  const [dataForm, setDataForm] = useState({
    id:props.user.id,
    surname: props.user.name,
    phone: props.user.contacts[0].phone,
    secondPhone: props.user.contacts[1].phone,
    email: props.user.email,
    dateBirth: props.user.birthday.slice(0,10),
    password: props.user.password
  });
  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    });
  };

  // Form check for back-end && response status
  const check = (e) => {
    e.preventDefault();
    const dataFormData = {
      'id': dataForm.id,
      'email': dataForm.email,
      'name': dataForm.surname
    //   'contacts': [
    // {
    //    'id':0,
    //    'phone': dataForm.phone,
    //     'type':"MAIN"
    // },
    // {
    //   'id':1,
    //   'phone': dataForm.secondPhone,
    //     'type':"ADDITIONAL"
    // }
    // ]
    };
    const formData = serialize(dataFormData);
    console.log(formData);
    props.updateUser(formData);
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
              <Typography  key={e.id} className={classes.textSubHeaderProfile}>{e.label}</Typography>)}
            <Typography className={classes.textMiniProfile}>{t('birthDaySub')}</Typography>
          </Grid>
          <Grid  item xs={8}>
            <ValidatorForm noValidate autoComplete="off" instantValidate={false}>
              { inputData.map(i =>
                (i.name === "dateBirth") ?
                  <TextField
                    id="date"
                    type="date"
                    defaultValue={i.valueType}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  :
                  (i.name === "phone" || i.name === "secondPhone") ?
                    <TextValidator
                      className={classes.rootInputProfile}
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
                      className={classes.rootInputProfile}
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
const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (data) => dispatch(updateUser(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChangeProfile);