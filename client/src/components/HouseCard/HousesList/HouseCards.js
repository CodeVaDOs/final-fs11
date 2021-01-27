import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import buttonArrow from "@assert/icons/buttonArrow.svg";
import { ListItem } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "1100px",
    position: 'relative',
    display: 'flex',
    fontFamily: 'Roboto',
    overflow: 'hidden',
    flexDirection: 'row',
  },
  houseCard: {
    margin: '10px',
    boxSizing: 'border-box',
    padding: "10px",
    borderRadius: '20px',
    minWidth: '182px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: "0 4px 4px rgba(0,0,0,0.19), 0 4px 4px rgba(0,0,0,0.23)",

  },
  houseCardActive: {
    margin: '10px',
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
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
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
  btnNext: () => ({
    position: 'absolute',
    top: '120px',
    right: 0,
    transition: 'right 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',

    border: '1px solid #b1b4ba',
    backgroundColor: '#eef5ff',
    borderRadius: '50%',
    height: '39px',
    width: '39px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    outline: 'none',
  }),
  btnPrev: () => ({
    position: 'absolute',
    top: '120px',
    left: 0,
    transition: 'right 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',

    border: '1px solid #b1b4ba',
    backgroundColor: '#eef5ff',
    borderRadius: '50%',
    height: '39px',
    width: '39px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    outline: 'none',

    zIndex: 1201
  }),

  collapseButtonImg: () => ({
    transform: 'rotate(90deg) rotateX(180deg)',
    transition: '300ms linear',
  }),
  collapseButtonImgPrev: () => ({
    transform: 'rotate(90deg)',
    transition: '300ms linear',
  }),
}));


export default function HouseCards({ data, onHouseClick }) {
  const [currentImageIdx, setCurrentImagIdx] = useState(0);
  const classes = useStyles();

  const prevSlide = () => {
    const resetToVeryBack = currentImageIdx === 0;
    const index = resetToVeryBack ? data.length - 1 : currentImageIdx - 1;
    setCurrentImagIdx(index);
  };

  const nextSlide = () => {
    const resetIndex = currentImageIdx === data.length - 1;
    const index = resetIndex ? 0 : currentImageIdx + 1;
    setCurrentImagIdx(index);
  };

  const activeImageSourcesFromState = data.slice(currentImageIdx, currentImageIdx + 5);
  const imageSourcesToDisplay = activeImageSourcesFromState.length < 5
    ? [...activeImageSourcesFromState, ...data.slice(0, 5 - activeImageSourcesFromState.length)]
    : activeImageSourcesFromState;
  return (
    <div className={classes.root}>
      {currentImageIdx < 1 ?
        "" :
        <button className={classes.btnPrev} onClick={prevSlide}>
          <img className={classes.collapseButtonImg} src={buttonArrow} alt="button arrow"/>
        </button>
      }
      <div>
        <div className={classes.content}>
          {activeImageSourcesFromState
            .map((house, index) => {
              return (
                <ListItem
                  key={index}
                  onClick={onHouseClick(currentImageIdx)}>
                  <div
                    className={index ? classes.houseCard : classes.houseCardActive}
                  >
                    <div>
                      <img
                        className={classes.img} src={house.img} alt={house.contractId}/>
                      <div className={classes.houseCardBody}>
                        <span className={classes.cardContract}> Контракт {house.contractDate}</span>
                        <span className={classes.cardId}>{house.svg} ID {house.contractId}</span>
                        <span className={classes.locationData}> {house.town}</span>
                        <span className={classes.locationData}> {house.location}</span>
                      </div>
                    </div>
                  </div>
                </ListItem>
              )
              ;

            })}
        </div>
      </div>
      {imageSourcesToDisplay.length > 5 ?
        "" :
        <button className={classes.btnNext} onClick={nextSlide}>
          <img className={classes.collapseButtonImgPrev} src={buttonArrow} alt="button arrow"/>
        </button>
      }
    </div>
  );
}


