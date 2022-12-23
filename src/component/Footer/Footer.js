import React from 'react'
import "./Footer.css"
import LOGO from "../../Assets/LOGO-PNG-300x153.png";
import png from "../../Assets/png-300x153.png"
import {Link} from "react-router-dom"
function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row d-flex justify-content-center pb-5'>
                    <div className='col-md-3 text-start mt-5 ' style={{ borderRight: "0.5px solid #edf5e1" }}>
                        <img src={LOGO} width="250px" />
                        <h6 className='footer-h6'>THE INDIAN VISA CENTER</h6>
                        <p className='footer-span'>111 Maple Dr West,<br />New Hyde Park, NY 11040</p>
                        <span className='footer-span'>Tel: 718-550-1313</span><br />
                        <span className='footer-span'>Cell: 347-476-9354</span>
                        <p className='footer-p mt-3'>Myvisacenter1@gmail.com</p>
                    </div>

                    <div className='col-md-3 text-start mt-5' style={{ borderRight: "0.5px solid #edf5e1" }}>
                        <img src={png} width="250px" />
                        <p className='footer-span ms-3 pt-5'>Indian Visa Passport Center, is a full service passport, visa and vital documents expediting company.</p>
                    </div>

                    <div className='col-md-3 text-start mt-5' style={{ borderRight: "0.5px solid #edf5e1" }}>
                        <h6 className='ms-4'>LINKS</h6>
                        <div className='row'>
                            <div className='col-10  ms-4 pb-2 pt-3  ' style={{borderBottom: "1px solid #edf5e1"}}>
                               <Link to="/" style={{textDecoration: "none",color: "#05386b", fontSize: "17px", fontWeight: "600"}} onClick={()=>{window.scrollTo(0,0)}}>About Us </Link>
                            </div>

                            <div className='col-10  ms-4 pb-2 pt-3  ' style={{borderBottom: "1px solid #edf5e1"}}>
                               <Link to="/contact" style={{textDecoration: "none",color: "#05386b", fontSize: "17px", fontWeight: "600"}} onClick={()=>{window.scrollTo(0,0)}} >Contact Us</Link> 
                            </div>

                            <div className='col-10  ms-4 pb-2 pt-3  ' style={{borderBottom: "1px solid #edf5e1"}}>
                                <Link to="/indianpassport" style={{textDecoration: "none",color: "#05386b", fontSize: "17px", fontWeight: "600"}} onClick={()=>{window.scrollTo(0,0)}}>Indian Passport</Link>
                            </div>

                            <div className='col-10  ms-4 pb-2 pt-3  ' style={{borderBottom: "1px solid #edf5e1"}}>
                                <Link to="/indianvisa" style={{textDecoration: "none",color: "#05386b", fontSize: "17px", fontWeight: "600"}} onClick={()=>{window.scrollTo(0,0)}}>Indian Visa</Link>
                            </div>

                            <div className='col-10  ms-4 pb-2 pt-3  ' style={{borderBottom: "1px solid #edf5e1"}}>
                                <Link to="/ocicard" style={{textDecoration: "none",color: "#05386b", fontSize: "17px", fontWeight: "600"}} onClick={()=>{window.scrollTo(0,0)}}>OCI Card</Link>
                            </div>

                            <div className='col-10  ms-4 pb-2 pt-3  ' style={{borderBottom: "1px solid #edf5e1"}}>
                                <Link to="/othercountryvisa" style={{textDecoration: "none",color: "#05386b", fontSize: "17px", fontWeight: "600"}} onClick={()=>{window.scrollTo(0,0)}}>Other Country Visas</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 text-start mt-5' >
                        <h6 className='ms-4'>...</h6>
                        <div className='row'>
                            <div className='col-10  ms-4 pb-2 pt-3  ' style={{borderBottom: "1px solid #edf5e1"}}>
                            <Link to="/powerofattorneys" style={{textDecoration: "none",color: "#05386b", fontSize: "17px", fontWeight: "600"}} onClick={()=>{window.scrollTo(0,0)}}>Power Of Attorneys</Link>
                            </div>

                            <div className='col-10  ms-4 pb-2 pt-3  ' style={{borderBottom: "1px solid #edf5e1"}}>
                               <Link to="/pencard" style={{textDecoration: "none",color: "#05386b", fontSize: "17px", fontWeight: "600"}} onClick={()=>{window.scrollTo(0,0)}}>Pan Card</Link> 
                            </div>

                            <div className='col-10  ms-4 pb-2 pt-3  ' style={{borderBottom: "1px solid #edf5e1"}}>
                                <Link to="/renunication" style={{textDecoration: "none",color: "#05386b", fontSize: "17px", fontWeight: "600"}} onClick={()=>{window.scrollTo(0,0)}}>Renunication</Link>
                            </div>

                            <div className='col-10  ms-4 pb-2 pt-3  ' style={{borderBottom: "1px solid #edf5e1"}}>
                               <Link to="/UsPassport" style={{textDecoration: "none",color: "#05386b", fontSize: "17px", fontWeight: "600"}} onClick={()=>{window.scrollTo(0,0)}}>U.S Passport</Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-bootom pt-4 pb-4'>
            Copyright 2022, All Right Reserved
            </div>
        </div>
    )
}

export default Footer