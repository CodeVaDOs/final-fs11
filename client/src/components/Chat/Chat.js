import React, { useEffect, useState } from "react";

import Dialog from "./components/Dialog";
import Sender from "./components/Sender";
import Header from "./components/Header";

import { AppContext } from "./context";
import { getTheme, setTheme } from "./helpers/theme";

const Chat = () => {
  const [message, addMessage] = useState(null);
  const [theme, toggleTheme] = useState(getTheme());

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <div className="container">
        <Header/>
        <Dialog newMessage={message}/>
        <Sender onAddMessage={addMessage}/>
      </div>
    </AppContext.Provider>
  );
};

export default Chat;