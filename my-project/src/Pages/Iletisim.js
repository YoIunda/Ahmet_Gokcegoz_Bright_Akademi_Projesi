import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/Iletisim.css'

const Iletisim = () => {
  return (
    <section id="contact" className="block contact-block">
      <Container className='mt-5' >
        <div className="title-holder ">
          <h2 className='text-center mb-4'>Bizimle Iletisime Gec</h2>
        </div>
        <Form className='contact-form'>
          <Row>
            <Col sm={4}>
              <Form.Control type="text" placeholder="Enter your full name" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="email" placeholder="Enter your email address" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="tel" placeholder="Enter your contact number" required />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control as="textarea" placeholder="Enter your contact message" required />
            </Col>
          </Row>
          <div className='btn-holder'>
            <Button type="submit">Bitti</Button>
          </div>
        </Form>
      </Container>
      <div className='google-map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12036.5539323147!2d29.0068164!3d41.0441006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7a24975fe5d%3A0xa05d7aa13cfcaf89!2sBah%C3%A7e%C5%9Fehir%20%C3%9Cniversitesi%20Wissen%20Akademie!5e0!3m2!1str!2str!4v1705341928680!5m2!1str!2str" width="600" height="450" style={{border:0}} ></iframe>
      </div>
      <Container className='mb-5'>
        <div className='contact-info'>
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              asdas@gmail.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              0216 921 1688
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Besiktas
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default Iletisim