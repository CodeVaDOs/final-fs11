import React from "react";
import ClientTabs from "./components/Information/Tabs";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {

  },

}));

export const ClientPage = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <ClientTabs/>
      </div>
    </>
  );
};