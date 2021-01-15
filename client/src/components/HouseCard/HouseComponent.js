import React from 'react';
import { HouseContainer } from "./House";
import HousesTabs from "./HousesList/HousesList";

const HouseComponent = () => {
  return (
    <>
      <HousesTabs/>
      <HouseContainer/>
    </>
  );
};
export default HouseComponent;
