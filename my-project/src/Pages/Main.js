import React from 'react'
import { Button, Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const Main = () => {
  return (
    <>
     <Container>
    <Carousel>
    <Carousel.Item>
      <img style={{height:'70vh'}}
        className="d-block w-100"
        src='https://blog.hrflow.ai/content/images/2020/04/Full-Stack-Developer.jpg'
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Full Stack Programlama</h3>
        <p>Detayli Bilgi Icin:<span className='number' > 0216 932 1500</span></p>
        <div className='d-flex justify-content-center align-items-center'>
        <Button className='me-2 w-10'>Detayli Bilgi</Button>
        <Button className='w-10'>Iletisim</Button>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'70vh'}}
        className="d-block w-100"
        src='https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg'
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Half Stack Programlama</h3>
        <p>Detayli Bilgi Icin:<span className='number' > 0216 932 1500</span></p>
        <div className='d-flex justify-content-center align-items-center'>
        <Button className='me-2 w-10'>Detayli Bilgi</Button>
        <Button className='w-10'>Iletisim</Button>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'70vh'}}
        className="d-block w-100"
        src='https://d2ms8rpfqc4h24.cloudfront.net/Guide_to_Full_Stack_Development_000eb0b2d0.jpg'
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Quarter Stack Programlama</h3>
        <p>Detayli Bilgi Icin:<span className='number' > 0216 932 1500</span></p>
        <div className='d-flex justify-content-center align-items-center'>
        <Button className='me-2 w-10'>Detayli Bilgi</Button>
        <Button className='w-10'>Iletisim</Button>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </Container>
    
    
    
    
    
    </>
  )
}

export default Main