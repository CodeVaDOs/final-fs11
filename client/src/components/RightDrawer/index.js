import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { AppBar, CssBaseline, Drawer, Slide, useScrollTrigger } from "@material-ui/core";
import ManagerCard from "./ManagerCard";
import UserBar from "./UserBar";
import AppHeader from "../AppHeader";
import Divider from '@material-ui/core/Divider';
import Container from "../Container";

const drawerWidth = 440;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },

  appBar: {
    height: "auto",
    justifyContent: "flex-end",
    background: "#EEF5FF",
    boxSizing: 'border-box',
    top: -175,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["height", 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: "92%",
    left: "0",

  },
  appBarShift: {
    margin: "20px",
    // marginTop: drawerHeight + drawerNormalize,
    left: "0",
    marginRight: drawerWidth,
    width: `calc(100% - ${drawerWidth + 40}px)`,
    transition: theme.transitions.create(["height", 'margin'], {
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
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  drawerOpen: {
    overflow: "visible",
    background: "#EEF5FF",
    width: drawerWidth,
    transition: theme.transitions.create('width', {
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
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const MiniDrawer = (props) => {
  // const { children } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerClose = (e) => {
    setOpen(!open);
  };
  return (
    <>
      <CssBaseline/>
      <HideOnScroll {...props}>
        <AppBar
          className={clsx(classes.appBar,
            { [classes.appBarShift]: open,
            })}
        >
          <AppHeader  open={open} setOpen={setOpen}/>
        </AppBar>
      </HideOnScroll>
      <Drawer
        variant="permanent"
        anchor="right"
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}>
        <Divider/>

        <UserBar
          name={'Dima Ovsienko'}
          avatar={'https://bipbap.ru/wp-content/uploads/2017/10/minony-kartinki-smeshnye-na-avatarku.jpg'}
          notification={8}
          describe={`Investor`}
          sms={17}
        />
        <Divider/>

        <ManagerCard name={'Oleg Prytula'} tel={'093-111-11-11'} email={'olegprytula@gmail.com'}/>
        <Divider/>

        <IconButton
          onClick={handleDrawerClose}
          className={classes.menuButton}>
          {open === true ? <ChevronRight/> : <ChevronLeft/>}
        </IconButton>
      </Drawer>
      <Container>
        <div className={clsx(classes.appBar,
          {
            [classes.appBarShift]: open,
          })}>
          {props.children}
        </div>
      </Container>
    </>
  );
};

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default MiniDrawer;
