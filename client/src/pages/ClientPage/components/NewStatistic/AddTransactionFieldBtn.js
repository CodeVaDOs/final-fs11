import React from "react";
import Button from "@material-ui/core/Button";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(() => ({
  root: {
    color: "#254A93"
  }
}));

export const AddTransactionField = ({ handler, transactionType }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Button
      className={classes.root}
      onClick={handler(transactionType)}>
      {t("Додати нову колонку")}
      <AddIcon/>
    </Button>
  );
};
