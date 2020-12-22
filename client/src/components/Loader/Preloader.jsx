import React from "react";
import cx from "classnames";
import { Spin } from "antd";

import css from "./styles.module.scss";

const Preloader = ({ loaded }) => {
  return (
    <div
      className={cx("app-loader", css.loader, {
        [css.loaderHide]: loaded,
      })}
    >
      <Spin size="large"/>
    </div>
  );
};

export default Preloader;
