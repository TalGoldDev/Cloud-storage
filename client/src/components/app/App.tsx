import React from "react";
import "./App.css";
import { Header } from "../header/Header";
import { Route, Switch } from "react-router-dom";
import Signup from "../../pages/signup/Signup.page";
import Login from "../../pages/login/Login.page";
import { Container, Flex, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Dashboard from "../../pages/dashboard/Dashboard";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Flex
        width="100%"
        height={["100%", "100%", "100%", "100vh", "100vh", "100vh"]}
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
          {/* <Header /> */}
          <Switch>
            {/* Dashboard */}
            <Route path="/" exact component={Dashboard}></Route>

            {/* Auth */}
            <Route path="/register" exact component={Signup}></Route>
            <Route path="/login" exact component={Login}></Route>
          </Switch>
        </Flex>
      </Flex>
    </div>
  );
};
