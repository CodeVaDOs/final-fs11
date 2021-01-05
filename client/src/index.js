import React from "react";
import { Provider } from "react-redux";
import store from '@redux/store';
import { render } from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import AppContainer from "./containers/AppContainer";
import MiniDrawer from "./components/RightDrawer";
import AppHeader from "./components/AppHeader";
import { Container } from "@material-ui/core";


const reduxStore = store();
const Root = () => {
  return (
    <Provider store={reduxStore}>
      <Router>
        <Container>
          <MiniDrawer>
            <AppContainer/>
          </MiniDrawer>
        </Container>
      </Router>
    </Provider>
  );
};


render(<Root/>, document.getElementById("root"));