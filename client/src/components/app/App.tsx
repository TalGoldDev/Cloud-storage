import React from "react";
import "./App.css";
import { Header } from "../header/Header";
import { Route, Switch } from "react-router-dom";
import Signup from "../../pages/signup/Signup.page";
import Login from "../../pages/login/Login.page";
import { Container, Flex } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Dashboard from "../../pages/dashboard/Dashboard";
import { AnimatedSwitch, spring } from "react-router-transition";

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

          <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
            className="route-wrapper"
          >
            <Route path="/register" component={Signup}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/" component={Dashboard}></Route>
          </AnimatedSwitch>
        </Flex>
      </Flex>
    </div>
  );
};

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};
