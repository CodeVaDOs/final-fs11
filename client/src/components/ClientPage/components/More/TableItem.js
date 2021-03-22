import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import src from "./img.png";
import { TableRow, Typography } from "@material-ui/core";
import CircularStatic from "../../../IncomeCard/CircularProgress";
// const Card = () => (
//   <tr>
//     <td className="fullWidth">
//       <h1>
//         lorem ipsum dorel em quol acee, vion, bloolw, wafeo, feiwjfoiew,
//         foiwejifowefjweoi, fewjoewjfowei, fwefwefewfewfewf
//       </h1>
//     </td>
//   </tr>
// );
const useStyles = makeStyles({
  div: {
    borderRadius: '20px',
  },
  root: {
    padding: 20,
    backgroundColor: '#EEF5FF',
    display: "flex",
    alignItems: "center",
    justifyContent: 'center'
  },
  centered: {
    borderRadius: '20px',
    width: "100%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px',

  },
  img: {
    borderRadius: '10px',
  },
  description: {
    display: "flex",
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'left'
  },
  text: {
    color: '#6E7375',
    fontWeight: 300,
    fontSize: '16px'
  },
  id: {
    color: '#293134',
    fontWeight: 500,
    fontSize: '18px'
  }
});

export const TableItem = () => {
  const classes = useStyles();
  return (
    <div>
      <TableRow className={classes.root}>
        <div className={classes.centered}>
          <img className={classes.img} alt={'d'} src={src}/>
          <div className={classes.description}>
            <Typography className={classes.id}>ID 00170</Typography>
            <Typography className={classes.text}>80 m2</Typography>
            <Typography className={classes.text}>Яблуниця Івано-Франківська область,
              вул. Стальського 34</Typography>
            <Typography className={classes.text}>Standart</Typography>
          </div>
          <div className={classes.description}>
            <Typography><span className={classes.id}>Оренда:</span><span className={classes.text}>18 днів</span></Typography>
            <CircularStatic size={80} thickness={2} progress={"9.573"} color={"#4AD584"}/>
          </div>
        </div>
      </TableRow>
    </div>


  );
};

