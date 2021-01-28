import React, { useState } from "react";
import { tileData } from "../../../../utils/constants/housesView";
import MyHouses from "./MyHouses";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "white",
    display: 'flex',
    width: '630px',
    alignItems: 'center',
    flexDirection: 'column',
  },
  houseCard: {
    height: '100%',

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
  content: {
    height: '223px',
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
}));

export const ClientHouses = () => {
  const classes = useStyles();

  const [House,] = useState(tileData);

  const [house, setHouse] = useState(tileData[0]);

  function houseToState(e) {
    setHouse(House[e]);
  }

  return (
    <div className={classes.root}>
      <MyHouses onHouseClick={houseToState} data={House}/>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Typography>

    </div>
  );
};