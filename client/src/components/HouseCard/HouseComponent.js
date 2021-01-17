import React from 'react';
import { HouseContainer } from "./House";
import HousesTabs from "./HousesList/HousesList";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({

}));

const HouseComponent = () => {
  const classes = useStyles();

  return (
    <>
      <HousesTabs/>

    </>
  );
};
export default HouseComponent;
