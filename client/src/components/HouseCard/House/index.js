import React  from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import PrintIcon from '@material-ui/icons/Print';
import HouseDesription from "./HouseDesription";
import GetAppIcon from '@material-ui/icons/GetApp';
import Typography from "@material-ui/core/Typography";
import { Slider } from "./Slider/Slider";
import { Rent } from "./Rent";
import { useTranslation } from "react-i18next";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import CircularStaticHouse from "./CircularStaticHouse";
// import Map from "./Map";


const useStyles = makeStyles(() => ({
  root: {
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%",
    backgroundColor: "#fff",
    boxShadow: "0px 2px 4px #00000033",
    borderRadius: "20px",
    textAlign: "start",
    marginBottom: '15px',
    marginTop: '5px',
    font: 'Roboto'
  },
  topSide: {
    width: '100%',
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: '15px',
    marginTop: '15px',
    font: 'Roboto'
  },


  leftSide: {
    width: '100%',
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center'
  },


  rightSide: {
    width: '100%',
    display: 'flex',
    alignItems: "center",
    flexDirection: 'column',
    position: 'relative'

  },
  houseIdInfo: {
    width: '100%',
    display: 'flex',
    alignItems: "center",
    justifyContent: 'space-between'
  },
  id: {
    fontSize: '24px',
    color: '#9DC2FF',

  },
  houseDescription: {
    width: '100%',
    display: 'flex',
    alignItems: "center",
    justifyContent: 'space-between'
  },
  houseIdInfoButtonBlock: {
    display: 'flex',
    alignItems: "center",
    justifyContent: 'space-between'
  },
  ExportButton: {
    marginLeft: '10px',
    textTransform: 'none',
    textDecoration: 'none',
    color: '#464C4E',
    border: '1px solid #6E7375', borderRadius: '10px',
    padding: '15px',
    height: '35px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },


  houseRentStatisticBlock: {
    margin: '15px',
    borderRadius: '20px',
    paddingTop: '5px',
    boxShadow: "1px 2px 2px rgba(0,0,0,0.19), 1px 2px 2px rgba(0,0,0,0.23)",
    padding: '0px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: 'space-between',
  },
  diagramBlock: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: 'space-evenly',
    minHeight: "190px"
  },
  diagramBody: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'flex-start',
  },

  roundOfStatistic: {
    margin: '10px',
    width: '100px',
    height: '100px',
  },
  persentsBlock: {
    lineHeight: '8px'
  },
  moneyInDollars: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '32px',
    fontWeight: 400
  },
  days: {
    fontSize: '16px',
    fontWeight: 400
  },
  persents: {
    fontSize: '12px'
  },
  persentsCount: {
    color: '#4AD584'
  },
  persentsFromTo: {
    color: '#99A0A3'
  },
  statisticRent: {

    fontSize: '16px',
    color: '#293134',
    marginLeft: '30px',
    marginTop: '20px',
    width: "100%"
  },

  textBlock: {
    marginLeft: 20,
  },
  title: {
    display: "flex",
    marginTop: 20,
    fontSize: 18,
    color: '#293134'
  },
  texte: {
    fontSize: 16,
    color: '#6E7375'

  },

  //bottomSide
  bottomSide: {
    width: '100%',
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: '10px',
    marginTop: '10px',
    font: 'Roboto'
  }, subGrid: {
    marginTop: 20
  },
}));


export const HouseContainer = ({ house }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Container className={classes.root}>
        <Box className={classes.topSide}>
          <Box className={classes.leftSide}>
            <Slider/>
          </Box>
          <Box className={classes.rightSide}>
            <Box className={classes.houseIdInfo}>
              <p className={classes.id}>{t('id')} {house.id}</p>
              <Box className={classes.houseIdInfoButtonBlock}>
                <PrintIcon style={{ color: '#464C4E' }}/>
                <a className={classes.ExportButton} href={'#'}>
                  <p>{t('export')} </p>
                  <GetAppIcon style={{ color: '#464C4E' }}/>
                </a>
              </Box>
            </Box>
            <Box className={classes.houseDescription}>
              <HouseDesription house={house}/>
            </Box>
            <Box className={classes.houseRentStatisticBlock}>
              <Box className={classes.diagramBlock}>
                <Box className={classes.statisticRent}>{t('rentStatistic')}</Box>
                <Box className={classes.diagramBody}>
                  <Box className={classes.roundOfStatistic}>
                    <Grid className={classes.subGrid} item xs={3}>
                      <CircularStaticHouse size={90} thickness={2} progress={house.id} value={house.id * 10} color={"#4AD584"}/>
                    </Grid>
                  </Box>
                  <Box className={classes.persentsBlock}>
                    <Box className={classes.days}>{house.id}</Box>
                    <Box className={classes.persents}>
                      <p>
                        <span className={classes.persentsCount}><span>  &#x2B06;</span>+{house.id * 10} %</span>
                        <span className={classes.persentsFromTo}>{t('fromLastMonth')}</span>
                      </p>
                    </Box>
                  </Box>
                  <Box className={classes.moneyInDollars}>
                    <p>$ {house.id}K</p>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

        </Box>

        <Box className={classes.textBlock}>
          <Typography component={'span'} className={classes.title}>
            Деталі
          </Typography><br/>
          <Typography component={'span'} className={classes.texte}>
            lorem * {house.details} Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deleniti earum enim ipsa
            laboriosam minus neque numquam odit, quos voluptas!
          </Typography><br/>
          <Typography component={'span'} className={classes.title}>
            Локація
          </Typography>
        </Box>
        <Box className={classes.bottomSide}>
          <Box className={classes.leftSide}>
            {/*<BaseMap/>*/}
          </Box>
          <Box className={classes.rightSide}>
            <Rent/>
          </Box>
        </Box>
      </Container>
    </>
  );
};
