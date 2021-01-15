import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import image from './img.png';
import image1 from './img_1.png';
import { svg1, svg2 } from "../../../utils/constants/housesView";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
    fontFamily: 'Roboto',
    overflow: 'hidden',
  },
  houseCard: {
    boxSizing: 'border-box',
    padding: "10px",
    borderRadius: '20px',
    minWidth: '182px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: "0 4px 4px rgba(0,0,0,0.19), 0 4px 4px rgba(0,0,0,0.23)",
    "&:hover": {
      color: 'white',
      backgroundColor: '#254A93',
    }
  },
  houseCardActive: {
    boxSizing: 'border-box',
    padding: "10px",
    borderRadius: '20px',
    minWidth: '182px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: "0 4px 4px rgba(0,0,0,0.19), 0 4px 4px rgba(0,0,0,0.23)",
    color: 'white',
    backgroundColor: '#254A93',
  },
  content: {
    display: 'flex',
    margin: '10px',
  },
  img: {
    width: "100%",
    borderRadius: '18px',
  },
  houseCardBody: {
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
    lineHeight: '28px'
  },
  cardContract: {
    fontSize: '12px',
    display: 'inline',
    opacity: "60%",
  },
  cardId: {
    display: 'inline',
    fontSize: '18px',
  },
  inline: {
    display: 'inline',
  },
  locationData: {
    display: 'inline',
    fontSize: '12px',
    lineHeight: "20px",

  },
  gridList: {
    width: "100%",
    height: '280px',
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    overflowY: "hidden"
  },
}));

// Даные по домам

const tileData = [
  {
    img: image,
    contractDate: '11.07.2020',
    contractId: '00170',
    town: 'Яблуниця',
    townLocation: 'Івано-Франківська область',
    svg: svg1,
    myHouse: true,
    control: false
  },
  {
    img: image1,
    contractDate: '11.07.2020',
    contractId: '00270',
    town: 'Яблуниця',
    townLocation: 'Івано-Франківська область',
    svg: svg2,
    myHouse: true,
    control: false
  },
  {
    img: image1,
    contractDate: '11.07.2020',
    contractId: '00270',
    town: 'Яблуниця',
    townLocation: 'Івано-Франківська область',
    svg: svg2,
    myHouse: false,
    control: true
  },
  {
    img: image1,
    contractDate: '11.07.2020',
    contractId: '00270',
    town: 'Яблуниця',
    townLocation: 'Івано-Франківська область',
    svg: svg2,
    myHouse: true,
    control: false
  },

];

export default function HouseCards(props) {
  const classes = useStyles();
  if (props.category === 'MyHouse') {
    return (
      <div className={classes.root}>
        {tileData.filter(t => t.myHouse === true).map((house, index) => (
          <div key={index}>
            <div className={classes.content}>
              <div className={index === 0 ? classes.houseCardActive : classes.houseCard}>
                <img className={classes.img} src={house.img} alt={house.contractId}/>
                <div className={classes.houseCardBody}>
                  <span className={classes.cardContract}> Контракт {house.contractDate}</span>
                  <span className={classes.cardId}>{house.svg} ID {house.contractId}</span>
                  <span className={classes.locationData}> {house.town}</span>
                  <span className={classes.locationData}> {house.townLocation}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } else if (props.category === 'control') {
    return (
      <div className={classes.root}>
        {tileData.filter(t => t.control === true).map((house, index) => (
          <div key={index}>
            <div className={classes.content}>
              <div className={index === 0 ? classes.houseCardActive : classes.houseCard}>
                <img className={classes.img} src={house.img} alt={house.contractId}/>
                <div className={classes.houseCardBody}>
                  <span className={classes.cardContract}> Контракт {house.contractDate}</span>
                  <span className={classes.cardId}>{house.svg} ID {house.contractId}</span>
                  <span className={classes.locationData}> {house.town}</span>
                  <span className={classes.locationData}> {house.townLocation}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
};




