import React from 'react'
import {Container,Nav, Navbar} from 'react-bootstrap'
 import { Link } from 'react-router-dom'
const Navbarr = () => {
  return (
    <>
    
    <Navbar bg="primary" variant="dark">
      <Container>
      <Navbar.Brand href="#home">EgyBest</Navbar.Brand>
      <Nav className="me-auto">
     <Link  to="/home"> <Nav.Link href="#home">Home</Nav.Link> </Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  
    
  </>
  )
}

export default Navbarr