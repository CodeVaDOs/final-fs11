import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from "@material-ui/core/IconButton";
import { Badge, Menu, MenuItem } from "@material-ui/core";
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CheckLanguage from "./CheckLanguage";

const useStyles = makeStyles((theme) => ({
  list: {
    width: "100%",
    margin:"0 auto"
  },
  grow: {
    flexGrow: 0,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },

  sectionDesktop: {
    [theme.breakpoints.up('md')]: {
      padding:"10px",
      display: 'flex',
    },
  },
}));


export default function UserBar({ name, describe, sms, notification, avatar }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = 'primary-search-account-menu';

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'right', horizontal: 'right' }}
      id={menuId}
      transformOrigin={{ vertical: 'right', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <React.Fragment>
      <CssBaseline/>
      <List className={classes.list}>
        <React.Fragment>
          <ListItem>
            <div className={classes.sectionDesktop}>
              <CheckLanguage/>
              <IconButton color="inherit">
                <Badge badgeContent={sms} color="secondary">
                  <MailIcon/>
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={notification} color="secondary">
                  <NotificationsIcon/>
                </Badge>
              </IconButton>
            </div>
            <ListItemText primary={name} secondary={describe}/>
            <ListItemAvatar
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              style={{ cursor: 'pointer' }}>
              <Avatar alt="Profile Picture" src={avatar}/>
            </ListItemAvatar>
          </ListItem>
        </React.Fragment>
      </List>
      {renderMenu}

    </React.Fragment>
  );
}
