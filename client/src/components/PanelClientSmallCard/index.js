import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles({
  cardContainer: {
    height: '170px',
    width: '300%',
    boxShadow: "0px 3px 6px #00000033",
    borderRadius: '20px',
    backgroundColor:'#fff',
    margin: '5px'
  },
  cardHeader: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#293134',
    marginLeft: "20px",
    marginTop: "5px"
  },
  cardHeaderSmall: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
    fontWeight: 'normal',
    color: '#293134',
    marginLeft: "20px",
    marginTop: "5px"
  },
  cardSubHeader : {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    fontWeight: 'normal',
    color: '#B1B4BA',
    marginLeft: "20px",
    marginTop: "-5px"
  },
  bigCircle: {
    width:72,
    height:72,
    backgroundColor: "#EAEAEA",
    borderRadius: "50%",
    position:"relative",
    marginTop: "20px"
  },
  fillCircle: {
    width:36,
    height:72,
    borderRadius: "0px 72px 72px 0",
    marginLeft: "35px",
    marginTop:"-3px"
  },
  whiteCircle: {
    width:64,
    height:64,
    borderRadius: "50%",
    backgroundColor: "#fff",
    position:"absolute",
    top:4,
    left:4
  },
  circleTitle: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    fontWeight: 'normal',
    color: '#293134',
    marginLeft: "5px",
    marginTop: "23px"
  },
  circleTitleManager: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#293134',
    marginLeft: "22px",
    marginTop: "23px"
  },
  btn: {
    width:100,
    height:30,
    borderRadius: "20px 20px 20px 20px",
    color: '#fff',
    marginLeft: "-20px",
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    textTransform: "none",
    fontWeight: 'normal',
  },
});

const PanelClientSmallCard =({ userType })=>{
  const classes = useStyles();
  const { t } = useTranslation();
  const type = userType;
  const dataClient = [
    {
      "id":"1",
      "header": t('incomeTotal'),
      "subHeader": t('allHouses'),
      "circleData": "$12.438K",
      "house1Income": "$12.438K",
      "subLocation1": t('house1'),
      "house2Income": "$6.438K",
      "subLocation2": t('house2'),
      "color": "#F88B38",
      "arrow":true
    },
    {
      "id":"2",
      "header": t('monthIncome'),
      "subHeader": "June 1 - June 30",
      "circleData": "$12.438K",
      "house1Income": "Rent: 21 people",
      "subLocation1": "+34% vs last month",
      "house2Income": "",
      "subLocation2": "",
      "color": "#4AD584",
      "arrow":false
    },
    {
      "id":"3",
      "header": t('weekIncome'),
      "subHeader": "June 1 - June 30",
      "circleData": "$12.438K",
      "house1Income": "Rent: 4 people",
      "subLocation1": "-12% vs last week",
      "house2Income": "",
      "subLocation2": "",
      "color": "#00D0FF",
      "arrow":false
    },
  ];
  const dataManager = [
    {
      "id":"1",
      "header": t('interested'),
      "subHeader": "20 Червня - 27 Червня",
      "circleData": "71%",
      "house1Income": "28901",
      "subLocation1": t("newClients"),
      "house2Income": "504",
      "subLocation2": t("activeClient"),
      "color": "#00D0FF"
    },
    {
      "id":"2",
      "header": t("clientHeader"),
      "subHeader": "",
      "circleData": "48%",
      "house1Income": "28",
      "subLocation1": t("repeatedClient"),
      "house2Income": "1",
      "subLocation2": t("newClients"),
      "color": "#F88B38"
    },
  ];
  const renderClientPanel =()=>{
    return(
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start">
        {dataClient.map(i=>
          <Grid className={classes.subGrid} item xs={4} key={i.id} >
            <Box className={classes.cardContainer}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid className={classes.subGrid} item xs={8}>
                  <Box style={{ marginTop:"15px" }}>
                    <Typography className={classes.cardHeader}>{i.header}</Typography>
                    <Typography className={classes.cardSubHeader}>{i.subHeader}</Typography>
                  </Box>
                  <Box style={{ marginTop:"10px" }}>
                    <Typography className={classes.cardHeaderSmall}>{i.house1Income} <ArrowUpwardIcon style={{ color:"#4AD584", fontSize: "20px", marginBottom: "-2px" }}/></Typography>
                    <Typography className={classes.cardSubHeader}>{i.subLocation1} </Typography>
                  </Box>
                  <Box style={{ marginTop:"10px" }}>
                    <Typography className={classes.cardHeaderSmall}>{i.house2Income} {i.arrow === true?<ArrowUpwardIcon style={{ color:"#4AD584", fontSize: "20px", marginBottom: "-2px" }}/>:<ArrowUpwardIcon style={{ color:"#fff", fontSize: "20px", marginBottom: "-2px" }}/>}</Typography>
                    <Typography className={classes.cardSubHeader}>{i.subLocation2}</Typography>
                  </Box>
                </Grid>
                <Grid className={classes.subGrid} item xs={4} >
                  <Box className={classes.bigCircle}>
                    <Box className={classes.fillCircle}  style={{ backgroundColor: `${i.color}` }}>
                      <Box className={classes.whiteCircle} >
                        <Typography className={classes.circleTitle}>{i.circleData}</Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box style={{ marginTop:"28px" }}>
                    <Button className={classes.btn} style={{ backgroundColor: `${i.color}` }} onClick={()=>{}}>{t('btnDetail')}</Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        )}
      </Grid>
    );
  };
  const renderManagerPanel =()=>{
    return(<Box>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start">
        {dataManager.map(i=>
          <Grid item xs={4} key={i.id} >
            <Box className={classes.cardContainer}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={8}>
                  <Box style={{ marginTop:"15px" }}>
                    <Typography className={classes.cardHeader}>{i.header}</Typography>
                    <Typography className={classes.cardSubHeader}>{i.subHeader}</Typography>
                  </Box>
                  <Box style={{ marginTop:"10px" }}>
                    <Typography className={classes.cardHeaderSmall}>{i.house1Income} <ArrowUpwardIcon style={{ color:"#4AD584", fontSize: "20px", marginBottom: "-2px" }}/></Typography>
                    <Typography className={classes.cardSubHeader}>{i.subLocation1} </Typography>
                  </Box>
                  <Box style={{ marginTop:"10px" }}>
                    <Typography className={classes.cardHeaderSmall}>{i.house2Income} <ArrowUpwardIcon style={{ color:"#4AD584", fontSize: "20px", marginBottom: "-2px" }}/></Typography>
                    <Typography className={classes.cardSubHeader}>{i.subLocation2}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={4} style={{ position:"relative" }} >
                  <ArrowUpwardIcon style={{ color:`${i.color}`, fontSize: "40px", marginBottom: "-2px", position:"absolute", left:"-40px", top:"35px" }}/>
                  <Box className={classes.bigCircle}>
                    <Box className={classes.fillCircle}  style={{ backgroundColor: `${i.color}` }}>
                      <Box className={classes.whiteCircle} >
                        <Typography className={classes.circleTitleManager}>{i.circleData}</Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box style={{ marginTop:"28px" }}>
                    <Button className={classes.btn} style={{ backgroundColor: `${i.color}` }} onClick={()=>{}}>{t('btnDetail')}</Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>);
  };
  return(<>
    {(type === "client" && renderClientPanel()) ||
     (type === "manager" && renderManagerPanel())}
  </>);
};
export default PanelClientSmallCard;