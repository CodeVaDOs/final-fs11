import React, { lazy, Suspense, useMemo } from "react";
import { Switch } from "react-router-dom";

import { PageLoader, Preloader } from "@components/Loader";
import PrivateRoute from "@components/PrivateRoute";

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
    path: "/",
    component: lazy(() => import("@pages/NotFound")),
  },
];

const AppContainer = () => {
  const routeComponents = useMemo(
    () =>
      routes.map(({ isPublic, isAdminRoute, ...route }) => (
        <PrivateRoute key={route.path} isPublic={isPublic} isAdminRoute={isAdminRoute} {...route} />
      )),
    []
  );

  return (
    <>
      <Preloader loaded={(<div>Preloader</div>)}/>
      <Suspense fallback={<PageLoader loaded={(<div>Pageloader</div>)}/>}>
        <Switch>{routeComponents}</Switch>
      </Suspense>
    </>
  );
};

export default AppContainer;
