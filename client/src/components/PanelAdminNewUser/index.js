import React, { createRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import LocalSeeIcon from '@material-ui/icons/LocalSee';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import ButtonStyle from "../Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { CardActionArea, CardContent, Fab } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
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
  formControl: {
    width: '890px',
    height: '401px',
    borderRadius: '20px',
    boxShadow: '0px 2px 4px #00000033',
    marginBottom:"12px",
    backgroundColor:"#fff"
  },
  subGrid: {
    height: '400px',
    width: 'auto',
  },
  title: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#293134',
    marginTop: '5px',
    marginLeft: '35px'
  },
  photoContainer: {
    width: '180px',
    height: '220px',
    background: '#F7FAFF',
    border: '0.5px solid #6E7375',
    borderRadius: '20px',
    marginTop: '94px',
    marginLeft: '60px'
  },
  greyButton: {
    background: '#ACB5B9',
    width: '67px',
    height: '67px',
    borderRadius: '50%',
    marginTop: '54px',
    marginLeft: '4px',
    cursor: "pointer"
  },
  smallText: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    fontWeight: 'normal',
    textTransform:'lowercase',
    color: '#fff',
    marginTop: '-10px',
    marginLeft: '12px'
  },
  active:{
    background:"red"
  }
});

const PanelAdminNewUser =()=> {
  const classes = useStyles();
  const { t } = useTranslation();
  const iconName =()=>{ return(<><PersonIcon style={{ marginBottom: "-5px" }}/>{t("fullName")}</>);};
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
  //Buttons State Managment
  const toggle = () => {
    if(dataForm.typeClient !== true && dataForm.typeManager !== false){
      setDataForm({
        typeClient:true,
        typeManager:false,
      });
    } else {
      setDataForm({
        typeClient:false,
        typeManager:true,
      });
    }
  };
  // Upload Photo Managment
  const [uploadImg, setUploadImg] = useState({
    mainState: "initial",
    imageUploaded: 0,
    selectedFile: null
  });
  const handleUploadClick = event => {
    const reader = new FileReader();
    let file = event.target.files[0];
    let url = reader.readAsDataURL(file);
    console.log(url);

    reader.onloadend = (e) => setUploadImg({
      mainState: "uploaded",
      selectedFile: [reader.result],
      imageUploaded: 1
    });

    setUploadImg({
      mainState: "uploaded",
      selectedFile: event.target.files[0],
      imageUploaded: 1
    });
  };
  const imageResetHandler = event => {
    setUploadImg({
      mainState: "initial",
      selectedFile: null,
      imageUploaded: 0
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
      "id": "0",
      "icon": iconName(),
      "valueType": dataForm.name,
      "name": 'name',
      "onChange": handleChange
    },
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
  //Upload Photo Managment
  const renderInitialState =()=> {
    return (
      <>
        <CardContent>
          <Grid container justify="center" alignItems="center">
            <input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              style={{ display:"none" }}
              onChange={handleUploadClick}
            />
            <label htmlFor="contained-button-file">
              <Fab component="span" onChange={handleUploadClick} className={classes.greyButton}>
                <LocalSeeIcon style={{ color: "#FFF", marginTop:"-23px", marginLeft:'10px' }}/>
                <div style={ { marginTop:"36px", marginLeft:"-48px" } }>
                  <Typography className={classes.smallText}>{t('change')}</Typography>
                  <Typography className={classes.smallText} style={{ marginLeft:'20px', marginTop:'-4px' }}>{t('Photo')}</Typography>
                </div>
              </Fab>
            </label>
          </Grid>
        </CardContent>
      </>
    );
  };
  const renderUploadedState=()=> {
    return (
      <>
        <CardActionArea onClick={imageResetHandler}>
          <img width={"180px"} height={"220px"} style={{ borderRadius: '20px' }}
            src={uploadImg.selectedFile}
          />
        </CardActionArea>
      </>
    );
  };
  return(<>
    <Box className={classes.formControl}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid className={classes.subGrid} item xs={4} >
          <Box className={classes.photoContainer}>
            {(uploadImg.mainState === "initial" && renderInitialState()) ||
            (uploadImg.mainState === "uploaded" && renderUploadedState())}
          </Box>
        </Grid>
        <Grid className={classes.subGrid}  item xs={8} >
          <Typography className={classes.title}>{t('newUserTitle')}</Typography>
          <Box style={{ marginTop:"8px", marginBottom:"0px" }}>
            <ButtonStyle btnState={dataForm.typeClient} w={"100px"} h={"30px"} ml={"25px"} fw="400" fs="14px" text={t('client')} onClick={toggle}/>
            <ButtonStyle btnState={dataForm.typeManager} w={"100px"} h={"30px"} ml={"56px"} fw="400" fs="14px" text={t('manager')} onClick={toggle}/>
          </Box>
          <Box>
            <ValidatorForm noValidate autoComplete="off" instantValidate={false} onSubmit={check}>
              { inputData.map(i =>
                (i.name === "password" || i.name === "confpassword") ?
                  <TextValidator
                    className={classes.root}
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
                      className={classes.root}
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
                      className={classes.root}
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
          <Box style={{ marginTop:"20px" }}>
            <ButtonStyle w={"161px"} h={"39px"} bgcolor={"#254A93"} ml={"10px"} text={t('create')} onClick={check}/>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </>);
};
export default PanelAdminNewUser;