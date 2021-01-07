import React, { createRef, useState  } from 'react';
import { Container } from '@material-ui/core';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ButtonStyle from "../../components/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";


const useStyles = makeStyles({
  root: {
    borderRadius: 23,
    border: "2px solid #254A93",
    height: 400,
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
});

const Login =( props, { user } )=>{
  const { t } = useTranslation();
  const classes = useStyles();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordCorrect] = useState(undefined);
  const refRef = createRef();
  const refRefPas1 = createRef();

  const routeChange = () => {
    //connect after fetch request
    // if (props.isEntered === true) {
    //   props.close();
    // }
    // change path to / forgotpass route
  };
  const check=(event)=> {
    // if (passwordValue !== "") {
    //   // props.getUser(emailValue, passwordValue);
    // }
  };
  const handleBlur=(event)=>{
    refRef.current.validate(event.target.value);
  };
  const handleBlurPassword=(event)=> {
    refRefPas1.current.validate(event.target.value);
  };
  const handleChange=(event)=>{
    setEmailValue(event.target.value);
  };
  const handleChangePassword=(event)=>{
    setPasswordValue(event.target.value);
  };
  const handleMouseDownPassword=(event)=>{
    event.preventDefault();
  };
  const errorMessageWrongPassword = passwordCorrect === false && (
    <Typography variant="body1">
            Please enter your password
    </Typography>
  );
  //connect after fetch request
  // const passwordOrMailAreNotCorrect = () => {
  //   if (
  //     props.isEntered ===
  //           "There is no user record corresponding to this identifier. The user may has been deleted." ||
  //           props.isEntered ===
  //           "The password is invalid or the user does not have a password."
  //   ) {
  //     return (
  //       <Typography variant="body1">
  //                   Wrong password or/and email
  //       </Typography>
  //     );
  //   } else {
  //     return false;
  //   }
  // };
  return(
    <>
      <Container maxWidth={"xl"}>
        <Box className={classes.root}>
          <Box className={classes.rootNext}>
            <Typography className={classes.text}>
              {t('signInHere')}
            </Typography>
          </Box>
          <Box style={ { width:400, height:200, margin:'20px auto' } }>
            <ValidatorForm noValidate autoComplete="off" instantValidate={false}>
              <TextValidator
                name="email"
                value={emailValue}
                validators={['required', 'isEmail']}
                errorMessages={['This field is required', t('regErrEmail')]}
                label={t('Email')}
                onBlur={handleBlur}
                ref={refRef}
                variant="outlined"
                onChange={handleChange}
                style={{ width: "100%" }}
              />
              <TextValidator
                label={t('RegPass')}
                variant="outlined"
                type={showPassword ? "text" : "password"}
                onChange={handleChangePassword}
                name="password"
                validators={['required']}
                errorMessages={['This field is required']}
                value={passwordValue}
                style={{ width: "100%", marginTop: "15px" }}
                onBlur={handleBlurPassword}
                ref={refRefPas1}
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
              />
              {errorMessageWrongPassword}
              {/*{passwordOrMailAreNotCorrect()}*/}
              <span>&nbsp;&nbsp;&nbsp;</span>
              <Typography variant="body1" >
                {t('forgotPass')}<span>&nbsp;</span>
                <a
                  style={{ textDecoration: "none" }}
                  href="#"
                  onClick={() => {
                    routeChange();
                    props.close();
                  }}
                >
                  {t('clickHere')}
                </a>
              </Typography>
            </ValidatorForm>
          </Box>
          <Box>
            <ButtonStyle text={t('signH1Title')} onClick={check}/>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;


