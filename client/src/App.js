import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home'
import './App.css';

import FaqState from './context/faq/FaqState'

const App = () => {
  return (
    <>
      <FaqState>
        <Router>
          <>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
              </Switch>
            </div>
          </>
        </Router>
      </FaqState>
    </>
  )
}

export default App

