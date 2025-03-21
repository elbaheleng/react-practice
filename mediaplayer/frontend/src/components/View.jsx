import React from 'react'
import Videocard from './Videocard'

function View() {
  return (
    <>
      <h4>All Videos</h4>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-3 p-2">
            <Videocard />
          </div>
          <div className="col-md-3 p-2">
            <Videocard />
          </div>
          <div className="col-md-3 p-2">
            <Videocard />
          </div>
          <div className="col-md-3 p-2">
            <Videocard />
          </div>
        </div>
      </div>

    </>
  )
}

export default View