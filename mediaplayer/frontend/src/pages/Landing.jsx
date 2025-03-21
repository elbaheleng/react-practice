import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <Container className='mt-5 d-flex justify-content-center align-items-center'>
        <Row className='mt-4 w-100'>
          <Col md={6}>
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p className='mt-4' style={{ fontSize: '18px', textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illo quaerat excepturi maxime autem, perspiciatis explicabo incidunt nisi a laudantium harum nemo sapiente laboriosam ut assumenda consequuntur labore velit quia.</p>
            <Link to={'/home'}><button className='mt-3 btn btn-warning'>Get Started</button></Link>
          </Col>
          <Col md={6} className='d-flex justify-content-center mt-5 mt-md-3'>
            <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="no image" className='w-50' />
          </Col>
        </Row>
      </Container>

      <Container className='d-flex justify-content-center'>
        <Row className='w-100'>
          <Col md={1}></Col>
          <Col md={10} className='d-flex justify-content-center flex-column p-3 p-md-5'>
            <h4 className='mt-5 text-center'>Features</h4>
            <Row className='mt-5 mt-md-3'>
              <Col md={4}>
                <Card className='w-100 p-3 mt-4 mt-md-0' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://i.pinimg.com/originals/62/0c/5a/620c5a819f8b8fa2a75575edf1d155ec.gif" height={'250px'} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className='w-100 p-3 mt-4 mt-md-0' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://cdn.dribbble.com/userupload/42259831/file/original-7824f335d663467e4c7a3313f3e20cd8.gif" height={'250px'} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className='w-100 p-3 mt-4 mt-md-0' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://i.pinimg.com/originals/53/b5/55/53b555c98e73777b01a4d25a0a5d2b77.gif" height={'250px'} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>

      <Container className='p-5'>
        <Row className='mt-5 p-5 border border-secondary rounded'>
          <Col md={6}>
            <h3 className='text-warning'>Simple fast and Powerful</h3>
            <p className='mt-4' style={{ textAlign: 'justify' }}><span className='fs-4'>Play Everything</span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi ipsam ex rerum officia exercitationem blanditiis repellendus ad porro</p>
            <p className='mt-4' style={{ textAlign: 'justify' }}><span className='fs-4'>Play Everything</span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi ipsam ex rerum officia exercitationem blanditiis repellendus ad porro</p>
            <p className='mt-4' style={{ textAlign: 'justify' }}><span className='fs-4'>Play Everything</span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi ipsam ex rerum officia exercitationem blanditiis repellendus ad porro</p>
          </Col>
          <Col md={6}>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Rn0omo-x9uw" title="Sikandar Naache | Sikandar | Salman Khan &amp; Rashmika Mandanna | JAM8, Amit Mishra, AKASA, Siddhaant M" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Landing