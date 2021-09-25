import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import HomeTemplate from './HomeTemplate/HomeTemplate';
import AdminTemplate from './AdminTemplate/AdminTemplate';

import Home from './HomeTemplate/Home/Home';
import About from './HomeTemplate/About/About';
import Test from './HomeTemplate/Test/Test';
import Login from './HomeTemplate/Login/Login';

import Admin from './AdminTemplate/Admin/Admin';
import Dashboard from './AdminTemplate/Dashboard/Dashboard';

import Error from './Error/Error';
import LoadingComponent from './Loading/LoadingComponent';

export const history = createBrowserHistory(); //{forceRefresh:true}

export default class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
            <LoadingComponent />
            <Switch>
              <HomeTemplate exact path="/" component={Home} />
              <HomeTemplate exact path="/Home" component={Home} />
              <HomeTemplate exact path="/About" component={About} />
              <HomeTemplate exact path="/Test" component={Test} />
              <Route exact path="/Login" component={Login} />

              <AdminTemplate exact path="/Admin" component={Admin} />
              <AdminTemplate exact path="/Admin/admin" component={Admin} />
              <AdminTemplate exact path="/Admin/dashboard" component={Dashboard} />
              <Route path="*" component={Error} />
            </Switch>

        </Router>
      </div>
    )
  }
}
