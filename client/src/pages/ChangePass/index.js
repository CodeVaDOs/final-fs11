import React, { createRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import ButtonStyle from "../../components/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    borderRadius: '20px',
    boxShadow: '0px 2px 4px #00000033',
    margin:"20px auto",
    height: 400,
    width: 800,
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

const ChangePass =()=> {
  const classes = useStyles();
  const { t } = useTranslation();
  const iconEmail =()=>{return(<><EmailIcon style={{ marginBottom: "-5px" }}/>{t("Email")}</>);};
  const iconPass =()=>{return(<><LockIcon style={{ marginBottom: "-5px" }}/>{t("RegPass")}</>);};
  const iconPassRep =()=>{return(<><LockIcon style={{ marginBottom: "-5px" }}/>{t("regPassRep")}</>);};
  //Password Visibility
  const [showPassword, setShowPassword] = useState(false);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
    //Form Data Managment
  const [dataForm, setDataForm] = useState({
    typeClient:true,
    typeManager:false,
    name: '',
    email: '',
    password: '',
    confpassword: ''
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
    console.log(dataForm.name, dataForm.email, dataForm.password, dataForm.confpassword, uploadImg.selectedFile);
  };
    //Email Validation
  const refRefEmail = createRef();
  const handleBlurEmail = (event) => {
    refRefEmail.current.validate(event.target.value);
  };
    //Form Data Props
  const inputData = [
    {
      "id": "1",
      "icon": iconEmail(),
      "valueType": dataForm.email,
      "name": 'email',
      "onChange": handleChange
    },
    {
      "id": "2",
      "icon": iconPass(),
      "valueType": dataForm.password,
      "name": "password",
      "onChange": handleChange
    },
    {
      "id": "3",
      "icon": iconPassRep(),
      "valueType": dataForm.confpassword,
      "name": "confpassword",
      "onChange": handleChange
    }
  ];
  return( <>
    <Container maxWidth={"xl"}>
      <Box className={classes.root}>
        <Box className={classes.rootNext}>
          <Typography className={classes.text}>
            {t("changePassHeader")}
          </Typography>
        </Box>
        <Box style={ { width:400, height:200, margin:'20px auto' } }>
          <ValidatorForm noValidate autoComplete="off" instantValidate={false}>
            { inputData.map(i =>
              (i.name === "password" || i.name === "confpassword") ?
                <TextValidator
                  className={classes.rootInput}
                  key={i.id}
                  value={i.valueType}
                  name={i.name}
                  validators={['required']}
                  errorMessages={['This field is required']}
                  label={i.icon}
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
                (i.name === "email")?
                  <TextValidator
                    className={classes.rootInput}
                    key={i.id}
                    value={i.valueType}
                    name={i.name}
                    validators={['required', 'isEmail']}
                    errorMessages={['This field is required', t('regErrEmail')]}
                    label={i.icon}
                    variant="outlined"
                    onChange={i.onChange}
                    onBlur={handleBlurEmail}
                    ref={refRefEmail}
                  />:
                  <TextValidator
                    className={classes.rootInput}
                    key={i.id}
                    value={i.valueType}
                    name={i.name}
                    validators={['required']}
                    errorMessages={['This field is required']}
                    label={i.icon}
                    variant="outlined"
                    onChange={i.onChange}
                  />)
            }

          </ValidatorForm>
        </Box>
        <Box>
          <ButtonStyle w={"161px"} h={"49px"} bgcolor={"#254A93"} ml={"40%"} text={t('change')} onClick={check}/>
        </Box>
      </Box>
    </Container>
  </>);
};
export default ChangePass;