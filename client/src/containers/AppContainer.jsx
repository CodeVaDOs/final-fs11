import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import PropTypes from "prop-types";

import { PageLoader } from "@components/Loader";
import PrivateRoute from "@components/PrivateRoute";
import { routes } from "@utils/routes";

const AppContainer = () => {

  const routeComponents =
    routes.map(({ isPublic, isAdminRoute, isHeaders, ...route }) => (
      <PrivateRoute
        key={route.path}
        isHeaders={isHeaders}
        isPublic={isPublic}
        isAdminRoute={isAdminRoute}
        {...route}
      />
    ));

  return (
    <>
      <Suspense fallback={<PageLoader loaded={(<div>Pageloader</div>)}/>}>
        <Switch>{routeComponents}</Switch>
      </Suspense>
    </>
  );
};

AppContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};
export default AppContainer;