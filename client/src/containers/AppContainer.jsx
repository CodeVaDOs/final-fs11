import React, { lazy, useMemo } from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "@components/PrivateRoute";

export const routes = [
  {
    isPublic: false,
    isAdminRoute: false,
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
    path: "/panel",
    component: lazy(() => import("@pages/Panel")),
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
    isPublic: false,
    isAdminRoute: false,
    exact: true,
    path: "/changepassword",
    component: lazy(() => import("@pages/ChangePass")),
  },
  {
    isPublic: false,
    isAdminRoute: false,
    exact: true,
    path: "/houses",
    component: lazy(() => import("@pages/House")),
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
      {/*<Preloader loaded={(<div>Preloader</div>)}/>*/}
      {/*<Suspense fallback={<PageLoader loaded={(<div>Pageloader</div>)}/>}>*/}
      <Switch>{routeComponents}</Switch>
      {/*</Suspense>*/}
    </>
  );
};


export default AppContainer;
