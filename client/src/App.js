import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home'
import Register from './components/auth/Register';
import Login from './components/auth/Login'

import './App.css';

import FaqState from './context/faq/FaqState';
import AuthState from './context/auth/AuthState';

const App = () => {
  return (
    <>
      <AuthState>
        <FaqState>
          <Router>
            <>
              <Navbar />
              <div className='container'>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </>
          </Router>
        </FaqState>
      </AuthState>
    </>
  )
}

export default App

