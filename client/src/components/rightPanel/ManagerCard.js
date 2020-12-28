import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "95%",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10%",
    margin: 10,
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: "center"
  },
  myManager: {
    width: "80%",
    display: "flex",
    flexDirection: 'column',
    justifyContent: "space-around",
    alignItems: "flex-start",
    lineHeight: "1px"

  },
  avatarBlock: {
    margin: "20px",
    width: "19.9%",
    height: "100%",
    scale: 2.3
  },
  avatarPhoto: {}
}));

export default function ManagerCard() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <div className={classes.avatarBlock}>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon/>
          </Avatar>
        </ListItemAvatar>
      </div>
      <ListItem className={classes.myManager}>
        <ListItemText primary="Jhon"/><br/>
        <ListItemText secondary="093-111-11-11"/><br/>
        <ListItemText secondary="olegprytula@gmail.com"/><br/>
      </ListItem>
    </List>
  );
}
