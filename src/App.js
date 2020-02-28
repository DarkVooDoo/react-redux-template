import React from 'react';
import './App.css';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Nav from './components/Nav/Nav'
import Index from './components/Content/Index/Index'
import About from './components/Content/About/About'
import Footer  from './components/Footer/Footer'
import Error404 from './components/Error/Error404'

function App() {
  return (
    <Router>
    <div className="App" id="top">
      <Nav />
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/About" component={About} />
          <Route component={Error404} />
        </Switch>
      <Footer />
      <div id="App__blurry"></div>
    </div>
    </Router>
  );
}

export default App;
