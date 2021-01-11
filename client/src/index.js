import React , { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "@containers/AppContainer";
import store from '@redux/store';
import { HashRouter as Router } from "react-router-dom";
import 'antd/dist/antd.css';
import Header from "./components/Header";
import { Layout } from "antd";
import Container from "./components/Container";
const reduxStore = store();
import { PageLoader } from "@components/Loader";
import 'i18next';
import SidebarMenuItem from "./components/SideBarMenuItem";

ReactDOM.render(
  <Provider store={reduxStore}>
    <Suspense fallback={<PageLoader loaded={(<div>Pageloader</div>)}/>}>
      <Router>
        <Layout>
          <Header/>
          <Container>
            <App/>
          </Container>
          <SidebarMenuItem/>
        </Layout>
      </Router>
    </Suspense>
  </Provider>,
  document.getElementById("root")
);
