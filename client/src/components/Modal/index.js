import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
// import { photos as images } from "../../utils/constants/photos";

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    border: 'none'
  },
  border: {
    border: 'none'
  },
  paper: {
    border: 'none',
    width: "100%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100rem',
    lineHeight: '100%',
  },

}));

export default function TransitionsModal({ open, setIsOpen }) {
  const classes = useStyles();

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        saddasd
      </Modal>
    </>

  );
}
