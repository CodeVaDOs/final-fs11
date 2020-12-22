import React, { useState } from 'react';
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

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
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/setting">Setting</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/archive">Archive</Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Header;