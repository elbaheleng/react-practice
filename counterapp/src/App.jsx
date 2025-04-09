import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, reset } from './redux/counterSlice'
import { useState } from 'react'

function App() {
  const count = useSelector((state) => state.counterReducer.value)
  const dispatch = useDispatch()
  const [range,setRange] = useState("")
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div id='disp' className="p-3 rounded bg-light">
              <h1 className='text-dark text-center mt-4'>Counter Application</h1>
              <h1 id='result' className='text-center mb-5'>{count}</h1>
              <div className="d-flex justify-content-center gap-3 mb-3">
                <button className='btn btn-success' onClick={()=> dispatch(increment(Number(range)))}> Increment</button>
                <button className='btn btn-danger' onClick={()=> dispatch(reset())}> Reset</button>
                <button className='btn btn-warning' onClick={()=> dispatch(decrement(Number(range)))}> Decrement</button>
              </div>
              <input type="text" placeholder='Range' className='form-control mt-4' onChange={(e)=>setRange(e.target.value)} />
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  )
}

export default App
