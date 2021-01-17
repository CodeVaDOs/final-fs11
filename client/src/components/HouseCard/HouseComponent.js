import React from 'react';
import { HouseContainer } from "./House";
import HousesTabs from "./HousesList/HousesList";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: 'fit-content',
    boxShadow: "3px 3px 3px 3px rgba(0,0,0, 0.5)",
    borderRadius: '20px',
    fontFamily: 'Roboto',
    display: 'flex',

  },
}));

const HouseComponent = () => {
  const classes = useStyles();

  return (
    <>
      <HousesTabs/>
      <Container className={classes.root}>
        <HouseContainer/>
      </Container>
    </>
  );
};
export default HouseComponent;
