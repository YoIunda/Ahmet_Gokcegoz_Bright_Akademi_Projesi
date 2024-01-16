import React from 'react'
import { Container,Col, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'


const teamsData = [
    {
      id: 0,
      image: require('../Images/enginhoca.png'),
      name: 'Engin Niyazi Ergül',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
      id: 1,
      image: require('../Images/1.png'),
      name: 'Ahmet Gokcegoz',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
      id: 2,
      image: require('../Images/1.png'),
      name: 'Sarah Wills',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
      id: 3,
      image: require('../Images/1.png'),
      name: 'Nicholas Perry',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    
  ]
const EgitmenDetay = () => {
    const {id} = useParams();
  return (
    <Container className=''>
        <h2 className="text-center my-1">{teamsData[id-1].name}</h2>
        <Row className='px-4 my-5'>
            <Col className='my-5' sm={4}>
                <Image fluid rounded src={teamsData[id-1].image}></Image>
            
            </Col>
            <Col className='my-5' sm={8}>
                <p className='my-4'>{teamsData[id-1].description} </p>
            </Col>
        </Row>
      </Container>

  )
}

export default EgitmenDetay