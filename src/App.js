import React from 'react';
import './App.css';
import Nav from './pages/component/nav';
import Homepage from './pages/home';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Homepage}/>
      </Switch>

    </Router>
  );
}



export default App;
