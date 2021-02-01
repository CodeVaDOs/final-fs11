import React from 'react';
import ProfileContainer from "../../components/ProfileContainer";
import  Container  from "../../components/Container";
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  settingContainer: {
    marginTop: 20,
    marginLeft: 590
  }
});
const Setting = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box className={classes.settingContainer}>{"Останні оновлення: 12.01.2020, 12:58"}</Box>
      <ProfileContainer/>
    </Container>
  );
};

export default Setting;
