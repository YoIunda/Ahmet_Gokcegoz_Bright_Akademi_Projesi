import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../css/Hakkimizda.css'

import img1 from '../Images/img1.jpg'
const n1 = 100;
const n2 = 100;
const n3 = 100;
const n4 = 100;
const n5 = 100;
const servicesData = [
  {
    id: 1,
    icon: 'fas fa-clone',
    title: 'Responsive Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
  },
  {
    id: 2,
    icon: 'fas fa-snowflake',
    title: 'Creative Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
  },
  {
    id: 3,
    icon: 'fas fa-plug',
    title: 'SEO Optimized',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
  },
  {
    id: 4,
    icon: 'fas fa-desktop',
    title: 'Retina Ready',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
  },
  {
    id: 5,
    icon: 'fas fa-trophy',
    title: 'Brower Compatibility',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
  },
  {
    id: 6,
    icon: 'fas fa-life-ring',
    title: 'Customer Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
  }
]

const Hakkimizda = () => {
  return (
    <section id="about" className="block about-block">
    <Container fluid>
      <div className="title-holder text-center mb-5 mt-5">
        <h2>Hakkimizda</h2>
      </div>
      <Row className='mb-5'>
        <Col sm={6}>
          <Image src={img1} />
        </Col>
        <Col sm={6}>
          <p>Wissen, Türkiye’nin en önemli eğitim kurumlarından olan Bahçeşehir Üniversitesi’ne bilgi teknolojileri ile ilgili sektörel eğitim programlarında içerik olarak danışmanlık veren bir kurumdur. Kurum kültürü olarak “eğitimden daha fazlası” sloganını kendine ilke edinmiş olan Wissen, Bahçeşehir Üniversitesi’nin akademik başarısıyla bu alandaki profesyonelliğini her yıl binlerce kişiye eğitim verdirerek sürdürmektedir. Bu sayede adayların, başarılı bir kariyer oluşturmasını sağlamaktadır. Bu zamana kadar verdiği danışmanlıkların ve şu anda da devam eden programlarının, Türkiye’nin teknolojik yatırımlarının geleceği ve başarısı açısından son derece önemli olduğunun farkında olarak eğitimlere devam edilmektedir.</p>
          <div className='progress-block'>
            <h4>Introduction to Programming in C#</h4>
            <ProgressBar now={n1} label={`${n1}%`} />
          </div>
          <div className='progress-block  mt-2'>
            <h4>Implementing Entity Framework With MSSQL</h4>
            <ProgressBar now={n2} label={`${n2}%`} />
          </div>
          <div className='progress-block  mt-2'>
            <h4>Asp.Net MVC 5 Web Application Development</h4>
            <ProgressBar now={n3} label={`${n3}%`} />
          </div>
          <div className='progress-block  mt-2'>
            <h4>Asp.Net WebForm Application Development</h4>
            <ProgressBar now={n4} label={`${n4}%`} />
          </div>
          <div className='progress-block mt-2'>
            <h4>Network Fundamentals and Windows 10 with Client Systems</h4>
            <ProgressBar now={n5} label={`${n5}%`} />
          </div>
        </Col>
      </Row>
    </Container>
    <section id="services" className="block services-block">
      <Container >
        <div className="title-holder">
          <h2 className='text-center mt-2 mb-5'>Our services</h2>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return ( 
                <Col sm={4} className='holder' key={services.id}>
                  <div className="icon">
                    <i className={services.icon}></i>
                  </div>
                  <h3 className='text-center'>{services.title}</h3>
                  <p className='text-center'>{services.description}</p>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  </section>
  )
}

export default Hakkimizda