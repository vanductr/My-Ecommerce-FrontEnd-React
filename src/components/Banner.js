import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
  return (
    <div className="mb-8">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={3000}  // Thời gian chuyển ảnh, đơn vị là mili giây (ở đây là 3 giây)
      >
        <div>
          <img src="https://via.placeholder.com/1200x400?text=Banner+1" alt="Banner 1" />
          <p className="legend">Banner 1</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/1200x400?text=Banner+2" alt="Banner 2" />
          <p className="legend">Banner 2</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/1200x400?text=Banner+3" alt="Banner 3" />
          <p className="legend">Banner 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
