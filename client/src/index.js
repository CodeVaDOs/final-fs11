import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppContainer from "@containers/AppContainer";
import store from '@redux/store';
import { HashRouter as Router } from "react-router-dom";
import 'antd/dist/antd.css';
import Container from "./components/Container";
import MiniDrawer from "./components/rightPanel";


const reduxStore = store();

ReactDOM.render(
  <Provider store={reduxStore}>
    <Router>
      <div>
        <Container>
          <MiniDrawer>
            <AppContainer/>
          </MiniDrawer>
        </Container>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
