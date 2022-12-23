import React from 'react'
import banner from "../../Assets/banner.jpg";
import banner2 from "../../Assets/banner2.jpg"
import banner3 from "../../Assets/provably-fair.jpg"
import Carousel from 'react-bootstrap/Carousel';
import zigzag from "../../Assets/zigzag-1.png"
import "./Slider.css"
function Slider() {
  return (
    <div className='fluid-container'>
        <Carousel >
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={banner}
          style={{height: "500px"}}
          alt="First slide"
        />
        <Carousel.Caption className='text-box'>
          <h3>Ensure accuracy of legal documents</h3>
          
          <p className='mt-3'>Your team members are ready to help you in minutes with any document questions. A small mistake with your legal situation can cost you dearly. Don’t risk it by relying on amateur advice or sifting through thousands of Google search results on your own..</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={banner2}
          style={{height: "500px"}}
          alt="Second slide"
        />
        <Carousel.Caption className='text-box'>
          <h3>Whenever you need it most</h3>
          
          <p className='mt-3'>Customers can help us by being specific when asking questions. The more information we have, the quicker we can help.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={banner3}
          style={{height: "500px"}}
          alt="Third slide"
        />
        <Carousel.Caption className='text-box'>
          <h3>For you and your family, without the legal hassles</h3>
          
          <p className='mt-3'>
          We know life’s hard. So we try to make it simple: no retainers or legal fees, no appointments that take weeks to book. Share your contact in order to get the most bang for your buck.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slider