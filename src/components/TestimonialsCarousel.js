import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
//AVATAR IMPORTS
import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png";

const TestimonialsCarousel = () => {
  return (
    <div>
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}
        >
            <>
                <img src={avatar1} alt='John Doe' />
                <div className='myCarousel'>
                <h3>John Doe 1</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A nulla animi error minus unde ex! Quidem assumenda ut alias nulla aperiam a nam placeat, ipsa reprehenderit sequi dolores ullam iusto.</p>
                </div>
            </>
            <>
                <img src={avatar2} alt='Jane Doe' />
                <div className='myCarousel'>
                <h3>Jane Doe</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A nulla animi error minus unde ex! Quidem assumenda ut alias nulla aperiam a nam placeat, ipsa reprehenderit sequi dolores ullam iusto.</p>
                </div>
            </>
            <>
                <img src={avatar3} alt='John Doe2' />
                <div className='myCarousel'>
                <h3>John Doe 2</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A nulla animi error minus unde ex! Quidem assumenda ut alias nulla aperiam a nam placeat, ipsa reprehenderit sequi dolores ullam iusto.</p>
                </div>
            </>
            <>
                <img src={avatar4} alt='John Doe3' />
                <div className='myCarousel'>
                <h3>John Doe 3</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A nulla animi error minus unde ex! Quidem assumenda ut alias nulla aperiam a nam placeat, ipsa reprehenderit sequi dolores ullam iusto.</p>
                </div>
            </>
        </Carousel>
      
    </div>
  )
}

export default TestimonialsCarousel
