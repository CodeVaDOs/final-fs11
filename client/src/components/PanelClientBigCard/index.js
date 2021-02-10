import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Line } from 'react-chartjs-2';
import Button from "@material-ui/core/Button";
import GetAppIcon from '@material-ui/icons/GetApp';
Chart.defaults.global.legend.display = false;
Chart.defaults.global.tooltips.backgroundColor = "#EEF5FF";
Chart.defaults.global.tooltips.titleFontColor = "#293134";

const useStyles = makeStyles((theme)=>({
  mainContainer: {
    height: '310px',
    width: '100%',
    boxShadow: "0px 3px 6px #00000033",
    borderRadius: '20px',
    backgroundColor:'#fff',
    marginTop: '10px',
    marginRight: '10px',
  },
  mainManagerContainer: {
    height: '350px',
    width: '100%',
    boxShadow: "0px 3px 6px #00000033",
    borderRadius: '20px',
    backgroundColor:'#fff',
    marginTop: '10px',
    marginRight: '10px',
    marginBottom: '10px',
  },
  header:{
    fontFamily: 'Roboto, sans-serif',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#293134',
    marginLeft: "18px"
  },
  formControlSelect: {
    margin: theme.spacing(1),
    minWidth: "auto",
    marginLeft:"20px"
  },
  rootSelect:{
    "& .MuiSelect-filled.MuiSelect-filled": {
      backgroundColor:'#fff',
      padding:"0px 32px 0px 0px",
      border:"fff",
      color: "#818E94"
    },
  },
  subGrid: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    fontWeight: 'normal',
    color: '#6E7375',
    marginTop: '20px',
    textAlign: "left"
  },
  textGrey: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    fontWeight: 'normal',
    color: '#B1B4BA'
  },
  btnGreen: {
    width:100,
    height:30,
    borderRadius: "20px 20px 20px 20px",
    color: '#fff',
    backgroundColor:'#4AD584',
    border:'1px solid #4AD584',
    marginLeft: "80%",
    marginTop: "10px",
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12x',
    textTransform: "none",
    fontWeight: 'normal',
  },
  btnGrey: {
    width:100,
    height:30,
    borderRadius: "20px 20px 20px 20px",
    color: '#6A6A6A',
    border:'1px solid #6A6A6A',
    marginLeft: "460px",
    marginTop: "10px",
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12x',
    textTransform: "none",
    fontWeight: 'normal',
  },
  smallGrid:{
    width: "397px",
    height: "72px",
    marginLeft:"35px"
  },
  textBlack:{
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
    fontWeight: 'normal',
    color: '#293134'
  },
}));
const ClientBigCard =({ userType })=>{
  const classes = useStyles();
  const type = userType;
  const { t } = useTranslation();
  const [dataForm, setDataForm] = useState({
    staticPeriodType:"year",
    propertyId:"",
    dataGraph: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label:"",
          fill: false,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: '#51D6AA',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#254A93',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#254A93',
          pointHoverBorderColor: '#fff',
          pointHoverBorderWidth: 2,
          pointRadius: 0.1,
          pointHitRadius: 10,
          data: [20, 59, 80, 81, 56, 55, 65, 60, 70, 45, 99, 56]
        },
      ]
    }
  });
  const handleChangePeriod= (e) => {
    setDataForm({
      staticPeriodType:e.target.value
    });
  };
  const renderClientPanel =()=>{
    return(
      <Box className={classes.mainContainer}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid className={classes.subGrid} item xs={3} >
            <Typography className={classes.header}>{t("rentedHouses")}</Typography>
          </Grid>
          <Grid className={classes.subGrid} item xs={2}>{t("allHouses")}</Grid>
          <Grid className={classes.subGrid} item xs={2}>{t("house1")}</Grid>
          <Grid className={classes.subGrid} item xs={2}>{t("house2")}</Grid>
          <Grid className={classes.subGrid} item xs={3}>
            <FormControl variant="filled" className={classes.formControlSelect}>
              <InputLabel id="demo-simple-select-filled-label"></InputLabel>
              <Select className={classes.rootSelect}
                defaultValue={dataForm.staticPeriodType}
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={dataForm.staticPeriodType}
                // onChange={handleChangePeriod}
              >
                <MenuItem value={'today'}>{t('today')}</MenuItem>
                <MenuItem value={'year'}>{t('year')}</MenuItem>
                <MenuItem value={'month'}>{t('month')}</MenuItem>
                <MenuItem value={'week'}>{t('week')}</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Box style={{ marginLeft:"15px" }}>
          <Line data={dataForm.dataGraph}
            width={1}
            height={200}
            options={{
              maintainAspectRatio: false,
              scales: {
                xAxes: [{
                  gridLines : {
                    display : false
                  }
                }],
                yAxes: [{
                  ticks: {
                    callback(value, index) {
                      if (index % 2 == 0) return '';
                      return value;
                    },
                  },
                  beginAtZero: true,
                  gridLines: {
                    drawTicks: false,
                  },
                }]
              },
              tooltips: {
                callbacks: {
                  labelColor: function(tooltipItem, chart) {
                    return {
                      borderColor: '#254A93',
                      backgroundColor: '#254A93'
                    };
                  },
                  labelTextColor: function(tooltipItem, chart) {
                    return '#293134';
                  }
                }
              }
            }}/>
        </Box>
        <Box style={{ textAlign:"end" }}>
          <Button className={classes.btnGreen} onClick={()=>{}}>{t('btnExport')}<GetAppIcon style={{ fontSize:"18px", marginLeft:"5px" }}/></Button>
        </Box>
      </Box>
    );
  };
  const renderManagerPanel =()=>{
    return(
      <Box className={classes.mainManagerContainer}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid className={classes.subGrid} item xs={10} >
            <Typography className={classes.header}>{t("rentedHeader")}</Typography>
          </Grid>
          <Grid className={classes.subGrid} item xs={2}>
            <FormControl variant="filled" className={classes.formControlSelect}>
              <InputLabel id="demo-simple-select-filled-label"></InputLabel>
              <Select className={classes.rootSelect}
                defaultValue={dataForm.staticPeriodType}
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={dataForm.staticPeriodType}
                // onChange={handleChangePeriod}
              >
                <MenuItem value={'today'}>{t('today')}</MenuItem>
                <MenuItem value={'year'}>{t('year')}</MenuItem>
                <MenuItem value={'month'}>{t('month')}</MenuItem>
                <MenuItem value={'week'}>{t('week')}</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Box style={{ marginLeft:"15px" }}>
          <Line data={dataForm.dataGraph}
            width={600}
            height={200}
            options={{
              maintainAspectRatio: false,
              scales: {
                xAxes: [{
                  gridLines : {
                    display : false
                  }
                }],
                yAxes: [{
                  ticks: {
                    callback(value, index) {
                      if (index % 2 == 0) return '';
                      return value;
                    },
                  },
                  beginAtZero: true,
                  gridLines: {
                    drawTicks: false,
                  },
                }]
              },
              tooltips: {
                callbacks: {
                  labelColor: function(tooltipItem, chart) {
                    return {
                      borderColor: '#254A93',
                      backgroundColor: '#254A93'
                    };
                  },
                  labelTextColor: function(tooltipItem, chart) {
                    return '#293134';
                  }
                }
              }
            }}/>
        </Box>
        <Typography  style={{ marginLeft:"35px" }} className={classes.textBlack}>{"Всього орендовано за рік"}</Typography>
        <Grid
          container
          className={classes.smallGrid}
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item xs={4}>
            <Typography className={classes.textBlack}>{"1231"}</Typography>
            <Typography className={classes.textGrey}>{"Орендарів"}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.textBlack}>{"253"}</Typography>
            <Typography className={classes.textGrey}>{"Днів в оренді"}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.textBlack}>{"253"}</Typography>
            <Typography className={classes.textGrey}>{"Будинків орендовано"}</Typography>
          </Grid>
        </Grid>
        <Box style={{ marginTop:"-60px" }}>
          <Button className={classes.btnGreen} onClick={()=>{}}>{"Детально"}</Button>
        </Box>
      </Box>
    );
  };
  return(<>
    {(type === "client" && renderClientPanel())||
    (type === "manager" && renderManagerPanel())}
  </>);
};
export default ClientBigCard;
