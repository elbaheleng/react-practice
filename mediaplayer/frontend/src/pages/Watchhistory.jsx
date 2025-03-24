import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

function Watchhistory() {
  return (
    <>
      <div className='container d-flex justify-content-between align-items-center mt-5'>
        <h5>Watch History</h5>
        <Link to={'/home'} style={{textDecoration : "none"}}><h5 className=' d-flex justify-content-between align-items-center'><span className='d-none d-md-flex me-2'>Back Home</span><FontAwesomeIcon icon={faHouse} /></h5></Link>
      </div>
      <div className="container my-5 table-responsive">
        <table className='table table-bordered'>
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
            <tr>
              <td className='text-center'>dummy</td>
              <td className='text-center'>dummy</td>
              <td className='text-center'><Link to={''}> dummy</Link></td> 
            <td className='text-center'>dummy</td>
            <td className='text-center'>dummy</td>
          </tr>
        </tbody>
      </table>
    </div >

    </>
  )
}

export default Watchhistory