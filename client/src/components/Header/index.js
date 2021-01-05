import React, { useState } from 'react';
import { Menu } from "antd";
import { Link } from "react-router-dom";
// import LangSwitcher from "../LangSwitcher";
import translate from "../../i18n/translate";

const Header = () => {
  const [current, setCurrent] = useState('mail');
  const handleClick = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <>
      <div className="logo"/>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="1">
          <Link to="/"> Home </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/setting"> Settings </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/archive"> Archive </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/login"> Login </Link>
        </Menu.Item>
      </Menu>
      {/*<LangSwitcher />*/}
    </>
  );
};

export default Header;
