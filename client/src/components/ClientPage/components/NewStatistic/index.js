import React from "react";
import { HousItem } from "../HousItem";
import { makeStyles } from "@material-ui/core/styles";
import { AddNewStatistic } from "./AddNewStatistic";

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    display: 'flex',
    fontFamily: 'Roboto',
    flexDirection: 'row',
    padding: 10
  },

}));
export const NewStatistic = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HousItem/>
      <AddNewStatistic/>
    </div>

  );
};