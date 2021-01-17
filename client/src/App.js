import React, { useState } from 'react';
import Header from "@components/Header";
import Sidebar from "@components/Sidebar";
import { makeStyles } from "@material-ui/core";
import AppContainer from "./containers/AppContainer";
import { useSelector } from "react-redux";

const sidebarWidth = 416;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: "row",
  },

  mainContainer: props => ({
    width: '100%',
    marginLeft: '20px',
    marginRight: props.isOpenSidebar && props.authorized ? sidebarWidth + 30 + 'px' : '30px',
    transition: 'margin 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
  })
}));


const App = () => {
  const [isOpenSidebar, handleOpenSidebar] = useState(true);
  const { authorized } = useSelector(state => state.auth);

  const classes = useStyles({ isOpenSidebar, authorized });


  return (
    <div className={classes.root}>
      <div className={classes.mainContainer}>
        {authorized && <Header/>}
        <AppContainer/>
      </div>
      {authorized && <div>
        <Sidebar
          width={sidebarWidth}
          open={isOpenSidebar}
          handleOpen={handleOpenSidebar.bind(null, !isOpenSidebar)}/>
      </div>}
    </div>
  );
};

export default App;
