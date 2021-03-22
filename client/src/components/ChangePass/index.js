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
import { connect } from "react-redux";
import { updatePassword } from "../../redux/profilePass/action";

const useStyles = makeStyles({
  root: {
    borderRadius: '20px',
    margin:"20px auto",
    height: 463,
    width: 600,
    textDecoration: "none",
    backgroundColor:"#fff",
  },
  rootNext: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 50,
    background:'#fff',
    marginBottom: 50,
    textAlign: "left",
    color:'#fff',
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
  rootInput: {
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

const ChangePass =({ password, updatePassword })=> {
  const classes = useStyles();
  const { t } = useTranslation();

  //Password Visibility
  const [showPassword, setShowPassword] = useState(false);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
    //Form Data Managment
  const [dataForm, setDataForm] = useState({
    oldPass: '',
    newPass: '',
    confPassword: ''
  });
  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    });
  };
  // Form check for back-end && response status
  const submit =(e)=> {
    e.preventDefault();
    if (dataForm.newPass !== '' && dataForm.newPass === dataForm.confPassword) {
      updatePassword({
        password: dataForm.newPass
      })
      if(password.length !== 0) {
        setDataForm({
          oldPass: '',
          newPass: '',
          confPassword: ''
        })
      } else {
        setDataForm({
          oldPass: dataForm.oldPass,
          newPass: dataForm.newPass,
          confPassword: dataForm.confPassword
        })
      }
    }
  };
  // ValidatorForm.addValidationRule('isPasswordMatch', (value) =>  value === dataForm.newPass);
  // ValidatorForm.addValidationRule('minNumber', (value) => value.length >= 4);
    //Form Data Props
  const inputData = [
    {
      "id": "1",
      "label": t('oldPass'),
      "valueType": dataForm.oldPass,
      "name": "oldPass",
      "onChange": handleChange,
      "ref":''
    },
    {
      "id": "2",
      "label": t('newPass'),
      "valueType": dataForm.newPass,
      "name": "newPass",
      "validators": ['required', 'minNumber'],
      "errorMessages":['This field is required', t('errMinNumber')],
      "onChange": handleChange
    },
    {
      "id": "3",
      "label": t('repPass'),
      "valueType": dataForm.confPassword,
      "name": "confPassword",
      "validators": ['required', 'isPasswordMatch'],
      "errorMessages":['This field is required', t('errPassRep')],
      "onChange": handleChange
    }
  ];
  return( <>
    <Container maxWidth={"xl"}>
      <Box className={classes.root}>
        <Box className={classes.rootNext}>
          <Typography className={classes.text}>
            {t('changePassText')}
          </Typography>
          <Typography className={classes.textSmall}>
            {t('changePassSmall')}
          </Typography>
        </Box>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={4} >
            {inputData.map(e=>
              <Typography  key={e.id} className={classes.textSubHeader}>{e.label}</Typography>)}
          </Grid>
          <Grid  item xs={8}>
            <ValidatorForm noValidate autoComplete="off" instantValidate={false} onSubmit={submit}>
              { inputData.map(i =>
                (i.name === "oldPass" || i.name === "newPass" || i.name === "confPassword") ?
                  <TextValidator
                    className={classes.rootInput}
                    key={i.id}
                    value={i.valueType}
                    name={i.name}
                    validators={i.validators}
                    errorMessages={i.errorMessages}
                    variant="outlined"
                    onChange={i.onChange}
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />:
                  <TextValidator
                    className={classes.rootInput}
                    key={i.id}
                    value={i.valueType}
                    name={i.name}
                    validators={i.validators}
                    errorMessages={i.errorMessages}
                    variant="outlined"
                    onChange={i.onChange}
                  />)
              }
            </ValidatorForm>
          </Grid>
        </Grid>
        <Box style={{ marginTop:"80px" }}>
          <ButtonStyle w={"240px"} h={"60px"} bgcolor={"#254A93"} ml={"232px"} text={t('save')} onClick={submit}/>
        </Box>
      </Box>
    </Container>
  </>);
};

const mapStateToProps = (state) => {
  return {
    password: state.password.password
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updatePassword: (data) => dispatch(updatePassword(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChangePass);