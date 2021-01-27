import React from 'react';
import { Drawer, makeStyles } from "@material-ui/core";
import buttonArrow from "@assert/icons/buttonArrow.svg";
import FastAccessPanel from "../FastAccessPanel";
import SidebarMenuItem from "../SideBarMenuItem";
import { UserChat } from "../Chat/index";

const useStyles = makeStyles(theme => ({
  openHandler: props => ({
    position: 'absolute',
    top: '50px',
    right: props.open ? '416' - 39 / 2 + 'px' : '-' + 39 / 2 + 'px',

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

    zIndex: 1201
  }),

  collapseButtonImage: props => ({
    transform: props.open ? 'rotate(90deg)' : 'rotate(90deg) rotateX(180deg)',
    transition: '300ms linear',
    marginRight: props.open ? '0' : '15px'
  }),

  drawer: props => ({
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

const Index = ({ width, open, handleOpen }) => {
  const classes = useStyles({ width, open });
  return (
    <>
      <button className={classes.openHandler} onClick={handleOpen}>
        <img className={classes.collapseButtonImage} src={buttonArrow} alt="button arrow"/>
      </button>

      <Drawer classes={{ paper: classes.drawer }} variant="persistent" open={open} anchor="right">
        <SidebarMenuItem/>
        <FastAccessPanel/>
        <UserChat/>
      </Drawer>
    </>
  );
};

export default Index;
