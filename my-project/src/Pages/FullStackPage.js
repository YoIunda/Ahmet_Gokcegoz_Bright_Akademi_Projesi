import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';

const FullStackPage = () => {
  return (
    <>
    <Container>
        <Row className='px-4 my-5'>
            <Col className='my-5' sm={7}>
                <Image fluid rounded src='https://media.istockphoto.com/id/537331500/tr/fotoğraf/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=RqHiu8ITJojz1OJLr4t-2DSiHlS60kI98BalQbNPMgA='></Image>
            
            </Col>
            <Col className='my-5' sm={5}>
                <h2> Full Stack Development</h2>
                <p className='my-4'>Full stack developer olarak çalışan uzmanlar, yazılımların back-end (arka katman) ve front-end(ön katman) olarak nitelendirilen bölümlerinde rol almaktadırlar. Aynı zamanda veritabanı programlama alanlarında yetkinlikleri olup, geliştirilmekte olan projenin yazılımla ilgili bütün aşamalarında görev almaktadırlar. Full Stack Development, HTML, CSS, JavaScript, ReactJS, Node.JS gibi birçok dil barındırmaktadır. Doğası gereği geniş ilgi alanına sahip bir disiplindir. Back-End’den Front-End’e ve veritabanlarına kadar uzanan bu yetkinlik Türkiye’de en çok aranan yazılım programlama dallarından biridir.   </p>
            <Button className='mb-5' variant='outline-primary'>Brosur Indir</Button>
            </Col>
        </Row>
        <div>
            <h2 className='text-center mb-5'>Icerikler</h2>
        <ListGroup className='mb-5 text-center'>
      <ListGroup.Item>Programlamaya Giriş(C# 101)</ListGroup.Item>
      <ListGroup.Item>Nesne Yönelimli Programlama(OOP 101)</ListGroup.Item>
      <ListGroup.Item>Veri Tabanı Temel Eğitimi (SQL 101)</ListGroup.Item>
      <ListGroup.Item>Veri Tabanı İleri Eğitimi (SQL 102)</ListGroup.Item>
      <ListGroup.Item>Temel Web Programlama(WEB 101)</ListGroup.Item>
    </ListGroup>
        </div>

    </Container>
    </>
  )
}

export default FullStackPage