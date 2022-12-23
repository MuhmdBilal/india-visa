import React,{useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import lo400 from "../../Assets/lo-400.jpg";
import {Link, useLocation} from "react-router-dom"
import "./Navbar.css"
function Navbars() {

  const [navColor, isNavColor] = useState("About Us")
  const { pathname } = useLocation();


   const changeRoute = ()=>{
    console.log(pathname);
    if(pathname){
      if(pathname == "/"){
        isNavColor("About Us")
      } else if(pathname == "/indianvisa"){
        isNavColor("Indian Visa")
      }else if(pathname == "/othercountryvisa"){
        isNavColor("Other Country Visa")
      }else if(pathname == "/indianpassport"){
        isNavColor("Indain Passport")
      }else if(pathname == "/ocicard"){
        isNavColor("OCI Card")
      }else if(pathname == "/renunication"){
        isNavColor("Renunication")
      }else if(pathname == "/powerofattorneys"){
        isNavColor("Power Of Attorneys")
      }else if(pathname == "/pencard"){
        isNavColor("Pan Card")
      }else if(pathname == "/UsPassport"){
        isNavColor("U.S Passport")
      }else if(pathname == "/contact"){
        isNavColor("Contact Us")
      }

    }
   }

   useEffect(()=>{
    changeRoute()
   },[])
  return (
    <div>
<Navbar collapseOnSelect expand="lg"  variant="ligt">
      <Container className=' '>
        <Navbar.Brand href="#home" className='id-display'>
          <img src={lo400} className="navbar-image"/>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav"/> */}
        </Container>
    </Navbar>
    <Navbar collapseOnSelect expand="lg"  variant="ligt">
      <Container className=' '>
      <Navbar.Brand href="#home" className='id-display-none'>
          <img src={lo400} className="navbar-image"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" >
       
            <Nav className=' w-100 d-flex justify-content-between'>
            <Link to="/" style={{textDecoration: "none",color: "#05386b", fontSize: "17px", fontWeight: "600"}}><Nav.Link href="#features" id="About Us" className={navColor == "About Us" ? "navbar-text-active" : "navbar-tex"}  onClick={()=>{isNavColor("About Us")}}>About Us</Nav.Link></Link>
            <Link to="/indianvisa" style={{textDecoration: "none",color: "#05386b", fontSize: "17px", fontWeight: "600"}}><Nav.Link href="#pricing"  id="Indian Visa" className={navColor == "Indian Visa" ? "navbar-text-active" : "navbar-tex"}  onClick={()=>{isNavColor("Indian Visa")}}>Indian Visa</Nav.Link></Link>
            <Link to="/othercountryvisa" style={{textDecoration: "none",color: "#05386b", fontSize: "17px", fontWeight: "600"}}><Nav.Link href="#deets"  id="Other Country Visa" className={navColor == "Other Country Visa" ? "navbar-text-active" : "navbar-tex"}  onClick={()=>{isNavColor("Other Country Visa")}}>Other Country Visa</Nav.Link></Link>
            <Link to="/indianpassport" style={{textDecoration: "none",color: "#05386b", fontSize: "17px", fontWeight: "600"}}><Nav.Link href="#deets"  id="Indain Passport" className={navColor == "Indain Passport" ? "navbar-text-active" : "navbar-tex"}  onClick={()=>{isNavColor("Indain Passport")}}>Indain Passport</Nav.Link></Link>
            <Link to="/ocicard" style={{textDecoration: "none",color: "#05386b", fontSize: "17px", fontWeight: "600"}}><Nav.Link href="#deets"  id="OCI Card" className={navColor == "OCI Card" ? "navbar-text-active" : "navbar-tex"}  onClick={()=>{isNavColor("OCI Card")}}>OCI Card</Nav.Link></Link>
            <Link to="/renunication" style={{textDecoration: "none",color: "#05386b", fontSize: "17px", fontWeight: "600"}}><Nav.Link href="#deets"  id="Renunication" className={navColor == "Renunication" ? "navbar-text-active" : "navbar-tex"}  onClick={()=>{isNavColor("Renunication")}}>Renunication</Nav.Link></Link>
            <Link to="/powerofattorneys" style={{textDecoration: "none",color: "#05386b", fontSize: "17px", fontWeight: "600"}}><Nav.Link href="#deets"  id="Power Of Attorneys" className={navColor == "Power Of Attorneys" ? "navbar-text-active" : "navbar-tex"}  onClick={()=>{isNavColor("Power Of Attorneys")}}>Power Of Attorneys</Nav.Link></Link>
            <Link to="/pencard" style={{textDecoration: "none",color: "#05386b", fontSize: "17px", fontWeight: "600"}}><Nav.Link href="#deets"  id="Pan Card" className={navColor == "Pan Card" ? "navbar-text-active" : "navbar-tex"}  onClick={()=>{isNavColor("Pan Card")}}>Pan Card</Nav.Link></Link>
            <Link to="/UsPassport" style={{textDecoration: "none",color: "#05386b", fontSize: "17px", fontWeight: "600"}}><Nav.Link href="#deets"  id="U.S Passport" className={navColor == "U.S Passport" ? "navbar-text-active" : "navbar-tex"}  onClick={()=>{isNavColor("U.S Passport")}}>U.S Passport</Nav.Link></Link>
            <Link to="/contact" style={{textDecoration: "none",color: "#05386b", fontSize: "17px", fontWeight: "600"}}><Nav.Link href="#deets"  id="Contact Us" className={navColor == "Contact Us" ? "navbar-text-active" : "navbar-tex"}  onClick={()=>{isNavColor("Contact Us")}}>Contact Us</Nav.Link></Link>
          </Nav>
          
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
  )
}

export default Navbars