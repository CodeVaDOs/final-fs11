import React from "react";
import cx from "classnames";
import { Spin } from "antd";

import css from "./styles.module.scss";

const PageLoader = ({ loaded = true, ...res }) => {
  return (
    loaded && (
      <div {...res} className={cx("app-loader", css.apploader)}>
        <Spin size="large"/>
      </div>
    )
  );
};

export default PageLoader;
