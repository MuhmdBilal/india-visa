import React from 'react'
import Slider from '../Slider/Slider';
import us from "../../Assets/us.jpg";
import { FaPassport, FaWallet } from "react-icons/fa"
import {ImProfile} from "react-icons/im"
function UsPassport() {
    return (
        <div>
            <div className='mt-5'>
                <Slider />
            </div>
            <div className='container'>
                <div className='row d-flex justify-content-center '>
                    <div className='col-12'>
                        <h1 className='Indian-h1'>U.S Passport</h1>
                    </div>
                    <div className='col-md-4 mb-4 mt-5' >
                        <div className='' style={{ borderBottom: "4px dotted #F4AC04" }}>
                            <img src={us} width="400px" />
                        </div>
                        <h2 className='message-h2 mt-4' >Please call us or send a message for more information.</h2>
                        <p className='counseling-span mt-4'>For in person visa counseling</p>
                        <button className='btn-send mt-4'>Send Message</button>
                    </div>
                    <div className='col-md-4 mb-4 mt-5'>

                        <p className='PASSPORT-p text-start '><FaWallet size={35} color={"#379683"} />&nbsp;&nbsp;&nbsp; NEW PASSPORT</p>
                        <p className='PASSPORT-p text-start mt-5'><FaPassport size={35} color={"#379683"} />&nbsp;&nbsp;&nbsp; PASSPORT RENEWAL</p>
                        <p className='PASSPORT-p text-start mt-5'><FaPassport size={35} color={"#379683"} />&nbsp;&nbsp;&nbsp; SECOND PASSPORT</p>
                    </div>
                    <div className='col-md-4 mb-4 mt-5'>

                        <p className='PASSPORT-p text-start '><ImProfile size={35} color={"#379683"} />&nbsp;&nbsp;&nbsp; PASSPORT NAME CHANGE</p>
                        <p className='PASSPORT-p text-start mt-5'><FaWallet size={35} color={"#379683"} />&nbsp;&nbsp;&nbsp; LOST OR STOLEN PASSPORT</p>
                        <p className='PASSPORT-p text-start mt-5'><ImProfile size={35} color={"#379683"} />&nbsp;&nbsp;&nbsp; PASSPORT FOR A CHILD</p>
                        <p className='PASSPORT-p text-start mt-5'><FaWallet size={35} color={"#379683"} />&nbsp;&nbsp;&nbsp; DAMAGED PASSPORT</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsPassport