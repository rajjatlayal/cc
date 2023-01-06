import React, { useEffect, useState } from "react";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import {
  Switch,
  useHistory,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import "@fontsource/inter";
import Footer from "./components/Footer";
import SwappingWidget from "./components/SwappingWidget";
import Landing from "./components/Landing";
import TokenDetail from "./components/TokenDetail";
import { Box } from "@chakra-ui/react";
import eventBus from "./eventBus";

import { StateProvider } from "./StateProvider.js";
import { reducer, initialState } from "./reducer.js";


function App() {
  const history = useHistory();
  const [theme, setTheme] = useState("");
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("light");
    } else if (localStorage.getItem("theme") === "light") {
      setTheme("dark");
    }
    eventBus.on("changeTheme", (data: any) => {
      if (data.message === "dark") {
        setTheme("light");
      } else if (data.message === "light") {
        setTheme("dark");
      }
    });
  }, [theme]);
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <ChakraProvider>
        <Router basename={"/"}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
              return <Redirect to="/home" />;
              }}
            />
            <Route exact path="/home" component={Landing} />
            <Route exact path="/token_detail" component={TokenDetail} />
          </Switch>
        </Router>
      </ChakraProvider>
    </StateProvider>
  );
}

export default App;
