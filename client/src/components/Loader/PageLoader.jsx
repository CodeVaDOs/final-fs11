import React from "react";
import cx from "classnames";

import css from "./styles.module.scss";
import LinearProgress from "@material-ui/core/LinearProgress";

const PageLoader = ({ loaded = true, ...res }) => {
  const [prog, setProg] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProg((oldProgress) => {
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
    loaded && (
      <div {...res} className={cx("app-loader", css.loader, {
        [css.loaderHide]: loaded,
      })}>
        <LinearProgress variant="determinate" value={prog}/>
      </div>
    ));
};

export default PageLoader;
