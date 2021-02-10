import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const ContainerCustom = (props) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth={1}>
        {props.children}
      </Container>
    </>
  );
};

export default ContainerCustom;
