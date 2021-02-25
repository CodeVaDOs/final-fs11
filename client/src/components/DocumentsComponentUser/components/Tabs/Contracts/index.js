import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SelectDocument } from "../../../../ClientPage/components/Documents/SelectDocument";
import DescriptionIcon from "@material-ui/icons/Description";
import { Button } from "@material-ui/core";
import { CreateDocument } from "./CreateDocument";
import { DocumentItem } from '../../../../ClientPage/components/Documents/DocumentItem';
import { useDispatch, useSelector } from "react-redux";
import { documentsAction } from "../../../../../redux/documents/action";
import LinearBuffer from "../../Progress";
import { DataNotFound } from "../DataNotFound";
import Grid from "@material-ui/core/Grid";
import HeadContracts from "./../header/HeadContracts";
import Transaction from "../../Transaction";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    margin: "20px 0"
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

  documents: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  }
}));

export const MyContractsUser = () => {

  const classes = useStyles();
  const dispatch = useDispatch();

  const [createDocument, setCreateDocument] = useState();
  const [search, setSearch] = useState("");


  const { loading, documents } = useSelector(state => state.documents);
  useEffect(() => {
    dispatch(documentsAction.getDocuments('CONTRACT', search));
  }, [search]);

  if (loading) {
    return <LinearBuffer/>;
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
            <Grid container spacing={3}>
              {documents.list.length === 0
                ? <Grid item xs={12}><DataNotFound/></Grid>
                : <div className={classes.root}>
                  <HeadContracts setSearch={setSearch} createContract={createContract}/>
                  <Grid container spacing={3}>
                    {documents.list
                      .map((doc, index) => {
                        return (
                          <Grid key={index} item xs={4}>
                            <Transaction name={doc.name} fromDate={doc.fromDate} toDate={doc.toDate}/>
                          </Grid>
                        );
                      })
                    }

                  </Grid>
                </div>
              }
            </Grid>


          </div>
        }
      </div>
    </>
  );
};


