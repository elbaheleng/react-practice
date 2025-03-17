import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' row'>
      <div className='col-4'></div>
      <form className='bg-light p-5 col-4 mt-4 rounded'>
          <h1>Simple Interest App</h1>
          <p>Calculate your simple interest easily</p>
          <div id='displ' className='text-center text-white rounded p-3 mb-3'>
            <h3>₹ 0</h3>
            <p>Total simple interest</p>
          </div>
          <input type="text" className='form-control mb-3' placeholder='₹ Principal Amount' />
          <input type="text" className='form-control mb-3' placeholder='Rate of Interest (%)' />
          <input type="text" className='form-control mb-3' placeholder='Year (Yr)' />
          <div className='d-flex flex-row gap-3 justify-content-between'>
            <button className='btn btn-success btn-sm p-3 fs-6 col-6' > CALCULATE</button>
            <button className='btn btn-outline-primary btn-sm p-3 fs-6 col-6'>RESET</button>
          </div>

        </form>
        <div className='col-4'></div>
      </div>
    </>
  )
}

export default App
