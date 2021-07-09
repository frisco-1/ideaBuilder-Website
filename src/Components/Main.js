import React from 'react';
// Nav, Home, Footer
import Footer from './Footer';
import Home from './HomePage/Home';
import NavB from './Navbar/Navbar';

import Envelopes from './ProductPages/Printing/Envelopes';
import Invoices from './ProductPages/Printing/Invoices';
import BusinessCard from './ProductPages/Printing/BusinessCard';
import Flyers from './ProductPages/Printing/Flyers';
import DoorHanger from './ProductPages/Printing/DoorHangers';

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
          <Route exact path='/invoices' component={Invoices} />
          <Route exact path='/door-hangers' component={DoorHanger}/>
          
        </Switch>
        
        <Footer/>
      </Router> 
    </>
  )
}

export default Main;
