import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { pause } from "../../../utils/constants/housesView";

const useStyles = makeStyles({
  root: {
    border: 'none',
    font: 'Roboto'
  },
  table: {
    border: 'none',
    font: 'Roboto'
  },
  tableContent: {
    lineHeight: "39px",
    display: 'flex',
    justifyContent: 'flex-start',
  },
  tableNames: {
    minWidth: '160px',
  },
  tableMeaning: {
    color: '#6E7375'
  }
});

function createData(name, desription, pause) {
  return { name, desription, pause };
}


const rows = [
  createData('Статус ', 'Вільний ', pause),
  createData('Плоша Будинку', "80 m2"),
  createData('Локація', 'Яблуниця Івано-Франківська область, вул. Стальського 34'),
  createData('Комплектація', "Standart"),
];

export default function HouseDesription() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.table}>
        {rows.map((row, index) => (
          <div className={classes.tableContent} key={row.name}>
            <div className={classes.tableNames}>
              {row.name}
            </div>
            <div className={classes.tableMeaning} align="left">
              <span>{row.desription} </span>
              {index === -1 ? '' : row.pause}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
