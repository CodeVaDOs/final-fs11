import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { CardActionArea, CardContent, Fab } from "@material-ui/core";
import LocalSeeIcon from "@material-ui/icons/LocalSee";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import SwipeableViews from 'react-swipeable-views';
import {  useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import TabPanel from "@components/TabPanel";
import ChangePass from "../ChangePass";
import ChangeProfile from "../ChangeProfile";
import {connect} from "react-redux";


const useStyles = makeStyles((theme)=>({
  profileControl: {
    width: '100%',
    height: '556px',
    borderRadius: '20px',
    boxShadow: '0px 2px 4px #00000033',
    marginTop: "20px",
    marginBottom: "20px",
    backgroundColor:"#fff"
  },
  leftPanel: {
    borderRight: "2px solid rgba(153,160,163, 0.5)",
    maxWidth: "172px",
    height: '556px',
  },
  photoContainer: {
    width: '104px',
    height: '104px',
    background: '#F7FAFF',
    border: '0.5px solid #6E7375',
    borderRadius: '50%',
    marginTop: '20px',
    marginLeft: '29px'
  },
  boldText: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#2D2F39',
    marginTop: '10px',
    marginLeft: '20px'
  },
  normalText: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    fontWeight: 'normal',
    color: '#2D2F39',
    marginTop: '2px',
    marginLeft: '24px'
  },
  rootSelect:{
    "& .MuiSelect-filled.MuiSelect-filled": {
      backgroundColor:'#fff',
      padding:"0px 32px 0px 0px",
      border:"fff",
      color: "#818E94"
    },
  },
  formControlSelect: {
    margin: theme.spacing(1),
    minWidth: "auto",
    marginLeft:"20px"
  },
  smallText: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    fontWeight: 'normal',
    textTransform:'none',
    color: '#fff',
    marginTop: '-10px',
    marginLeft: '12px'
  },
  greyButton: {
    backgroundColor:"rgba(41, 49, 52, 0.8)",
    width: '67px',
    height: '67px',
    borderRadius: '50%',
    marginTop: '3px',
    marginLeft: '0px',
    cursor: "pointer"
  },
  fullName: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#293134',
    textAlign:"center"
  },
  root: {
    backgroundColor: '#fff',
    width: 700,
    height: 550,
    "& .MuiTab-textColorPrimary.Mui-selected": {
      color:"#254A93",
      textTransform:"none",
    },
    "& .MuiTab-root": {
      textTransform:"none",
    },
    "& .MuiAppBar-colorDefault": {
      backgroundColor: "#fff"
    },
    "& .PrivateTabIndicator-colorPrimary-96": {
      backgroundColor:"#254A93",
      color:'#6E7375'
    },
    "& .MuiTab-wrapper": {
      fontSize:"18px"
    },
    "& .MuiBox-root-100": {
      height: "480px",
      padding:0,
    }
  },

}));
const ProfileContainer =(props)=>{
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const a11yProps=(index)=>{
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  };
  const [dataForm, setDataForm] = useState({
    langSystem:props.user.language,
    currencySystem:`${t("uah")}`,
  });
  // Upload Photo Managment
  const token = localStorage.getItem('authToken');
  const addToken = `?jwt=${token}`
  console.log(addToken)
  const [uploadImg, setUploadImg] = useState({
    mainState: "uploaded",
    imageUploaded: 1,
    selectedFile: props.user.urlAvatar+`${addToken}`

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
                <Box style={ { marginTop:"36px", marginLeft:"-48px" } }>
                  <Typography className={classes.smallText}>{t('change')}</Typography>
                  <Typography className={classes.smallText} style={{ marginLeft:'20px', marginTop:'-4px' }}>{t('Photo')}</Typography>
                </Box>
              </Fab>
            </label>
          </Grid>
        </CardContent>
      </>
    );
  };

  const handleChangeCurrency= (e) => {
    setDataForm({
      langSystem:dataForm.langSystem,
      currencySystem:e.target.value,
    });
  };
  const handleChangeLang= (e) => {
    setDataForm({
      langSystem:e.target.value,
      currencySystem:dataForm.currencySystem,
    });
  };
  const renderUploadedState=()=> {
    return (
      <>
        <CardActionArea onClick={imageResetHandler}>
          <img width={"104px"} height={"104px"} style={{ borderRadius: '50%' }}
            src={uploadImg.selectedFile}
          />
        </CardActionArea>
      </>
    );
  };
  return(<>
    <Grid
      className={classes.profileControl}
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Grid className={classes.leftPanel}  item xs={3}>
        <Box className={classes.photoContainer}>
          {(uploadImg.mainState === "initial" && renderInitialState()) ||
              (uploadImg.mainState === "uploaded" && renderUploadedState())}
        </Box>
        <Box>
          <Typography className={classes.fullName}>{props.user.name}</Typography>
          <Typography className={classes.boldText}>{t("langTitle")}</Typography>
          <FormControl variant="filled" className={classes.formControlSelect}>
            <InputLabel id="demo-simple-select-filled-label"></InputLabel>
            <Select className={classes.rootSelect}
              defaultValue={dataForm.langSystem}
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={dataForm.langSystem}
              onChange={handleChangeLang}
            >
              <MenuItem value={dataForm.langSystem}>{dataForm.langSystem}</MenuItem>
              <MenuItem value={`${t("ru")}`}>{t("ru")}</MenuItem>
              <MenuItem value={`${t("en")}`}>{t("en")}</MenuItem>
            </Select>
          </FormControl> 
          <Typography className={classes.boldText}>{t("currency")}</Typography>
          <FormControl variant="filled" className={classes.formControlSelect}>
            <InputLabel id="demo-simple-select-filled-label"></InputLabel>
            <Select className={classes.rootSelect}
              defaultValue={dataForm.currencySystem}
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={dataForm.currencySystem}
              onChange={handleChangeCurrency}
            >
              <MenuItem value={`${t("usd")}`}>{t("usd")}</MenuItem>
              <MenuItem value={`${t("uah")}`}>{t("uah")}</MenuItem>
              <MenuItem value={`${t("eur")}`}>{t("eur")}</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <Grid  item xs={9}>
        <div className={classes.root}>
          <AppBar position="static" color="default" style={{ boxShadow:"none" }}>
            <Tabs className={classes.btn}
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label={t("profile")} {...a11yProps(0)} />
              <Tab label={t("password")} {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <ChangeProfile/>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <ChangePass />
            </TabPanel>
          </SwipeableViews>
        </div>
      </Grid>
    </Grid>
  </>);
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  };
};
export default connect(mapStateToProps, null)(ProfileContainer);