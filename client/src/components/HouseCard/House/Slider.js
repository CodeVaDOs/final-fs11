import React, { useEffect, useState } from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { photos as images } from "../../../utils/constants/photos";
import TransitionsModal from "../../Modal";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '453px',
    marginRight: '20px',
  },
  gridList: {
    display: "flex",
    justifyContent: 'space-between',
    alignItems: "center",
    flexDirection: 'row',
    transform: 'translateZ(0)',
    height: '100px',

  },
  gridListitem: {
    maxHeight: "110px",
    borderRadius: '10%',
    width: '140px',

  },
  gridListitemShadowImg: {
    maxHeight: "110px",
    borderRadius: '10%',
    opacity: '74%',
    position: "relative",
    width: '140px',

  },
  countOfPfoto: {
    position: 'absolute',
    top: '10px',
    right: '60px',
    color: 'white',
    fontSize: '24px'
  },
  bigPhoto: {
    marginBottom: '10px',
    borderRadius: '5%',
    width: "100%",
    maxHeight: '312px'
  }
}));

export const Slider = () => {
  const classes = useStyles();
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (photoIndex > images.length - 1) {
      setPhotoIndex(0);
    }
    if (photoIndex < 0) {
      setPhotoIndex(images.length - 1);
    }
  }, [photoIndex, setPhotoIndex]);

  function showPhoto(index) {
    setPhotoIndex(index);
  }

  function openModal() {
    setIsOpen(true);
  }


  return (
    <div className={classes.root}>
      <img className={classes.bigPhoto}
        src={photoIndex ? images[photoIndex] : images[0]} alt={'das'}/>
      <div className={classes.gridList}>
        <img
          className={classes.gridListitem}
          onClick={() => {
            showPhoto(0);
          }}
          src={images[0]} alt={"1"}/>
        <img
          className={classes.gridListitem}
          onClick={() => {
            showPhoto(1);
          }} src={images[1]} alt={"1"}/>
        <div>
          <img
            className={classes.gridListitemShadowImg}
            onClick={openModal}
            src={images[2]}
            alt={"2"}/>
          <p className={classes.countOfPfoto}>+25</p>
        </div>


      </div>
      {isOpen ? <TransitionsModal
        open={isOpen}
        setIsOpen={setIsOpen}
        photoIndex={photoIndex}
        setPhotoIndex={setPhotoIndex}
      /> :
        ""
      }
      {/*{isOpen && (*/}
      {/*  <Lightbox*/}
      {/*    mainSrc={images[photoIndex]}*/}
      {/*    nextSrc={images[(photoIndex + 1) % images.length]}*/}
      {/*    prevSrc={images[(photoIndex + images.length - 1) % images.length]}*/}
      {/*    onCloseRequest={() => setIsOpen(false)}*/}
      {/*    onMovePrevRequest={() =>*/}
      {/*      setPhotoIndex((photoIndex + images.length - 1) % images.length)*/}
      {/*    }*/}
      {/*    onMoveNextRequest={() =>*/}
      {/*      setPhotoIndex((photoIndex + 1) % images.length)*/}
      {/*    }*/}
      {/*  />*/}
      {/*)}*/}
    </div>
  );
};
