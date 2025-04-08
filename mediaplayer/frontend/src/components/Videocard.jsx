import React from 'react'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addVideoHistoryApi, deleteVideoApi } from '../services/allapis';

function Videocard({ video, setDeleteVideoStatus, isPresent }) { // to destructure, give the props name inside // to destructure, give the props name inside {}

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    addVideoHistory()
  }
  const deleteVideo = async (id) => {
    const result = await deleteVideoApi(id)
    //console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setDeleteVideoStatus(result.data)
    }
  }

  const videoDrag = (e, video) => {
    console.log(e);
    console.log(video);
    e.dataTransfer.setData("videoDetails", JSON.stringify(video))

  }

  const addVideoHistory = async () => {
    let caption = video?.caption
    let url = video?.embedLink
    const time = new Date()
    const result = new Intl.DateTimeFormat("en-GB", { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }).format(time)
    //console.log(result);
    const response = await addVideoHistoryApi({ caption, url, time: result })


  }
  return (
    <>
      <Card style={{ width: '100%' }} draggable onDragStart={(e) => { videoDrag(e, video) }}>
        {!isPresent && <Card.Img variant="top" src={video?.image} style={{ height: '300px' }} onClick={handleShow} />}
        <Card.Body className='d-flex justify-content-between align-items-center'>
          <Card.Text className='m-0' >{video?.caption}</Card.Text>
          {!isPresent && <Button variant="danger" onClick={() => deleteVideo(video?.id)}><FontAwesomeIcon icon={faTrashCan} /></Button>}
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="417" src={`${video?.embedLink}?autoplay=1`} title="Sikandar Naache | Sikandar | Salman Khan &amp; Rashmika Mandanna | JAM8, Amit Mishra, AKASA, Siddhaant M" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        </Modal.Body>
      </Modal>
    </>
  )
}

export default Videocard