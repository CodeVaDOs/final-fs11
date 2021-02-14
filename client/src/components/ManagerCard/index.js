import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { Grid, LinearProgress, List, ListItemIcon, withStyles } from "@material-ui/core";
import PhoneEnabledIcon from "@material-ui/icons/PhoneEnabled";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "356px",
    borderRadius:"20px",
    marginTop:"20px",
    marginBottom:"10px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0px 1px 3px #00000033"
  },
  myManager: {
    width: "380px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",

  },
  managerAvatar: {
    width:"67px",
    height:"67px",
    borderRadius: "50%"
  },
  li: {
    maxHeight: "25px",
    paddingRight: '15px'
  },
  liImage: {
    maxWidth: "20px",
    overflow: "hidden"
  },

  line: {
    height: '100%',
    width: '60px',
    marginTop: "-20px",
    borderRadius: "40%",
    '& > * + *': {
      marginRight: theme.spacing(0),
      width: "100px"
    },
  },
  rotate: {
    transform: "rotate(90deg)",
  }
}));


export default function ManagerCard({ name, tel, email, avt }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.myManager}>
        <Grid item md={1}>
          <div className={classes.rotate}>
            <div className={classes.line}>
              <BorderLinearProgress variant="determinate" value={100}/>
            </div>
          </div>
        </Grid>

        <Grid item md={2}>
          <Avatar className={classes.managerAvatar}>
            {avt === null?  <AccountCircleIcon color="primary"/>: <img src={avt}/>}
          </Avatar>
        </Grid>

        <Grid item md={9}>
          <List>
            <Grid container>
              <ListItem className={classes.li}>
                <Grid item md={2}>
                  <ListItemIcon
                    className={classes.liImage}>
                  </ListItemIcon>
                </Grid>
                <Grid item md={11}>
                  <ListItemText
                    primary={name}/>
                </Grid>
              </ListItem>
            </Grid>

            <Grid container>
              <ListItem className={classes.li}>
                <Grid item md={2}>
                  <ListItemIcon
                    className={classes.liImage}>
                    <PhoneEnabledIcon/>
                  </ListItemIcon>
                </Grid>
                <Grid item md={10}>
                  <ListItemText
                    secondary={tel}/>
                </Grid>
              </ListItem>
            </Grid>

            <Grid container>
              <ListItem className={classes.li}>
                <Grid item md={2}>
                  <ListItemIcon
                    className={classes.liImage}>
                    <MailOutlineIcon/>
                  </ListItemIcon>
                </Grid>
                <Grid item md={11}>
                  <ListItemText
                    secondary={email}/>
                </Grid>
              </ListItem>
            </Grid>
          </List>
        </Grid>
      </Grid>
    </div>

  );
}
//todo
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 5,
    borderRadius: 5,
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#FA505D',
  },
}))(LinearProgress);