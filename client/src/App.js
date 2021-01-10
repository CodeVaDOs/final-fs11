import React from 'react';
import Header from "@components/Header";
import Sidebar from "@components/Sidebar";
import Container from "@containers/AppContainer";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    maxWidth: '1366px',
    width: '1366px',
    margin: '0 auto'
  },
  mainContainer: {
    margin: '0 30px'
  }
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.mainContainer}>
        <Header/>
        <Container/>
      </div>
      <Sidebar/>
    </div>
  );
};

export default App;
