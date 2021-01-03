import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { CssBaseline, Drawer, Grid } from "@material-ui/core";
import ManagerCard from "./ManagerCard";
import Container from "../Container";
import UserBar from "./UserBar";

const drawerWidth = 420;

const useStyles = makeStyles((theme) => ({

  menuButton: {
    borderRadius: "50%",
    border: 'none',
    background: '#EEF5FF',
    position: "absolute",
    top: "30px",
    left: "-12px",
    width: "25px",
    height: "25px",
    zIndex: 100
  },
  drawerClose: {
    background: "#EEF5FF",
    overflow: "visible",
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(1) + 1,
    },
  },
  drawerOpen: {
    background: "#EEF5FF",
    width: "35%",
    overflow: "visible",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawer: {
    position: "relative",
    height: "100%",
    width: "100%",
    // Drawer - opening
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    flexShrink: 0,
  },
  toolbar: {
    padding: theme.spacing(0, 0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 0,
    padding: theme.spacing(0),
  },
}));

const MiniDrawer = () => {
  const classes = useStyles();
  const [openRightPanel, setOpenRightPanel] = useState(true);

  const handleDrawerClose = () => {
    setOpenRightPanel(!openRightPanel);
  };
  return (
    <>
      <Container>
        <Drawer
          variant="permanent"
          anchor="right"
          classes={{
            paperAnchorDockedRight: clsx({
              [classes.drawerOpen]: openRightPanel,
              [classes.drawerClose]: !openRightPanel,
            }),
          }}>
          <IconButton
            onClick={handleDrawerClose}
            className={classes.menuButton}>
            {openRightPanel === true ? <ChevronRight fontSize="inherit"/> : <ChevronLeft fontSize="inherit"/>}
          </IconButton>
          <Grid container spacing={1}>
            <Grid item spacing={1}>
              <UserBar
                name={'Dima Ovsienko'}
                avatar={'https://bipbap.ru/wp-content/uploads/2017/10/minony-kartinki-smeshnye-na-avatarku.jpg'}
                notification={8}
                describe={`Investor`}
                sms={17}
              />
            </Grid>
            <Grid item spacing={1}>
              {/*<ListSubheader>Yesterday</ListSubheader>*/}
            </Grid>
            <Grid item spacing={1}>
              <ManagerCard name={'Oleg Prytula'} tel={'093-111-11-11'} email={'olegprytula@gmail.com'}/>
            </Grid>
          </Grid>
        </Drawer>
      </Container>
    </>
  );
};

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default MiniDrawer;
