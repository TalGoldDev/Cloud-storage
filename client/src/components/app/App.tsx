import React from "react";
import "./App.css";
import { Header } from "../header/Header";
import { Route, Switch } from "react-router-dom";
import Signup from "../../pages/signup/Signup.page";
import Login from "../../pages/login/Login.page";
import { Container, Flex } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Dashboard from "../../pages/dashboard/Dashboard";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Flex
        width="100%"
        height="100%"
        bgGradient="linear(to-br, #ffffff, #b9c5df)"
        bgColor="#b9c5df"
      >
        <Flex
          width="100%"
          height="100%"
          alignItems="center"
          direction="column"
          padding="1rem"
        >
          <Header />
          <Switch>
            <Route path="/register">
              <Signup />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </Flex>
      </Flex>
    </div>
  );
};
