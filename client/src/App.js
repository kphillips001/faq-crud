import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home'
import Register from './components/auth/Register';
import Login from './components/auth/Login'
import Alerts from './components/layout/Alerts';
import PrivateRoute from './components/routing/PrivateRoute';

import FaqState from './context/faq/FaqState';
import AlertState from './context/alert/AlertState'
import AuthState from './context/auth/AuthState';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage);
}

const App = () => {
  return (
    <>
      <AuthState>
        <FaqState>
          <AlertState>
            <Router>
              <>
                <Navbar />
                <div className='container'>
                  <Alerts />
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' component={Login} />
                  </Switch>
                </div>
              </>
            </Router>
          </AlertState>
        </FaqState>
      </AuthState>
    </>
  )
}

export default App

