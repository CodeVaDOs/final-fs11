import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import { PageLoader } from "@components/Loader";
import store from '@redux/store';
import App from './App.js';

import './index.scss';
import './i18next';

const reduxStore = store();

ReactDOM.render(
  <Provider store={reduxStore}>
    <Suspense fallback={<PageLoader loaded={(<div>Pageloader</div>)}/>}>
      <Router>
        <App/>
      </Router>
    </Suspense>
  </Provider>,
  document.getElementById("root")
);
