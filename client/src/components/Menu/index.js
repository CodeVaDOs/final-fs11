import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import { Link } from "react-router-dom";
import "../Menu/menu.css";

export const Menu = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const rightMenuAnimation = useSpring({
    transform: menuVisible ? `translateY(0%)` : `translateY(-80%)`
  });

  function visibleHandler() {
    setMenuVisible(!menuVisible);
  }

  return (
    <>
      <animated.div className="menu" style={rightMenuAnimation}>
        <nav>
          <ul className="menu-list ">
            <li className="menu-list-item">
              <Link to="/">Home</Link>
            </li>
            <li className="menu-list-item">
              <Link to="/setting">Setting</Link>
            </li>
            <li className="menu-list-item">
              <Link to="/archive">Archive</Link>
            </li>
          </ul>
        </nav>
        <button
          className="menu-button"
          onClick={visibleHandler}
        >
          {menuVisible ? "\\/" : "/\\"}
        </button>
      </animated.div>
      <div>State : {`${menuVisible}`}</div>

    </>


  );
};

