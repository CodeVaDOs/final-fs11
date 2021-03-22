import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PickManagerUslugaItem from "./Select";
import CommentManagerUsluga from "./CommentManagerUsluga";

const useStyles = makeStyles(() => ({
  rooot: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-around'
  },

}));

export default function PickUsluga() {
  const classes = useStyles();

  return (
    <div className={classes.rooot}>
      <div>
        <PickManagerUslugaItem/>
      </div>
      <div>
        <CommentManagerUsluga/>
      </div>
    </div>
  );
}
