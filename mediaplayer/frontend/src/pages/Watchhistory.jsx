import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { deleteVideoHistoryApi, getVideoHistoryApi } from '../services/allapis'
import Button from 'react-bootstrap/Button';

function Watchhistory() {

  const [watchHistory, setWatchHistory] = useState([])
  const [deleteWatchHistoryStatus, setDeleteWatchHistoryStatus] = useState({})

  const getHistory = async () => {
    const result = await getVideoHistoryApi()
    console.log(result.data);
    if (result.status >= 200 && result.status < 300) {
      setWatchHistory(result.data)
    }
  }

  const deleteVideoHistory = async (id) => {
    const result = await deleteVideoHistoryApi(id)
    if (result.status >= 200 && result.status < 300) {
      setDeleteWatchHistoryStatus(result.data)
    }
  }

  useEffect(() => {
    getHistory()
  }, [deleteWatchHistoryStatus, watchHistory])
  return (
    <>
      <div className='container d-flex justify-content-between align-items-center mt-5'>
        <h5>Watch History</h5>
        <Link to={'/home'} style={{ textDecoration: "none" }}><h5 className=' d-flex justify-content-between align-items-center'><span className='d-none d-md-flex me-2'>Back Home</span><FontAwesomeIcon icon={faHouse} /></h5></Link>
      </div>
      <div className="container my-5 table-responsive">
        {
        (watchHistory?.length > 0) ? <table className='table table-bordered'>
        <thead>
          <tr>
            <th className='p-3 text-center'>Sl. No.</th>
            <th className='p-3 text-center'>Caption</th>
            <th className='p-3 text-center'>Url</th>
            <th className='p-3 text-center'>Timestamp</th>
            <th className='p-3 text-center'>Action</th>
          </tr>
        </thead>
        <tbody>
        {watchHistory.map((item, index) => (
         <tr key = {index}>
         <td className='text-center'>{index + 1}</td>
         <td className='text-center'>{item?.caption}</td>
         <td className='text-center'><Link to={`${item?.url}`} target = '_blank'> {item?.url}</Link></td>
         <td className='text-center'>{item?.time}</td>
         <td className='text-center'><Button variant="danger" onClick={() => deleteVideoHistory(item?.id)}><FontAwesomeIcon icon={faTrashCan} /></Button></td>
       </tr>
        ))}
        </tbody>
      </table>    : <div className='text-center'>
        <img className='w-25' src="https://png.pngtree.com/png-clipart/20230405/original/pngtree-no-video-recording-sign-png-image_9026843.png" alt="no videos" />
        <h4 className='text-danger text-center'>History Cleared</h4>
      </div>
      }
      </div >

    </>
  )
}

export default Watchhistory