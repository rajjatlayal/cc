import React, { useEffect, useState } from "react";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import {
  Switch,
  useHistory,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Header from "./Header";
import "@fontsource/inter";
import Footer from "./Footer";
import SwappingWidget from "./SwappingWidget";
import TokenBalance from "./TokenBalance";
import { Box } from "@chakra-ui/react";
import eventBus from "./../eventBus";

import { useStateValue } from "./../StateProvider.js";
import { reducer, initialState } from "./../reducer.js";

function Landing() {
  const [{ global }, dispatch] = useStateValue();
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
    <>
        <Box>
          <Header />
          <SwappingWidget />
        </Box>
        <Box>
            {global.walletAddress!=='' &&
            (<TokenBalance />)}
        </Box><br/><br/>
        <Footer />
    </>
  );
}

export default Landing;
