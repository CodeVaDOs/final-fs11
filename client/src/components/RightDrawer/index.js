import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { Drawer } from "@material-ui/core";
import ManagerCard from "./ManagerCard";
import UserBar from "./UserBar";

const drawerWidth = 420;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  menuButton: {
    borderRadius: "50%",
    position: "absolute",
    top: "50px",
    transform: "scale(1.5)",
    left: "-19px",
    width: "39px",
    height: "39px",
    zIndex: 100,
    background: "#EEF5FF",

  },
  drawerClose: {
    background: "#EEF5FF",
    overflow: "visible",
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(1) + 1,
    },
  },
  drawerOpen: {
    background: "#EEF5FF",
    width: "35%",
    overflow: "visible",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  }
}));

const MiniDrawer = (props) => {
  const { children } = props;
  const classes = useStyles();
  const [openRightPanel, setOpenRightPanel] = useState(true);

  const handleDrawerClose = (e) => {
    setOpenRightPanel(!openRightPanel);
  };
  return (
    <>
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          anchor="right"
          classes={{
            paper: clsx({
              [classes.drawerOpen]: openRightPanel,
              [classes.drawerClose]: !openRightPanel,
            }),
          }}>
          <UserBar
            name={'Dima Ovsienko'}
            avatar={'https://bipbap.ru/wp-content/uploads/2017/10/minony-kartinki-smeshnye-na-avatarku.jpg'}
            notification={8}
            describe={`Investor`}
            sms={17}
          />
          <ManagerCard name={'Oleg Prytula'} tel={'093-111-11-11'} email={'olegprytula@gmail.com'}/>
          <IconButton
            onClick={handleDrawerClose}
            className={classes.menuButton}>
            {openRightPanel === true ? <ChevronRight/> : <ChevronLeft/>}
          </IconButton>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar}/>
          {children}
        </main>
      </div>
    </>
  );
};

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default MiniDrawer;
