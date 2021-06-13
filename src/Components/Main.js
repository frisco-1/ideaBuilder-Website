import React from 'react';
// Nav, Home, Footer
import Footer from './Footer';
import Home from './Home';
import NavB from './Navbar';

import {BusinessCard, Flyers, Invoices, Envelopes} from './ProductPages/ItemListing';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Main() {
  return (
    <>
      <Router>
        <NavB />

        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route path={{ productId }} render={(productId) => <Prices ItemId={productId}/> }/> */}
          <Route exact path='/business-cards' component={BusinessCard} />
          <Route exact path='/flyers' component={Flyers}/>
          <Route exact path='/envelopes' component={Envelopes} />
          <Route exact path='/invoices' component={Invoices}/>
        </Switch>
        
        <Footer/>
      </Router> 
    </>
  )
}

export default Main;
