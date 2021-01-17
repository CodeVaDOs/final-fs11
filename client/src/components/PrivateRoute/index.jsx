import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ isPublic, isAuthenticated, ...route }) => {
  const { authorized } = useSelector((state) => state.auth);

  if (isPublic || authorized) {
    return <Route {...route} />;
  }

  return <Redirect to="/login" />;
};

export default PrivateRoute;
