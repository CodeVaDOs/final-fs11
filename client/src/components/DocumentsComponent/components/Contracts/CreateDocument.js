import React from "react";
import { DocumentItem } from "../../../ClientPage/components/Documents/DocumentItem";
import { Documents } from "../../../ClientPage/components/Documents";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    // borderLeft: '1px solid black',
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'flex-start',
    textTransform: 'capitalize',
  },
  margin: {
    marginLeft: 40
  }

}));
export const CreateDocument = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DocumentItem
        title={'Контракт 23_03_2020 H013…Овсієнко.pdf'}
        shortDescription={'Договір о довгостроковій...'}/>
      <div className={classes.margin}>
        <Documents visible={true}/>

      </div>
    </div>
  );
};