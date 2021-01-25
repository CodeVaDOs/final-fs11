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
Chart.defaults.global.legend.display = false;


const useStyles = makeStyles((theme)=>({
  mainContainer: {
    height: '310px',
    width: '590px',
    boxShadow: "0px 3px 6px #00000033",
    borderRadius: '20px',
    backgroundColor:'#fff',
    margin: '10px'
  },
  header:{
    fontFamily: 'Roboto, sans-serif',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#293134',
    marginLeft: "20px"
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
    textAlign: "center"
  },
}));
const ClientBigCard =()=>{
  const classes = useStyles();
  const { t } = useTranslation();
  const [dataForm, setDataForm] = useState({
    staticPeriodType:"Today",
    propertyId:"",
    dataGraph: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label:"",
          fill: false,
          // lineTension: 0,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: '#51D6AA',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 0.1,
          pointHitRadius: 10,
          data: [20, 59, 80, 81, 56, 55, 65, 60, 70, 45, 95, 56]
        },
      ]
    }
  });
  const handleChangePeriod= (e) => {
    setDataForm({
      staticPeriodType:e.target.value
    });
  };
  return(
    <Box className={classes.mainContainer}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid className={classes.subGrid} item xs={3} >
          <Typography className={classes.header}>{"Rented Houses"}</Typography>
        </Grid>
        <Grid className={classes.subGrid} item xs={2}>{"All houses"}</Grid>
        <Grid className={classes.subGrid} item xs={2}>{"House 1"}</Grid>
        <Grid className={classes.subGrid} item xs={2}>{"House 2"}</Grid>
        <Grid className={classes.subGrid} item xs={3}>
          <FormControl variant="filled" className={classes.formControlSelect}>
            <InputLabel id="demo-simple-select-filled-label"></InputLabel>
            <Select className={classes.rootSelect}
              defaultValue={dataForm.staticPeriodType}
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={dataForm.staticPeriodType}
              onChange={handleChangePeriod}
            >
              <MenuItem value={"Today"}>{t("Today")}</MenuItem>
              <MenuItem value={"This year"}>{"This year"}</MenuItem>
              <MenuItem value={"This month"}>{"This month"}</MenuItem>
              <MenuItem value={"This week"}>{"This week"}</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Box>
        <Line data={dataForm.dataGraph}
          width={590}
          height={240}
          options={{ maintainAspectRatio: false,  scales:
                {
                  xAxes: [{
                    gridLines : {
                      display : false
                    }
                  }]
                } }}/>
      </Box>
    </Box>);

};
export default ClientBigCard;