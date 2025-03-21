
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faXTwitter, faFacebook, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <>
        <Row  className='px-2'>
          <Col md={4}>
            <div>
              <h5 className='text-warning mt-1'><FontAwesomeIcon className='me-1' icon={faVideo} /> Media Player</h5>
              <p className='fs-6' style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi esse facere optio voluptate dolor, nam voluptates est ab magnam veritatis exercitationem labore itaque, error minus ipsum perspiciatis mollitia. Repellat, ipsam.</p>
            </div>
          </Col>
          <Col md={2}>
            <h5 className='mt-1'>Links</h5>
            <div className='d-flex flex-column'>
            <Link to={'/'}><p className='mb-3'>Landing Page</p></Link>
            <Link to={'/home'}><p className='mb-3'>Home Page</p></Link>
            <Link to={'/watchhistory'}> <p className='mb-3'>Watch History</p></Link>
            </div>
          </Col>
          <Col md={2}>
            <h5 className='mt-1'>Guides</h5>
            <div className='d-flex flex-column'>
             <p className='mb-3'>React</p>
              <p className='mb-3'>React Bootstrap</p>
              <p className='mb-3'>Bootswatch</p>
            </div>
          </Col>
          <Col md={4} className='ps-2'>
            <h5 className='mt-1 '>Contact Us</h5>
              <Form className='w-100 px-0'>
                <Col className='d-flex flex-row gap-2'>
                  <Form.Control className='flex-fill ' placeholder="Email" />
                  <button className='btn btn-warning'>Subscribe</button>
                </Col>
              </Form>
        
            <Row>
              <Col className='d-flex flex-row mt-3 mb-3 justify-content-between'>
                <FontAwesomeIcon style={{height : '35px'}}  icon={faInstagram} />
                <FontAwesomeIcon style={{height : '35px'}}  icon={faXTwitter} />
                <FontAwesomeIcon style={{height : '35px'}}  icon={faFacebook} />
                <FontAwesomeIcon style={{height : '35px'}}  icon={faWhatsapp} />
                <FontAwesomeIcon style={{height : '35px'}}  icon={faLinkedin} />
              </Col>
            </Row>
          </Col>
        </Row>
    </>
  )
}

export default Footer