import React, { useState } from "react";
import { AppBar, IconButton, List, ListItem, } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { Link } from "react-router-dom";

import { routes } from "@utils/routes";
import * as PropTypes from "prop-types";
import UpArrow from "../../assert/arrow_chevron_direction_down_move_navigation_up_icon_123220.svg";
import Search from "../Search";

const drawerHeight = 170;
const drawerNormalize = 10;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    position: "fixed",
    background: "#EEF5FF",
    top: -195,
    margin: "20px",
    boxSizing: 'border-box',
    width: '65%',
    transition: theme.transitions.create(["margin", "height"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
  },
  appBarShift: {
    marginTop: drawerHeight + drawerNormalize,
    transition: theme.transitions.create(["margin", "height"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })

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
    marginTop: 1
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
    height: "auto",
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
  }
}));

class ArrowDownwardIcon extends React.Component {
  render() {
    return null;
  }
}

ArrowDownwardIcon.propTypes = { fontSize: PropTypes.string };
const SimpleDrawer = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const list = (
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
  );
  return (
    <div>
      <AppBar
        style={{ "borderRadius": "0 0 20px 20px" }}
        className={classNames(classes.appBar, { [classes.appBarShift]: open })}
        position="static"
        anchor="top"
        paperAnchorDockedTop={'variant'}
        open={open}
        onClose={() => setOpen(false)}>

        <List className={classes.headerList}>
          <div className={classes.logo}>
            <div className={classes.logoW}>MARKSEM</div>
            <div className={classes.logoCRM}> CRM</div>
          </div>
          <ListItem
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
            className={classes.link}>
            <Link to={"/"}>Home</Link>
          </ListItem>
          <ListItem
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
            className={classes.link}>
            <Link to={'/settings'}>Settings</Link>
          </ListItem>
          <Search/>
        </List>
        {list}
        {open === true ?
          <div>
            <IconButton onClick={() => setOpen(!open)} className={classes.menuButton}>
              <svg path={UpArrow}/>
            </IconButton>
          </div> :
          <div>
            <IconButton onClick={() => setOpen(!open)} className={classes.menuButton}>
              <ArrowDownwardIcon fontSize="inherit"/>
            </IconButton>
          </div>
        }
      </AppBar>
    </div>
  );
};

export default SimpleDrawer;
