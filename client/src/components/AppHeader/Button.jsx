import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouteLinka } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    fontSize: '18px',
    margin: theme.spacing(1),
    textDecoration: 'none',
    background: "transparent",
    border: "none",
    textTransform: 'capitalize',
    display: "flex",
    color: '#6E7375',
    width: 'max-content',
    alignItems: "center",
    position: 'relative',
    // '&:hover': {
    '&:hover': {
      color: '#254A93',
      '&::after': {
        position: "absolute",
        bottom: "-5px",
        left: 0,
        right: 0,
        height: '10px',
        color: '#6E7375',
        content: '',
      },
    },
    '&:active': {
      color: '#254A93',
    },

    // }
  },

}));

export const Btn = props => {
  const classes = useStyles();
  const { path, title, icon } = props;
  return (
    <RouteLinka
      variant="body2"
      to={path}
    >
      <Button
        startIcon={icon}
        className={classes.button}
      >
        {title}
      </Button>
    </RouteLinka>
  );
};
