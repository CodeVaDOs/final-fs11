import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouteLinka } from "react-router-dom";
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    textDecoration: 'none',
    textTransform: 'capitalize',
    display: "flex",
    color: '#6E7375',
    width: 'max-content',
    alignItems: "center",
    position: 'relative',
    backgroundColor: "Transparent",
    backgroundRepeat: "no-repeat",
    border: "none",
    cursor: "pointer",
    overflow: "hidden",
    outline: "none",
    // '&:hover': {
    '&::before': {
      position: "absolute",
      bottom: "-5px",
      left: 0,
      right: 0,
      height: '1px',
      color: '#254A93',
      backgroundColor: '#254A93',
      content: '',
    },
    '&:hover': {
      color: '#254A93',
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
      <Link
        component="button"
        variant="body2"
      >
        <Button
          className={classes.button}
          startIcon={icon}
        >
          {title}
        </Button>
      </Link>
    </RouteLinka>
  );
};
