import React, { useEffect, useRef, useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FilterSelectItem from "../FilterSelectItem";
import Button from "@material-ui/core/Button";
import DescriptionIcon from "@material-ui/icons/Description";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(({
  root: {
    flexGrow: 1,
  },
  clearfix: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btnAdd: {
    textTransform: 'capitalize',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    color: 'white',
    textDecoration: 'none',
    backgroundColor: '#254A93',
    width: "189px",
    height: "39px",
    background: "#EEF5FF 0% 0% no-repeat padding-box",
    border: "0.5px solid #ACB5B9",
    borderRadius: "5px",
    opacity: 1,
  },

  addButton: {
    background: "#254A93",
    color: "white"
  },
  search: {
    position: "relative",
    width: "400px",
    right: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 15,
    border: "1px solid #B1B4BA",
    borderRadius: 10,
    backgroundColor: "#EEF5FF",
    height: 40
  },
  searchIcon: {
    fontSize: 30,
    margin: 10
  },
  inputRoot: {
    marginTop: 1,
    height: 28,
    width: "100%",
    backgroundColor: "#EEF5FF",
    border: "0",
    marginRight: 10
  },
}));

const options = [
  "Показати документообіг",
  "Акти виконаних робіт",
  "Загальновиробничі витрати",
  "Ресурсні кошториси й відомості",
  "Розрахунки вартості ресурсів"
];

export default ({ createContract, setSearch,search }) => {
  const classes = useStyles();

  useEffect(()=>{

  },[search])
  return (<div className={classes.root}>

    <Grid container spacing={4}>
      <div className={classes.clearfix}>
        {
          createContract
            ? <Grid item xs={6} container={true} justify="flex-end" alignItems="center">
              <Button
                className={classes.btnAdd}
                onClick={createContract}
              >
                Додати контракт <DescriptionIcon className={classes.editIcon}/>
              </Button>
            </Grid>
            : null
        }


        <Grid item xs={6}>
          <div className={classes.search}>
            <div>
              <SearchIcon className={classes.searchIcon}/>
            </div>
            <TextField
              focused={false}
              value={search}
              className={classes.inputRoot}
              onChange={event => setSearch(event.target.value)}
            />
          </div>

        </Grid>
      </div>

    </Grid>
  </div>);
};