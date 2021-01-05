import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";


const useStyles = makeStyles({
  card: {
    padding: '20px',
    borderRadius: '20px',
    background: '#fff',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  },

  taskHeader: {
    color: '#293134',
    fontSize: '16px',
    margin: '0',
  },

  taskBody: {
    color: '#b1b4ba',
    fontSize: '12px',
    margin: '10px 0 0'
  },

  taskButton: props => ({
    borderRadius: '5px',
    background: props.colorButton,
    padding: '5px 18px 6px',
    color: '#fff',
    fontSize: '14px',
    margin: '0 0 0 auto',
  })
});

const Task = ({ header, children, url, colorButton }) => {
  const classes = useStyles({ colorButton });

  return (
    <Card className={classes.card}>
      <h2 className={classes.taskHeader}>{header}</h2>
      <p className={classes.taskBody}>{children}</p>
      <button className={classes.taskButton}>Детально</button>
    </Card>
  );
};

export default React.memo(Task);
