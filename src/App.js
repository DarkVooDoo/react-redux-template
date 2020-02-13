import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,} from 'react-router-dom';
import Nav from './components/Nav/Nav'
import Index from './components/Content/Index/Index'
import About from './components/Content/About/About'
import Footer  from './components/Footer/Footer'

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/About" component={About} />
        </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
