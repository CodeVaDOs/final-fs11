import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import SimpleDrawer from "../SimpleDrawer";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import ManagerCard from "./ManagerCard";

const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    zIndex: "1254",

  },
  drawer: {
    whiteSpace: 'nowrap',
    position: 'relative',
  },
  drawerOpen: {
    background: "#EEF5FF",
    width: drawerWidth,
    overflow: "visible",

    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  drawerClose: {
    background: "#EEF5FF",
    overflow: "visible",

    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(5) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing(1, 0),
    ...theme.mixins.toolbar,
  },
  content: {
    width: `calc(100% - ${drawerWidth}px)`,
    flexGrow: 0,
    padding: theme.spacing(5) + 1,
  },
  menuButton: {
    borderRadius: "50%",
    border: 'none',
    background: '#EEF5FF',
    position: "absolute",
    top: "15px",
    left: "-12px",
    width: "25px",
    height: "25px",
    zIndex: 100
  },
}));

export default function MiniDrawer({ children }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <SimpleDrawer/>

      <Drawer
        variant="permanent"
        anchor="right"
        open="right"

        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >

        <div className={classes.toolbar}>

        </div>
        <Divider/>
        <List>
          <ListItem>
            Personal Manager
          </ListItem>
        </List>
        <div>
          <ManagerCard/>
        </div>
        <IconButton onClick={handleDrawerClose} className={classes.menuButton}>
          <ChevronLeft fontSize="inherit"/>
        </IconButton>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar}/>
        {children}
      </main>
    </div>
  );
}
