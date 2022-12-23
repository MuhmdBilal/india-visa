import React from 'react'
import Slider from '../Slider/Slider'
import pass_png from "../../Assets/pass_png.png";
function PanCard() {
  return (
    <div>
        <div className='mt-5'>
                <Slider />
            </div>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-12'>
                        <h1 className='Indian-h1'>APPLY FOR PAN CARD IN USA and CANADA</h1>
                    </div>
                </div>

                <div className='row d-flex justify-content-center justify-content-md-evenly mb-5 mt-5'>
                    <div className='col-md-2 col-11 boxes-x mt-3  pt-5 pb-5' style={{backgroundColor: "#05386b"}}>
                        <img src={pass_png} className="mt-4"/>
                        <h6 className='Renunciation-p mt-4'>Get a PAN card before you visit India.</h6>
                        
                    </div>
                    <div className='col-md-2 col-11 boxes-x mt-3  pt-5 pb-5 ' style={{backgroundColor: "#379683"}}>
                        <img src={pass_png} className="mt-4"/>
                        <h6 className='Renunciation-p mt-4 '>Get PAN card delivered to the US or Canada address.</h6>
                        
                    </div>
                    <div className='col-md-2 col-11 boxes-x mt-3  pt-5 pb-5' style={{backgroundColor: "#8ee4af"}}>
                        <img src={pass_png} className="mt-4"/>
                        <h6 className='Renunciation-p mt-4'>PAN card is a must to operate bank accounts in India.</h6>
                        
                    </div>
                    <div className='col-md-2 col-11 boxes-x mt-3  pt-5 pb-5' style={{backgroundColor: "#5cdb95"}}>
                        <img src={pass_png} className="mt-4"/>
                        <h6 className='Renunciation-p mt-4'>PAN card is a must to operate bank accounts in India.</h6>
                        
                    </div>
                </div>
                <div className='row d-flex justify-content-center mb-5 ' style={{ paddingTop: "80px" }}>
                    <div className="col-md-8">
                        <h2 className='Please-h2'>Please call us or send a message for more information.</h2>
                        <p className='call-p'>Call Us - 718-550-1313</p>

                        <button className='btn-send'>Send Message</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default PanCard