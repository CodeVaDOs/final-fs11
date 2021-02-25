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
    margin: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: 'center'
  },
  centered: {
    margin: 20,
    borderRadius: '20px',
    width: "100%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',

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
  text: {}
});

export const TableItem = () => {
  const classes = useStyles();
  return (
    <div>
      <TableRow className={classes.root}>
        <div className={classes.centered}>
          <img className={classes.img} alt={'s'} src={src}/>
          <div className={classes.description}>
            <Typography className={classes.id}>ID 00170</Typography>
            <Typography className={classes.text}>80 m2</Typography>
            <Typography className={classes.text}>Яблуниця Івано-Франківська область,
              вул. Стальського 34</Typography>
            <Typography className={classes.text}>Standart</Typography>
          </div>
          <div className={classes.description}>
            <Typography>Оренда: 18 днів</Typography>
            <CircularStatic size={80} thickness={2} progress={"9.573"} color={"#4AD584"}/>
          </div>
        </div>
      </TableRow>
    </div>


  );
};

