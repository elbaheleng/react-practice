import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Add() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className='btn bg-transparent text-white fs-5' onClick={handleShow} > <div className=' d-flex justify-content-center align-items-center'><span className='d-none d-md-flex me-2'> Upload New Video </span> <FontAwesomeIcon icon={faCloudArrowUp} /></div></button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className='me-2' />Upload Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='fs-6'>Please fill the following details</p>
                    <Form className='border rounded p-2 mt-2'>
                        <Form.Group className="mb-3 mt-2" controlId="videocaption">
                            <Form.Control type="text" placeholder="Video Caption" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="videoimage">
                            <Form.Control type="text" placeholder="Video Image" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="videourl">
                            <Form.Control type="text" placeholder="Video Url" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Reset
                    </Button>
                    <Button variant="primary" className='btn-warning' onClick={handleClose}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add