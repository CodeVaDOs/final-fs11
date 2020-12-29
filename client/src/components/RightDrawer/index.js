import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import {
  ChevronLeft,
  ChevronRight,
  ImportContactsOutlined,
  InsertEmoticonRounded,
  LocalGasStationOutlined
} from "@material-ui/icons";
import { Badge, Divider, Drawer, ListItem, ListItemIcon, ListItemText, Menu, MenuItem } from "@material-ui/core";
import ManagerCard from "./ManagerCard";
import AppHeader from "../AppHeader";

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
    width: 60,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(5) + 1,
    },
    float: "left",
  },
  drawerOpen: {
    background: "#EEF5FF",
    width: drawerWidth,
    float: "left",
    overflow: "visible",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawer: {
    whiteSpace: 'nowrap',
    position: "relative",
    height: "100%",
    width: drawerWidth,
    // Drawer - opening
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
      // duration: 2000
    }),
    flexShrink: 0,
    float: "left",
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
  const [menuAnchorEl, setAnchorEl] = useState(null);

  const handleDrawerClose = () => {
    setOpenRightPanel(!openRightPanel);
  };

  const handleMenuOpen = event => {
    setAnchorEl(event.target);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const isMenuOpen = Boolean(menuAnchorEl);


  return (
    <>
      <Drawer
        variant="permanent"
        anchor="right"
        paperAnchorRight={"right"}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: openRightPanel,
          [classes.drawerClose]: !openRightPanel,
        })}
        classes={{
          paperAnchorDockedRight: clsx({
            [classes.drawerOpen]: openRightPanel,
            [classes.drawerClose]: !openRightPanel,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton
            onClick={handleDrawerClose}
            className={classes.menuButton}>
            {openRightPanel === true ? <ChevronRight fontSize="inherit"/> : <ChevronLeft fontSize="inherit"/>}
          </IconButton>
          <div>
            <IconButton
              className={classes.profileLogo}
              color="inherit"
              onClick={handleMenuOpen}
            >
              <Badge badgeContent="2" color="secondary">
                <LocalGasStationOutlined/>
              </Badge>
            </IconButton>
            <Menu
              anchorEl={menuAnchorEl}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={isMenuOpen}
              onClose={handleMenuClose}
              PaperProps={{
                style: {
                  width: 200
                }
              }}
            >
              <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                  <InsertEmoticonRounded/>
                </ListItemIcon>
                <ListItemText primary="Profile"/>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                  <ImportContactsOutlined/>
                </ListItemIcon>
                <ListItemText primary="Contacts"/>
              </MenuItem>
            </Menu>
          </div>
        </div>
        <Divider/>
        <ListItem>
          Personal Manager
        </ListItem>
        <Divider/>
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
