import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components/app/App";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import dotenv from "dotenv";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./store/slices";
import { Provider } from "react-redux";

dotenv.config();
const store = configureStore({ reducer: rootReducer });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
