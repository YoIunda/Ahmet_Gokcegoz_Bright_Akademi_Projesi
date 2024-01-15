import React from 'react';
import {Container,Nav,NavDropdown,Navbar,Image} from 'react-bootstrap';
import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <>
        <Navbar expand="lg" className="p-2 navbar">
            <Container>
                <Navbar.Brand href="/"> <Image src="https://baubright.com/assets/images/logo/logo.png" alt=""  className='Logo'/> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className="ms-auto my-0">
                    <Nav.Link href='/' className="text-white m-1 nav-item fs-5 ">Ana Sayfa</Nav.Link>
                    <Nav.Link href='/Hakkimizda' className='text-white m-1 nav-item fs-5'>Hakkimizda</Nav.Link>
                    <Nav.Link href='/Egitmenlerimiz'className='text-white m-1 nav-item fs-5'>Egitmenlerimiz</Nav.Link>
                    <Nav.Link href='/Iletisim'className='text-white m-1 nav-item fs-5'>Iletisim</Nav.Link>
                    <NavDropdown title={<span className="text-white fs-5">Eğitimler</span>} id='navbarDrop' className='mt-1 me-5'>
                      <NavDropdown.Item className='dropitem' href="/">Full Stack Programlama Egitimi</NavDropdown.Item> 
                      <NavDropdown.Item href="/">Bulut Bilisim Uzmanlik Egitimi</NavDropdown.Item> 
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    
    
    
    </>
  )
}

export default Header