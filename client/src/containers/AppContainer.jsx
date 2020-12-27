import React, { Suspense, useMemo } from "react";
import { Switch } from "react-router-dom";
import { PageLoader, Preloader } from "@components/Loader";
import PrivateRoute from "@components/PrivateRoute";
import { routes } from "@utils/routes";


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