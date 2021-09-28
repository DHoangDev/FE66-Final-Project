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

import Admin from './Pages/AdminTemplate/Admin/Admin';
import Dashboard from './Pages/AdminTemplate/Dashboard/Dashboard';

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

              <AdminTemplate exact path="/Admin" component={Admin} />
              <AdminTemplate exact path="/Admin/admin" component={Admin} />
              <AdminTemplate exact path="/Admin/dashboard" component={Dashboard} />

              <Route path="*" component={Error} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}
