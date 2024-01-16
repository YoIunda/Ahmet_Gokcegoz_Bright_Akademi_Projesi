import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
const BulutBilisimPage = () => {
  return (
    <Container >
    <Row className='px-4 my-5'>
        <Col className='my-5' sm={7}>
            <Image fluid rounded src='https://e0.pxfuel.com/wallpapers/355/716/desktop-wallpaper-cloud-computing-cloud-storage.jpg'></Image>
        
        </Col>
        <Col className='my-5' sm={5}>
            <h1> Bulut Bilişim Uzmanlık Eğitimi</h1>
            <p className='my-4'>Bulut bilişim, bilgi işlem hizmetlerinin (sunucu, depolama, veri tabanı, ağ, yazılım, analiz ve makine zekası dahil) internet -bulut- üzerinden sağlanarak daha hızlı inovasyon, esnek kaynaklar ve ekonomik ölçeklendirme sunulması anlamına gelir. Normalde yalnızca kullandığınız bulut hizmetleri için ödeme yaptığınızdan işletim maliyetlerinizi düşürebilir, altyapınızı daha verimli bir şekilde çalıştırabilir ve değişen iş gereksinimlerinize uygun şekilde ölçeklendirme yapabilirsiniz.   </p>
        <Button className='mb-5' variant='outline-primary'>Brosur Indir</Button>
        </Col>
    </Row>
    <div>
            <h2 className='text-center mb-5'>Icerikler</h2>
        <ListGroup className='mb-5 text-center'>
      <ListGroup.Item>Building Simple Network</ListGroup.Item>
      <ListGroup.Item>Establishing Internet Connectivity</ListGroup.Item>
      <ListGroup.Item>Azure Data Fundamentals</ListGroup.Item>
      <ListGroup.Item>Azure AI Fundamentals</ListGroup.Item>
      <ListGroup.Item>Azure Devops Fundamentals</ListGroup.Item>
    </ListGroup>
        </div>
    
</Container>
  )
}

export default BulutBilisimPage