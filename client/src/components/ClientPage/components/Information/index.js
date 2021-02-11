import { Affilete } from "./Affilete";
import { PaymentStatus } from "./PaymentStatus";
import { Text } from "./text";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
  root: {
    // borderLeft: '1px solid black',
    height:"500px"
  },
}));


export const Information = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Affilete status={'Affilete'} type={'instagram'}/>
        <PaymentStatus status={'Статус Платiжа'} type={'Виконаний'}/>
        <Text/>
      </div>

    </>
  );
};