import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./../pages/Login";
import Dashboard from "./../pages/Dashboard";
import Profile from "./../pages/Profile";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import Counter from "../pages/Counter";
import Hooks from "../pages/hooks";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/counter" component={Counter} />
        <PrivateRoute path="/hooks" component={Hooks} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
