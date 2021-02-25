import React, { useState } from "react";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from "clsx";

const useStyles = makeStyles(({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  text: {
    marginRight: "20px"
  },
  hidden: {
    color: "#D3D8DA"
  }
}));

export default ({ documentFlow, children }) => {
  const classes = useStyles();
  const [visibility, setVisibility] = useState(true);
  let isSelected = documentFlow === children;

  const changeVisibility = (e) => {
    e.stopPropagation();
    setVisibility(!visibility);
  };

  return (<div className={classes.root}>
    <span className={clsx({
      [classes.text]: true,
      [classes.hidden]: !visibility
    })}>{children}</span>
    {isSelected ? null :
      visibility ? <VisibilityIcon onClick={changeVisibility}/>
        : <VisibilityOffIcon onClick={changeVisibility} className={classes.hidden}/>}
  </div>);
};