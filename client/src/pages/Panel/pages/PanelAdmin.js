import React from 'react';
import Container from "@components/Container";
import PanelAdminNewUser from "@components/PanelAdminNewUser";
import PanelAdmMemo from "@components/PanelAdmMemo";
import MassageBoxAdminPanel from "@components/MessageBoxAdminPanel";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const useStyles = makeStyles({
  header: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#293134',
    margin:'20px'
  }
});
const Panel =(props)=> {
  const { t } = useTranslation();
  const classes = useStyles();
  return(<>
    <Container>
      <Typography className={classes.header}>{t("hello")} {props.user.name} {"!"}</Typography>
      <PanelAdminNewUser/>
      <MassageBoxAdminPanel/>
      <PanelAdmMemo/>
    </Container>
  </>);
};
const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  };
};
export default connect(mapStateToProps, null)(Panel);
