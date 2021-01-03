import React from "react";
import { Route } from "react-router-dom";

const PrivateRoute = ({ ...route }) => {
  return <Route {...route} />;
};

export default PrivateRoute;
