import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DocumentItem } from "../../../../ClientPage/components/Documents/DocumentItem";
import { SelectDocument } from "../../../../ClientPage/components/Documents/SelectDocument";
import { useDispatch, useSelector } from "react-redux";
import { documentsAction } from "../../../../../redux/documents/action";
import LinearBuffer from "../../Progress";
import { DataNotFound } from "../DataNotFound";
import Grid from "@material-ui/core/Grid";
import { CreateDocument } from "../Contracts/CreateDocument";
import HeadContracts from "../header/HeadContracts";
import Transaction from "../../Transaction";

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
export const MyBills = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const { loading, documents } = useSelector(state => state.documents);
  useEffect(() => {
    dispatch(documentsAction.getDocuments('PAYMENT_ORDER', search));
  }, [search]);


  if (loading) {
    return <LinearBuffer/>;
  }
  return (

    <>
      <div className={classes.root}>
        <Grid container spacing={3}>

          <Grid item xs={12}>
            <HeadContracts search={search} setSearch={setSearch}/>
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
        </Grid>
      </div>
    </>
  );
};
