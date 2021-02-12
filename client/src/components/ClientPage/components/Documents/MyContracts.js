import React, { useEffect, useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { SelectDocument } from "./SelectDocument";
import { DocumentItem } from "./DocumentItem";
import { Button } from "@material-ui/core";
import DescriptionIcon from '@material-ui/icons/Description';
import usePagination from "../../../DocumentsComponent/components/Contracts/usePagination";
import { Pagination } from "@material-ui/lab";
import { CreateDocument } from "../../../DocumentsComponent/components/Contracts/CreateDocument";

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
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: " repeat(3, 1fr)",
    gridColumnGap: 30,
    gridRowGap: 0,
  },
  search: {
    display: "flex",
    alignItems: "center",
    flexDirection: 'row',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(0),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    paddingLeft: 30,
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    width: 300,
    display: 'flex',
    border: 'black',
    backgroundColor: "white",
    borderRadius: 10,
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

export const MyContracts = ({ visibleFalse }) => {
  const classes = useStyles();
  const [createDocument, setCreateDocument] = useState(false);
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
  const createContract = () => {
    setCreateDocument(true);
  };
  return (
    <>
      {createDocument === false ?
        <div className={classes.root}>
          {visibleFalse === false ?
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
            : <div className={classes.search}>
              <Button
                className={classes.btnAdd}
                onClick={createContract}
              >
                Додати контракт <DescriptionIcon className={classes.editIcon}/>
              </Button>
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
          }
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
              onChange={handleChange}
            />
          </div>

        </div> :
        <div className={classes.root}>
          <CreateDocument/>
        </div>
      }


    </>
  );
};