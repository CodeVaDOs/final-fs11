import React, { useContext } from "react";
import { AppContext } from "../../../context";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import "./styles.css";

const Theme = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  const onToggleTheme = (event) => {
    const { theme } = event.currentTarget.dataset;
    toggleTheme(theme);
  };

  return (
    <div
      className="theme"
      data-theme={theme === "light" ? "dark" : "light"}
      onClick={onToggleTheme}
    >
      {theme === "light" ? (
        <IoIosMoon size={20} className="dark"/>
      ) : (
        <IoIosSunny className="yellow" size={20}/>
      )}
    </div>
  );
};

export default Theme;