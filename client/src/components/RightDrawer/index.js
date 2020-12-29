import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { Drawer, ListItem } from "@material-ui/core";
import ManagerCard from "./ManagerCard";

const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginRight: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  profileLogo: {
    marginRight: `${theme.spacing.unit}px`
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
    width: drawerWidth,
    overflow: "visible",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawer: {
    position: "relative",
    height: "100%",
    width: drawerWidth,
    // Drawer - opening
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    flexShrink: 0,
  },
  toolbar: {
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const MiniDrawer = ({ children }) => {
  const classes = useStyles();
  const [openRightPanel, setOpenRightPanel] = useState(false);

  const handleDrawerClose = () => {
    setOpenRightPanel(!openRightPanel);
  };
  return (
    <>
      <Drawer
        variant="permanent"
        anchor="right"
        classes={{
          paperAnchorDockedRight: clsx({
            [classes.drawerOpen]: openRightPanel,
            [classes.drawerClose]: !openRightPanel,
          }),
        }}>
        <IconButton
          onClick={handleDrawerClose}
          className={classes.menuButton}>
          {openRightPanel === true ? <ChevronRight fontSize="inherit"/> : <ChevronLeft fontSize="inherit"/>}
        </IconButton>
        <ListItem>
          Personal Manager
        </ListItem>
        <div>
          <ManagerCard/>
        </div>
      </Drawer>
      <main
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <div className={classes.toolbar}/>
        {children}
      </main>
    </>
  );
};

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default MiniDrawer;
