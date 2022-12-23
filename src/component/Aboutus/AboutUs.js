import React from 'react'
import "./AboutUs.css"
import pass_png from "../../Assets/pass_png.png";
import f01 from "../../Assets/f01.png";
import f03 from "../../Assets/f03.png";
import f04 from "../../Assets/f04.png";
import f02 from "../../Assets/f02.png"
import Slider from '../Slider/Slider';
function AboutUs() {
    return (
        <div>
            <div className='mt-5'>

                <Slider />
            </div>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-12'>
                        <h1 className='abouts-h1'>
                            A little bit About Us
                        </h1>
                    </div>
                    <div className='col-md-10 col-11'>
                        <p className='aboutus-p'>The Indian Visa Center, is a full service Visa, Passport, OCI and vital documents processing company. Our main purpose of existence is to help our clients secure the necessary travel documents for any part of the world. Our specialists have been fully trained with the precise knowledge of the travel industry.</p>
                        <p className='aboutus-p'>The Indian Visa Center is the first and Original application assistance center, helping the community for the last 7 years.</p>
                        <p className='aboutus-p1'>Note: Indian Visa Center is a private company not an affiliated with any Government Agency</p>
                    </div>
                </div>

                <div className='row d-flex justify-content-evenly aboutus-page'>
                    <div className='col-md-5'>
                        <h1 className='abouts-h1 text-start'>
                            Our Staff
                        </h1>
                        <p className='aboutus-p2'>The team members at The Indian Visa Center are updated on all the current requirements of all the different consulates around the United States and the world. We take pride in answering all your queries and making sure that your are fully satisfied before you leave the office or hang up the phone.  There is never any charge for a consultation.  Since we are the first and most experienced application assistance center in this industry your satisfaction is <span className='aboutus-p1'>100%</span> guaranteed. </p>
                    </div>

                    <div className='col-md-5'>
                        <div className=' d-flex justify-content-between'>
                            <span className='abouts-COMMUNICATION'>COMMUNICATION SKILLS</span>
                            <span className='abouts-COMMUNICATION'>100%</span>
                        </div>
                        <div className='bottom-box'></div>

                        <div className=' d-flex justify-content-between mt-4'>
                            <span className='abouts-COMMUNICATION'>HONESTY</span>
                            <span className='abouts-COMMUNICATION'>100%</span>
                        </div>
                        <div className='bottom-box'></div>


                        <div className=' d-flex justify-content-between mt-4'>
                            <span className='abouts-COMMUNICATION'>FLEXIBILITY</span>
                            <span className='abouts-COMMUNICATION'>100%</span>
                        </div>
                        <div className='bottom-box'></div>


                        <div className=' d-flex justify-content-between mt-4'>
                            <span className='abouts-COMMUNICATION'>WORK ETHIC</span>
                            <span className='abouts-COMMUNICATION'>100%</span>
                        </div>
                        <div className='bottom-box'></div>
                    </div>
                </div>


            </div>

            <div className=' card-background-color mt-5 ' >
                <div className='container'>
                <div className="row" >
                    <div className='col-md-4'>
                        <div class="flip-card">
                            <div class="flip-card-inner" tab-index="0">
                                <div class="flip-card-front d-flex flex-column" style={{ backgroundColor: "#379683", borderBottom: "3px solid black", color: "white" }}>
                                    <img src={pass_png} />
                                    <h2 className="text-white">India Tourist Visa</h2>
                                </div>
                                <div class="flip-card-back">

                                    <p>India Tourist Visa</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div class="flip-card">
                            <div class="flip-card-inner" tab-index="0">
                                <div class="flip-card-front d-flex flex-column" style={{ backgroundColor: '#Edf5e1', borderBottom: "3px solid black" }}>
                                    <img src={pass_png} /><br />
                                    <h2>India Business Visa</h2>
                                </div>
                                <div class="flip-card-back">
                                    <p>India Business Visa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                    <div class="flip-card">
                    <div class="flip-card-inner" tab-index="0">
                        <div class="flip-card-front d-flex flex-column" style={{ backgroundColor: '#05386b', borderBottom: "3px solid black",color: "white" }}>
                            <img src={pass_png} />
                            <h2 className="text-white">India Medical Visa</h2>
                        </div>
                        <div class="flip-card-back">
                            <p>India Medical Visa</p>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
                </div>



                
                <div className='container mt-5'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-md-11'>
                            <p className='aboutus-p2 text-center'>We believe that there's no bigger word than the word of the customer. Precisely the reason we let our customers speak for us! Just some of the reasons why they love us...</p>
                            <h2 className='abouts-h12'>Meet The Team</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='image-set'>
                <div className='container'>
                    <div className='row pb-4' style={{ paddingTop: "80px" }}>
                        <div className='col-md-3'>
                            <img src={f04} width="280px" />
                            <div className='text-white mt-3'>
                                <h5>Visa Advisor</h5>
                                <span>SMITH RICHARDSON</span>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <img src={f01} width="280px" />
                            <div className='text-white mt-3'>
                                <h5>Customer Support</h5>
                                <span>CHANDNI PATEL</span>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <img src={f03} width="280px" />
                            <div className='text-white mt-3'>
                                <h5>Legal Adviser</h5>
                                <span>ROMESH JUSTIN</span>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <img src={f02} width="280px" />
                            <div className='text-white mt-3'>
                                <h5>Customer Service Advisor</h5>
                                <span>SHEETAL SINGH</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='image-set-one '>
                <div className='container'>
                    <div className='row pb-4'>
                        <div className='col-md-5 text-start' style={{ paddingTop: "120px" }}>
                            <h1 className='Request-h1'>How to Request for Consular Help ?</h1>
                            <button className='btn btn-ssss'>Contact for Promotion Tours</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs