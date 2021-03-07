import React from "react";
import Slider from "react-slick";
import { photos as images } from "../../../../utils/constants/photos";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    margin: "0 auto"
  }
}));

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", transform: "scale(2)", marginLeft: '50px' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", transform: "scale(2)", marginRight: '50px' }}
      onClick={onClick}
    />
  );
}

export default function SimpleSlider({ images }) {
  const classes = useStyles();

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>
  };
  return (
    <>
      <Slider {...settings}>
        {images.map((img, i) => (
          <img
            key={i}
            className={classes.img}
            src={img}
            alt={i}/>
        ))}
      </Slider>
    </>
  );
}