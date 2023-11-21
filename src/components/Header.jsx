import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const toggleShow = () => setShow((s) => !s);
  return (
    <div>
        <Navbar expand="lg" className="nav" style={{backgroundColor:'white'}}>
        <Container>
            <Navbar.Brand href="#home"><img src="https://cdn.iconscout.com/icon/free/png-512/swiggy-1613371-1369418.png" alt="" style={{width:'60px',height:'60px'}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <h6 className='nav-home fw-bold mb-2' >Home</h6>
            <span onClick={toggleShow} className="m-3 pb-1">Your location  <i style={{color:'orange'}} className="ms-2 fa-solid fa-chevron-right fa-rotate-90"></i></span>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
            <Nav className="ms-auto">
                <div className='d-flex gap-5'>
                    <span className='nav-item'><i class="fa-solid fa-magnifying-glass"></i> Search</span>
                    <span className='nav-item'><i class="fa-solid fa-percent"></i> Offers</span>
                    <span className='nav-item'><i class="fa-solid fa-circle-question"></i> Help</span>
                    <span className='nav-item'><i class="fa-solid fa-user"></i> Account</span>
                    <span className='nav-item'><i class="fa-solid fa-cart-shopping"></i> Cart</span>
                </div>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default Header