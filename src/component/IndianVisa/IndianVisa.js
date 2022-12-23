import React from 'react'
import "./IndianVisa.css"
import pic1 from "../../Assets/01_0001_Layer-7-150x150.jpg"
import pic2 from "../../Assets/01_0002_Layer-6-150x150.jpg"
import pic3 from "../../Assets/01_0003_Layer-5-150x150.jpg"
import pic4 from "../../Assets/01_0004_Layer-4-150x150.jpg"
import pic5 from "../../Assets/01_0005_Layer-3-150x150 (1).jpg"
import pic6 from "../../Assets/01_0006_Layer-2-150x150.jpg"
import pic7 from "../../Assets/01_0007_Layer-1-150x150.jpg"
import Slider from '../Slider/Slider'

function IndianVisa() {
    return (
        <>
            <div className='mt-5'>
                <Slider />
            </div>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-12'>
                        <h1 className='Indian-h1'>Indian Visa Service</h1>
                    </div>
                    <div className='col-md-11 text-start' style={{ paddingTop: "80px" }}>
                        <p className='aboutus-p2'>While applying for a visa to India from the USA, there are a number of procedures that need to be met. While dependent on the nature of your visit, an Indian visa requirement for the most part, will include essentials including a completed application form, that can be submitted online or offline. In addition, a visa for India from the USA will require current photographs of the traveler and relevant documents. We can help you determine if you need a visa and which type. Whether it’s a business, student, transit or tourist visa. let us know where and when you are traveling, and we will take care of the rest.</p>
                    </div>
                    <div className='col-md-8 mt-4'>
                        <h5 className='OFFER'>WE OFFER QUICK, EFFICIENT AND RELIABLE VISA SERVICES TO INDIA FOR THE FOLLOWING SERVICE CATEGORIES</h5>
                    </div>
                </div>
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-3 mt-5'>
                        <img src={pic7} />
                        <p className='Business-span mt-4'>Business Visa</p>
                    </div>
                    <div className='col-md-3 mt-5'>
                        <img src={pic6} />
                        <p className='Business-span mt-4'>Tourist Visa</p>
                    </div>
                    <div className='col-md-3 mt-5'>
                        <img src={pic5} />
                        <p className='Business-span mt-4'>Transfer of Tourist Visa</p>
                    </div>
                    <div className='col-md-3 mt-5'>
                        <img src={pic4} />
                        <p className='Business-span mt-4'>Emergency Visa</p>
                    </div>
                    <div className='col-md-3 mt-5'>
                        <img src={pic4} />
                        <p className='Business-span mt-4'>Conference Visa</p>
                    </div>
                    <div className='col-md-3 mt-5'>
                        <img src={pic1} />
                        <p className='Business-span mt-4'>Employment Visa</p>
                    </div>
                    <div className='col-md-3 mt-5'>
                        <img src={pic3} />
                        <p className='Business-span mt-4'>Entry Visa</p>
                    </div>
                    <div className='col-md-3 mt-5'>
                        <img src={pic2} />
                        <p className='Business-span mt-4'>Journalist Visa</p>
                    </div>
                    <div className='col-md-3 mt-5'>
                        <img src={pic5} />
                        <p className='Business-span mt-4'>Medical Visa</p>
                    </div>
                    <div className='col-md-3 mt-5'>
                        <img src={pic6} />
                        <p className='Business-span mt-4'>Medical Visa for Surrogacy</p>
                    </div>
                    <div className='col-md-3 mt-5'>
                        <img src={pic1} />
                        <p className='Business-span mt-4'>Medical Attendant Visa</p>
                    </div>
                    <div className='col-md-3 mt-5'>
                        <img src={pic4} />
                        <p className='Business-span mt-4'>Missionary Visa</p>
                    </div>
                    <div className='col-md-3 mt-5'>
                        <img src={pic7} />
                        <p className='Business-span mt-4'>Research Visa Fulbright-Nehru Research Visa</p>
                    </div>
                    <div className='col-md-3 mt-5'>
                        <img src={pic5} />
                        <p className='Business-span mt-4'>Transit Visa</p>
                    </div>
                    <div className='col-md-3 mt-5'>
                        <img src={pic3} />
                        <p className='Business-span mt-4'>Visitor Visa</p>
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
        </>
    )
}

export default IndianVisa