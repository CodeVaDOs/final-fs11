import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Task from "./Task";

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gridColumnGap: '10px',
    gridRowGap: '10px',
  },
});

const TaskList = ({ taskList }) => {
  const classes = useStyles();

  const list = taskList.map(({ header, body, colorButton, url }, index) =>
    <Task header={header} key={index} url={url} colorButton={colorButton}>{body}</Task>);

  return (
    <div className={classes.container}>
      {list}
    </div>
  );
};

export default React.memo(TaskList);
