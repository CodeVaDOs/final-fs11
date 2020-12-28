import React from 'react';
import { makeStyles, Card, Box, Typography } from "@material-ui/core";
import house from "../../assert/icons/house.svg";

const useStyles = makeStyles({
  imgContainer: {
    width: '42px',
    height: '42px',
    borderRadius: '12px',
    background: '#00d0ff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: '356px',
    height: '60px',
    borderRadius: '20px',
    background: '#fff',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
    padding: '9px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

const FastAccessCard = (props) => {

  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <Box className={classes.imgContainer}>
          <img src={house} alt="house-image"/>
        </Box>
        <Typography>
          <p>Власні будинки</p>
        </Typography>
      </Card>
    </>
  );
};

export default FastAccessCard;
