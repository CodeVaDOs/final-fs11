import React, { lazy, Suspense, useMemo } from "react";
import { Switch } from "react-router-dom";
import { PageLoader, Preloader } from "@components/Loader";
import PrivateRoute from "@components/PrivateRoute";

export const routes = [
  {
    isHeaders: true,
    isPublic: false,
    exact: true,
    path: "/",
    name: "Home",
    component: lazy(() => import("@pages/Home")),
  },
  {
    isHeaders: true,
    isPublic: false,
    isAdminRoute: false,
    exact: true,
    path: "/setting",
    name: "Setting",
    component: lazy(() => import("@pages/Setting")),
  },
  {
    isHeaders: false,
    isPublic: false,
    isAdminRoute: false,
    exact: true,
    path: "/document",
    name: "Document",
    component: lazy(() => import("@pages/Document")),
  },
  {
    isHeaders: false,
    isPublic: false,
    isAdminRoute: false,
    exact: true,
    path: "/overview",
    name: "Overview",
    component: lazy(() => import("@pages/Overview")),
  },
  {
    isHeaders: false,
    isPublic: false,
    isAdminRoute: false,
    exact: true,
    path: "/houses",
    name: "Houses",
    component: lazy(() => import("@pages/Houses")),
  },
  {
    isHeaders: false,
    isPublic: false,
    isAdminRoute: false,
    exact: true,
    path: "/statistics",
    name: "Statistics",
    component: lazy(() => import("@pages/Statistics")),
  },
];
const AppContainer = () => {
  const routeComponents = useMemo(
    () =>
      routes.map(({ isPublic, isAdminRoute, isHeaders, ...route }) => (
        <PrivateRoute
          key={route.path}
          isHeaders={isHeaders}
          isPublic={isPublic}
          isAdminRoute={isAdminRoute}
          {...route}
        />
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

