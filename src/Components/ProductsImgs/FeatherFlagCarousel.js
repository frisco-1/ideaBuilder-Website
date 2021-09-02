import React from 'react';
import { Carousel } from 'react-responsive-carousel';


function FeatherFlagCarousel() {
  return (
    <Carousel className='carousel thumb thumbs carousel-slider control arrow control-dots dot'>
      <div>
        <img alt="FeatherFlag1" src="../img/02-Signs/FeatherFlag/EconoFeatherFlag.png" width="100%" />
      </div>
      <div>
        <img alt="FeatherFlag2" src="../img/02-Signs/FeatherFlag/FeatherFlag02.png" width="100%" />
      </div>
      <div>
        <img alt="FeatherFlag3" src="../img/02-Signs/FeatherFlag/FeatherFlag03.png" width="100%" />
      </div>
    </Carousel>
  )
}

export default FeatherFlagCarousel;
