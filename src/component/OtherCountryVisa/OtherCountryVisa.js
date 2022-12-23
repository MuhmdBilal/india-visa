import React from 'react'
import flag1 from "../../Assets/flg-ind-150x150.jpg"
import flag2 from "../../Assets/flg-canda-150x150.jpg"
import flag3 from "../../Assets/flg-uk-150x150.jpg"
import flag4 from "../../Assets/flg-shanc-150x150.jpg"
import flag5 from "../../Assets/flg-chin-150x150.jpg"
import flag6 from "../../Assets/flg-Aus-150x150.jpg"
import more from "../../Assets/more-150x150.jpg"
import Slider from '../Slider/Slider'
function OtherCountryVisa() {
    return (
        <div >
            <div className='mt-5'>
                <Slider />
            </div>
        <div className='container'>
            <div className='row d-flex justify-content-center'>
                <div className='col-12'>
                    <h1 className='Indian-h1'>Other Country Visas</h1>
                </div>
            </div>
            <div className='row d-flex justify-content-center mt-5'>
                <div className='col-md-2'>
                    <img src={flag1} />
                    <p className='india-p'>India</p>
                </div>
                <div className='col-md-2'>
                    <img src={flag2} />
                    <p className='india-p'>Canada</p>
                </div>
                <div className='col-md-2'>
                    <img src={flag3} />
                    <p className='india-p'>UK</p>
                </div>
                <div className='col-md-2'>
                    <img src={flag4} />
                    <p className='india-p'>Schengen</p>
                </div>
                <div className='col-md-2'>
                    <img src={flag5} />
                    <p className='india-p'>China</p>
                </div>
                <div className='col-md-2'>
                    <img src={flag6} />
                    <p className='india-p'>India</p>
                </div>
            </div>

            <div className='row d-flex justify-content-center mt-5' style={{paddingTop: "60px"}}>
                <div className='col-md-2'>
                    <img src={more} />
                </div>
                <div className='col-md-10 mt-3 mb-5'>
                    <h4 className='Indian-h132'>AND MANY MORE</h4>
                    <p className='destination-p'>If your destination country is not on the list please call 718-550-1313 for more info</p>
                    <button className='btn-send'>Send Message</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default OtherCountryVisa