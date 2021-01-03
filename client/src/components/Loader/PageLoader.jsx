import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

const PageLoader = ({ loaded = true }) => {
  return (
    loaded && (
      <div>
        <LinearProgress variant="determinate" value={100}/>
      </div>
    ));
};

export default PageLoader;
