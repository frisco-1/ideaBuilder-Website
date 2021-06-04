import React from 'react';
import Footer from './Footer';
import Home from './Home';
import NavB from './Navbar';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Main() {
  return (
    <>
      <Router>
        <NavB />
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
        <Footer/>
      </Router> 
    </>
  )
}

export default Main;
