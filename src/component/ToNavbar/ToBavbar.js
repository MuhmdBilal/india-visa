import React from 'react'
import "./ToNavbar.css"
import { IoMdCall } from "react-icons/io"
import {CiMail} from "react-icons/ci"
function ToBavbar() {
    return (
        <div className='tonavbarBackground'>
            <div className='container'>
                <div className='row pt-2 pb-2 d-flex justify-content-md-between justify-content-center'>
                    
                        <div className='col-md-5 d-flex justify-content-around'>
                           <span className='tonavbar-span'><IoMdCall color='#05386b' size={20}/> 718-550-1313</span> 
                           <span className='tonavbar-span'><CiMail color='#05386b' size={20}/>   Myvisacenter1@gmail.com</span>
                        </div>

                        <div className='col-md-4'>
                            <span className='tonavbar-span'>111 Maple Dr West, New Hyde Park, NY 11040</span>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ToBavbar