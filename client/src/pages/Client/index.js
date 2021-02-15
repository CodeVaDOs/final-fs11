import React from 'react';
import Container from "../../components/Container";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import { ClientPage } from "../../components/ClientPage";
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

  return (<>
    <Container>
      <Typography className={classes.header}>{t("hello")} {propsName} {"!"}</Typography>
      <ClientPage/>
    </Container>
  </>);
};
export default Client;
