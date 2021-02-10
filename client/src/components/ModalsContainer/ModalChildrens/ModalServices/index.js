import React, { useState } from 'react';
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import table from "@assert/modal-icons/1.svg";
import taxi from "@assert/modal-icons/2.svg";
import tree from "@assert/modal-icons/3.svg";
import fishing from "@assert/modal-icons/4.svg";
import food from "@assert/modal-icons/10.svg";
import bike from "@assert/modal-icons/11.svg";
import cleaner from "@assert/modal-icons/5.svg";
import tour from "@assert/modal-icons/6.svg";
import swimming from  "@assert/modal-icons/12.svg";
import flowers from "@assert/modal-icons/7.svg";
import child from "@assert/modal-icons/9.svg";
import house from "@assert/modal-icons/8.svg";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosTwoToneIcon from "@material-ui/icons/ArrowForwardIosTwoTone";
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles({
  containerSer: {
    margin: "o auto",
    overflow: "none"
  },
  headerSer: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '19px',
    fontWeight: 'bold',
    color: '#293134',
    margin:"5% 7%"
  },
  greyTextSer: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    fontWeight: 'normal',
    color: '#6E7375',
    margin:"5% 3%"
  },
  blackTextSer:{
    fontFamily: 'Roboto, sans-serif',
    fontSize: '19px',
    fontWeight: 'normal',
    margin:"5% 5%",
    color:'#293134'
  },
  smallTextSer:{
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
    fontWeight: 'normal',
    color:'#293134'
  },
  root: {
    width: '100%',
    justifyContent: "space-between",
    display: "flex",
    flexDirection: 'row'
  },
  paper: {
    margin: "5px",
    borderRadius: '20px',
    boxShadow:"0px 1px 3px #00000033",
    paddingRight: '15px',
    padding: '5px',
    width: '290px',
    height: "60px",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",

  },
  icon: {
    marginTop:"7px"
  },
  btn: {
    borderRadius: '50%',
    background: "#EEF5FF",
    marginLeft: "10px",
    marginTop: 5,
    maxWidth: '100px'
  },
  text: {
    fontSize: 14,
    color: '#293134',
    overflow: "hidden",
  },
  title: {
    fontSize: 18,
    color: '#293134',
    overflow: "hidden",
  },
  details: {
    marginBottom: "0",
    marginTop: "0px"
  },
  orangeBox: {
    width:"42px",
    height:"42px",
    textAlign:"center",
    borderRadius: "12px",
    backgroundColor:"#F88B38",
  },
  greenBox: {
    width:"42px",
    height:"42px",
    textAlign:"center",
    borderRadius: "12px",
    backgroundColor:"#4AD584"
  },
  blueBox: {
    width:"42px",
    height:"42px",
    textAlign:"center",
    borderRadius: "12px",
    backgroundColor:"#00D0FF"
  },
});

const Index=()=> {
  const { t } = useTranslation();
  const services1 = [
    {
      "id": 1,
      "service": t("table"),
      "icon": table,
    },
    {
      "id": 2,
      "service": t("taxi"),
      "icon": taxi,
    },
    {
      "id": 3,
      "service": t("tree"),
      "icon": tree,
    },
    {
      "id": 4,
      "service": t("fishing"),
      "icon": fishing,
    },

  ];
  const services2 = [
    {
      "id": 5,
      "service": t("food"),
      "icon": food,

    },
    {
      "id": 6,
      "service": t("bike"),
      "icon": bike,

    },
    {
      "id": 7,
      "service": t("cleaner"),
      "icon": cleaner,

    },
    {
      "id": 8,
      "service": t("tour"),
      "icon": tour,

    },
  ];
  const services3 = [
    {
      "id": 9,
      "service": t("swimming"),
      "icon": swimming,
    },
    {
      "id": 10,
      "service": t("flowers"),
      "icon": flowers,
    },
    {
      "id": 11,
      "service": t("child"),
      "icon": child,
    },
    {
      "id": 12,
      "service": t("house"),
      "icon": house,
    },
  ];
  const classes = useStyles();
  const [input, setInput] = useState({
    selected:"",
    input:"none"
  });
  const clickHandler =(id)=>{
    setInput({
      selected:id,
      input:"block"
    });
    console.log(id);
  };

  const [inputValue, setInputValue] = useState({
    value:""
  });
  const onChangeInput =(event)=>{
    setInputValue({
      value:event.target.value
    });
    console.log(inputValue.value);
  };


  return(<Box className={classes.containerSer}>
    <Box style={{ textAlign:"center" }}>
      <Typography className={classes.headerSer}>{t("serTitle")}</Typography>
    </Box>
    <Box style={{ textAlign:"center", marginTop:"-35px" }}>
      <Typography className={classes.greyTextSer}>
        {t("serSubText")}
      </Typography>
    </Box>
    <Box style={{ textAlign:"center", marginTop:"-35px" }}>
      <Grid className={classes.root} item>
        <Grid className={classes.subGrid} item xs={4}>
          {services1.map((s) => (
            <Box style={{ backgroundColor: input.selected === s.id ? "#EEF5FF" : "white" }}  className={classes.paper} key={s.id}>
              <Typography align="right" paragraph className={classes.details}>
                <Box className={classes.orangeBox}>
                  <img alt={s.service} src={s.icon} className={classes.icon}/>
                </Box>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
                {s.service}
              </Typography>
              <Typography align="right" paragraph className={classes.details}>
                <IconButton className={classes.btn}>
                  <ArrowForwardIosTwoToneIcon onClick={()=>clickHandler(s.id)}/>
                </IconButton>
              </Typography>
            </Box>
          ))}
        </Grid>
        <Grid className={classes.subGrid} item xs={4}>
          {services2.map((s) => (
            <Box style={{ backgroundColor: input.selected === s.id ? "#EEF5FF" : "white" }}  className={classes.paper} key={s.id}>
              <Typography align="right" paragraph className={classes.details}>
                <Typography align="right" paragraph className={classes.details}>
                  <Box className={classes.greenBox}>
                    <img alt={s.service} src={s.icon} className={classes.icon}/>
                  </Box>
                </Typography>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
                {s.service}
              </Typography>
              <Typography align="right" paragraph className={classes.details}>
                <IconButton className={classes.btn}>
                  <ArrowForwardIosTwoToneIcon onClick={()=>clickHandler(s.id)}/>
                </IconButton>
              </Typography>
            </Box>
          ))}
        </Grid>
        <Grid className={classes.subGrid} item xs={4}>
          {services3.map((s) => (
            <Box style={{ backgroundColor: input.selected === s.id ? "#EEF5FF" : "white" }} className={classes.paper} key={s.id}>
              <Typography align="right" paragraph className={classes.details}>
                <Typography align="right" paragraph className={classes.details}>
                  <Box className={classes.blueBox}>
                    <img alt={s.service} src={s.icon} className={classes.icon}/>
                  </Box>
                </Typography>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
                {s.service}
              </Typography>
              <Typography align="right" paragraph className={classes.details}>
                <IconButton className={classes.btn}>
                  <ArrowForwardIosTwoToneIcon onClick={()=>clickHandler(s.id)}/>
                </IconButton>
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
    <Box style={{ textAlign:"center", display:`${input.input}` }}>
      <TextField fullWidth={200} id="outlined-basic" label="" variant="outlined" onChange={onChangeInput}/>
    </Box>
  </Box>);
};
export default Index;