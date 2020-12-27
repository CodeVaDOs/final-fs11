import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppContainer from "@containers/AppContainer";
import store from '@redux/store';
import { HashRouter as Router } from "react-router-dom";
import 'antd/dist/antd.css';
import Header from "./components/Header";
import Container from "./components/Container";


const reduxStore = store();

ReactDOM.render(
  <Provider store={reduxStore}>
    <Router>
      <div>
        <Header/>
        <Container>
          <AppContainer/>
        </Container>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
