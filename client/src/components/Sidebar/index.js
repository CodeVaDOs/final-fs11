import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import UserBar from "../UserBar";
import ManagerCard from "../ManagerCard";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";

export const drawerWidth = 430;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'flex-start',
  },
  appBar: {
    height: "auto",
    justifyContent: "flex-end",
    background: "#EEF5FF",
    boxSizing: 'border-box',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', "height", 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: "100%",
    left: "0",
  },
  appBarShift: {
    left: "0",
    marginRight: drawerWidth,
    width: `calc(100% - ${drawerWidth + 40}px)`,
    transition: theme.transitions.create(['width', "height", 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  menuButton: {
    overflow: "visible",
    borderRadius: "50%",
    position: "absolute",
    top: "50px",
    transform: "scale(1.2)",
    left: "-19px",
    width: "39px",
    height: "39px",
    zIndex: 100,
    background: "#EEF5FF",
  },
  drawerClose: {
    background: "#EEF5FF",
    overflow: "visible",
    transition: theme.transitions.create(['width', "height", 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(3),
    },
  },
  drawerOpen: {
    overflow: "visible",
    background: "#EEF5FF",
    width: drawerWidth,
    transition: theme.transitions.create('width', "height", 'margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));


export default function Sidebar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <Drawer
        variant="permanent"
        anchor="right"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: props.open,
            [classes.drawerClose]: !props.open,
          }),
        }}>
        <IconButton
          onClick={props.handleDrawerToggle}
          className={classes.menuButton}>
          {props.open === true ? <ChevronRight/> : <ChevronLeft/>}
        </IconButton>
        <Divider/>

        <UserBar
          name={'Dima Ovsienko'}
          avatar={'https://bipbap.ru/wp-content/uploads/2017/10/minony-kartinki-smeshnye-na-avatarku.jpg'}
          notification={8}
          describe={`Investor`}
          sms={17}
        />
        <Divider/>

        <ManagerCard
          name={'Oleg Prytula'}
          tel={'093-111-11-11'}
          email={'olegprytula@gmail.com'}/>
        <Divider/>
      </Drawer>
    </div>
  );
}
