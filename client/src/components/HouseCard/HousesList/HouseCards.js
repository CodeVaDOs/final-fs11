import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem } from "@material-ui/core";
import "./styles.css";
import style from "./index.module.css";
import Grid from "@material-ui/core/Grid";
import noImg from '../../../assert/img/noImg.jpg';

const useStyles = makeStyles(() => ({
  bh: {
    opacity: 0.4,
  },
  root: {
    flexGrow: 1,
    width: "100%",
    height: 'auto',
    fontFamily: 'Roboto',
    overflow: 'hidden'
  },
  houseCard: {
    boxSizing: 'border-box',
    padding: "10px",
    borderRadius: '20px',
    height: "auto",
    width: '182px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fdfdfd',
    boxShadow:"0px 3px 6px #00000033"
  },
  houseCardActive: {
    boxSizing: 'border-box',
    padding: "10px",
    borderRadius: '20px',
    height: "auto",
    width: '182px',
    display: 'flex',
    flexDirection: 'column',
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
    marginTop: 10,
    width: "162px",
    height:"109px",
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
    textAlign: "center",
    display: 'inline',
    fontSize: '12px',
    lineHeight: "20px",

  },
  btnNext: () => ({
    position: 'absolute',
    top: '120px',
    right: 0,
    zIndex: 10,
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
    left: -2,
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

export default function HouseCards({ data, onHouseClick, images }) {
  const classes = useStyles();
  const [isActive, setIsActive] = useState();

  function scrollElementToCenter(e, id = 0) {
    setIsActive(id);
    onHouseClick(id);
    document.getElementById(id).scrollIntoView({
      block: "nearest",
      inline: "center"
    });
  }

  let options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timezone: 'UTC'
  };

  return (
    <div
      className={classes.root}>
      <Grid
        container>
        <div>
          <div
            item
            className={
              `${style.container} ${style.wideSpacer}  `
            }>
            {data
              .map((house, index) => {
                return (
                  <ListItem
                    className={`${style.child}`}
                    key={index}
                    id={index}
                  >
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={
                        (e) => scrollElementToCenter(e, index)
                      }>
                      <div
                        className={isActive === index ? classes.houseCardActive : classes.houseCard}
                      >
                        <div>
                          {images
                            ? <img
                              className={classes.img}
                              src={images}
                              alt={house.id}/>
                            : <div>
                              <img
                                className={classes.img}
                                src={noImg}
                                alt='No Image Found'/>
                            </div>
                          }

                          <div
                            className={classes.houseCardBody}>
                        <span
                          className={classes.cardContract}>
                          Контракт {new Date(house.createDate.toString()).toLocaleString("ru", options)}
                        </span>
                            <span
                              className={classes.cardId}>
                              {house.svg} ID {house.id}
                            </span>
                            <span
                              className={classes.locationData}>
                              {house.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ListItem>
                );
              })}
          </div>
        </div>
      </Grid>
    </div>
  );
}


