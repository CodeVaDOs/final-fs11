import React, { createRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import LocalSeeIcon from '@material-ui/icons/LocalSee';
import { ValidatorForm } from "react-material-ui-form-validator";
import Input from "../Input/index";
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import ButtonStyle from "../Button";
const useStyles = makeStyles({
  formControl: {
    width: '890px',
    height: '401px',
    borderRadius: '20px',
    boxShadow: '0px 2px 4px #00000033',
    margin:'20px'
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
    marginTop: '15px',
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
    marginTop: '77px',
    marginLeft: '57px',
    cursor: "pointer"
  },
  smallText: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    fontWeight: 'normal',
    color: '#fff',
    marginTop: '-10px',
    marginLeft: '12px'
  }
});

const PanelAdminNewUser =()=>{
  const classes = useStyles();        
  const { t } = useTranslation();     
  const iconName =<><PersonIcon style={{ marginBottom:"-5px" }}/>{t("fullName")}</>;
  const iconEmail =<><EmailIcon style={{ marginBottom:"-5px" }}/>{t("Email")}</>;
  const iconPass =<><LockIcon style={{ marginBottom:"-5px" }}/>{t("RegPass")}</>;
  const iconPassRep =<><LockIcon style={{ marginBottom:"-5px" }}/>{t("regPassRep")}</>;
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordValueRep, setPasswordValueRep] = useState("");
  const refRefName = createRef();
  const refRefEmail = createRef();
  const refRefPass = createRef();
  const refRefPassRep = createRef();
  const check=()=>{
    console.log('post to backend with new user');
  };
  const handleBlurName=(event)=>{
    refRefName.current.validate(event.target.value);
  };
  const handleBlurEmail=(event)=>{                           
    refRefEmail.current.validate(event.target.value);        
  };                                                         
  const handleBlurPass=(event)=>{                            
    refRefPass.current.validate(event.target.value);         
  };                                                         
  const handleBlurPassRep=(event)=>{                         
    refRefPassRep.current.validate(event.target.value);      
  };                                                         
  const handleChangeName=(event)=>{
    setNameValue(event.target.value);
  };
  const handleChangeEmail=(event)=>{           
    setEmailValue(event.target.value);         
  };                                           
  const handleChangePass=(event)=>{            
    setPasswordValue(event.target.value);      
  };                                           
  const handleChangePassRep=(event)=>{         
    setPasswordValueRep(event.target.value);   
  };                                           
  const inputData=[
    {
      "id":"0",
      "icon":iconName,
      "valueType":nameValue,
      "name":'name',
      "validators": "isName",
      "errorMessages": "" ,
      "onBlur":handleBlurName,
      "ref":refRefName,
      "onChange":handleChangeName
    },
    {
      "id":"1",
      "icon":iconEmail,
      "valueType":emailValue,
      "name":'email',
      "validators": "isEmail",
      "errorMessages": t("regErrEmail"),
      "onBlur":handleBlurEmail,  
      "ref":refRefEmail,
      "onChange":handleChangeEmail
    },
    {
      "id":"2",
      "icon":iconPass,
      "valueType":passwordValue,
      "name":"password",
      "validators": "",
      "errorMessages": t("errPass"),
      "onBlur":handleBlurPass, 
      "ref":refRefPass,
      "onChange":handleChangePass
    },
    {
      "id":"3",
      "icon":iconPassRep,
      "valueType":passwordValueRep,
      "name":"password",
      "validators": "isPasswordTheSame",
      "errorMessages":  t("errPassRep"),
      "onBlur":handleBlurPassRep,
      "ref":refRefPassRep,
      "onChange":handleChangePassRep
    }
  ];
  return(<>
    <Box className={classes.formControl}>
      <Grid
        container
        xs={12}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid className={classes.subGrid} item xs={4} >
          <Box className={classes.photoContainer}>
            <Box className={classes.greyButton}>
              <LocalSeeIcon style={{ color: "#FFF", marginLeft:"22px", marginTop:"10px" }}/>
              <Typography className={classes.smallText}>{t('change')}</Typography>
              <Typography className={classes.smallText} style={{ marginLeft:'20px', marginTop:'-4px' }}>{t('Photo')}</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid className={classes.subGrid}  item xs={8} >
          <Typography className={classes.title}>{t('newUserTitle')}</Typography>
          <Box style={{ marginTop:"8px", marginBottom:"7px" }}>
            <ButtonStyle w={"100px"} h={"30px"} bgcolor={"#254A93"} ml={"25px"} text={t('client')} onClick={()=>{}}/>
            <ButtonStyle w={"100px"} h={"30px"} bgcolor={"#254A93"} ml={"56px"} text={t('manager')} onClick={()=>{}}/>
          </Box>
          <Box>
            <ValidatorForm noValidate autoComplete="off" instantValidate={false}>
              {inputData.map(i=>
                <Input 
                  key={i.id} 
                  icon={i.icon} 
                  name={i.name} 
                  valueType={i.valueType} 
                  validators={i.validators} 
                  errorMessages={i.errorMessages}
                  handleBlur={i.onBlur}
                  refRef={i.ref}
                  handleChange={i.onChange}
                />
              )}
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