import React from 'react'
import Slider from '../Slider/Slider'
import { AiFillSetting } from "react-icons/ai"
function IndianPassport() {
    return (
        <div>
            <div className='mt-5'>
                <Slider />
            </div>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-12'>
                        <h1 className='Indian-h1'>Indian Passport</h1>
                    </div>
                    <div className='col-md-11 text-start' style={{ paddingTop: "80px" }}>
                        <p className='aboutus-p2'>Passport problems? Trouble with your passport renewal? Our passport service can help. Everyone knows the headaches involved in dealing with the embassies and consulates directly. The people working at embassies and consulates are loaded down by complex systems, rules, regulations and laws. As a result, they can only deal with those applications that are correctly and completely processed. They simply do not have the time to do anything out of the way. We ensure that when your application reaches the consulate or embassy, it is complete in all respects and is ready for processing.</p>
                    </div>
                </div>

                <div className='row d-flex justify-content-center mt-5'>
                    <div className='col-md-5 text-start'>
                        <h1 className='Indian-h1'>OUR SERVICES</h1>
                        <p className='mt-5' style={{color: "#05386b"}}>We offer quick, efficient and reliable passport services to India for the following service categories:</p>
                    </div>
                    <div className='col-md-5 text-start'>
                        <ul>
                            <li><AiFillSetting size={18} color={"#05386b"} />  &nbsp;Tatkaal passport service</li>
                            <li><AiFillSetting size={18} color={"#05386b"} />  &nbsp;Addition of spouse name after marriage</li>
                            <li><AiFillSetting size={18} color={"#05386b"} />  &nbsp;Change of address</li>
                            <li><AiFillSetting size={18} color={"#05386b"} />  &nbsp;Change of date and place of birth</li>
                            <li><AiFillSetting size={18} color={"#05386b"} />  &nbsp;Change of name</li>
                            <li><AiFillSetting size={18} color={"#05386b"} />  &nbsp;Correction of spelling in Parents name</li>
                            <li><AiFillSetting size={18} color={"#05386b"} />  &nbsp;Deletion of spouse name in case of Death/Divorce</li>
                            <li><AiFillSetting size={18} color={"#05386b"} />  &nbsp;Lost or damaged passport</li>
                            <li><AiFillSetting size={18} color={"#05386b"} />  &nbsp;Reissue of passport after 10 years</li>
                            <li><AiFillSetting size={18} color={"#05386b"} />  &nbsp;Reissue / Fresh application of passport minor</li>


                        </ul>
                    </div>
                </div>
                <div className='row d-flex justify-content-center mt-5 mb-4'>
                    <div className='col-md-10 col-11'>
                        <div className=' d-flex justify-content-between'>
                            <span className='abouts-COMMUNICATION22'>RELIABILITY</span>
                            <span className='abouts-COMMUNICATION11'>100%</span>
                        </div>
                        <div className='bottom-box231'></div>

                        <div className=' d-flex justify-content-between mt-4'>
                            <span className='abouts-COMMUNICATION22'>ACCURACY</span>
                            <span className='abouts-COMMUNICATION11'>100%</span>
                        </div>
                        <div className='bottom-box231'></div>


                        <div className=' d-flex justify-content-between mt-4'>
                            <span className='abouts-COMMUNICATION22'>CONFIDENTIALITY</span>
                            <span className='abouts-COMMUNICATION11'>100%</span>
                        </div>
                        <div className='bottom-box231'></div>


                        <div className=' d-flex justify-content-between mt-4'>
                            <span className='abouts-COMMUNICATION22'>EXPEDITE</span>
                            <span className='abouts-COMMUNICATION11'>100%</span>
                        </div>
                        <div className='bottom-box231'></div>
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

export default IndianPassport