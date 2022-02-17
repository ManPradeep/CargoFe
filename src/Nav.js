import React, {useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';
import './home.css';
import { BrowserRouter } from "react-router-dom";
import { Navbar, NavDropdown, Nav} from 'react-bootstrap';
import ReactGa from 'react-ga';
import aptLogo from './images/aptLogo.png';
import crgLogo from './images/crgLogo.jpg';
const Navpoint = () => {
  useEffect(()=>{
ReactGa.initialize('G-QP8QRFDRZE')
// to report page view 
ReactGa.pageview('windows.location.pathname + window.location.search')
}, [])

  return (

    <div>
      <div className="head sticky"><img className="logWidth" src={crgLogo} alt="crglogo"/> <img className="logWidth1" src={aptLogo} alt="logo" /> Digital Saluation / Cargo Services Far East Management Portal</div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <BrowserRouter>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Overveiw">Project Overview</Nav.Link>
              <NavDropdown title="Live Tracker" id="collasible-nav-dropdown">
                <NavDropdown.Item className="down" href="/Liveproduction">Live Production</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Reports" id="collasible-nav-dropdown">
                <NavDropdown.Item className="down" href="/Reporttemp">Daily Action List workflow</NavDropdown.Item>
                <NavDropdown.Item className="down" href="/Attendance">Daily Attendance</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Projects Documents" id="collasible-nav-dropdown">
              <NavDropdown.Item className="down" href="/EditionUsrMnl">Edition User Manual</NavDropdown.Item>
                <NavDropdown.Item className="down" href="/Iops">Task IOP's</NavDropdown.Item>
                <NavDropdown.Item className="down" href="/Reportiop">Report IOP's</NavDropdown.Item>
                <NavDropdown.Item className="down" href="/Localcharges">Local Charges</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/MrpBulk">Tools</Nav.Link>
              <Nav.Link href="/Test">Online Test</Nav.Link>
              <Nav.Link href="/Contactus">Contact Us</Nav.Link>
              
            </BrowserRouter>
          </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navpoint;