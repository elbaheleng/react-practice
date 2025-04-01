import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { videoAddApi } from '../services/allapis';
import {ToastContainer, toast} from "react-toastify"

function Add({setAddVideoStatus}) {
    const [show, setShow] = useState(false);
    const [videoDetails, setvideoDetails] = useState({
        caption : '',
        image : '',
        embedLink : ''
    })

const handleReset = () => {
    setvideoDetails({
        caption : '',
        image : '',
        embedLink : ''
    })
}

const handleUpload = async () => {
const {caption, image, embedLink} = videoDetails //object destructuring
if (!caption || !image || !embedLink){ 
    alert('Please fill the form completely')
} else {
    if (embedLink.startsWith("https://youtu.be/")){
        //https://youtu.be/vQz82N1PIPo?feature=shared
        let link = `https://www.youtube.com/embed/${embedLink.slice(17,28)}`
        console.log(link);
        const result = await videoAddApi({caption, image, embedLink:link})
        console.log(result);
        if (result.status >= 200 && result.status < 300){
            toast.success("Video added successfully")
            handleClose()
            setAddVideoStatus(result.data)
        } else {
            toast.error("Something went wrong. Couldn't add video.")
            handleReset()
        }
        
    } else {
        //https://www.youtube.com/watch?v=vQz82N1PIPo
        let link = `https://www.youtube.com/embed/${embedLink.slice(32,43)}`
        console.log(link);
        const result = await videoAddApi({caption, image, embedLink:link})
        console.log(result);
        if (result.status >= 200 && result.status < 300){
            toast.success("Video added successfully")
            handleClose()
            setAddVideoStatus(result.data)

        } else {
            toast.error("Something went wrong. Couldn't add video.")
            handleReset()
        }

    }
    // const result = await videoAddApi(videoDetails)
    // console.log(result);

    //<iframe width="853" height="480" src="https://www.youtube.com/embed/vQz82N1PIPo" title="Creative Woodworking Craftsman Wooden Furniture || TV Stand Design Furniture Making" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
}
}

    const handleClose = () => {
        handleReset()
        setShow(false);
    }
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
                            <Form.Control type="text" placeholder="Video Caption" value={videoDetails.caption} onChange={(e) => setvideoDetails({...videoDetails, caption : e.target.value})}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="videoimage">
                            <Form.Control type="text" placeholder="Video Image" value={videoDetails.image}  onChange={(e) => setvideoDetails({...videoDetails, image : e.target.value})} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="videourl">
                            <Form.Control type="text" placeholder="Video Url" value={videoDetails.embedLink}  onChange={(e) => setvideoDetails({...videoDetails, embedLink : e.target.value})}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleReset}>
                        Reset
                    </Button>
                    <Button variant="primary" className='btn-warning' onClick={handleUpload}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer position = 'top-center' theme="colored" autoClose={3000}/>
        </>
    )
}

export default Add