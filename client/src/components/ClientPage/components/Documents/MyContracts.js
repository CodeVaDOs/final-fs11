import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { SelectDocument } from "./SelectDocument";
import { DocumentItem } from "./DocumentItem";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  topSide: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  mainContainerDocuments: {
    flexWrap: "wrap",
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    border: 'black',

    color: 'inherit',
  },
  inputInput: {
    border: 'black',

    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
  },
}));


export const MyContracts = () => {
  const classes = useStyles();
  const documents =
    Array.apply(null, Array(20)).map((_, index) => (
      <div style={{ margin: "10px" }} key={index}>
        <DocumentItem
          title={'Контракт 23_03_2020 H013…Овсієнко.pdf'}
          shortDescription={'Договір о довгостроковій...'}

        />
      </div>

    ));

  return (
    <>
      <div className={classes.root}>
        <div className={classes.topSide}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon/>
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <SelectDocument options={['null']}/>

          <div className={classes.row}>
            <h3>Показати</h3>
            <SelectDocument options={['Marksem M - 2 House large 00102']}/>
          </div>

          <div className={classes.row}>
            <h3>Сортувати</h3>
            <SelectDocument
              options={['По датi', 'Останнi доданi', 'По датi контракту', 'По iменi вiд А до Я']}/>
          </div>

        </div>
        <div className={classes.mainContainerDocuments}>
          {documents}
        </div>
      </div>

    </>
  );
};