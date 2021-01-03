import cx from "classnames";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import css from "./styles.module.scss";


const Preloader = ({ loaded }) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (

    <div className={cx("app-loader", css.loader, {
      [css.loaderHide]: loaded,
    })}>
      <LinearProgress variant="determinate" value={progress}/>
    </div>
  );
};

export default Preloader;
