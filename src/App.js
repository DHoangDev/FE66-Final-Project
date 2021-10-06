import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import './App.css';

import HomeTemplate from './Pages/HomeTemplate/HomeTemplate';
import AdminTemplate from './Pages/AdminTemplate/AdminTemplate';

import Home from './Pages/HomeTemplate/Home/Home';
import About from './Pages/HomeTemplate/About/About';
import Test from './Pages/HomeTemplate/Test/Test';
import TestGetID from './Pages/HomeTemplate/TestGetID/TestGetID';
import Login from './Pages/HomeTemplate/Login/Login';

import Dashboard from './Pages/AdminTemplate/Dashboard/Dashboard';
import Admin from './Pages/AdminTemplate/Admin/Admin';
import Lichchieu from './Pages/AdminTemplate/LichChieuManager/Lichchieu';
import Addfilm from './Pages/AdminTemplate/FilmsManager/Addfilm';
import Editfilm from './Pages/AdminTemplate/FilmsManager/Editfilm';
import Adduser from './Pages/AdminTemplate/UsersManager/Adduser';
import Edituser from './Pages/AdminTemplate/UsersManager/Edituser';

import Error from './Pages/Error/Error';

export const history = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Switch>
              <HomeTemplate exact path="/" component={Home} />
              <HomeTemplate exact path="/Home" component={Home} />
              <HomeTemplate exact path="/About" component={About} />
              <HomeTemplate exact path="/Test" component={Test} />
              <HomeTemplate exact path="/TestGetID/:id" component={TestGetID} />
              <Route exact path="/Login" component={Login} />

              <AdminTemplate exact path="/Admin" component={Dashboard} />
              <AdminTemplate exact path="/Admin/dashboard" component={Dashboard} />
              <AdminTemplate exact path="/Admin/admin" component={Admin} />
              <AdminTemplate exact path="/Admin/lichchieu" component={Lichchieu} />
              <AdminTemplate exact path="/Admin/adduser" component={Adduser} />
              <AdminTemplate exact path="/Admin/edituser" component={Edituser} />
              <AdminTemplate exact path="/Admin/addfilm" component={Addfilm} />
              <AdminTemplate exact path="/Admin/editfilm" component={Editfilm} />

              <Route path="*" component={Error} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}
