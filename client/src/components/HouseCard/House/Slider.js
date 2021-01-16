import React, { useState } from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import "react-image-lightbox/style.css";
import { photos as images } from "../../../utils/constants/photos";
import Lightbox from "react-image-lightbox";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: '10px',
    marginRight: '20px'
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',

  },
  gridListitem: {
    maxHeight: "90px",
    marginRight: '10px',
    borderRadius: '10%',
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

  function openPhoto(index) {
    setIsOpen(true);
    setPhotoIndex(index);
  }

  return (
    <div className={classes.root}>
      <img
        className={classes.bigPhoto}
        src={photoIndex ? images[photoIndex] : images[0]}
        alt={'Фото дома'}
      />
      <div
        className={classes.gridList}
        cols={2.5}>
        {images.map((tile, index) => {
          return (
            <div key={tile}>
              <img
                className={classes.gridListitem}
                onClick={() => {
                }}
                src={tile[0]}
                alt={tile[0]}/>
              <img
                className={classes.gridListitem}
                onClick={() => {
                }}
                src={tile[1]}
                alt={tile[1]}/>
            </div>
          );
        })}
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};
