import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import { DocSvg } from "./DocSvg";
import EditIcon from "@material-ui/icons/Edit";
import GetAppIcon from '@material-ui/icons/GetApp';
import PrintIcon from '@material-ui/icons/Print';

const useStyles = makeStyles(() => ({
  root: {
    overflow: 'hidden',
    marginTop: 5,
    marginBottom: 5,
    marginRight: 5,
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    top: "436px",
    left: "335px",
    minHeight: 170,
    width: 290,
    maxHeight: 170,
    height: "170px",
    background: "#fff",
    boxShadow: "0px 1px 3px #00000033",
    borderRadius: "20px",
    opacity: 1,
  },
  svg: {
    top: "456px",
    left: "355px",
    width: "96px",
    height: " 130px",
    background: "transparent url('img/file (3).png') 0% 0% no-repeat padding-box",
    opacity: 1,
  },
  div: {
    display: 'block',
    position: 'relative'
  },
  format: {
    position: "absolute",
    top: -100,
    right: 28
  },
  documentDescription: {
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    padding: 0,
    margin: 0,
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: "normal normal medium 14px/19px Roboto",
    color: "#464C4E",
    opacity: 1,
    fontWeight: 500

  },
  shortDescription: {
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Roboto',
    fontSize: "12px",
    color: "#6E7375",
    opacity: 1,
    fontWeight: 300,
  },
  btnClick: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttonBlock: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
  },
  btnEdit: {
    textTransform: 'capitalize',
    display: 'flex',
    alignItems: 'center',
    color: "#6E7375",
    width: "115px",
    height: "30px",
    border: "0.5px solid #707070",
    borderRadius: "5px",
    opacity: 1,
    '&:hover': {
      backgroundColor: '#254A93',
    },
  },
  editIcon: {
    padding: 3,
    position: 'absolute',
    right: 10
  },
  blue: {
    transform: "scale(0.9)",
    color: '#254A93'
  },
  btnWidth: {
    cursor: "pointer",
    width: '5vh',
    height: '25px',
    padding: 0,
    margin: 0,
  }
}));

export const DocumentItem = ({ title, shortDescription, type }) => {
  const classes = useStyles();
  const edit = (
    <Button className={classes.btnEdit}>
      Edit <EditIcon className={classes.editIcon}/>
    </Button>
  );
  const buttonBlock = (<div className={classes.buttonBlock}>
    <a className={classes.btnWidth}>
      <EditIcon className={classes.blue}/>
    </a>

    <a className={classes.btnWidth}>
      <GetAppIcon className={classes.blue}/>
    </a>

    <a className={classes.btnWidth}>
      <PrintIcon className={classes.blue}/>
    </a>

  </div>);
  return (
    <div className={classes.root}>
      <DocSvg/>
      <div className={classes.documentDescription}>
        <div className={classes.title}>{title}</div>
        <div className={classes.shortDescription}>{shortDescription}</div>
        <div className={classes.btnClick}>
          {type === 'edit' ?
            edit :
            buttonBlock
          }
        </div>
      </div>
    </div>
  );
};
