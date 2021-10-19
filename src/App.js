import React, { Component, Suspense, lazy } from 'react'
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import './App.css';

import HomeTemplate from './Pages/HomeTemplate/HomeTemplate';
import AdminTemplate from './Pages/AdminTemplate/AdminTemplate';

import Home from './Pages/HomeTemplate/Home/Home';
import About from './Pages/HomeTemplate/About/About';
import User from './Pages/HomeTemplate/User/User';
import Login from './Pages/HomeTemplate/Login/Login';

import LoadingComponent from './Pages/Loading/LoadingComponent';
import Admin from './Pages/AdminTemplate/Admin/Admin';
import Dashboard from './Pages/AdminTemplate/Dashboard/Dashboard';
import Lichchieu from './Pages/AdminTemplate/LichChieuManager/Lichchieu';
import Addfilm from './Pages/AdminTemplate/FilmsManager/Addfilm';
import Editfilm from './Pages/AdminTemplate/FilmsManager/Editfilm';
import Adduser from './Pages/AdminTemplate/UsersManager/Adduser';
import Edituser from './Pages/AdminTemplate/UsersManager/Edituser';

import Error from './Pages/Error/Error';
import BookingTicket from './Pages/BookingTicketTemplate/BookingTicket/BookingTicket';

const BookingMovieTemplateLazy = lazy(() => import('./Pages/BookingTicketTemplate/BookingTicketTemplate'));

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
            <HomeTemplate exact path="/About/:id" component={About} />
            <HomeTemplate exact path="/User" component={User} />
            <Route exact path="/Login" component={Login} />


            <AdminTemplate exact path="/Admin" component={Dashboard} />
            <AdminTemplate exact path="/Admin/dashboard" component={Dashboard} />
            <AdminTemplate exact path="/Admin/admin" component={Admin} />
            <AdminTemplate exact path="/Admin/lichchieu" component={Lichchieu} />
            <AdminTemplate exact path="/Admin/adduser" component={Adduser} />
            <AdminTemplate exact path="/Admin/edituser" component={Edituser} />
            <AdminTemplate exact path="/Admin/addfilm" component={Addfilm} />
            <AdminTemplate exact path="/Admin/editfilm" component={Editfilm} />



            <Suspense fallback={<LoadingComponent />}>
              <BookingMovieTemplateLazy exact path="/BookingTicket/:id" component={BookingTicket} />
            </Suspense>

            <Route path="*" component={Error} />
          </Switch>

        </Router>
      </div>
    )
  }
}
