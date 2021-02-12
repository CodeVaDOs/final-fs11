import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';
import { SelectDocument } from "./SelectDocument";
import { DocumentItem } from "./DocumentItem";
import usePagination from "../../../../hooks/usePagination";
import { Pagination } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(() => ({
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
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: " repeat(3, 1fr)",
    gridColumnGap: 30,
    gridRowGap: 0,
  },
  cleatfix: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: 'center'
  },
  search: {
    position: "relative",
    width: 390,
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
    width: "100%",
    backgroundColor: "#EEF5FF",
    border: "none",
    marginRight: 10
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
  },
  btnAdd: {
    textTransform: 'capitalize',
    marginTop: 20,
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
  documents: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  }
}));

export const MyContracts = () => {
  const classes = useStyles();
  let [page, setPage] = useState(1);
  const PER_PAGE = 21;

  const documents =
    Array.apply(null, Array(200)).map((_, index) => (
      {
        id: index,
        title: index,
        detail: index,
      }));

  const count = Math.ceil(documents.length / PER_PAGE);
  const _DATA = usePagination(documents, PER_PAGE);

  useEffect(() => {
  }, [documents, _DATA]);
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  return (
    <>
      <div className={classes.root}>
        <div className={classes.topSide}>
          <div className={classes.cleatfix}>
            <form className={classes.search} noValidate autoComplete="off">
              <div>
                <SearchIcon className={classes.searchIcon}/>
              </div>
              <TextField
                className={classes.inputRoot}
                type="search"
              />
            </form>
            <SelectDocument options={['null']}/>
          </div>

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
        <div className={classes.documents}>
          <div className={classes.mainContainerDocuments}>
            {_DATA.currentData().map((v) => {
              return (
                <DocumentItem
                  key={v.id}
                  title={v.title}
                  shortDescription={v.detail}
                />
              );
            })}
          </div>
          <Pagination
            count={count}
            variant="outlined"
            color="#ff9100"
            page={page}
            onChange={handleChange}/>
        </div>
      </div>
    </>
  );
};