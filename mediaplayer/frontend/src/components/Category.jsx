import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Videocard from "./Videocard"

function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <h5>Category</h5>
      <button className='btn btn-warning w-100 mt-3' onClick={handleShow}>Add Category</button>
      <div className='d-flex flex-column'>
        <div>
          <div className='border rounded p-2 mt-3'>
            <div className='d-flex justify-content-between'>
              <p>Tamil Songs</p>
              <button className='btn btn-danger'><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
            <div>
              <Videocard />
            </div>
          </div>
          <div className='d-flex justify-content-between border rounded p-2 mt-3'>
            <p>Malayalam Songs</p>
            <button className='btn btn-danger'><FontAwesomeIcon icon={faTrashCan} /></button>
          </div>
        </div>

      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mx-3 border border-secondary rounded p-3'>
            <Form.Control type="email" placeholder="Enter Category Name" />
          </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category