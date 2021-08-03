import React from "react";
// Nav, Home, Footer
import Footer from './Footer';
import Home from './HomePage/Home';
import NavB from './Navbar/1Navbar';
import Contact from './Contact';

//PRINTING
import Envelopes from "./ProductPages/Printing/Envelopes";
import Invoices from "./ProductPages/Printing/Invoices";
import BusinessCard from "./ProductPages/Printing/BusinessCard";
import Flyers from "./ProductPages/Printing/Flyers";
import DoorHanger from "./ProductPages/Printing/DoorHangers";
import Labels from "./ProductPages/Printing/Labels";
import Brochures from "./ProductPages/Printing/Brochures";

//SIGNS
import RealtorSigns from './ProductPages/Signs/RealtorSigns';
import Banners from './ProductPages/Signs/Banners';
import Magnets from "./ProductPages/Signs/Magnets";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import FoamSigns from "./ProductPages/Signs/FoamSigns";
import CoroplastSigns from "./ProductPages/Signs/CoroplastSigns";
import AluminumSigns from "./ProductPages/Signs/AluminumSigns";



function Main() {
  return (
    <>
      <Router>
        <NavB />

        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path={{ productId }} render={(productId) => <Prices ItemId={productId}/> }/> */}

          <Route exact path='/business-cards' component={BusinessCard} />
          <Route exact path='/flyers' component={Flyers}/>
          <Route exact path='/envelopes' component={Envelopes} />
          <Route exact path='/invoices' component={Invoices} />
          <Route exact path='/door-hangers' component={DoorHanger} />
          <Route exact path='/labels' component={Labels} />
          <Route exact path='/brochures' component={Brochures}/>

          <Route exact path="/magnets" component={Magnets} /> 
          <Route exact path='/realtor-signs' component={RealtorSigns} />
          <Route exact path='/banners' component={Banners} />
          <Route exact path='/foam-signs' component={FoamSigns} />
          <Route exact path='/coroplast-signs' component={CoroplastSigns} />
          <Route exact path='/aluminum-signs' component={AluminumSigns} />
          
          <Route exact path='/contact' component={Contact} />

        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default Main;
