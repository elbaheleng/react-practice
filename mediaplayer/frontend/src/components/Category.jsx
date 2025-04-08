import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Videocard from "./Videocard"
import { addCategoryApi, deleteCategoryApi, getAllCategoryApi, updateCategoryApi } from '../services/allapis';
import { ToastContainer, toast } from "react-toastify"


function Category() {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("")
  const [allCategory, setAllCategory] = useState([])
  const [addCategoryStatus, setAddCategoryStatus] = useState({})
  const [deleteCategoryStatus, setDeleteCategoryStatus] = useState({})
  const [updateStatus, setUpdateStatus] = useState({})


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
        setAddCategoryStatus(result.data)
      } else {
        toast.error("Something went wrong. Couldn't add category.")
        handleReset()
      }
    } else {
      toast.error("Please add a category name.")
    }

  }

  const getAllCategory = async () => {
    let result = await getAllCategoryApi()
    //console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setAllCategory(result.data)
    }

  }

  //console.log(allCategory);

  const deleteCategory = async (id) => {
    let result = await deleteCategoryApi(id)
    if (result.status >= 200 && result.status < 300) {
      setDeleteCategoryStatus(result.data)
    }

  }

  const videoOver = (e) => {
    e.preventDefault() // to prevent refresh, to prevent data loss
  }

  const videoDrop = async (e, categoryDetails) => {
    //console.log(e);
    //console.log(categoryDetails);
    const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
    //console.log(videoDetails);
    if (categoryDetails.allVideos.find((item) => item.id == videoDetails.id)) {
      toast.error("Video already in this category")
    } else {
      categoryDetails.allVideos.push(videoDetails)
      //console.log(categoryDetails);
      const result = await updateCategoryApi(categoryDetails.id, categoryDetails)
      //console.log(result);
      if (result.status >= 200 && result.status < 300) {
        setUpdateStatus(result.data)
      }

    }

  }
const videoFromCategoryDrag = async (e, video, category) => {
  // console.log(e);
  // console.log(video);
  // console.log(category);
  e.dataTransfer.setData("videoDetails", JSON.stringify(video))
  let newAllVideos = category.allVideos.filter((item) => item != video)
  category.allVideos = newAllVideos
  console.log(category);
  const result = await updateCategoryApi(category.id, category)
      //console.log(result);
      if (result.status >= 200 && result.status < 300) {
        setUpdateStatus(result.data)
      }


  
  // e.dataTransfer.setData("categoryDetails", JSON.stringify(category))
}

  useEffect(() => {
    getAllCategory()
  }, [addCategoryStatus, deleteCategoryStatus, updateStatus])
  return (
    <>
      <h5 className='mt-3'>Category</h5>
      <button className='btn btn-warning w-100 mt-3' onClick={handleShow}>Add Category</button>
      {(allCategory?.length > 0) ?
        allCategory.map((item, index) => (
          <div className='d-flex flex-column' key={index} droppable="true" onDragOver={(e) => videoOver(e)} onDrop={(e) => videoDrop(e, item)}>
            <div className='border rounded p-2 mt-3'>
              <div className='d-flex justify-content-between'>
                <p>{item?.category}</p>
                <button className='btn btn-danger' onClick={() => deleteCategory(item?.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
              </div>

              {item?.allVideos?.map((video, index) => (
                <div key={index} draggable onDragStart={(e)=>{videoFromCategoryDrag(e, video, item)}} >
                  <Videocard  video={video} isPresent={true}  />
                </div>
              ))}

            </div>
          </div>
        ))
        :
        <p className='text-danger text-center mt-4'>No Category added yet</p>
      }

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

      <ToastContainer position='top-center' theme="colored" autoClose={2000} />

    </>
  )
}

export default Category