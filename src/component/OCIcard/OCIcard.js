import React from 'react'
import Slider from '../Slider/Slider'
import { AiFillSetting } from "react-icons/ai"
function OCIcard() {
  return (
    <div>
      <div className='mt-5'>
        <Slider />
      </div>

      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-12'>
            <h1 className='Indian-h1'>OCI (Overseas Citizenship of India)</h1>
          </div>
          <div className='col-md-11 text-start' style={{ paddingTop: "80px" }}>
            <p className='aboutus-p2'>The Government of India has decided to grant Overseas Citizenship of India (OCI), which most people mistakenly refer to as ‘dual citizenship.’ People of Indian Origin of certain categories who migrated from India and acquired citizenship of a foreign country, other than Pakistan and Bangladesh, are eligible to be granted an OCI as long as their home countries allow dual citizenship in some form or the other under their local laws.</p>
          </div>
        </div>


        <div className='row d-flex justify-content-center mt-5'>
          <div className='col-md-3 text-start '>
            <h5 className='Indian-h12'>AS AN OCI HOLDER, YOU WILL GET THE THESE BENEFITS:</h5>
          </div>
          <div className='col-md-7 text-start'>
            <ul>
              <li><AiFillSetting size={18} color={"#05386b"} />  &nbsp;Multiple entry, multi-purpose life long visa to visit India</li>
              <li><AiFillSetting size={18} color={"#05386b"} />  &nbsp;Exemption from reporting to police authorities for any length of stay in India</li>
              <li><AiFillSetting size={18} color={"#05386b"} />  &nbsp;Parity with NRIs in financial, economic and educational fields, except in the acquisition of agricultural or plantation properties.</li>
              <li><AiFillSetting size={18} color={"#05386b"} />  &nbsp;Employment allowed in all areas except mountaineering, missionary and research work and other work requiring PAP / RAP. (PAP = Protected Area Permit, RAP = Restricted Area Permit)</li>
              <li><AiFillSetting size={18} color={"#05386b"} />  &nbsp;Employment allowed in private sector</li>
              <li><AiFillSetting size={18} color={"#05386b"} />  &nbsp;Professional practice (doctor, dentist, nurse, pharmacist, chartered accountant, architect, advocate etc.) is allowed only as per provision contained in relevant Acts.</li>
              <li><AiFillSetting size={18} color={"#05386b"} />  &nbsp;OCI holders do not need to get an employment visa and are not required to register with FRRO for seeking employment</li>
              <li><AiFillSetting size={18} color={"#05386b"} />  &nbsp;In case the OCI holder came to India to work for a certain employer and later decides to leave the job and/or decides to change the employer, he/she does not have to leave India</li>
              <li><AiFillSetting size={18} color={"#05386b"} />  &nbsp;Other benefits pertaining to parity with Indian nationals in multiple matters</li>
              <li><AiFillSetting size={18} color={"#05386b"} />  &nbsp;Any future benefits extended to OCIs will be notified by the Ministry of Overseas Indian Affairs (MOIA) under section 7B(1) of the Citizenship Act, 1955</li>


            </ul>
          </div>
        </div>


        <div className='row d-flex justify-content-center mt-5 mb-5'>
          <div className='col-md-3 text-start '>
            <h5 className='Indian-h12'>WE OFFER QUICK, EFFICIENT AND RELIABLE OCI SERVICES FOR THE FOLLOWING SERVICE CATEGORIES:</h5>
          </div>
          <div className='col-md-7 col-11 text-start'>
            <ul>
              <li style={{color: "#05386b" , borderBottom: "1px solid #3BB503", lineHeight: "4"}}><AiFillSetting size={18} color={"#8ee4af"} />  &nbsp;New OCI Card</li>
              <li style={{color: "#05386b" , borderBottom: "1px solid #3BB503" , lineHeight: "4"}}><AiFillSetting size={18} color={"#8ee4af"} />  &nbsp;OCI card for Foreign Spouse of a Person of Indian Origin</li>
              <li style={{color: "#05386b" , borderBottom: "1px solid #3BB503", lineHeight: "4"}}><AiFillSetting size={18} color={"#8ee4af"} />  &nbsp;OCI in lieu of PIO card</li>
              <li style={{color: "#05386b" , borderBottom: "1px solid #3BB503", lineHeight: "4"}}><AiFillSetting size={18} color={"#8ee4af"} />  &nbsp;OCI Re-Issue</li>
              <li style={{color: "#05386b" , borderBottom: "1px solid #3BB503", lineHeight: "4"}}><AiFillSetting size={18} color={"#8ee4af"} />  &nbsp;Miscellaneous OCI Services</li>
              <li style={{color: "#05386b" , borderBottom: "1px solid #3BB503", lineHeight: "4"}}><AiFillSetting size={18} color={"#8ee4af"} />  &nbsp;Renunciation of OCI</li>
              

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OCIcard