import React from 'react';
import Header from "@components/Header";
import Sidebar from "@components/Sidebar";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { drawerWidth } from "./components/Sidebar";
import AppContainer from "./containers/AppContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'flex-start',
    width: '96%',
    left: '0',
    position: "absolute",
    margin: '0 auto',
    paddingLeft:'20px'
  },
  mainContainer: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  mainContainerShift: {
    marginRight: `${drawerWidth + 40}px`,
    width: `calc(100% - ${drawerWidth + 90}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerOpen: {
    zIndex: '9999',
    width: `calc(90% - ${-drawerWidth}px)`,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflow: 'visible',

  },
  drawerClose: {
    zIndex: '9999',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflow: 'visible',
    width: theme.spacing(4) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(2) + 1,
    },
  },
}));

const App = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={clsx(classes.mainContainer,
        {
          [classes.mainContainerShift]: open,
        })}>
        <Header/>
        <AppContainer/>
      </div>
      <div
        className={clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}>
        <Sidebar handleDrawerToggle={handleDrawerToggle} open={open}/>
      </div>
    </div>
  );
};

export default App;
