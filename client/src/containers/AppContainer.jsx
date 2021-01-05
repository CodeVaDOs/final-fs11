import React, { lazy, Suspense, useMemo } from "react";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";
import { PageLoader, Preloader } from "@components/Loader";
import PrivateRoute from "@components/PrivateRoute";
import { I18nProvider } from "../i18n";

const routes = [
  {
    isPublic: false,
    exact: true,
    path: "/",
    component: lazy(() => import("@pages/Home")),
  },
  {
    isPublic: false,
    isAdminRoute: false,
    exact: true,
    path: "/setting",
    component: lazy(() => import("@pages/Setting")),
  },
  {
    isPublic: false,
    isAdminRoute: false,
    exact: true,
    path: "/archive",
    component: lazy(() => import("@pages/Archive")),
  },
  {
    isPublic: false,
    isAdminRoute: false,
    exact: true,
    path: "/login",
    component: lazy(() => import("@pages/Login")),
  },
  {
    isPublic: false,
    isAdminRoute: false,
    exact: true,
    path: "/forgotpassword",
    component: lazy(() => import("@pages/ForgotPass")),
  },
  {
    path: "/",
    component: lazy(() => import("@pages/NotFound")),
  },
];

const AppContainer = ({ lang }) => {
  const routeComponents = useMemo(
    () =>
      routes.map(({ isPublic, isAdminRoute, ...route }) => (
        <PrivateRoute key={route.path} isPublic={isPublic} isAdminRoute={isAdminRoute} {...route} />
      )),
    []
  );

  return (
    <>
      <I18nProvider locale={lang}>
        <Preloader loaded={(<div>Preloader</div>)}/>
        <Suspense fallback={<PageLoader loaded={(<div>Pageloader</div>)}/>}>
          <Switch>{routeComponents}</Switch>
        </Suspense>
      </I18nProvider>
    </>
  );
};

function mapStateToProps(state) {
  return {
    lang: state.user.languages,
  };
}


export default connect(mapStateToProps, null)(AppContainer);
