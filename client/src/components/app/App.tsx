import React from "react";
import "./App.css";
import { Header } from "../header/Header";
import { Route, Switch } from "react-router-dom";
import Signup from "../../pages/signup/Signup.page";
import Login from "../../pages/login/Login.page";
import Cpanel from "../../pages/cpanel/Cpanel.page";
import { Container } from "@chakra-ui/react";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Container centerContent maxW="2xl">
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
      </Container>
    </div>
  );
};
