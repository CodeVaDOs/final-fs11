import React from 'react';
import Container from "../../components/Container";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import { ClientPage } from "../../components/ClientPage";
import {useFetch} from "../../hooks/useFetch";
import ClientCard from "./components/ClientCard";
import {CircularProgress} from "@material-ui/core";
const useStyles = makeStyles({
  header: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#293134',
    margin: '20px'
  }
});

const Client = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const propsName = "user.name";

  const [{data, loading}, getData] = useFetch({
    initData: {
      list: [],
      total: 1
    },
    url: 'users?role=MANAGER&size=5',

  })

  return (<>
    <Container>
      <Typography className={classes.header}>{t("hello")} {propsName} {"!"}</Typography>

      {!loading && data.list.map(user => <ClientCard user={user}/>)}
      {loading && <CircularProgress size={60}/>}
      {/*<ClientPage/>*/}
    </Container>
  </>);
};
export default Client;
