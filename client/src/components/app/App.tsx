import React from "react";
import "./App.css";
import { Header } from "../header/Header";
import { Route, Switch } from "react-router-dom";
import Signup from "../../pages/signup/Signup";
import Login from "../../pages/login/Login";
import Cpanel from "../../pages/cpanel/Cpanel";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/register">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Cpanel />
        </Route>
      </Switch>
    </div>
  );
};
