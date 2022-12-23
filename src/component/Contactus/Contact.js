import React from 'react'
import Slider from '../Slider/Slider'
import "./Contact.css";
import LOGO from "../../Assets/LOGO-PNG-300x153.png"
function Contact() {
    return (
        <div>
            <div className='mt-5'>
                <Slider />
            </div>
            <div className='container' style={{paddingTop: "120px", paddingBottom: "60px"}}>
                <div className='row d-flex justify-content-center justify-content-around'>
                    <div className='col-md-5 text-start'>
                        <h4 className='LEAVE-h4'>YOU CAN LEAVE YOUR INFORMATION</h4>
                        <p className='contact-p'>Please contact us by filling in this form for any questions you may have. </p>
                        <img src={LOGO} className="logo-p" />
                        <p className='footer-span32'>111 Maple Dr West,<br />New Hyde Park, NY 11040</p>
                        <span className='footer-span32'>Tel: 718-550-1313</span><br />
                        <span className='footer-span32'>Cell: 347-476-9354</span>
                        <p className='footer-p mt-3'><a href=''>Myvisacenter1@gmail.com</a></p>
                    </div>
                    <div className='col-md-5 text-start'>

                        <div class="formbold-main-wrapper">

                            <div class="formbold-form-wrapper">
                                <form action="https://formbold.com/s/FORM_ID" method="POST">
                                    <div class="formbold-mb-5">
                                        <label for="name" class="formbold-form-label"> Full Name </label>
                                        <input type="text" name="name" id="name" placeholder="Full Name" class="formbold-form-input" />
                                    </div>

                                    <div class="formbold-mb-5">
                                        <label for="email" class="formbold-form-label"> Email Address </label>
                                        <input type="email" name="email" id="email" placeholder="Enter your email" class="formbold-form-input" />
                                    </div>

                                    <div class="formbold-mb-5">
                                        <label for="subject" class="formbold-form-label"> Subject </label>
                                        <input type="text" name="subject" id="subject" placeholder="Enter your subject" class="formbold-form-input" />
                                    </div>

                                    <div class="formbold-mb-5">
                                        <label for="message" class="formbold-form-label"> Message </label>
                                        <textarea rows="6" name="message" id="message" placeholder="Type your message" class="formbold-form-input"></textarea>
                                    </div>

                                    <div>
                                        <button class="formbold-btn">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact