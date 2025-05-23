import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
             <Navbar bg="success" data-bs-theme="dark" className='text-white'>
        <Container>
          <Navbar.Brand href="#home">Furni.</Navbar.Brand>
          <Nav className="">
            <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#shop" className='text-white'>Shop</Nav.Link>
            <Nav.Link href="#about" className='text-white'>About us</Nav.Link>
            <Nav.Link href="#services" className='text-white'>Services</Nav.Link>
            <Nav.Link href="#blog" className='text-white'>Blog</Nav.Link>
            <Nav.Link href="#contact" className='text-white'>Contact us</Nav.Link>
            <Nav.Link href="#user" className='text-white'><i className="fa-solid fa-user"></i></Nav.Link>
            {/* <Nav.Link href="#cart" className='text-white'>Cart</Nav.Link> */}
            <Nav.Link href="#cart" className='text-white' ><i className="fa-solid fa-cart-shopping"></i></Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header