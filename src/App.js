import React from 'react';
import './App.css';
import home from './public/images/home.svg'
import categorie from './public/images/list.svg'
import favorite from './public/images/like.svg'

import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Nav from './components/Nav/Nav'
import Index from './components/Content/Index/Index'
import Recette from './components/Content/Recette/FullRecette'
import Category from './components/Content/Category/Category'
import Ajouter from './components/Content/Ajouter/AjouterForm'
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
          <Route path="/Recette/:id" component={Recette} />
          <Route path="/Categories" component={Category} />
          <Route path="/About" component={About} />
          <Route path="/Ajouter" component={Ajouter}/>
          <Route component={Error404} />
        </Switch>
      <Footer />
      <div className="mobile__nav">
          <ul className="mobile__nav__list">
              <li className="mobile__nav__list__item"><Link to="/"><img className="mobile__nav__svg" src={home} alt=""/></Link></li>
              <li className="mobile__nav__list__item"><Link to="/Categories"><img className="mobile__nav__svg" src={categorie} alt=""/></Link></li>
              <li className="mobile__nav__list__item"><Link to="#"><img className="mobile__nav__svg" src={favorite} alt=""/></Link></li>
          </ul>
      </div>
    </div>
    </Router>
  );
}

export default App;
