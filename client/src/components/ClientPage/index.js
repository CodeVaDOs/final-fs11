import React from "react";
import ClientTabs from "./components/Information/Tabs";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    clearfix: {
        width: "97%",
        marginLeft: -10
    }

}));

export const ClientPage = () => {
  const classes = useStyles();

  return (
      <>
          <div className={classes.clearfix}>
              <ClientTabs/>
          </div>
      </>
  );
};