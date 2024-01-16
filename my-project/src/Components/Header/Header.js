import React from 'react';
import {Container,Nav,NavDropdown,Navbar,Image} from 'react-bootstrap';
import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
        <Navbar expand="lg" className="p-2 navbar ">
            <Container>
                <Navbar.Brand href="/"> <Image src="https://baubright.com/assets/images/logo/logo.png" alt=""  className='Logo'/> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className="ms-auto my-0">
                    <NavLink to='/' className="text-white m-1 nav-item fs-5 nav-link">Ana Sayfa</NavLink>
                    <NavLink to='/Hakkimizda' className='text-white m-1 nav-item fs-5  nav-link'>Hakkimizda</NavLink>
                    <NavLink to='/Egitmenlerimiz'className='text-white m-1 nav-item fs-5  nav-link'>Egitmenlerimiz</NavLink>
                    <NavLink to='/Iletisim'className='text-white m-1 nav-item fs-5  nav-link'>Iletisim</NavLink>
                    <NavDropdown title={<span className="text-white fs-5">Eğitimler</span>} id='navbarDrop' className='mt-1 me-5'>
                      <NavLink className='dropitem dropdown-item' to='/FullStackPage'>Full Stack Programlama Egitimi</NavLink> 
                      <NavLink className='dropitem dropdown-item' to='/BulutBilisimPage'>Bulut Bilisim Uzmanlik Egitimi</NavLink> 
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    
    
    
    </>
  )
}

export default Header