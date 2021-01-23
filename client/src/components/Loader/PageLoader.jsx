import React from "react";
import cx from "classnames";

import css from "./styles.module.scss";
import { LinearProgress } from "@material-ui/core";

const PageLoader = ({ loaded = true, ...res }) => {
  return (
    loaded && (
      <div {...res} className={cx("app-loader", css.apploader)}>
        <LinearProgress/>
      </div>
    )
  );
};

export default PageLoader;
