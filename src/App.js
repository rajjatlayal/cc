import './css/main.css';
import {Switch,useHistory , Route,BrowserRouter as Router,Redirect } from 'react-router-dom';
import Home from './components/Home';
import AdminLogin from './components/admin/AdminLogin';
import Settings from './components/admin/Settings';
import 'bootstrap/dist/css/bootstrap.min.css'
// @ts-ignore
import 'bootstrap/dist/js/bootstrap.min.js'
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const history = useHistory();
  return (
    <div className="app">
      <Router basename={"/"} history= {history}>
      {/* <Router basename={"/cc"} history= {history}> */}
        <Switch>
          <Route exact path="/"
            render={() => {
              return (
                <Redirect to="/home" />
              )
          }}/>
          <Route path="/home" exact component={Home}/>
          <Route path="/admin/login" exact component={AdminLogin}/>
          <Route path="/admin/settings" exact component={Settings}/>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
