import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import AuthRoute from "../AuthRoute";
import AuthStatus from "../AuthStatus";
import Links from "../Links";
import Gallery from "../Gallery";
import Books from "../Books";
import Login from "../Login";
import Food from "../Food";
import useStyles from "./styles";

const PreventedRoutePage = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <AuthStatus isAuthorized={isAuthorized} />
      <Links />
      <Switch>
        <Route exact path="/restore-route">
          <h1 className={styles.title}>HOME PAGE</h1>
        </Route>
        <Route exact path="/restore-route/gallery">
          <Gallery />
        </Route>
        <AuthRoute
          isAuthorized={isAuthorized}
          exact
          path="/restore-route/books"
        >
          <Books />
        </AuthRoute>
        <AuthRoute
          isAuthorized={isAuthorized}
          exact
          path="/restore-route/food"
        >
          <Food />
        </AuthRoute>
        <Route exact path="/restore-route/login">
          <Login
            isAuthorized={isAuthorized}
            setIsAuthorized={setIsAuthorized}
          />
        </Route>
        <Redirect to="/restore-route" />
      </Switch>
    </div>
  );
};

export default PreventedRoutePage;
