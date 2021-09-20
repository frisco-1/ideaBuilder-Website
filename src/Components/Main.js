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
import CarMagnets from "./ProductPages/Signs/CarMagnets";
import FoamSigns from "./ProductPages/Signs/FoamSigns";
import CoroplastSigns from "./ProductPages/Signs/CoroplastSigns";
import AluminumSigns from "./ProductPages/Signs/AluminumSigns";
import FeatherFlag from "./ProductPages/Signs/FeatherFlag";
import RollUpSign from "./ProductPages/Signs/RollUpSign";

//PROMOTIONAL ITEMS
import TableCover from "./ProductPages/Promotional Items/TableCover";
import CarsVansWrap from "./ProductPages/Promotional Items/CarsVansWrap";
import TrailerWrap from "./ProductPages/Promotional Items/TrailerWrap";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';








function Main() {
  return (
    <>
      <Router>
        <NavB />

        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path={{ productId }} render={(productId) => <Prices ItemId={productId}/> }/> */}

          {/* Printing */}
          <Route exact path='/business-cards' component={BusinessCard} />
          <Route exact path='/flyers' component={Flyers} />
          <Route exact path='/envelopes' component={Envelopes} />
          <Route exact path='/invoices' component={Invoices} />
          <Route exact path='/door-hangers' component={DoorHanger} />
          <Route exact path='/labels' component={Labels} />
          <Route exact path='/brochures' component={Brochures} />

          {/* Signs */}
          <Route exact path="/car-magnets" component={CarMagnets} />
          <Route exact path='/realtor-signs' component={RealtorSigns} />
          <Route exact path='/banners' component={Banners} />
          <Route exact path='/foam-signs' component={FoamSigns} />
          <Route exact path='/coroplast-signs' component={CoroplastSigns} />
          <Route exact path='/aluminum-signs' component={AluminumSigns} />
          <Route exact path='/feather-flags' component={FeatherFlag} />
          <Route exact path='/roll-up-sign' component={RollUpSign} />

          {/* Promotional  */}
          <Route exact path='/table-covers' component={TableCover} />
          <Route exact path='/cars-vans-wrap' component={CarsVansWrap} />
          <Route exact path='/trailers-wrap' component={TrailerWrap} />

          <Route exact path='/contact' component={Contact} />

        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default Main;
