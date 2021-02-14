import React from "react";
import ClientTabs from "./components/Information/Tabs";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  div: {
    width: '100%',
    padding:0,
    margin:0
  },

}));

export const ClientPage = () => {
  const classes = useStyles();

  return (
    <>
      <ClientTabs/>
    </>
  );
};