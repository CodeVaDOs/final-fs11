import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
// import { photos as images } from "../../utils/constants/photos";

const useStyles = makeStyles(() => ({
  modal: {
    margin: "0 auto",
    width: 800,
    height: 500,
  },
  border: {
    border: 'none'
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
        <div><SimpleSlider/></div>
      </Modal>
    </>

  );
}
