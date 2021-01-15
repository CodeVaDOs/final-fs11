import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { CustomDrawer } from "./CustomDrawer";

const useStyles = makeStyles({
  messageBox: {
    width: '890px',
    height: 'auto',
    borderRadius: '20px',
    boxShadow: '0px 2px 4px #00000033',
    marginBottom:"12px",
    backgroundColor:"#fff",
    borderTopRightRadius: "20px",
    borderTopLeftRadius: "20px",
    overflow: "hidden",
    color: "#fff"
  },
  toolbar: {
    background: "#254A93",
    display: "flex",
    justifyContent: "space-between"

  },
  arrow: {
    cursor: "pointer",
    transition: "transform 0.2s"
  },
  notificationWrap: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  notificationText: {
    fontSize: "18px",
    marginRight: "15px",
    color: "#fff"
  },
  listWrap: {
    border: "1px solid #c2c2c2",
    borderBottomRightRadius: "20px",
    borderBottomLeftRadius: "20px",
    maxHeight: "max-content",
    transition: "height 0.3s"
  },
  listItem: {
    color: "#000",
    justifyContent: "space-between",
    display: "flex",
    borderTop: "1px solid #c2c2c2",
    padding: "20px 15px"
  },
  listMessage: {
    width: "70%",
  },
  listMessageDate: {
    width: "30%",
    textAlign: "right",
    color: "#ACB5B9"
  }
});

const MessageBoxAdminPanel = () => {
  const [openList, setOpenList] = useState(true);

  const classes = useStyles();
  const data = [
    {
      message: "Meeting with a new customer. Office. 12:00",
      date: "Just Now"
    },
    {
      message: "Compose a letter to the advertising department",
      date: "20 Min Ago"
    },
    {
      message: "Call back to the furniture salon",
      date: "40 Min Ago"
    }
  ];

  return (<div className={classes.messageBox}>
    <Toolbar className={classes.toolbar}>
      <Box component="div" className={classes.notificationWrap}>
        <Typography
          variant="h6"
          className={classes.notificationText}>
          Повідомлення
        </Typography>
        <NotificationsActiveIcon/>
      </Box>
      <KeyboardArrowDownIcon
        onClick={() => setOpenList(!openList)}
        style={{ transform: openList ? "rotate(0deg)" : "rotate(90deg)" }}
        className={classes.arrow}
        fontSize="large"
      />
    </Toolbar>
    <Box component="div" className={classes.listWrap}>
      <List style={{ padding: 0, height: openList ? "max-content" : "0" }}>
        {
          data.map((dataItem, idx) =>
            <ListItem key={idx} className={classes.listItem}>
              <ListItemText
                className={classes.listMessage}
                primary={dataItem.message}
              />
              <ListItemText
                className={classes.listMessageDate}
                primary={dataItem.date}
              />
            </ListItem>
          )
        }
      </List>
      <CustomDrawer/>
    </Box>
  </div>);
};

export default MessageBoxAdminPanel;