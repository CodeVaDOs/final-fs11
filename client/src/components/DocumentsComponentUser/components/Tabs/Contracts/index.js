import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SelectDocument } from "../../../../../pages/ClientPage/components/Documents/SelectDocument";
import DescriptionIcon from "@material-ui/icons/Description";
import { Button } from "@material-ui/core";
import { CreateDocument } from "./CreateDocument";
import { DocumentItem } from '../../../../../pages/ClientPage/components/Documents/DocumentItem';
import { useDispatch, useSelector } from "react-redux";
import { documentsAction } from "../../../../../redux/documents/action";
import LinearBuffer from "../../Progress";
import { DataNotFound } from "../DataNotFound";
import Grid from "@material-ui/core/Grid";

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

export const MyContractsUser = ({ search }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loading, documents } = useSelector(state => state.documents);
  useEffect(() => {
    dispatch(documentsAction.getDocuments('CONTRACT', search));
  }, [search]);

  const [createDocument, setCreateDocument] = useState();

  if (loading) {
    return <LinearBuffer/>;
  }
  const createContract = () => {
    setCreateDocument(true);
  };
  return (

    <>
      <div className={classes.root}>
        <Grid style={{ margin: "0 auto" }} container spacing={12}>
          {createDocument ?
            <CreateDocument/> :
            <div>
              <Grid style={{ margin: "0 auto" }} container spacing={3}>
                {documents.list.length === 0 ?
                  <div style={{ margin: "0 auto", marginLeft:"350px" }}>
                    <DataNotFound/>
                  </div>

                  :
                  <Grid container spacing={3}>
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
                    {documents.list
                      .map((v, index) => {
                        return (
                          <Grid key={index} item xs={4}>
                            <DocumentItem
                              title={v.name}
                              shortDescription={v.type}
                            />
                          </Grid>
                        );
                      })
                    }

                  </Grid>

                }
              </Grid>


            </div>
          }
        </Grid>
      </div>
    </>
  );
};

