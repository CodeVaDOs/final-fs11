import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from '@redux/store';
import { HashRouter as Router } from "react-router-dom";
import AppContainer from "./containers/AppContainer";
import MiniDrawer from "./components/RightDrawer";
import AppHeader from "./components/AppHeader";

const classes = {
  root: {
    width: "100%",
    zIndex: 1,
    overflow: "hidden",
    backgroundColor: "red"
  },
  header: {},
  appFrame: {
    position: "relative",
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: 24,
    height: `calc(100%)`,
    marginTop: 156,
  }
};
const reduxStore = store();

const Root = () => (
  <Provider store={reduxStore}>
    <Router>
      <div style={classes.root}>
        <div style={classes.appFrame}>
          <AppHeader/>
          <MiniDrawer>
            <main style={classes.content}>
              <AppContainer/>
            </main>
          </MiniDrawer>
        </div>
      </div>
    </Router>
  </Provider>

);


render(<Root/>, document.getElementById("root"));