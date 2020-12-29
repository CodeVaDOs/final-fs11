import React from "react";
import Box from "@material-ui/core/Box";
import { Divider, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  drawerWrap: {
    height: "30px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    cursor: "row-resize",
    background: "#fff",
    borderBottomRightRadius: "20px",
    borderBottomLeftRadius: "20px",
    position: "relative",
    zIndex: 999
  }
});

export const CustomDrawer = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.drawerWrap}>
      <Divider style={{ width: "200px" }}/>
      <Divider style={{ width: "200px" }}/>
    </Box>
  );
};