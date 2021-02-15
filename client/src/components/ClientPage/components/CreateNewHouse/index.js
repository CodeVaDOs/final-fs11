import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CustomizedDividers from "./Buttons";
import { Slider } from "../../../HouseCard/House/Slider";


const useStyles = makeStyles(() => ({
  div: {
    fontFamily: 'Roboto',
    width: '100%',
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    fontSize: 18,
    color: "#0D0D0D",
  },
  mainContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  leftPart: {
    width: "50%",
    overflow: "hidden",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  rightPart: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  row: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    marginRight: 40
  }
}));

export const CreateNewHouse = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.heading}>
        <h2>Створити новий будинок</h2>
      </div>

      <div className={classes.div}>
        {/*selects part*/}
        <div className={classes.row}>
          <div className={classes.row}>
            <h4> Тип будинку</h4>
            <select name="select">
              <option value="M-2">M-2</option>
              <option value="M-4" selected>M-4</option>
              <option value="M-Hotel">M-Hotel</option>
              <option value="M-Hotel">M-Hotel</option>
            </select>
          </div>
          <div className={classes.row}>
            <h4>Модель</h4>
            <select name="select">
              <option value="value1">Значение 1</option>
              <option value="value2" selected>Значение 2</option>
              <option value="value3">Значение 3</option>
            </select>
          </div>
        </div>

        {/*two parts*/}
        <div className={classes.mainContainer}>
          {/*left photo part*/}
          <div className={classes.leftPart}>
            <Slider/>
          </div>
          {/*right part*/}
          <div className={classes.rightPart}>
            <CustomizedDividers labels={["Екстер\'єр\n", "Інтер\'єр\n", "Планування"]}/>
          </div>
        </div>

      </div>
    </>
  );
};