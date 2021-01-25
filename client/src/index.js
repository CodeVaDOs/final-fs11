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

const reduxStore = store();

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={reduxStore}>
      <Suspense fallback={<PageLoader loaded={(<div>Pageloader</div>)}/>}>
        <Router >
          <App/>
        </Router>
      </Suspense>
    </Provider>
  </ErrorBoundary>,
  document.getElementById("root")
);
