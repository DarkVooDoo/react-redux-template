import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,} from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About'

function App() {
  return (

    <Router>
    <div className="App">
    <Nav/>
      <Switch>
        <Route path="/about" component={About}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;