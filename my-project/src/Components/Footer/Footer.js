import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container fluid className='bg-dark d-flex flex-column justify-content-around align-items-center p-4'>
 
      <Row className='container'>
        <Col xs={3} className='text-light text-center'>
          <div>
            Contact Us
          </div>
          <div>
          lorem 
          </div>
          <div>
          lorem 
          </div>
          <div>
          lorem 
          </div>
          <div>
          lorem 
          </div>
        </Col>
        <Col xs={3} className='text-light text-center'>
          <div>
            Contact Us
          </div>
          <div>
          lorem 
          </div>
          <div>
          lorem 
          </div>
          <div>
          lorem 
          </div>
          <div>
          lorem 
          </div>
        </Col>
        <Col xs={3} className='text-light text-center'>
          <div>
            Contact Us
          </div>
          <div>
          lorem 
          </div>
          <div>
          lorem 
          </div>
          <div>
          lorem 
          </div>
          <div>
          lorem 
          </div>
        </Col>
        <Col xs={3} className='text-light text-center'>
          <div>
            Contact Us
          </div>
          <div>
          lorem 
          </div>
          <div>
          lorem 
          </div>
          <div>
          lorem 
          </div>
          <div>
          lorem 
          </div>
        </Col>


      </Row>
      <div className='text-center'>
        <a href='/'>
      <img src="https://baubright.com/assets/images/logo/logo.png" alt="" />
        </a>
      <div className='text-light text-center fs-6'>
         &copy; Ahmet Gokcegoz Bau Wissen 2024
      </div>


      </div>
    </Container>
  )
}

export default Footer