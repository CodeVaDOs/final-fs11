import React, { useReducer, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import Item from "./Item";
import Title from "./Title";

import { normalizeDialog } from "./helpers";
import reducer from "./reducer";
import data from "../../data";

import "./styles.css";

const Dialog = ({ newMessage }) => {
  const dialogRef = useRef();
  const [state, dispatch] = useReducer(reducer, {
    messages: data,
  });

  useEffect(() => {
    if (newMessage) {
      dispatch({
        type: "add-message",
        payload: newMessage,
      });

      setTimeout(() => {
        dispatch({
          type: "update-status",
          payload: {
            id: newMessage.id,
            status: "readed",
          },
        });
      }, 1000);
    }
  }, [newMessage]);

  useEffect(() => {
    dialogRef.current.scrollTop = dialogRef.current.scrollHeight;
  }, [state.messages.length]);

  const onRemove = (id) => {
    dispatch({
      type: "remove-message",
      payload: id,
    });
  };

  const normalizedDialog = normalizeDialog(state.messages);

  return (
    <div className="dialog">
      <div className="overflow" ref={dialogRef}>
        {normalizedDialog.map((item) =>
          item.type === "message" ? (
            <Item {...item} key={item.id} onRemove={onRemove}/>
          ) : (
            <Title key={item.id} date={item.date}/>
          )
        )}
      </div>
    </div>
  );
};

Dialog.propTypes = {
  newMessage: PropTypes.shape({
    id: PropTypes.number,
  }),
};

export default Dialog;