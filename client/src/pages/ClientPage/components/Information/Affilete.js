import { Button } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '10px',
    position: 'relative',
    flexGrow: 1,
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  type: {
    textTransform: 'capitalize',
    position: 'absolute',
    left: "30%",
    width: "115px",
    height: "30px",
    background: "#EEF5FF 0% 0% no-repeat padding-box",
    border: "0.5px solid #ACB5B9",
    borderRadius: "5px",
    opacity: 1,
  },
  typeP: {
    color: "#6E7375",
    textAlign: "left",
    opacity: 1,
  },
  mainText: {
    width: "115px",
    height: "30px",
    position: 'absolute',
    left: "0%",
    textAlign: "left",
    color: "#293134",
    opacity: 1,
    fontSize: '16px',
    fontWeight: '600'
  },
  edit: {
    position: "absolute",
    textTransform: 'capitalize',

    right: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: "#293134",
    width: "115px",
    height: "30px",
    border: "0.5px solid #707070",
    borderRadius: "5px",
    opacity: 1,
  },
  editIcon: {
    position: 'absolute',
    right: 10
  }
}));


export const Affilete = ({ type,status }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <p className={classes.mainText}> {status}</p>
        <Button
          className={classes.type}>
          <p className={classes.typeP}>{type}</p>
        </Button>
        <Button
          className={classes.edit}>
          <p>Edit</p>  <EditIcon className={classes.editIcon}/>
        </Button>
      </div>
    </>
  );
};
Affilete.propTypes = { type: PropTypes.string };
