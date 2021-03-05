import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FilterSelectItem from "../FilterSelectItem";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(({
  root: {
    flexGrow: 1,
    marginTop: "40px"
  },
  formControl: {
    boxShadow: "0px 2px 4px #00000029",
    width: "90%",
    margin: "0",
    padding: "0"
  },
  select: {
    fontWeight: "medium"
  },
  sortListWrap: {
    display: "flex"
  },
  sortText: {
    fontSize: "16px",
    marginRight: "20px",
    fontWeight: "500"
  },
  addButton: {
    background: "#254A93",
    color: "white"
  }
}));

const options = [
  "Показати документообіг",
  "Акти виконаних робіт",
  "Загальновиробничі витрати",
  "Ресурсні кошториси й відомості",
  "Розрахунки вартості ресурсів"
];

export default () => {
  const classes = useStyles();
  const [documentFlow, setDocumentFlow] = useState("Показати документообіг");
  const [sortOption, setSortOption] = useState("По даті");

  const handleChangeFilter = (event) => {
    setDocumentFlow(event.target.value);
  };

  const handleChangeSort = (event) => {
    setSortOption(event.target.value);
  };

  return (<div className={classes.root}>
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <FormControl variant="outlined" className={classes.formControl}>
          <Select
            value={documentFlow}
            onChange={handleChangeFilter}
            className={classes.select}
          >
            {options.map((opt, idx) => <MenuItem value={opt} key={idx}>
              <FilterSelectItem documentFlow={documentFlow}>{opt}</FilterSelectItem>
            </MenuItem>)}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <div className={classes.sortListWrap}>
          <p className={classes.sortText}>Сортувати</p>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              value={sortOption}
              onChange={handleChangeSort}
              className={classes.select}
            >
              <MenuItem value="По даті">По даті</MenuItem>
              <MenuItem value="Останні додані">Останні додані</MenuItem>
              <MenuItem value="По даті документу">По даті документу</MenuItem>
              <MenuItem value="По імені від А до Я">По імені від А до Я</MenuItem>
            </Select></FormControl>
        </div>
      </Grid>
      <Grid item xs={4} container={true} justify="flex-end" alignItems="center">
        <Button variant="contained" className={classes.addButton}>
          Додати новий розрахунок
        </Button>
      </Grid>
    </Grid>
  </div>);
};