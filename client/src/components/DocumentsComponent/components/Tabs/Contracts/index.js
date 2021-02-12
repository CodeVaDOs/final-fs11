import React from "react";
import { MyContracts } from "../../../../ClientPage/components/Documents/MyContracts";
import Box from '@material-ui/core/Box';

export const Contracts = () => {

  return (
    <Box>
      <MyContracts visibleFalse={true}/>
    </Box>
  );
};