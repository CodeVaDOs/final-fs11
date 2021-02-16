import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import {photos as images} from "../../utils/constants/photos";
import Slide from "material-auto-rotating-carousel/lib/Slide";
import AutoRotatingCarousel from "material-auto-rotating-carousel/lib/AutoRotatingCarousel";

const useStyles = makeStyles((theme) => ({
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
  buttonR: {
    border: 'none',

    height: "100%",
    padding: "150px",
    "&:hover": {
      backgroundColor: 'black',
      opacity: "10%"
    }
  },
  buttonL: {
    border: 'none',

    height: "100%",
    padding: "150px",
    position: 'relative',
    "&:hover": {
      backgroundColor: 'black',
      opacity: "10%"
    }
  },
  buttonrigt: {
    color: 'white',
    transform: "scale(10)",
    position: 'absolute',
    zIndex: 100
  },
  buttonleft: {
    color: 'white',
    transform: "scale(10)",
    position: 'absolute',
    zIndex: 100
  },
  sizing: {}
}));

export default function TransitionsModal({ open, setIsOpen, photoIndex, setPhotoIndex }) {
  const classes = useStyles();

  const handleClose = () => {
    setIsOpen(false);
  };

  function prev() {
    setPhotoIndex(photoIndex - 1);
  }

  function next() {
    setPhotoIndex(photoIndex + 1);
  }

  return (
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
        <AutoRotatingCarousel
            style={{position: 'relative', width: '100%', height: '100%'}}
            open={open}
            onClose={() => setIsOpen(false)}
            onStart={() => setIsOpen(false)}
            mobile
            autoplay={true}
            style={{position: 'absolute'}}
        >
          {images.map((s, index) => {

                return (
                    <Slide
                        media={<img src={s} alt={'das'}/>}
                    />
                )
              }
          )
          }
        </AutoRotatingCarousel>

    </Modal>
  );
}
