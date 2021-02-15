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
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  userName: {
    fontSize: "14px",
    color: "#254A93",
    whiteSpace: "pre",
    margin: '0',

    textAlign: "right",
  },

  userRole: {
    color: "#99A0A3",
    fontSize: "11px",
    margin: '0',
    textAlign: "right",
  },
  userAvatar: {
    width: "68px",
    height: "68px",
    boxSizing: "border-box",
    borderRadius: "50%",
    objectFit: "cover",
  },

  flexContainer: {
    display: 'flex',
    flexDirection: 'row'
  },

  flexCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 15 + 'px'
  }

}));

const SidebarMenuItem = (props) => {
  const defaultName = "User Name";
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <div className={classes.container}>
      <LangSwitcher lang={props.user.language === null ? "UKRAINIAN" : props.user.language}/>
      <div>
        <Box className={classes.flexContainer}>
            <div className={classes.flexCenter}>
              <h2 className={classes.userName}>{props.user.name === null ? defaultName : props.user.name}</h2>
              <p className={classes.userRole}>{props.user.role}</p>
            </div>
          <img onClick={() => {
            dispatch(AUTH_ACTIONS.logOut());
          }} className={classes.userAvatar} src={props.user.avatar === undefined ? avatar : props.user.avatar} alt="user avatar"/>
        </Box>
      </div>

    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps, null)(SidebarMenuItem);