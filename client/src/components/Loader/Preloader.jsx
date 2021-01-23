import React from "react";
import cx from "classnames";

import css from "./styles.module.scss";
import { LinearProgress } from "@material-ui/core";

const Preloader = ({ loaded }) => {
  return (
    <div
      className={cx("app-loader", css.loader, {
        [css.loaderHide]: loaded,
      })}
    >
      <LinearProgress/>
    </div>
  );
};

export default Preloader;
