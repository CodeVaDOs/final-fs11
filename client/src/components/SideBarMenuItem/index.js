import React from "react";
import { connect } from "react-redux";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LangSwitcher from "../LangSwitcher";
import { makeStyles } from "@material-ui/core";
import { AUTH_ACTIONS } from "../../redux/auth/action";
import { useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import avatar from '../../images/avatar.png';
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "transparent",
    width: "100%",
    height: "68px",
    marginLeft: "-10px",
    marginTop:"10px"
  },
  userName: {
    fontSize: "14px",
    color: "#254A93",
    whiteSpace: "pre",
    textAlign: "right",
    marginTop:"-10px",
    marginRight: "7px"
  },

  userRole: {
    color: "#99A0A3",
    fontSize: "11px",
    textAlign:"center",
    marginTop:"-10px",
    marginRight:"-40px"
  },
  userAvatar: {
    width: "68px",
    height: "68px",
    marginTop:"-20px",
    boxSizing: "border-box",
    borderRadius: "50%",
    objectFit: "cover",
  }
}));

const SidebarMenuItem = (props) => {
  const defaultName = "User Name";
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Grid className={classes.container}
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Grid item xs={3}>
        <LangSwitcher lang={props.user.language === null ? "UKRAINIAN":props.user.language}/>
      </Grid>
      <Grid item xs={1}>
        <MailOutlineIcon color="inherit" style={{ marginLeft: "1rem", color:"#C7C7C7" }}/>
      </Grid>
      <Grid item xs={1}>
        <NotificationsIcon color="inherit" style={{ marginLeft: "1rem", color:"#C7C7C7" }}/>
      </Grid>
      <Grid item xs={4}>
        <Box>
          <Box>
            <h2 className={classes.userName}>{props.user.name === null ? defaultName:props.user.name }</h2>
          </Box>
          <Box><p className={classes.userRole}>{props.user.role}</p></Box>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <img onClick={() => {
          dispatch(AUTH_ACTIONS.logOut());
        }} className={classes.userAvatar} src={props.user.avatar === undefined ? avatar:props.user.avatar} alt="user avatar"/>
      </Grid>
    </Grid>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps, null)(SidebarMenuItem);