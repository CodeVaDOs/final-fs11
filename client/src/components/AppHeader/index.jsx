import React, { useState } from "react";
import { AppBar, IconButton, List, ListItem, } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

import Search from "../Search";
import { routes } from "@utils/routes";

const drawerHeight = 170;
const drawerNormalize = 10;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    // App bar - closing
    position: "fixed",
    background: "#EEF5FF",
    top: -195,
    boxSizing: 'border-box',
    margin: "20px",
    width: `calc(100% - 150px)`,

    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
  },
  appBarShift: {
    margin: "20px",
    boxSizing: 'border-box',
    width: `calc(100% - 12px)`,

    marginTop: drawerHeight + drawerNormalize,
    transition: theme.transitions.create(["margin", "height"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    float: "right",

  },
  menuButton: {
    borderRadius: "50%",
    border: 'none',
    background: '#EEF5FF',
    position: "relative",
    top: 15,
    width: "25px",
    height: "25px",
    left: `calc(50%)`,
    zIndex: 100
  },
  link: {
    textDecoration: 'none',
    flex: 1,
    display: "inline-block",
    width: 'max-content',
    textDecorationColor: '#6E7375',
    maxWidth: "max-content"
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginTop: 1,
    float: "right",

  },
  list: {
    color: '#6E7375',
    display: "flex",
    justifyContent: 'space-around',
    alignItems: "center",
    position: "relative",
  },
  headerList: {
    display: "flex",
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: "10px",
    position: "relative",
  },
  logo: {
    width: "max-content",
    display: "block",
    color: '#254A93',
    fontSize: "25px",
    padding: 25,
    fontWeight: 700,
  },
  logoW: {
    float: "left",
    width: "max-content",
  },
  logoCRM: {
    paddingLeft: 5,
    float: "right",
    color: '#4AD584',
  },
  menuLinks: {
    width: "70%",
    display: "flex",
    position: "relative",
    justifyContent: 'space-between',
    alignItems: 'center'
  },


}));


const AppHeader = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      style={{ "borderRadius": "0 0 20px 20px" }}
      className={classNames(classes.appBar, { [classes.appBarShift]: open })}
      position="relative"
      anchor="top"
      open={open}
    >
      <List className={classes.headerList}>
        <div className={classes.logo}>
          <div className={classes.logoW}>MARKSEM</div>
          <div className={classes.logoCRM}> CRM</div>
        </div>
        <ListItem
          className={classes.link}>
          <Link to={"/"}>Home</Link>
        </ListItem>
        <ListItem
          className={classes.link}>
          <Link to={'/settings'}>Settings</Link>
        </ListItem>
        <Search/>
      </List>
      <div className={classes.menuLinks}>
        <List className={classes.list}>
          {routes.map((route) => {
            if (!route.isHeaders) {
              return (
                <ListItem className={classes.link} key={route.name}>
                  <Link to={route.path}>{route.name}</Link>
                </ListItem>
              );
            }
          })}
        </List>
      </div>
      <div>
        <IconButton onClick={() => setOpen(!open)} className={classes.menuButton}>
          {open === true ? <ExpandLess fontSize="inherit"/> : <ExpandMore fontSize="inherit"/>}
        </IconButton>
      </div>
    </AppBar>
  );
};

export default AppHeader;
