import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import SendIcon from "@material-ui/icons/Send";
import IconButton from '@material-ui/core/IconButton';

const Sender = ({ onAddMessage }) => {
  const [value, setValue] = useState("");

  const onChange = (event) => setValue(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();

    onAddMessage({
      id: Date.now(),
      avatar:
        "https://sun9-58.userapi.com/c836638/v836638514/867c/SPMigNB8gw0.jpg",
      message: value,
      date: new Date().toISOString(),
      is: "my",
      status: "sended",
    });
    setValue("");
  };

  return (
    <div className='sender_item'>
      <form className="sender" onSubmit={onSubmit}>
        <input
          placeholder="Напишіть повідомлення"
          value={value}
          onChange={onChange}
          required
        />
        <IconButton type="submit" size='small'>
          <SendIcon  className='button'/>
        </IconButton>
      </form>
    </div>

  );
};

Sender.propTypes = {
  onAddMessage: PropTypes.func.isRequired,
};

export default Sender;