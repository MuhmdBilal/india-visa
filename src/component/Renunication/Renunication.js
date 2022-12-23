import React from 'react'
import Slider from '../Slider/Slider'
import pass_png from "../../Assets/pass_png.png";
function Renunication() {
    return (
        <div>
            <div className='mt-5'>
                <Slider />
            </div>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-12'>
                        <h1 className='Indian-h1'>Indian Passport Renunication</h1>
                    </div>
                    <div className='col-md-11 text-start' style={{ paddingTop: "80px" }}>
                        <p className='aboutus-p2'>Indian passport holders are required to surrender their passports to the Indian Embassy/Consulates on acquisition of foreign citizenship. On surrender of the Indian passport, the applicant will be issued a surrender certificate/renunciation certificate and the Indian passport will be cancelled and returned to the applicant.</p>
                        <p className='aboutus-p2 mt-5'>If the most recent Indian passport is retained for more than 3 years after acquisition of citizenship of another country, a penalty of $250.00 will be automatically calculated as a part of the Order Form except where the most recent Indian passport expired before January 1, 2005 or where the most recent Indian passport shows a ‘Cancelled’ stamp. In addition, a penalty of $250.00 will be charged for each case of misuse of the Indian passport for travel at any time after of acquisition of citizenship of another country subject to a maximum penalty of $1250.00.If you have acquired another country’s citizenship, it is highly recommended that you surrender or renunciate your Indian passport at the soonest possible.</p>

                    </div>
                    <div className='col-md-11 mt-4'>
                        <h5 className='OFFER23'>WE OFFER QUICK, EFFICIENT AND RELIABLE RENUNCIATION SERVICES FOR THE FOLLOWING SERVICE CATEGORIES:</h5>
                    </div>
                </div>
                <div className='row d-flex justify-content-center justify-content-evenly mb-5 mt-4'>
                    <div className='col-md-3 col-11 box-mini pt-5 pb-5'>
                        <img src={pass_png} className="mt-4"/>
                        <h6 className='Renunciation-p mt-4'>Renunciation for citizen Naturalized BEFORE 1st June, 2010</h6>
                        <span className='Renunciation-span mt-2 mb-4'>Only with Indian Passport</span>
                    </div>
                    <div className='col-md-3 col-11 box-mini2 pt-5 pb-5 '>
                        <img src={pass_png} className="mt-4"/>
                        <h6 className='Renunciation-p mt-4 text-black'>Renunciation for citizen Naturalized ON OR AFTER 1st June, 2010</h6>
                        <span className='Renunciation-span mt-2 mb-4 text-black'>Only with Indian Passport</span>
                    </div>
                    <div className='col-md-3 col-11 box-mini3 pt-5 pb-5'>
                        <img src={pass_png} className="mt-4"/>
                        <h6 className='Renunciation-p mt-4'>Renunciation for citizen Naturalized 10 Years BACK</h6>
                        <span className='Renunciation-span mt-2 mb-4'>Only with Indian Passport</span>
                    </div>
                </div>

                <div className='row d-flex justify-content-center mb-5'>
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

export default Renunication