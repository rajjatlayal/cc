import './css/main.css';
import {Switch,useHistory , Route,BrowserRouter as Router,Redirect } from 'react-router-dom';
import Home from './components/Home';
import AdminLogin from './components/admin/AdminLogin';
import Setting from './components/admin/Settings';
import ChangePassword from './components/admin/ChangePassword';
// import Mint from './components/admin/Mint';
import 'bootstrap/dist/css/bootstrap.min.css'
// @ts-ignore
import 'bootstrap/dist/js/bootstrap.min.js'
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  // const history = useHistory();
  return (
    <div className="app">
      <Router basename={"/"}>
      {/* <Router basename={"/cc/"} history= {history}> */}
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/admin/login" component={AdminLogin}/>
          <Route exact path="/admin/settings" component={Setting}/>
          <Route exact path="/admin/change_password" component={ChangePassword}/>
          {/* <Route path="/admin/mint" exact component={Mint}/> */}
        </Switch>
      </Router>
    </div>
  );
}
export default App;
