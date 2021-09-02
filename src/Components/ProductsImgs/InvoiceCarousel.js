import React from 'react';
import { Carousel } from 'react-responsive-carousel';


function InvoiceCarousel() {
  return (
    <Carousel className='carousel thumb thumbs carousel-slider control arrow control-dots dot'>
      <div>
          <img alt="InvoicesNumberParts" src="../img/01-Printing/Invoices/NUMBER-PARTS.jpg" width="100%"/>
      </div>
      <div>
          <img alt="InvoicesPaddingOptional" src="../img/01-Printing/Invoices/PADDING-OPTIONS.jpg" width="100%"/>
      </div>
      <div>
          <img alt="InvoicesSequential" src="../img/01-Printing/Invoices/SEQUENTIAL-NUMBERING.jpg" width="100%"/>
      </div>
      <div>
          <img alt="InvoicesSizes" src="../img/01-Printing/Invoices/SIZES-CHART.jpg" width="100%"/>
      </div>
    </Carousel>
  )
}

export default InvoiceCarousel;
