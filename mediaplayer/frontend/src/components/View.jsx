import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { allVideosget } from '../services/allapis';

function View({addVideoStatus}) {

  const [allVideos, setAllVideos] = useState([])
  const [deleteVideoStatus, setDeleteVideoStatus] = useState({})
  const getAllVideos = async () => {
    const result = await allVideosget()
    //console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setAllVideos(result.data)
    }
  }
  console.log(allVideos);

  useEffect(() => {
    getAllVideos()
  }, [addVideoStatus, deleteVideoStatus])
  return (
    <>
      <h4 className='mt-3'>All Videos</h4>
      <div className="container-fluid mt-5">
        <div className="row">{
          allVideos?.length > 0 ? allVideos.map((item, index) => (
            <div className="col-md-3 p-2" key = {index}>
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