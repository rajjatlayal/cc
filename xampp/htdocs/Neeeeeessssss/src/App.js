import "./App.css";
import {
  Switch,
  useHistory,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

import React from "react";

import Landing from "./Components/HomePage/Landing";
import Cookie from "./Policy/Cookie";
import Privacypolicy from "./Policy/Privacypolicy";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import Collections from "./Components/Collections";
import Terms from "./Policy/Terms";
import Reset from "./Authentication/Reset";
import Editprofile from "./Authentication/Editprofile";
import Contact from "./Components/Contact";
import Collectionlist from "./Components/Collectionlist";

import Emailtemp from "./Email/Emailtemp";
import Subscription from "./Subscription";
import Password from "./Email/Password";

import Facebooklog from "./Authentication/Facebooklog";
import Error from "./Components/Error";
import { Profile } from "./Components/Profile";

function App() {
  const history = useHistory();
  return (
    <>
      <Router basename={"/"} history={history}>
        {/* <Router basename={"/nation-combat"} history={history}> */}
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/home" />;
            }}
          />
          <Route exact path="/home" component={Landing} />
          <Route exact path="/cookie-policy" component={Cookie} />
          <Route exact path="/privacy-policy" component={Privacypolicy} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/collections" component={Collections} />
          <Route exact path="/terms-conditions" component={Terms} />
          <Route exact path="/forgot-password" component={Reset} />
          <Route exact path="/edit-profile" component={Editprofile} />
          <Route exact path="/contact-us" component={Contact} />
          <Route exact path="/collections-list" component={Collectionlist} />

          <Route exact path="/email-temp" component={Emailtemp} />
          <Route exact path="/subscription" component={Subscription} />
          <Route exact path="/password" component={Password} />

          <Route exact path="/facebook-login" component={Facebooklog} />
          <Route exact path="/error" component={Error} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </>
  );
}
export default App;
