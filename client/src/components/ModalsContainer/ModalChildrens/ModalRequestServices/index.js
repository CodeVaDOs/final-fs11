import React, { useState } from 'react';
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme)=>({
  formControlSelect: {
    margin: theme.spacing(1),
    minWidth: 110,
  },
  containerReq: {
    margin: "o auto",
    overflow: "none"
  },
  headerReq: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '19px',
    fontWeight: 'bold',
    color: '#293134',
    margin:"5% 7%"
  },
  subHeaderReq: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '18px',
    fontWeight: 'normal',
    color: '#293134',
    margin:"2% 16%"
  },
  boxReq: {
    width:"42px",
    height:"42px",
    textAlign:"center",
    borderRadius: "12px",
    backgroundColor:"#4AD584"
  },
  greyTextReq: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    fontWeight: 'normal',
    color: '#6E7375',
    margin:"2% 17%"
  },
  rootInput: {
    borderRadius: 10,
    height: 165,
    width: 600,
    color:'#99A0A3',
    backgroundColor:'#F7FAFF',
    marginLeft:"-20px",
    border:"0.5px solid #ACB5B9",
    "& label.Mui-focused": {
      color: "#254A93",
      borderRadius: '10px',
    },
    "& .MuiOutlinedInput-multiline": {
      padding: "6px 15px",
      color:'#99A0A3'
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "0.5px solid #ACB5B9",
        borderRadius: "10px"
      },
      "& .Mui-focused fieldset": {
        borderColor: "#254A93",
        color: "#254A93",
      },
    },
  },
  rootSelect:{
    "& .MuiSelect-filled.MuiSelect-filled": {
      backgroundColor:'#fff',
      padding:"0px 30px 0px 0px"
    },
  },
  textHome:{
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#293134',
    marginRight:"20px",
    marginTop:"10px"
  }
}));
const Index=( { service, icon } )=> {
  const classes = useStyles();
  const { t } = useTranslation();
  const [dataForm, setDataForm] = useState({
    textValue:t("inputDefault"),
    propertyId:"Home 1",
    typeService:'',
  });
  const resetInput =()=>{
    setDataForm({
      textValue:'',
      propertyId:dataForm.propertyId,
      typeService:dataForm.typeService,
    });
  };
  const handleChangeData = (e) => {
    setDataForm({
      textValue: e.target.value,
      propertyId:dataForm.propertyId,
      typeService:dataForm.typeService,
    });
  };
  const handleChangePropId =(e)=> {
    setDataForm({
      textValue: dataForm.textValue,
      propertyId:e.target.value,
      typeService:dataForm.typeService,
    });
  };

  return(<Box className={classes.containerSer}>
    <Box style={{ textAlign:"center" }}>
      <Typography className={classes.headerReq}>{t("headerReq")}</Typography>
    </Box>
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Grid item xs={4}></Grid>
      <Grid item xs={1}>
        <Box className={classes.boxReq}>
          <img src={icon} />
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Typography className={classes.subHeaderReq}>{service}</Typography>
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
    <Box style={{ textAlign:"center" }}>
      <Typography className={classes.subHeaderReq}>{t("subTitleReq")}</Typography>
    </Box>
    <Box style={{ textAlign:"center" }}>
      <Typography className={classes.greyTextReq}>{t("greyTextReq")}</Typography>
    </Box>
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Grid item xs={7}></Grid>
      <Grid item xs={1}>
        <Typography className={classes.textHome}>{t("houseReq")}</Typography>
      </Grid>
      <Grid item xs={2}>
        <FormControl variant="filled" className={classes.formControlSelect}>
          <InputLabel id="demo-simple-select-filled-label"></InputLabel>
          <Select className={classes.rootSelect}
            defaultValue={dataForm.typeMassage}
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={dataForm.propertyId}
            onChange={handleChangePropId}
          >
            <MenuItem value={"Home 1"}>{"Home 1"}</MenuItem>
            <MenuItem value={"Home 2"}>{"Home 2"}</MenuItem>
          </Select>
        </FormControl> 
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
    <Box style={{ textAlign:"center" }}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField className={classes.rootInput}
          id="outlined-multiline-static"
          multiline
          rows={8}
          onFocus={resetInput}
          variant="outlined"
          value={dataForm.textValue}
          onChange={handleChangeData}
        />
      </form>
    </Box>

  </Box>);
};
export default Index;