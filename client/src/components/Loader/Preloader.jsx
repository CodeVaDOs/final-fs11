import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

const Preloader = () => {
  return (
    <div>
      <LinearProgress variant="determinate" value={50}/>
    </div>
  );
};

export default Preloader;
