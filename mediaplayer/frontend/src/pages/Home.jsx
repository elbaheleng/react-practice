import React from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import View from '../components/View'
import Category from '../components/Category'

function Home() {
  return (
    <>
    <div className="container d-flex justify-content-between mt-5">
      <Add />
      <Link to={'/watchhistory'} style={{textDecoration : "none"}} className='text-white'><h5>Watch History <FontAwesomeIcon icon={faClockRotateLeft} /></h5> 
      </Link>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9">
          <View />
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