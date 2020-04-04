import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

import './App.css';
import './common.css';

function App() {
  return (
    <div className="main-container h100">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/portfolio'>
            <Home />
          </Route>
          <Route exact path='/portfolio/about'>
            <About />
          </Route>
          <Route exact path='/portfolio/work'>
            <Work />
          </Route>
          <Route exact path='/portfolio/contact'>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
