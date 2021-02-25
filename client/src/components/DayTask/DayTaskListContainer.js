import React from "react";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import DayTask from "./DayTask";

const useStyles = makeStyles({
  header: {
    color: "#254A93",
    fontSize: "18px"
  },

  badge: {
    padding: "5px",
    color: "#fff",
    borderRadius: "50%",
    background: "#FA505D",
    fontSize: "12px",
    marginLeft: "10px"
  },
  headerWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

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

const DayTaskListContainer = () => {
  const classes = useStyles();

  return (<>
    <Box className={classes.headerWrap}>
      <h2 className={classes.header}>Задачі на день</h2>
      <Box className={classes.badge}>
        {`${9}+`}
      </Box>
    </Box>
    {dayTasks.map((dayTask, index) =>
      <DayTask key={index} title={dayTask.header} body={dayTask.text}/>)}
  </>);
};

export default DayTaskListContainer;