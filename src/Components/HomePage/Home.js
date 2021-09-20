import React from 'react';
import { PRODUCTS } from '../Products/NavLinks';

import HomeCarousel from './HomeCarousel';
import ContentPage from './ContentPage/ContentPage';

function Home() {
  return (
    <div>
      <HomeCarousel/>
      <ContentPage PRODUCTS={PRODUCTS}/>
    </div>
  )
}

export default Home;
