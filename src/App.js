import React from 'react';
import './App.css';
import Nav from './pages/component/nav';
import Homepage from './pages/home';
import Footer from './pages/component/footer';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Homepage}/>
      </Switch>
      <Footer />
    </Router>
  );
}



export default App;
