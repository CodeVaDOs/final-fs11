import React, { lazy, useMemo, Suspense } from "react";
import
{
  Switch,
  useLocation
} from "react-router-dom";
import { PageLoader, Preloader } from "@components/Loader";
import PrivateRoute from "@components/PrivateRoute";
import { useSelector } from "react-redux";
import * as ga from "q";

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
    isPublic: true,
    isAdminRoute: false,

    exact: true,
    path: "/panel/admin",
    component: lazy(() => import("@pages/Panel")),
  },
  {
    isPublic: true,
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
    path: "/houses",
    component: lazy(() => import("@pages/House")),
  },
  {
    isPublic: false,
    isAdminRoute: false,
    exact: true,
    path: "/clients",
    component: lazy(() => import("@pages/Client")),
  },
  {
    path: "/",
    component: lazy(() => import("@pages/NotFound")),
  },
];

function usePageViews() {
  let location = useLocation();
  React.useEffect(() => {
    ga.send(["pageview", location.pathname]);
  }, [location]);
}

const AppContainer = () => {
  const loading = useSelector((state) => state.auth.loading);
  usePageViews();

  const routeComponents = useMemo(
    () =>
      routes.map(({ isPublic, isAdminRoute, ...route }) => (
        <PrivateRoute key={route.path} isPublic={isPublic} isAdminRoute={isAdminRoute} {...route} />
      )),
    []
  );

  return (
    <>
      <Preloader loaded={!loading}/>
      <Suspense fallback={<PageLoader loaded={!loading}/>}>
        <Switch>{routeComponents}</Switch>
      </Suspense>
    </>
  );
};


export default AppContainer;
