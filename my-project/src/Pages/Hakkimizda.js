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
    title: 'Ön Eleme',
    description: 'Adaylar online olarak başvuru formunu doldurur ve taleplerini iletirler. Eğitim Çözümleri Departmanımız eğitim kriterlerine uygun katılımcılara sınav davetini ileteceklerdir.'
  },
  {
    id: 2,
    icon: 'fas fa-snowflake',
    title: 'WGYS',
    description: 'Ön elemeyi geçen katılımcılarımız, sayısal ve sözel becerilerinin ölçüldüğü sınava tabi tutulacaktır.'
  },
  {
    id: 3,
    icon: 'fas fa-plug',
    title: 'Teknik',
    description: 'Eğitmenler tarafından alan mülakatları gerçekleştirilir.'
  },
  {
    id: 4,
    icon: 'fas fa-desktop',
    title: 'IK Mülakatı',
    description: 'İnsan Kaynakları departmanımız tarafından mülakat gerçekleştirilir.'
  },
  {
    id: 5,
    icon: 'fas fa-trophy',
    title: 'Sınıf Eğitimi',
    description: 'Öğrencilerimiz 6 ay süre ile haftanın belirli günlerinde tam zamanlı olarak Bahçeşehir Üniversitesi Wissen Kampüsü’nde eğitim alırlar.'
  },
  {
    id: 6,
    icon: 'fas fa-life-ring',
    title: 'Proje',
    description: 'Alanında uzman deneyimli eğiticilerimiz ile 6 ay süren temel eğitimin ardından öğrencilerimiz, bireysel ve takım halinde geliştirerek öğrendiklerini uygulayıp bitirme projelerini oluşturacaklar.'
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
                <Col sm={4} className='holder d-flex justify-content-center align-items-center flex-column mb-5' key={services.id}>
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