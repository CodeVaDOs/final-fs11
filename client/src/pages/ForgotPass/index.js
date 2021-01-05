import React ,{ createRef, useState } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import ButtonStyle from "../../components/Button";
import translate from "../../i18n/translate";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  root: {
    borderRadius: 23,
    border: "2px solid #254A93",
    height: 320,
    width: 800,
    margin: '0 auto',
    textDecoration: "none",
  },
  rootNext: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 50,
    background:'#254A93',
    marginBottom: 50,
    textAlign: "center",
    color:'#fff',
  },
  text: {
    fontFamily: "Roboto, sans-serif",
    textTransform: "capitalize",
    fontStyle: "normal",
    fontWeight: 600,
    color:'#fff',
    fontSize: 22,
    paddingTop: 8
  },
  form: {
    width: "100%",
    marginTop: 18
  },
  customInput: {
    "& label.Mui-focused": {
      color: "#254A93",
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#c3c3c3",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#254A93",
        color: "#254A93",
      },
    },
    width: "100%",
    marginTop: "10px"
  },
  registerForm: {
    width: "488px",
    margin: "50px auto"
  },
  button: {
    marginLeft: "-63%",
    marginTop:'10px'
  },
  subheader: {
    color:'black'
  }
});

const ForgotPass =(props)=>{
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    // props.sendForgotPassword(email);
    setIsSent(true);
  };
  const refRef = createRef();
  const handleBlur=(event)=> {
    refRef.current.validate(event.target.value);
  };

  const handleChange=(event)=> {
    setEmail(event.target.value);
  };

  const checkEmailMessage = (
    <>
      <CssBaseline/>
      <div>
        <div></div>
        <Typography className={classes.subheader} >
          {translate('checkPass')}
        </Typography>
      </div>
    </>
  );
  const form = (
    <Box className={classes.root}>
      <Box className={classes.rootNext}>
        <Typography className={classes.text}>
          {translate('recoverPass')}
        </Typography>
        <ValidatorForm className={classes.registerForm} autoComplete="off" instantValidate={false}
          onSubmit={submit}>
          <div>
            <Typography className={classes.subheader} >
              {translate('recoverPassText')}
            </Typography>
            <TextValidator
              label={translate('Email')}
              variant="outlined"
              onChange={handleChange}
              name="email"
              value={email}
              validators={['required', 'isEmail']}
              errorMessages={['This field is required', translate('notValid')]}
              style={{ width: "100%", marginTop: "15px" }}
              onBlur={handleBlur}
              ref={refRef}
              helperText={translate('recoverPass')}
            />
          </div>
          <Box className={classes.button} >
            <ButtonStyle text={translate('recoverySend')} onClick={()=>{}}/>
          </Box>
        </ValidatorForm>
      </Box>
    </Box>
  );
  return (
    <>
      <Container maxWidth={"xl"}>
        {isSent ? checkEmailMessage : form}
      </Container>
    </>
  );
};
export default ForgotPass;