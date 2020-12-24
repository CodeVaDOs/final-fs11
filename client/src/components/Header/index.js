import React from 'react';
import { Menu } from "../Menu";
import useResizeAware from "react-resize-aware";

const Header = () => {
  const [resizeListener] = useResizeAware();

  return (
    <>
      {resizeListener}
      <Menu/>
    </>
  );
};

export default Header;