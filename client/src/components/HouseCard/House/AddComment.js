import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(() => ({
  textarea: {
    overflow: "auto",
    outline: "none",
    boxShadow: "none",
    width: '87%',
    minHeight: '130px',
    marginTop: '10px',
    border: '1px solid #B1B4BA',
    backgroundColor: '#F1F6FE',
    fontSize: '14px',
    padding: '25px',
    borderRadius: '15px',
    resize: "none"
  }
}));

export default function MinHeightTextarea() {
  const classes = useStyles();
  const { t } = useTranslation();

  return <TextareaAutosize
    className={classes.textarea}
    aria-label="minimum height"
    rowsMin={1}
    placeholder={t("addComment")}/>;
}
