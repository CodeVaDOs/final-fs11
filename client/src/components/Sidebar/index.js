import React from 'react';
import { Drawer, makeStyles } from "@material-ui/core";
import buttonArrow from "@assert/icons/buttonArrow.svg";
import FastAccessPanel from "../FastAccessPanel";
import SidebarMenuItem from "../SideBarMenuItem";
import { UserChat } from "../Chat/index";
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from '../../components/Calendar';
import { useTranslation } from "react-i18next";
import TaskPanel from '../../components/TasksPanel';
const useStyles = makeStyles(theme => ({
  openHandler: props => ({
    position: 'absolute',
    top: '50px',
    right: props.open ? '418' - 39 / 2 + 'px' : '-' + 39 / 2 + 'px',
    transition: 'right 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
    border: '1px solid #b1b4ba',
    backgroundColor: '#eef5ff',
    borderRadius: '50%',
    height: '39px',
    width: '39px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    outline: 'none',
    zIndex: 12021
  }),
  header: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#254A93',
    textAlign: "center",
    marginTop: "20px"
  },

  collapseButtonImage: props => ({
    transform: props.open ? 'rotate(90deg)' : 'rotate(90deg) rotateX(180deg)',
    transition: '300ms linear',
    marginRight: props.open ? '0' : '15px',
    zIndex: 120122
  }),

  drawer: props => ({
    overflowX: 'hidden',
    width: props.width,
    backgroundColor: '#eef5ff',
    borderLeft: '1px solid #b1b4ba',
    padding: '30px',
    boxSizing: 'border-box',

    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: props.open ? theme.transitions.duration.leavingScreen : theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Index = ( { width, open, handleOpen } )=> {
  const { t } = useTranslation();
  const classes = useStyles({ width, open });
  return (
    <>
      <button className={classes.openHandler} onClick={handleOpen}>
        <img className={classes.collapseButtonImage} src={buttonArrow} alt="button arrow"/>
      </button>
      <Drawer classes={{ paper: classes.drawer }} variant="persistent" open={open} anchor="right">
        <SidebarMenuItem/>
        <Box>
          <Typography className={classes.header}>{t("fastAccess")}</Typography>
          <FastAccessPanel/>
        </Box>
        <TaskPanel/>
        <Box>
          <UserChat/>
        </Box>
        <Box>
          <Typography className={classes.header}>{t("calendarB")}</Typography>
          <Calendar/>
        </Box>
      </Drawer>
    </>
  );
};

export default Index;
