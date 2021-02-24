import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Slider } from "../../../HouseCard/House/Slider/Slider";
import HouseDesription from "../../../HouseCard/House/HouseDesription";
import { useTranslation } from "react-i18next";
import { Button } from "@material-ui/core";
import MessageIcon from "@material-ui/icons/Message";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: '15px',
    marginTop: '5px',
    font: 'Roboto'
  },
  topSide: {
    width: '100%',
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: '15px',
    marginTop: '15px',
    font: 'Roboto'
  },


  leftSide: {
    width: '100%',
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center'
  },

  rightSide: {
    marginTop: '-200px',
    marginRight: '20px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  houseIdInfo: {
    width: '100%',
    display: 'flex',
    alignItems: "center",
    justifyContent: 'space-between'
  },
  id: {
    fontSize: '24px',
    color: '#9DC2FF',
  },
  houseDescription: {
    width: '100%',
    display: 'flex',
    alignItems: "center",
    justifyContent: 'space-between'
  },
  houseIdInfoButtonBlock: {
    display: 'flex',
    alignItems: "center",
    justifyContent: 'space-between'
  },
  ExportButton: {
    marginLeft: '10px',
    textTransform: 'none',
    textDecoration: 'none',
    color: '#464C4E',
    border: '1px solid #6E7375', borderRadius: '10px',
    padding: '20px',
    height: '35px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },


  houseRentStatisticBlock: {
    margin: '20px',
    borderRadius: '20px',
    paddingTop: '5px',
    boxShadow: "1px 2px 2px rgba(0,0,0,0.19), 1px 2px 2px rgba(0,0,0,0.23)",
    padding: '0px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: 'space-between',
  },
  diagramBlock: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: 'space-evenly',
    minHeight: "190px"
  },
  diagramBody: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'flex-start',
  },

  roundOfStatistic: {
    margin: '10px',
    width: '100px',
    height: '100px',
  },
  persentsBlock: {
    lineHeight: '8px'
  },
  moneyInDollars: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '32px',
    fontWeight: 400
  },
  days: {
    fontSize: '16px',
    fontWeight: 400
  },
  persents: {
    fontSize: '12px'
  },
  persentsCount: {
    color: '#4AD584'
  },
  persentsFromTo: {
    color: '#99A0A3'
  },
  statisticRent: {

    fontSize: '16px',
    color: '#293134',
    marginLeft: '30px',
    marginTop: '20px',
    width: "100%"
  },

  textBlock: {
    marginLeft: 40,
  },
  title: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 18,
    color: '#293134'
  },
  texte: {
    fontSize: 16,
    color: '#6E7375'

  },
  btns: {
    fontSize: "14px",
    color: "#B1B4BA",
    textAlign: "left",
    font: "normal normal normal 14px/19px Roboto",
    letterSpacing: "-0.07px",
    opacity: 1,
    display: 'flex',
    justifyContent: 'space-between'
  },
  btnSend: {
    textTransform: 'capitalize',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    color: 'white',
    textDecoration: 'none',
    backgroundColor: '#254A93',
    width: "143px",
    height: "30px",
    background: "#EEF5FF 0% 0% no-repeat padding-box",
    border: "0.5px solid #ACB5B9",
    borderRadius: "5px",
    opacity: 1,
  },
  btnEdit: {
    textTransform: 'capitalize',

    display: 'flex',
    alignItems: 'center',
    color: "#293134",
    width: "115px",
    height: "30px",
    border: "0.5px solid #707070",
    borderRadius: "5px",
    opacity: 1,
  },
  editIcon: {
    padding: 3,
    position: 'absolute',
    right: 10
  },
  subGrid: {
    marginTop: 20
  },

}));

export const House = ({ house }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <div className={classes.topSide}>
        <div className={classes.leftSide}>
          <Slider/>
        </div>

        <div className={classes.rightSide}>
          <div className={classes.houseIdInfo}>
            <p className={classes.id}>{t('id')} {house.id}</p>
          </div>
          <div className={classes.houseDescription}>
            <HouseDesription house={house}/>
          </div>

          <div className={classes.btns}>
            <Button className={classes.btnSend}>
              Написати <MessageIcon className={classes.editIcon}/></Button>
            <Button className={classes.btnEdit}>
              Edit <EditIcon className={classes.editIcon}/>
            </Button>
          </div>

        </div>

      </div>
    </div>
  );
};