import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SelectDocument } from "../../../../ClientPage/components/Documents/SelectDocument";
import DescriptionIcon from "@material-ui/icons/Description";
import { Button } from "@material-ui/core";
import { CreateDocument } from "./CreateDocument";
import { DocumentItem } from '../../../../ClientPage/components/Documents/DocumentItem';
import { useDispatch, useSelector } from "react-redux";
import { documentsAction } from "../../../../../redux/documents/action";

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

export const MyContractsUser = ({ search, setSearch }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loading, documents } = useSelector(state => state.documents);
  useEffect(() => {
    dispatch(documentsAction.getDocuments('CONTRACT', search));
  }, [search]);
  // const [documents, setDocuments] = useState(Array.apply(null, Array(100)).map((_, index) => (
  //   {
  //     id: index,
  //     title: index,
  //     detail: index,
  //   }))
  // );
  const [createDocument, setCreateDocument] = useState();
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

    return <h5>Завантажую контракти...</h5>;
  }
  const createContract = () => {
    setCreateDocument(true);
  };
  return (

    <>
      <div className={classes.root}>
        {createDocument ?
          <CreateDocument/> :
          <div>
            {documents.list.length === 0 ?
              <h5>У Вас пока контрактов нет...</h5> :
              <div>
                <div className={classes.topSide}>
                  <Button
                    className={classes.btnAdd}
                    onClick={createContract}
                  >
                    Додати контракт <DescriptionIcon className={classes.editIcon}/>
                  </Button>
                  <div className={classes.row}>
                    <h3>Сортувати</h3>
                    <SelectDocument
                      options={['По датi', 'Останнi доданi', 'По датi контракту', 'По iменi вiд А до Я']}/>
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
        }
      </div>
    </>
  );
};