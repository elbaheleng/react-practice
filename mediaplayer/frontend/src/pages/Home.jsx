import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import View from '../components/View'
import Category from '../components/Category'

function Home() {
  const [addVideoStatus, setAddVideoStatus] = useState({})
  return (
    <>
    <div className="container d-flex justify-content-between align-items-center">
      <Add setAddVideoStatus={setAddVideoStatus} />
      <Link to={'/watchhistory'} style={{textDecoration : "none"}} className='text-white'><h5 className=' d-flex justify-content-center align-items-center'> <span className='d-none d-md-flex me-2'> Watch History </span> <FontAwesomeIcon icon={faClockRotateLeft} /></h5> 
      </Link>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9">
          <View addVideoStatus={addVideoStatus} />
        </div>
        <div className="col-md-3">
          <Category />
        </div>
      </div>
    </div>
  
    </>
  )
}

export default Home