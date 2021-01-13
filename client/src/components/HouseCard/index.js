import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import image from './img.png';
import image1 from './img_1.png';
import { GridList } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: theme.palette.background.paper,
    fontFamily: 'Roboto',
    justifyContent: 'space-around',
    overflow: 'hidden',

  },
  houseCard: {
    boxSizing: 'border-box',
    padding: "10px",
    borderRadius: '20px',
    minWidth: '182px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
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
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
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
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    overflowY: "hidden"
  },
}));

// Даные по домам

const svg1 = (
  <svg xmlns="http://www.w3.org/2000/svg" width="14.571" height="17" viewBox="0 0 14.571 17">
    <g id="Сгруппировать_1320" data-name="Сгруппировать 1320" transform="translate(-444 -895)">
      <path id="ic_pause_24px" d="M6,22h4.857V5H6ZM15.714,5V22h4.857V5Z" transform="translate(438 890)" fill="#4ad584"/>
    </g>
  </svg>
);
const svg2 = (
  <svg xmlns="http://www.w3.org/2000/svg" width="21.036" height="15.299" viewBox="0 0 21.036 15.299">
    <path id="ic_local_shipping_24px" d="M19.168,7.825H16.3V4H2.912A1.918,1.918,0,0,0,1,5.912V16.43H2.912a2.869,2.869,0,1,0,5.737,0h5.737a2.869,2.869,0,1,0,5.737,0h1.912V11.65ZM5.781,17.865A1.434,1.434,0,1,1,7.215,16.43,1.432,1.432,0,0,1,5.781,17.865ZM18.69,9.259l1.874,2.39H16.3V9.259Zm-1.434,8.606A1.434,1.434,0,1,1,18.69,16.43,1.432,1.432,0,0,1,17.255,17.865Z" transform="translate(-1 -4)" fill="#f88b38"/>
  </svg>
);
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
];

export default function HouseCard(props) {
  const classes = useStyles();
  if (props.category === 'MyHouse') {
    return (
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
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
        </GridList>
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




