import React, { useState } from 'react';
import Header from "../src/components/Header";
import Sidebar from "@components/Sidebar";
import { makeStyles } from "@material-ui/core";
import AppContainer from "./containers/AppContainer";
import { useSelector } from "react-redux";
import { PageLoader } from "./components/Loader";

const sidebarWidth = 416;

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: "row",
    margin: 0,
    padding: 0
  },

  mainContainer: props => ({
    margin: 0,
    padding: 0,
    width: '100% ',
    marginLeft: '20px',
    marginRight: props.isOpenSidebar && props.authorized ? sidebarWidth + 30 + 'px' : '30px',
    transition: 'margin 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
  }),
  sidebar: {
    flex: 1,
    margin: 0,
    padding: 0,
  }
}));


const App = () => {
  const [isOpenSidebar, handleOpenSidebar] = useState(true);
  const { authorized, loading } = useSelector(state => state.auth);


  const classes = useStyles({ isOpenSidebar, authorized });

  if (authorized && loading) return <PageLoader/>;

  return (
    <div className={classes.root}>
      <div className={classes.mainContainer}>
        {authorized && <Header/>}
        <AppContainer/>
      </div>
      {authorized && <div className={classes.sidebar}>
        <Sidebar
          width={sidebarWidth}
          open={isOpenSidebar}
          handleOpen={handleOpenSidebar.bind(null, !isOpenSidebar)}/>
      </div>}
    </div>
  );
};

export default App;
