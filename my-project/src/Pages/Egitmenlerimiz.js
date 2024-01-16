import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../css/Egitmenlerimiz.css'
import { Button } from 'react-bootstrap';

const teamsData = [
  {
    id: 1,
    image: require('../Images/enginhoca.png'),
    fbLink: 'https://www.facebook.com',
    githubLink: 'https://github.com/enginhoca',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Engin Niyazi Ergül',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 2,
    image: require('../Images/1.png'),
    fbLink: 'https://www.facebook.com',
    githubLink: 'https://https://github.com/YoIunda',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Ahmet Gokcegoz',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 3,
    image: require('../Images/1.png'),
    fbLink: 'https://www.facebook.com',
    githubLink: 'https://www.github.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Sarah Wills',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 4,
    image: require('../Images/1.png'),
    fbLink: 'https://www.facebook.com',
    githubLink: 'https://www.github.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Nicholas Perry',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  
]

const Egitmenlerimiz = () => {
  return (
    <section id="teams" className="block teams-block my-5">
      <Container >
        <div className="title-holder">
          <h2 className='text-center mt-5 mb-5'>Egitmen Kadromuz</h2>
        </div>
        <Row>
          {
            teamsData.map(teams => {
              return (
                <Col sm={3} key={teams.id}>
                  <div className='image'>
                    <Image src={teams.image} />
                    <div className='overlay'>
                      <div className='socials'>
                        <ul>
                          <li><a href={teams.fbLink}><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href={teams.githubLink}><i className="fab fa-github"></i></a></li>
                          <li><a href={teams.linkedinLink}><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='content d-flex flex-column'>
                    <h3 className='text-center'>{teams.name}</h3>
                    <p className='text-center'>{teams.description}</p>
                    <Button className='text-center d-flex  align-items-center justify-content-center' href={`/EgitmenDetay/${teams.id}`}>Detay</Button>
                  </div>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default Egitmenlerimiz