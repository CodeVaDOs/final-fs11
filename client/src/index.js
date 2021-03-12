import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";


import { PageLoader } from "../src/components/Loader";
import store from '@redux/store';
import App from './App.js';

import './index.scss';
import './i18next';
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";


var console = {
    ...window.console
};

console.log = function(...args){};
console.info = function(...args){};
console.debug = function(...args){};
console.trace = function(...args){};
console.err = function(...args){};
console.error = function(...args){};
console.warn = function(...args){};

window.console = console;

const reduxStore = store();


ReactDOM.render(
  <ErrorBoundary>
    <Provider store={reduxStore}>
      <Suspense fallback={"Loading..."}>
        <Router >
          <App/>
        </Router>
      </Suspense>
    </Provider>
  </ErrorBoundary>,
  document.getElementById("root")
);
