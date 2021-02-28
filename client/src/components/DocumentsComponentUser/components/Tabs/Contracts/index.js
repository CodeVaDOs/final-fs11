import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CreateDocument } from "./CreateDocument";
import { useDispatch, useSelector } from "react-redux";
import { documentsAction } from "../../../../../redux/documents/action";
import LinearBuffer from "../../Progress";
import { DataNotFound } from "../DataNotFound";
import Grid from "@material-ui/core/Grid";
import HeadContracts from "./../header/HeadContracts";
import Transaction from "../../Transaction";
import { Pagination } from "@material-ui/lab";
import image1 from "../../../../HouseCard/HousesList/img_1.png";
import { camaz } from "../../../../../utils/constants/housesView";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    margin: "0 auto",
    width: "98%"
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
    const [documentList, setDocumentList] = useState(0);
    // setDocumentList(documents.total);
    const { loading, documents } = useSelector(state => state.documents);

    useEffect(() => {
      setTimeout(() => {
        dispatch(documentsAction.getDocuments('CONTRACT', search));
      }, [500]);
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
            <>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <HeadContracts search={search} setSearch={setSearch} createContract={createContract}/>
                </Grid>
                {documents.list.length === 0
                  ? <Grid item xs={12}><DataNotFound/></Grid>
                  :
                  <div className={classes.root}>
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
                {/*<Pagination count={10} page={1} onChange={handleChange}/>*/}
              </Grid>
            </>
          }
        </div>
      </>
    );
  }
;


