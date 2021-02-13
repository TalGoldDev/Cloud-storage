import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components/app/App";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import dotenv from "dotenv";

dotenv.config();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
