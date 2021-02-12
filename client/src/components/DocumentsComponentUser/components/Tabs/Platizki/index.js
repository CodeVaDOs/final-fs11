import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import usePagination from "../../../../../hooks/usePagination";
import { DocumentItem } from "../../../../ClientPage/components/Documents/DocumentItem";
import { Pagination } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { SelectDocument } from "../../../../ClientPage/components/Documents/SelectDocument";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  topSide: {
    margin: 0,
    padding: 0,
    position: "relative",
    zIndex: 9999999999,
    display: "flex",
    flexDirection: "column",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  mainContainerDocuments: {
    marginTop: 145,
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: " repeat(3, 1fr)",
    gridColumnGap: 30,
    gridRowGap: 0,
  },
  search: {
    position: "absolute",
    right: 0,
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
  cleatfix: {
    position: "absolute",
    right: 0,
    marginTop: 60,
    display: "flex",
    flexDirection: "row",
    alignItems: 'center'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center',
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

export const MyBills = () => {
  const classes = useStyles();
  let [page, setPage] = useState(1);
  let [paged, setPageD] = useState(1);
  const PER_PAGE = 15;
  const [documents, setDocuments] = useState(Array.apply(null, Array(100)).map((_, index) => (
    {
      id: index,
      title: index,
      detail: index,
    }))
  );
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredExploitation, setFilteredExploitation] = useState([]);


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const count_D = Math.ceil(documents.length / PER_PAGE);
  const _DATA_D = usePagination(documents, PER_PAGE);
  const countFilter = Math.ceil(filteredExploitation.length / PER_PAGE);
  const _DATAFilter = usePagination(filteredExploitation, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATAFilter.jump(p);
  };
  const handleChangeD = (e, p) => {
    setPageD(p);
    _DATA_D.jump(p);
  };

  useEffect(() => {
    setFilteredExploitation(
      documents.filter((d) => {
        return search.includes(d.title);
      }));
  }, [search, documents, _DATAFilter]);

  if (loading) {
    return <p>Завантажую платіжки...</p>;
  }
  return (
    <>
      <div className={classes.root}>
        <div className={classes.topSide}>
          <div>
            <form className={classes.search} noValidate autoComplete="off">
              <div>
                <SearchIcon className={classes.searchIcon}/>
              </div>
              <TextField
                className={classes.inputRoot}
                type="search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          </div>
          <div className={classes.cleatfix}>
            <div className={classes.row}>
              <SelectDocument options={['Прибирання', "Електроенергія", "Вода", "Інше"]}/>
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

        </div>

        {search[0] ?
          <div className={classes.documents}>
            <div className={classes.mainContainerDocuments}>
              {_DATAFilter.currentData()
                .map((v) => {
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
              count={countFilter}
              variant="outlined"
              color="#ff9100"
              page={page}
              onChange={handleChange}
            />
          </div> :
          <div className={classes.documents}>
            <div className={classes.mainContainerDocuments}>
              {_DATA_D.currentData()
                .map((v) => {
                  return (
                    <DocumentItem
                      key={v.id}
                      title={v.title}
                      shortDescription={v.detail}
                    />
                  );
                })
              }

            </div>
            <Pagination
              count={count_D}
              variant="outlined"
              color="#ff9100"
              page={paged}
              onChange={handleChangeD}
            />
          </div>
        }
      </div>
    </>
  );
};