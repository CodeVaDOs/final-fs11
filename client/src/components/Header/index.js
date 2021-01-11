import React, { useState } from 'react';
import { Menu } from "antd";
import { Link } from "react-router-dom";
// import LangSwitcher from "../LangSwitcher";
import { useTranslation } from "react-i18next";
const Header = () => {
  const { t } = useTranslation();
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
          <Link to="/">{t('menuHome')}</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/setting">{t('menuSettings')}</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/archive">{t('menuArchive')}</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/login">{t('signInHere')}</Link>
        </Menu.Item>
      </Menu>
      {/*<LangSwitcher />*/}
    </>
  );
};

export default Header;
