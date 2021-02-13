import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { usePermission } from "../../hooks/usePermission";
import { PageLoader, Preloader } from "../Loader";

const getPathByRole = (role) => {
  console.log(role);
  switch (role.toLowerCase()) {
    case 'admin':
    case 'manager':
      return `/${role.toLowerCase()}`;
    default:
      return '';
  }
};

const PrivateRoute = ({ isPublic, isAuthenticated, ...route }) => {
  const { authorized, user, loading } = useSelector((state) => state.auth);

  if (loading) return <Preloader/>;

  if (route.notFound && authorized && user) return <Redirect to={`/panel${getPathByRole(user.role)}`}/>;

  if (isPublic || authorized) {
    return <Route {...route} />;
  }

  return <Redirect to="/login"/>;
};

export default PrivateRoute;
