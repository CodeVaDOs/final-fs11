import React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Transaction from "./Transaction";
import HeadPanel from "./HeadPanel";

const useStyles = makeStyles(({
  root: {
    flexGrow: 1,
    margin: "20px 0"
  },
  documentCard: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 1px 3px #00000033",
    borderRadius: "20px"
  }
}));

const testData = [
  {
    name: "Розрахунок вартості витрат",
    fromDate: "2020-04-21",
    toDate: "2020-04-22"
  },
  {
    name: "Розрахунок вартості витрат",
    fromDate: "2020-04-21",
    toDate: "2020-04-22"
  },
  {
    name: "Розрахунок вартості витрат",
    fromDate: "2020-04-21",
    toDate: "2020-04-22"
  },
  {
    name: "Розрахунок вартості витрат",
    fromDate: "2020-04-21",
    toDate: "2020-04-22"
  },
  {
    name: "Розрахунок вартості витрат",
    fromDate: "2020-04-21",
    toDate: "2020-04-22"
  },
  {
    name: "Розрахунок вартості витрат",
    fromDate: "2020-04-21",
    toDate: "2020-04-22"
  },
  {
    name: "Розрахунок вартості витрат",
    fromDate: "2020-04-21",
    toDate: "2020-04-22"
  },
  {
    name: "Розрахунок вартості витрат",
    fromDate: "2020-04-21",
    toDate: "2020-04-22"
  },
  {
    name: "Розрахунок вартості витрат",
    fromDate: "2020-04-21",
    toDate: "2020-04-22"
  }
];

export default () => {
  const classes = useStyles();

  return (
    <>
      <HeadPanel/>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {testData.map((doc, index) =>
            <Grid key={index} item xs={4}>
              <Transaction name={doc.name} fromDate={doc.fromDate} toDate={doc.toDate}/>
            </Grid>)}
        </Grid>
      </div>
    </>
  );
};