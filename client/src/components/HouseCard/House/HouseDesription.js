import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { pause } from "../../../utils/constants/housesView";
import { useTranslation } from "react-i18next";

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


export default function HouseDesription({ house }) {
  const classes = useStyles();
  const { t } = useTranslation();

  function createData(name, desription, pause) {
    return { name, desription, pause };
  }


  const rows = [
    createData(t('status'), house.status , pause),
    createData(t('square'), house.area),
    createData(t('location'), house.location),
    createData(t('equipment'), house.equipment),
  ];

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
