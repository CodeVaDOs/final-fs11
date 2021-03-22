import React from "react";

import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import MessageIcon from '@material-ui/icons/Message';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '50px',
    display: "flex",
    flexDirection: 'column',
  },
  text: {
    fontSize: "14px",
    color: "#B1B4BA",
    textAlign: "left",
    font: "normal normal normal 14px/19px Roboto",
    letterSpacing: "-0.07px",
    opacity: 1,
  },
  btns: {
    fontSize: "14px",
    color: "#B1B4BA",
    textAlign: "left",
    font: "normal normal normal 14px/19px Roboto",
    letterSpacing: "-0.07px",
    opacity: 1,
    display: 'flex',
    justifyContent: 'space-between'
  },
  btnSend: {
    textTransform: 'capitalize',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    color: 'white',
    textDecoration: 'none',
    backgroundColor: '#254A93',
    width: "143px",
    height: "30px",
    background: "#EEF5FF 0% 0% no-repeat padding-box",
    border: "0.5px solid #ACB5B9",
    borderRadius: "5px",
    opacity: 1,
  },
  btnEdit: {
    textTransform: 'capitalize',

    display: 'flex',
    alignItems: 'center',
    color: "#293134",
    width: "115px",
    height: "30px",
    border: "0.5px solid #707070",
    borderRadius: "5px",
    opacity: 1,
  },
  editIcon: {
    padding: 3,
    position: 'absolute',
    right: 10
  }

}));


export const Text = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Typography>
          <p
            className={classes.text}
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Typography>
        <div className={classes.btns}>
          <Button className={classes.btnSend}>
            Написати <MessageIcon className={classes.editIcon}/></Button>
          <Button className={classes.btnEdit}>
            Edit <EditIcon className={classes.editIcon}/>
          </Button>
        </div>
      </div>
    </>
  );
};
