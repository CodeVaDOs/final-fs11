import React from 'react';
import Box from "@material-ui/core/Box";

const Container = (props) => {
  return (
    <Box>
      {props.children}
    </Box>
  );
};

export default Container;
