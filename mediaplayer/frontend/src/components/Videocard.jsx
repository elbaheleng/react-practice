import React from 'react'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Videocard() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFeflFr1mO2KUN0qtI9_RP8rUaKhKjY11NHmNZt-8i2uMTmjCB6ioxRcWMgI311tSo8Dp30_HySzKVa2hZ-LxAXcG2bqrW9yTrdcEWrYGHUiVjEgR6v_hzyotKHVifCWzcDVCJAYlC1MbP/s1600/Om+Shanti+Oshana+Malayalam+Movie+Poster+01.jpg" style={{height : '300px'}} onClick={handleShow} />
      <Card.Body className='d-flex justify-content-between align-items-center'>
        <Card.Text className='m-0'>Card Title</Card.Text>
        <Button variant="danger"><FontAwesomeIcon icon={faTrashCan} /></Button>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="417" src="https://www.youtube.com/embed/Rn0omo-x9uw?autoplay=1" title="Sikandar Naache | Sikandar | Salman Khan &amp; Rashmika Mandanna | JAM8, Amit Mishra, AKASA, Siddhaant M" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        </Modal.Body>
      </Modal>
    </>
  )
}

export default Videocard