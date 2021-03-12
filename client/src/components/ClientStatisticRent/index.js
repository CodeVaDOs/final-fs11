import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import {Bar} from "react-chartjs-2";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CircularStatic from "../IncomeCard/CircularProgress";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import {useTranslation} from "react-i18next";
import {More} from "../../pages/ClientPage/components/More";
import Tab from "../../pages/ClientPage/components/Tabs/Tab";
import Tabs from "../../pages/ClientPage/components/Tabs/Tabs";
import {NewStatistic} from "../../pages/ClientPage/components/NewStatistic";
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import {analyticActions} from "../../redux/analytic/action";

Chart.defaults.global.legend.display = false;
Chart.defaults.global.tooltips.backgroundColor = "#EEF5FF";
Chart.defaults.global.tooltips.titleFontColor = "#293134";

const useStyles = makeStyles({
  aboveContainer: {
    width: "90%",
  },
  subGrid: {
    transform: 'scale(0.95)',
    width: '90%',
  },
  aboveHeader: {
    color: "#293134",
    fontFamily: 'Roboto, sans-serif',
    fontSize: '18px',
    fontWeight: 'normal',
    cursor: "pointer",
    '&:hover': {
      color: '#254A93',
      textDecoration: "underline"
    }
  },
  aboveSelectorTxt: {
    color: "#293134",
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  rentContainer: {
    height: '1160px',
    width: '100%',
    boxShadow: "0px 3px 6px #00000033",
    borderRadius: '20px',
    backgroundColor: '#fff',
    marginTop: '15px',
    marginBottom: '40px'
  },
  rentHeader: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#293134',
    marginLeft: "20px"
  },
  rentGrayText: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    fontWeight: 'normal',
    color: '#ACB5B9',
    marginLeft: "-17px",
  },

  dateBox: {
    backgroundColor: "#EEF5FF",
    height: 43,
    width: 282
  },
  textField: {
    width: "95%",
    "& .MuiInputBase-input": {
      padding: "0px"
    }
  },
  summaryCard: {
    width: "380px",
    height: "147px",
    boxShadow: "0px 3px 6px #00000033",
    borderRadius: '20px',
    backgroundColor: '#fff',
    margin: "20px",
    cursor: "pointer",
    '&:hover': {
      backgroundColor: '#254A93',
      color: '#fff',
      '& $cardHeader': {
        color: '#fff'
      },
      '& $cardHeaderSmall': {
        color: '#fff'
      },
      '& $cardHeaderSmallRed': {
        color: '#FA505D'
      },
    }
  },
  cardHeader: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '18px',
    fontWeight: 'normal',
    color: '#293134',
    marginLeft: "20px",
  },
  cardSubHeader: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    fontWeight: 'normal',
    color: '#6E7375',
    marginLeft: "20px",
    marginTop: "-5px"
  },
  cardHeaderSmallGray: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    fontWeight: 'normal',
    color: '#6E7375',
  },
  cardHeaderSmallRed: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    fontWeight: 'normal',
    color: '#254A93',
  },
  cardHeaderSmall: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    fontWeight: 'normal',
    color: '#293134',
    marginLeft: "20px",
  },
  rootSelect: {
    "& .MuiSelect-filled.MuiSelect-filled": {
      backgroundColor: '#F7FAFE',
      padding: "0px 32px 0px 0px",
      border: "fff",
      color: "#293134"
    },
  },
  root: {
    height: "100%",
    width: "90%"
  }
});



const ClientStatisticRent = ({user}) => {
  const {t} = useTranslation();



  const [dataForm, setDataForm] = useState({
    // dateFrom: dateFrom,
    // dateTo: dateTo,
    propertyId: 'all',
    dataBar: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: "Витрати",
          backgroundColor: "#F88B38",
          borderColor: "#F88B38",
          borderWidth: 1,
          hoverBackgroundColor: "#F88B38",
          hoverBorderColor: "#F88B38",
          data: [20, 20, 15, 25, 30, 15, 15, 29, 15, 21, 16, 29]
        },
        {
          label: "Прибуток",
          backgroundColor: "#4AD584",
          borderColor: "#4AD584",
          borderWidth: 1,
          hoverBackgroundColor: "#4AD584",
          hoverBorderColor: "#4AD584",
          data: [45, 99, 50, 41, 55, 85, 45, 79, 50, 41, 78, 70]
        }
      ]
    }
  });
  // const handleChangeProperty= (e) => {
  //   setDataForm({
  //     propertyId:e.target.value
  //   });
  // };
  const [key, setKey] = useState(0);

  console.log("USEEFFECT")





  const classes = useStyles();
  return (
    <div style={{margin: '20px 20px'}}>
      <Box>
        <Tabs
          activeKey={key}
          onSelect={(k) => {
            setKey(k);
          }}
        >
          <Tab style={{width: "80%", margin: '0 auto'}} eventKey={0} title="Статистика Оренди">
            <Grid
              className={classes.aboveContainer}
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid className={classes.subGrid} item xs={1}>
                <Typography className={classes.aboveSelectorTxt}>{t('showItem')}</Typography>
              </Grid>
              <Grid className={classes.subGrid} item xs={2}>
                <FormControl variant="filled" className={classes.formControlSelect}>
                  <InputLabel id="demo-simple-select-filled-label"/>
                  <Select
                    className={classes.rootSelect}
                    defaultValue={dataForm.propertyId}
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={dataForm.propertyId}
                    // onChange={handleChangeProperty}
                  >
                    <MenuItem value={'all'}>{t('allHouse')}</MenuItem>
                    <MenuItem value={'id1'}>{t('houseOne')}</MenuItem>
                    <MenuItem value={'id2'}>{t('houseTwo')}</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Box className={classes.rentContainer}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid className={classes.subGrid} item xs={4}>
                  <Typography className={classes.rentHeader}>{t("clientHeaderCard")}</Typography>
                </Grid>
                <Grid className={classes.subGrid} item xs={5}>
                  <Box className={classes.dateBox}>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                    >
                      <Grid className={classes.subGrid} item xs={6}>
                        <TextField
                          id="date"
                          type="date"
                          defaultValue={dataForm.dateFrom}
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>
                      <Grid className={classes.subGrid} item xs={6}>
                        <TextField
                          id="date"
                          type="date"
                          defaultValue={dataForm.dateTo}
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid className={classes.subGrid} item xs={3}>
                  <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                  >
                    <Grid className={classes.subGrid} item xs={2}>
                      <Box style={{width: "12px", height: "12px", backgroundColor: "#4AD584"}}/>
                    </Grid>
                    <Grid className={classes.subGrid} item xs={4}>
                      <Typography className={classes.rentGrayText}>{t("setIncome")}</Typography>
                    </Grid>
                    <Grid className={classes.subGrid} item xs={2}>
                      <Box style={{width: "12px", height: "12px", backgroundColor: "#F88B38"}}/>
                    </Grid>
                    <Grid className={classes.subGrid} item xs={4}>
                      <Typography className={classes.rentGrayText}>{t("setExpense")}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Box style={{padding: "20px"}}>
                <Bar
                  data={dataForm.dataBar}
                  width={620}
                  height={180}
                  options={{
                    responsive: true,
                    legend: {
                      display: false
                    },
                    maintainAspectRatio: true,
                    scales: {
                      xAxes: [{
                        gridLines: {
                          display: false
                        }
                      }],
                      yAxes: [{
                        ticks: {
                          callback(value, index) {
                            if (index % 2 === 0) return '';
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
                        labelColor: function (tooltipItem, chart) {
                          return {
                            borderColor: '#254A93',
                            backgroundColor: '#254A93'
                          };
                        },
                        labelTextColor: function (tooltipItem, chart) {
                          return '#293134';
                        }
                      }
                    }
                  }}
                />
              </Box>
              <Box className={classes.root}>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                >
                  <Grid className={classes.subGrid} item xs={6}>
                    <Box className={classes.summaryCard}>
                      <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                      >
                        <Grid className={classes.subGrid} item xs={9}>
                          <Box>
                            <Typography className={classes.cardHeader}>{t("allProfit")}</Typography>
                          </Box>
                          <Box style={{marginTop: "10px"}}>
                            <Typography className={classes.cardHeaderSmall}>{t("profHouse")}<span
                              className={classes.cardHeaderSmallGray}>{" M-2 ID0170, ID 00177"}</span></Typography>
                          </Box>
                          <Box style={{marginTop: "10px"}}>
                            <Typography className={classes.cardHeaderSmall}>{t("profPeriod")}<span
                              className={classes.cardHeaderSmallGray}>{"21 Червня 2019 - 31 Грудня 2020"}</span></Typography>
                          </Box>
                          <Box style={{marginTop: "10px"}}>
                            <Typography className={classes.cardHeaderSmall}>{t("profRent")}<span
                              className={classes.cardHeaderSmallGray}>{"159 чоловік"}</span></Typography>
                          </Box>
                        </Grid>
                        <Grid className={classes.subGrid} item xs={3}>
                          <CircularStatic size={80} thickness={2} progress={"18.573"} color={"#F88B38"}/>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                  <Grid className={classes.subGrid} item xs={6}>
                    <Box className={classes.summaryCard}>
                      <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                      >
                        <Grid className={classes.subGrid} item xs={9}>
                          <Box>
                            <Typography className={classes.cardHeader}>{t("expense")}</Typography>
                            <Typography className={classes.cardSubHeader}>{"1 Січня - 31 Грудня"}</Typography>
                          </Box>
                          <Box style={{marginTop: "10px"}}>
                            <Typography className={classes.cardHeaderSmall}>{t("mostExpense")}<span
                              className={classes.cardHeaderSmallRed}>{"Червень"}</span> <ArrowDownwardIcon
                              style={{color: "#FA505D", fontSize: "20px", marginBottom: "-7px"}}/></Typography>
                          </Box>
                          <Box style={{marginTop: "10px"}}>
                            <Typography className={classes.cardHeaderSmall}>{t("profRent")}<span
                              className={classes.cardHeaderSmallGray}>{"159 чоловік"}</span></Typography>
                          </Box>
                        </Grid>
                        <Grid className={classes.subGrid} item xs={3}>
                          <CircularStatic size={80} thickness={2} progress={"9.573"} color={"#4AD584"}/>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
                <More/>
              </Box>
            </Box>
          </Tab>
          <Tab eventKey={1} title="Додати нову статистику">
            <NewStatistic user={user}/>
          </Tab>

        </Tabs>

      </Box>

    </div>
  );
};
export default ClientStatisticRent;