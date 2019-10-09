import React from 'react';
import './App.css';
import Nav from './pages/component/nav';
import Homepage from './pages/home';
import About from './pages/about';
import Services from './pages/servicespage';
import Blog from './pages/blog';
import Footer from './pages/component/footer';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/about" exact component={About}/>
        <Route path="/services" exact component={Services}/>
        <Route path="/blog" exact component={Blog}/>
      </Switch>
      <Footer />
    </Router>
  );
}



export default App;
