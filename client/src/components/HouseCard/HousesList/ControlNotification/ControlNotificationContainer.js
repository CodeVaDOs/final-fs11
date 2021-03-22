import React from "react";
import ControlNotification from "./ControlNotification";

const ControlNotificationContainer = ({notifications}) => {
  return (<>
    {notifications?.map((notification, index) =>
      <ControlNotification key={index} title={notification.title} body={notification.text} importance={notification.importance}/>)}
  </>);
};

export default ControlNotificationContainer;