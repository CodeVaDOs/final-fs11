import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import {Bar} from "react-chartjs-2";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CircularStatic from "@components/IncomeCard/CircularProgress/index";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import {useTranslation} from "react-i18next";
import {More} from "../../../pages/ClientPage/components/More/index";
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import {analyticActions} from "../../../redux/analytic/action";

Chart.defaults.global.legend.display = false;
Chart.defaults.global.tooltips.backgroundColor = "#EEF5FF";
Chart.defaults.global.tooltips.titleFontColor = "#293134";
const useStyles = makeStyles({
    aboveContainer: {
        marginLeft: "75%",
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
        height: '100%',
        width: '100%',
        boxShadow: "0px 3px 6px #00000033",
        borderRadius: '20px',
        backgroundColor: '#fff',
        marginBottom: '20px'
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
        width: "420px",
        height: "157px",
        boxShadow: "0px 3px 6px #00000033",
        borderRadius: '20px',
        backgroundColor: '#fff',
        marginLeft: "20px",
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
        marginBottom: "20px",
        "& .MuiBox-root": {
            padding: 0,
        }
    },
    textBlack: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#293134',
        marginLeft: "2%"
    },
});
const ClientStatisticRent = ({houseId}) => {
    const {t} = useTranslation();
    const [[dateFrom, dateTo], setDate] = useState([moment().startOf('month').format('yyyy-MM-DD'), moment().format('yyyy-MM-DD')])

    const [dataForm, setDataForm] = useState({
        dateFrom: dateFrom,
        dateTo: dateTo,
        propertyId: 'all',
        dataBar: {
            labels: [],
            datasets: [
                {
                    label: "Витрати",
                    backgroundColor: "#F88B38",
                    borderColor: "#F88B38",
                    borderWidth: 1,
                    hoverBackgroundColor: "#F88B38",
                    hoverBorderColor: "#F88B38",
                    data: []
                },
                {
                    label: "Прибуток",
                    backgroundColor: "#4AD584",
                    borderColor: "#4AD584",
                    borderWidth: 1,
                    hoverBackgroundColor: "#4AD584",
                    hoverBorderColor: "#4AD584",
                    data: []
                }
            ]
        }
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(analyticActions.getAnalytics(houseId, dateFrom, dateTo));
    }, [dateFrom, dateTo, houseId])


    const {analytic: statistics, isLoading: isLoadingStatistics} = useSelector(state => state.analytic)
    const [[totalIncome, totalExpenditure], setTotal] = useState([0, 0]);

    useEffect(() => {
        setDataForm({
            ...dataForm,
            dataBar: {
                ...dataForm.dataBar,
                labels: statistics.flatMap(st => moment(st.date).format('DD.MM.yyyy')),
                datasets: [
                    {
                        ...dataForm.dataBar.datasets[0],
                        data: statistics.flatMap(st => st.communal + st.other + st.service).map(st => st.toFixed(2))
                    },
                    {
                        ...dataForm.dataBar.datasets[1],
                        data: statistics.flatMap(st => st.income).map(st => st.toFixed(2))
                    }
                ]
            }
        })

        setTotal([
            statistics.flatMap(st => st.income).reduce((acc, item) => acc + item, 0),
            statistics.flatMap(st => st.other + st.communal + st.service).reduce((acc, item) => acc + item, 0)
        ])

        console.log("STATS", totalIncome, totalExpenditure)

    }, [statistics])





    // const handleChangeProperty= (e) => {
    //   setDataForm({
    //     propertyId:e.target.value
    //   });
    // };

    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box>
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
                                            onChange={(e) => {
                                                setDate(prev => [e.target.value, prev[1]])
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
                                            onChange={(e) => {
                                                console.log(e.target.value)
                                                setDate(prev => [prev[0], e.target.value])
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
                                    <Box style={{width: "15px", height: "15px", backgroundColor: "#4AD584"}}/>
                                </Grid>
                                <Grid className={classes.subGrid} item xs={4}>
                                    <Typography className={classes.rentGrayText}>{t("setIncome")}</Typography>
                                </Grid>
                                <Grid className={classes.subGrid} item xs={2}>
                                    <Box style={{width: "15px", height: "15px", backgroundColor: "#F88B38"}}/>
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
                                            <Box style={{marginTop: "15px"}}>
                                                <Typography className={classes.cardHeader}>{t("allProfit")}</Typography>
                                            </Box>
                                            <Box style={{marginTop: "10px"}}>
                                                {/*<Typography className={classes.cardHeaderSmall}>{t("profHouse")}<span*/}
                                                {/*    className={classes.cardHeaderSmallGray}>{""}</span></Typography>*/}
                                            </Box>
                                            <Box style={{marginTop: "10px"}}>
                                                <Typography className={classes.cardHeaderSmall}>{t("profPeriod")}<span
                                                    className={classes.cardHeaderSmallGray}>{moment(dateFrom).format('DD MMMM yyyy')} - {moment(dateTo).format('DD MMMM yyyy')}</span></Typography>
                                            </Box>
                                            <Box style={{marginTop: "10px"}}>
                                                <Typography className={classes.cardHeaderSmall}>{t("profRent")}<span
                                                    className={classes.cardHeaderSmallGray}>{"2 чоловіки"}</span></Typography>
                                            </Box>
                                        </Grid>
                                        <Grid className={classes.subGrid} style={{marginTop: "15px"}} item xs={3}>
                                            <CircularStatic size={80} thickness={2} progress={totalIncome.toFixed(2)}
                                                            color={"#F88B38"}/>
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
                                            <Box style={{marginTop: "15px"}}>
                                                <Typography className={classes.cardHeader}>{t("expense")}</Typography>
                                                <Typography
                                                    className={classes.cardSubHeader}>{moment(dateFrom).format('DD MMMM yyyy')} - {moment(dateTo).format('DD MMMM yyyy')}</Typography>
                                            </Box>
                                            <Box style={{marginTop: "10px"}}>
                                                <Typography className={classes.cardHeaderSmall}>{t("mostExpense")}<span
                                                    className={classes.cardHeaderSmallRed}>{"Червень"}</span>
                                                    <ArrowDownwardIcon style={{
                                                        color: "#FA505D",
                                                        fontSize: "20px",
                                                        marginBottom: "-7px"
                                                    }}/></Typography>
                                            </Box>
                                            <Box style={{marginTop: "10px"}}>
                                                <Typography className={classes.cardHeaderSmall}>{t("profRent")}<span
                                                    className={classes.cardHeaderSmallGray}>{"2 чоловіки"}</span></Typography>
                                            </Box>
                                        </Grid>
                                        <Grid className={classes.subGrid} style={{marginTop: "15px"}} item xs={3}>
                                            <CircularStatic size={80} thickness={2} progress={totalExpenditure.toFixed(2)}
                                                            color={"#4AD584"}/>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                        <Box style={{marginTop: "15px", marginBottom: "10px"}}>
                            <Typography className={classes.textBlack}>{t("details")}</Typography>
                        </Box>
                        <More/>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
export default ClientStatisticRent;