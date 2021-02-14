import React from "react";
import { DocumentItem } from "../../../../ClientPage/components/Documents/DocumentItem";
import { Documents } from "../../../../ClientPage/components/Documents";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
const useStyles = makeStyles(() => ({
  root: {
    backgroundColor:"white",
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
    <Box className={classes.root}>
      <DocumentItem
        title={'Контракт 23_03_2020 H013…Овсієнко.pdf'}
        shortDescription={'Договір о довгостроковій...'}/>
      <Box className={classes.margin}>
        <Documents visible={true}/>
      </Box>
    </Box>
  );
};