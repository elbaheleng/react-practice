import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { allVideosget } from '../services/allapis';
import { videoAddApi } from '../services/allapis';

function View({ addVideoStatus }) {

  const [allVideos, setAllVideos] = useState([])
  const [deleteVideoStatus, setDeleteVideoStatus] = useState({})
  const [videoAddFromCategory, setVideoAddFromCategory] = useState({})
  const getAllVideos = async () => {
    const result = await allVideosget()
    //console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setAllVideos(result.data)
    }
  }
  //console.log(allVideos);
  const videoOver = (e) => {
    e.preventDefault() // to prevent refresh, to prevent data loss
  }
  const videoDrop = async (e) => {
    const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
    if (!allVideos.includes(videoDetails)) {
      const result = await videoAddApi(videoDetails)
      if (result.status >= 200 && result.status < 300) {
        setVideoAddFromCategory(result.data)
      }
    }

  }

  useEffect(() => {
    getAllVideos()
  }, [addVideoStatus, deleteVideoStatus, videoAddFromCategory])
  return (
    <>
      <h4 className='mt-3'>All Videos</h4>
      <div className="container-fluid mt-5" droppable="true" onDragOver={(e) => videoOver(e)} onDrop={(e) => videoDrop(e)}>
        <div className="row">{
          allVideos?.length > 0 ? allVideos.map((item, index) => (
            <div className="col-md-3 p-2" key={index}>
              <Videocard video={item} setDeleteVideoStatus={setDeleteVideoStatus} />
            </div>
          )) : <div className='text-center'>
            <img className='w-25' src="https://png.pngtree.com/png-clipart/20230405/original/pngtree-no-video-recording-sign-png-image_9026843.png" alt="no videos" />
            <h4>No videos to show</h4>
          </div>
        }

        </div>
      </div>

    </>
  )
}

export default View