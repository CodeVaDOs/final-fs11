import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import usePagination from "../../../../../hooks/usePagination";
import { DocumentItem } from "../../../../ClientPage/components/Documents/DocumentItem";
import { Pagination } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { SelectDocument } from "../../../../ClientPage/components/Documents/SelectDocument";
import { useDispatch, useSelector } from "react-redux";
import { documentsAction } from "../../../../../redux/documents/action";
import { CreateDocument } from "../Contracts/CreateDocument";
import { Button } from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";

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
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: " repeat(3, 1fr)",
    gridColumnGap: 30,
    gridRowGap: 0,
  },
  cleatfix: {
    position: "relative",
    right: 0,
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

export const MyBills = ({ search,setSearch }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loading, documents } = useSelector(state => state.documents);
  useEffect(() => {
    dispatch(documentsAction.getDocuments('PAYMENT_ORDER', search));
  }, [search]);
  // const [documents, setDocuments] = useState(Array.apply(null, Array(100)).map((_, index) => (
  //   {
  //     id: index,
  //     title: index,
  //     detail: index,
  //   }))
  // );
  const [filteredExploitation, setFilteredExploitation] = useState([]);
  useEffect(() => {
    setFilteredExploitation(
      documents.list.filter((d) => {
        return search.includes(d.title);
      }));
  }, [search]);

  const searchHandler = () => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  if (loading) {
    return <h5>Завантажую платіжки...</h5>;
  }

  return (
    <>
      <div className={classes.root}>
        <div>
          {documents.list.length === 0 ?
            <h5>У Вас пока контрактов нет...</h5> :
            <div>
              <div className={classes.topSide}>

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
              <div className={classes.documents}>
                <div className={classes.mainContainerDocuments}>
                  {documents.list
                    .map((v, index) => {
                      return (
                        <DocumentItem
                          key={index}
                          title={v.name}
                          shortDescription={v.type}
                        />
                      );
                    })
                  }
                </div>
              </div>
            </div>

          }


        </div>
      </div>
    </>
  );
};