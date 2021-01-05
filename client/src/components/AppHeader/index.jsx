import React, { useState } from "react";
import { IconButton, List, } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import SettingsIcon from '@material-ui/icons/Settings';
import Search from "../Search";
import { routes } from "@utils/routes";
import { Btn } from "./Button";
import clsx from "clsx";

const drawerHeight = 190;
const drawerNormalize = 10;


const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: "15%",

    height: drawerHeight,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["height", 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    top: -15,
    borderRadius: "15%",

    marginTop: drawerHeight + drawerNormalize,
    transition: theme.transitions.create(["height", 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    borderRadius: "50%",
    border: 'none',
    background: '#EEF5FF',
    position: "relative",
    top: 0,
    transform: "scale(1.2)",
    width: "25px",
    height: "25px",
    left: `calc(50%)`,
    zIndex: 100
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
    fontSize: '24px',

  },
  logoCRM: {
    paddingLeft: 5,
    float: "right",
    color: '#4AD584',
    fontSize: '24px',
  },
  menuLinks: {
    marginLeft: "22px",
    width: "70%",
    display: "flex",
    position: "relative",
    justifyContent: 'space-between',
    alignItems: 'center'
  },


}));


const AppHeader = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  return (
    <div className={clsx(classes.appBar, {
      [classes.appBarShift]: open,
    })}>
      <List className={classes.headerList}>
        <div className={classes.logo}>
          <div className={classes.logoW}>MARKSEM</div>
          <div className={classes.logoCRM}> CRM</div>
        </div>
        <Btn icon={<HomeWorkIcon/>} title={'Home'} path={'/'}/>
        <Btn icon={<SettingsIcon/>} title={'Settings'} path={'/settings'}/>
        <Search/>
      </List>
      <div className={classes.menuLinks}>
        <List className={classes.list}>
          {routes.filter(r => !r.isHeaders).map((r, index) => (
            <Btn key={index} icon={<r.icon/>} title={r.name} path={r.path}/>))}
        </List>
      </div>
      <div>
        <IconButton onClick={() => setOpen(!open)} className={classes.menuButton}>
          {open === true ? <ExpandLess/> : <ExpandMore/>}
        </IconButton>
      </div>
    </div>
  );
};

export default AppHeader;
