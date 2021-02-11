import React from "react";
import MyHouses from "./MyHouses";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import MessageIcon from "@material-ui/icons/Message";
import SimpleSelect from "./Select";
import Flex from "react-calendar/dist/umd/Flex";

const useStyles = makeStyles(() => ({
  root: {
    width:"90%",
    backgroundColor: "white",
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  houseCard: {
    height: '100%',
    margin: '4px',
    boxSizing: 'border-box',
    padding: "10px",
    borderRadius: '20px',
    minWidth: '182px',
    maxWidth: '182px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: "0 4px 4px rgba(0,0,0,0.19), 0 4px 4px rgba(0,0,0,0.23)",

  },
  content: {
    height: '223px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
    margin: '10px',
  },
  img: {
    width: "100%",
    borderRadius: '18px',
  },
  houseCardBody: {

    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
    lineHeight: '28px'
  },
  cardContract: {
    fontSize: '12px',
    display: 'inline',
    opacity: "60%",
  },
  cardId: {
    display: 'inline',
    fontSize: '18px',
  },
  inline: {
    display: 'inline',
  },
  locationData: {
    display: 'inline',
    fontSize: '12px',
    lineHeight: "20px",


  },
  btnWrite: {
    textTransform: 'capitalize',
    marginTop: 20,
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
  btnSend: {
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
  flexFix: {
    width: '700px',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}));

export const ClientHouses = ({ HouseIdx, houseToState, rent }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {rent ?
        <div className={classes.flexFix}>
          <h2 style={{ fontFamily: "Roboto", fontSize: '18px' }}>Створити документ</h2>
          <Flex direction={"row"} style={{ alignItems: 'center',justifyContent:"center" }}>
            <h3 style={{ fontFamily: "Roboto", fontSize: '14px' }}>Показати</h3>
            <SimpleSelect option={['Всі будинки', 'Вільні', 'Орендовані']}/>
          </Flex>
        </div>
        :
        null}
      <MyHouses
        onHouseClick={houseToState}
        data={HouseIdx}
        rent={rent}/>
      {rent ?
        <div>
          <div className={classes.flexFix}>
            <Typography>Надіслати обраний будинок орендарю для огляду</Typography>
            <Button className={classes.btnSend}>
              Надiслати
            </Button>
          </div>
          <Button className={classes.btnWrite}>
            Написати <MessageIcon className={classes.editIcon}/></Button>
        </div> :
        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
      }
    </div>
  );
};