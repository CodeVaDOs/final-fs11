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
  // {
  //   isPublic: false,
  //   isAdminRoute: false,
  //   exact: true,
  //   path: "/",
  //   component: lazy(() => import("@pages/Home")),
  // },
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
    path: "/documents",
    component: lazy(() => import("@pages/Document")),
  },
  {
    isPublic: false,
    isAdminRoute: false,
    exact: true,
    path: "/finances",
    component: lazy(() => import("@pages/Finance")),
  },
  {
    isPublic: false,
    isAdminRoute: false,
    exact: true,
    path: "/rent",
    component: lazy(() => import("@pages/Rent")),
  },
  {
    isPublic: false,
    isAdminRoute: false,
    exact: true,
    path: "/statistic",
    component: lazy(() => import("@pages/Statistic")),
  },
  {
    isPublic: false,
    isAdminRoute: false,
    exact: true,
    path: "/employees",
    component: lazy(() => import("@pages/Employee")),
  },
  // {
  //   isPublic: false,
  //   isAdminRoute: false,
  //   exact: true,
  //   path: "/history",
  //   component: lazy(() => import("@pages/History")),
  // },
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
    path: "/panel/manager",
    component: lazy(() => import("@pages/Panel/pages/PanelManager")),
  },
  {
    isPublic: false,
    isAdminRoute: false,
    exact: true,
    path: "/panel/admin",
    component: lazy(() => import("@pages/Panel/pages/PanelAdmin")),
  },
  {
    isPublic: true,
    isAdminRoute: false,
    exact: true,
    path: "/login",
    component: lazy(() => import("@pages/Login")),
  },
  {
    isPublic: true,
    isAdminRoute: false,
    exact: true,
    path: "/forgotPassword",
    component: lazy(() => import("@pages/ForgotPass")),
  },
  {
    isPublic: true,
    isAdminRoute: false,
    exact: true,
    path: "/changePassword/:token",
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
    isPublic: false,
    isAdminRoute: false,
    exact: true,
    path: "/clients",
    component: lazy(() => import("@pages/Client")),
  },
  {
    isPublic: false,
    isAdminRoute: false,
    exact: true,
    path: "/clients/:id",
    component: lazy(() => import("@pages/ClientPage")),
  },
  {
    isPublic: false,
    isAdminRoute: true,
    exact: true,
    path: "/employee",
    component: lazy(() => import("@pages/Employee")),
  },
  {
    path: "/",
    notFound: true,
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
