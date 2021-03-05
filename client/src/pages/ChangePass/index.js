import React ,{ useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import ButtonStyle from "../../components/Button";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useDispatch } from "react-redux";
import { AUTH_ACTIONS } from "@redux/auth/action";

const useStyles = makeStyles({
  root: {
    borderRadius: '20px',
    boxShadow: '0px 2px 4px #00000033',
    margin:"20px auto",
    height: 400,
    width: 800,
    textDecoration: "none",
    backgroundColor:"#fff"
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
  button: {
    marginLeft: "-63%",
    marginTop:'10px'
  },
  subheader: {
    color:'black'
  },
  registerForm: {
    width: "488px",
    margin: "50px auto"
  },
  rootInput: {
    borderRadius: 5,
    height: 40,
    width: 400,
    padding: 5,
    margin: '15px auto 25px',
    "& label.Mui-focused": {
      color: "#254A93",
      borderRadius: '5px',
    },
    "& .MuiOutlinedInput-input": {
      padding: "15.5px 14px"
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
  const { token } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [showPassword, setShowPassword] = useState(false);
  const handleMouseDownPassword = (event) => { event.preventDefault(); };

  const [dataForm, setDataForm] = useState({ newPass: '', confPassword: '' });
  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    });
  };

  const fetch = () =>{

    // Waite for end-point from back ned write new changePass(old, new pass)
    // dispatch(AUTH_ACTIONS.changePassword({ password: dataForm.newPass }, token));
  };

  async function submit (e) {
    e.preventDefault();
    // await fetch();
  }

  ValidatorForm.addValidationRule('isPasswordMatch', (value) =>  value === dataForm.newPass);
  ValidatorForm.addValidationRule('minNumber', (value) => value.length >= 4);

  const inputData = [
    {
      "id": "1",
      "label": t('newPass'),
      "valueType": dataForm.newPass,
      "name": "newPass",
      "validators": ['required', 'minNumber'],
      "errorMessages":['This field is required', t('errMinNumber')],
    },
    {
      "id": "2",
      "label": t('repPass'),
      "valueType": dataForm.confPassword,
      "name": "confPassword",
      "validators": ['required', 'isPasswordMatch'],
      "errorMessages":['This field is required', t('errPassRep')],
    }
  ];
  return( <>
    <Container maxWidth={"xl"}>
      <Box className={classes.root}>
        <Box className={classes.rootNext}>
          <Typography className={classes.text}>
            {t('changePassText')}
          </Typography>
          <ValidatorForm className={classes.registerForm} autoComplete="off" instantValidate={false}
            onSubmit={submit}>
            <div>
              <Typography className={classes.subheader} >
                {t('changePassSmall')}
              </Typography>
              { inputData.map(i =>
                (<TextValidator
                  className={classes.rootInput}
                  label={i.label}
                  key={i.id}
                  value={i.valueType}
                  name={i.name}
                  validators={i.validators}
                  errorMessages={i.errorMessages}
                  variant="outlined"
                  onChange={handleChange}
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
                />)
              ) }
            </div>
            <Box className={classes.button} >
              <ButtonStyle  w={"161px"} h={"49px"} bgcolor={"#254A93"} ml={"40%"} text={t('save')}  onClick={()=>{}} type = {submit}/>
            </Box>
          </ValidatorForm>
        </Box>
      </Box>
    </Container>
  </>);
};
export default ChangePass;