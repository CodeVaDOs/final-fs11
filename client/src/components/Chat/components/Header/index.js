import React from "react";
import UserInfo from "./UserInfo";
// import Theme from "./Theme";

import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <UserInfo/>
      {/*<Theme/>*/}
    </div>
  );
};

export default Header;