import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CustomizedDividers from "./Buttons";
import { Slider } from "../../../HouseCard/House/Slider";
import { Typography } from "@material-ui/core";
import CheckboxLabels from "./Checkboxes";


const useStyles = makeStyles(() => ({
  div: {
    fontFamily: 'Roboto',
    width: '100%',
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    display: 'flex',
    justifyContent: "center",
    width: "100%",
    fontSize: 18,
    color: "#0D0D0D",

  },
  mainContainer: {
    flexWrap: "nowrap",
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  leftPart: {
    display: "flex",
    flexDirection: "column",
  },
  rightPart: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  row: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    marginBottom: 10
  },
  text: {
    fontFamily: "Roboto",
    fontSize: "16px",
    color: "grey"
  },
  column: {
    textTransform: "uppercase",
    fontWeight: 500,
    fontSize: 20,
    display: "flex",
    margin: 5,
    flexDirection: "column",

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
            <div>
              <Typography className={classes.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti ea fugit harum maxime quidem rerum tempore ullam veritatis voluptatem.
              </Typography>
            </div>
            <div>
              <Typography className={classes.text}>
                <h2>Інтер'єр у будинку</h2>

              </Typography>
              <CustomizedDividers labels={["Барокко", "Барокко", "Барокко", "Барокко"]}/>
            </div>
            <div className={classes.row}>

              <div className={classes.column}>
                <Typography>Колір меблів та текстилю</Typography>
                <CheckboxLabels/>
              </div>
              <div className={classes.column}>
                <Typography>Колір фасаду стін</Typography>
                <CheckboxLabels/>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  )
    ;
};