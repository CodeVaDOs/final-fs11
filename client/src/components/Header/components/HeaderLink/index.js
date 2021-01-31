import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";


const useStyles = makeStyles({
  link: props => ({
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    boxSizing: 'border-box',
    borderBottom: props.isActive && !props.isMain ? '1px solid #254A93' : '1px solid #eef5ff',

    margin: props.isMain ? '0 auto' : '0 1%'
  }),

  text: props => ({
    margin: '0 0 0 10px',
    color: props.isActive ?  '#254A93' : '#6e7375',
    fontSize: '18px',
  }),

  icon: props => ({
    width: '20px',
    height: '20px',
    filter: props.isActive ? 'brightness(0%) invert(20%) sepia(86%) saturate(1394%) hue-rotate(203deg) brightness(93%) contrast(88%)': 'none'
  })
});

const Index = ({ to, icon, text, isMain }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const classes = useStyles({ isActive, isMain });

  return (
    <Link className={classes.link} to={to}>
      <img className={classes.icon} src={icon} alt="link icon"/>
      <p className={classes.text}>{text}</p>
    </Link>
  );
};

export default React.memo(Index, (prevProps, nextProps) => {
  return prevProps.isActive !== nextProps.isActive;
});
