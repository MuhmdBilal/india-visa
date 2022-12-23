import React from 'react'
import Slider from '../Slider/Slider'
function PowerOfAttorneys() {
    return (
        <div>
            <div className='mt-5'>
                <Slider />
            </div>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-12'>
                        <h1 className='Indian-h1'>Power Of Attorneys</h1>
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

export default PowerOfAttorneys