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
  },

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
        {documents.list.length === 0
          ? <Grid item xs={12}><DataNotFound/></Grid>
          :
          <div className={classes.root}>
            <HeadContracts setSearch={setSearch}/>
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
      </div>
    </>
  );
};
