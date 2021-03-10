import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { tileData } from "../../../utils/constants/housesView";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "620px ",
    position: 'relative',
    display: 'flex',
    fontFamily: 'Roboto',
    overflow: 'hidden',
    flexDirection: 'row',

  },
  houseCard: {
    height: '99%',
    margin: '4px',
    boxSizing: 'border-box',
    padding: "10px",
    borderRadius: '20px',
    minWidth: '182px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: "0 4px 4px rgba(0,0,0,0.19), 0 4px 4px rgba(0,0,0,0.23)",
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

}));
export const HousItem = () => {
  const classes = useStyles();
  const [house, setHouse] = useState(tileData[0]);

  return (
    <div
      className={classes.houseCard}>
      <div>
        <img
          className={classes.img} src={house.img} alt={"contractId"}/>
        <div className={classes.houseCardBody}>
          <span className={classes.cardContract}> Контракт {house.contractId}</span>
          <span className={classes.cardId}>{house.svg} ID {house.id}</span>
          <span className={classes.locationData}> {house.town}</span>
          <span className={classes.locationData}> {house.location}</span>
        </div>
      </div>
    </div>
  );
};