import React from "react";
import { Map } from "@commodityvectors/react-mapbox-gl";


export const BaseMap = ({ children, ...props }) => {
  return (
    <Map
      mapStyle={"mapbox://styles/mapbox/streets-v10"}
      accessToken="pk.eyJ1IjoiY29tbW9kaXR5dmVjdG9ycyIsImEiOiJjamR3eWFvd3owcTUwMzRzNmg1eXJjYWlzIn0.QESIireyCutiiFOTlI4y5w"
      {...props}
    >
      {children}dasdsadas
    </Map>

  );
};



