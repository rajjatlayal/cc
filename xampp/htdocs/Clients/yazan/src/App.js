import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Switch,
  useHistory,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

import React,{useState,useEffect} from "react";
import Landing from "./Components/Landing";
import AdminLogin from "./Admin/AdminLogin";
// import LandingSetting from "./Admin/LandingSetting";
// import ChangePassword from "./Admin/ChangePassword";
// import GlobalSettings from "./Admin/GlobalSettings";
// import CreateFaq from './Admin/CreateFaq';
// import UpdateFaq from './Admin/UpdateFaq';
// import AdminFaq from './Admin/AdminFaq';
// import CreatePerk from './Admin/CreatePerk';
// import UpdatePerk from './Admin/UpdatePerk';
// import Perks from './Admin/Perks';
// import CreateWhitelist from './Admin/CreateWhitelist';
// import UpdateWhitelist from './Admin/UpdateWhitelist';
// import WhitelistUsers from './Admin/WhitelistUsers';
// import Winners from './Admin/Winners';
function App() {
  const history = useHistory();
  const [pageLoader, setPageLoader] = useState(false);
  // useEffect(() => {
  //   const removeListener = Hub.listen("datastore", async (capsule) => {
  //     const {
  //       payload: { event, data },
  //     } = capsule;
  //     if (event === "ready") {
  //       setPageLoader(false);
  //     }
  //   });
  //   // Start the DataStore, this kicks-off the sync process.
  //   DataStore.start();
  //   return () => {
  //     removeListener();
  //   };
  // }, [pageLoader]);
  return (
    <>
	  {!pageLoader ? 
      (
        <div>
          <Router basename={"/"} history={history}>
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                return <Redirect to="/home" />;
                }}
              />
              <Route exact path="/home" component={Landing} />
              <Route exact path="/admin/login" component={AdminLogin} />
              {/* <Route exact path="/admin/landing_settings" component={LandingSetting} />
              <Route exact path="/admin/global_settings" component={GlobalSettings} />
              <Route exact path="/admin/change_password" component={ChangePassword} />
              <Route exact path="/admin/create_faq" component={CreateFaq}/>
              <Route exact path="/admin/update_faq" component={UpdateFaq}/>
              <Route exact path="/admin/admin_faq" component={AdminFaq}/>
              <Route exact path="/admin/create_perk" component={CreatePerk}/>
              <Route exact path="/admin/update_perk" component={UpdatePerk}/>
              <Route exact path="/admin/perks" component={Perks}/>
              <Route exact path="/admin/create_whitelist" component={CreateWhitelist}/>
              <Route exact path="/admin/update_whitelist" component={UpdateWhitelist}/>
              <Route exact path="/admin/whitelist_users" component={WhitelistUsers}/>
              <Route exact path="/admin/winners" component={Winners}/> */}
            </Switch>
          </Router>
        </div>
      ):(<div className="loader"><img src={"images/loader.gif"} alt=""></img></div>)}
    </>
  );
}
export default App;
