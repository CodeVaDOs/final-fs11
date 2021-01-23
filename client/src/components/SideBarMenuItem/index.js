import React from "react";
import avatar from '../../images/avatar.png';
import flag from '../../images/flag.png';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LangSwitcher from "../LangSwitcher";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#eef5ff",
    maxWidth: "415px",
    width: "415px",
    height: "68px",
    padding: "30px",
  },
  settingsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    color: "#6E7375",
  },

  switcher: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  flag: {
    borderRadius: "50%",
    width: "19px",
    height: "19px",
  },
  langSelect: {
    fontSize: "12px",
    marginLeft: "7px",
    color: "#6E7375",
  },
  userContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  userCredit: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: "10px",
  },
  userName: {
    fontSize: "14px",
    color: "#254A93",
    whiteSpace: "pre",
    textAlign: "right",
  },

  userRole: {
    color: "#99A0A3",
    fontSize: "11px",
  },
  userAvatar: {
    width: "68px",
    height: "68px",
    boxSizing: "border-box",
    borderRadius: "50%",
    objectFit: "cover",
  }
}));

const SidebarMenuItem = (props) => {
  const { language = "UA", name = "Name LastName", role = "Role" } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.settingsContainer}>
        <div className={classes.switcher}>
          <img className={classes.flag} src={flag} alt="country flag"/>
          <LangSwitcher/>
        </div>
        <MailOutlineIcon color="inherit" style={{ marginLeft: "1rem" }}/>
        <NotificationsIcon color="inherit" style={{ marginLeft: "1rem" }}/>
      </div>
      <div className={classes.userContainer}>
        <div className={classes.userCredit}>
          <h2 className={classes.userName}>{name}</h2>
          <p className={classes.userRole}>{role}</p>
        </div>
        <img className={classes.userAvatar} src={avatar} alt="user avatar"/>
      </div>
    </div>
  );
};

export default SidebarMenuItem;