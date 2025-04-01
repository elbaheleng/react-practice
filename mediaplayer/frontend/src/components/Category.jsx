import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Videocard from "./Videocard"
import { addCategoryApi } from '../services/allapis';
import { ToastContainer, toast } from "react-toastify"


function Category() {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("")

  const handleClose = () => {
    setShow(false);
    handleReset()
  }
  const handleShow = () => setShow(true);
  const handleReset = () => setCategoryName("");

  //console.log(categoryName);


  const addNewCategory = async () => {
    if (categoryName) {
      let reqBody = {
        category: categoryName,
        allVideos: []
      }
      const result = await addCategoryApi(reqBody)
      //console.log(result);
      if (result.status >= 200 && result.status < 300) {
        toast.success("Category added successfully")
        handleClose()
      } else {
        toast.error("Something went wrong. Couldn't add category.")
        handleReset()
      }
    } else {
      toast.error("Please add a category name.")
    }

  }
  return (
    <>
      <h5 className='mt-3'>Category</h5>
      <button className='btn btn-warning w-100 mt-3' onClick={handleShow}>Add Category</button>
      <div className='d-flex flex-column'>
        <div>
          <div className='border rounded p-2 mt-3'>
            <div className='d-flex justify-content-between'>
              <p>Tamil Songs</p>
              <button className='btn btn-danger'><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
            <div>
              {/* <Videocard /> */}
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
            <Form.Control type="email" value={categoryName} placeholder="Enter Category Name" onChange={(e) => { setCategoryName(e.target.value) }} />
          </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="warning" onClick={addNewCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme="colored" autoClose={3000} />

    </>
  )
}

export default Category