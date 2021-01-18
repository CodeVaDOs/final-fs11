import React from "react";
import ControlNotification from "./ControlNotification";

const dayTasks = [
  {
    header: "Dima Ofsienko",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
      "Integer elementum convallis turpis et posuere. " +
      "Morbi erat ex, cursus id augue at, venenatis fringilla dui. Morbi vitae enim purus. Suspendisse potenti. " +
      "Morbi pulvinar velit a suscipit fermentum. Suspendisse potenti. Fusce quis sem tellus. "
  },
  {
    header: "Masha Ivanova",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
      "Integer elementum convallis turpis et posuere. " +
      "Morbi erat ex, cursus id augue at, venenatis fringilla dui. Morbi vitae enim purus. Suspendisse potenti. " +
      "Morbi pulvinar velit a suscipit fermentum. Suspendisse potenti. Fusce quis sem tellus. "
  }
];

const ControlNotificationContainer = () => {
  return (<>
    {dayTasks.map((dayTask, index) =>
      <ControlNotification key={index} title={dayTask.header} body={dayTask.text}/>)}
  </>);
};

export default ControlNotificationContainer;