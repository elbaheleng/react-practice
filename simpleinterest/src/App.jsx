import { useState } from 'react'
import './App.css'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function App() {
  const [principal, setPrincipal] = useState("")
  const [rate, setRate] = useState("")
  const [year, setYear] = useState("")
  const [interest, setInterest] = useState(0)
  const [isPrincipal, setIsPrincipal] = useState(true)
  const [isRate, setIsRate] = useState(true)
  const [isYear, setIsYear] = useState(true)

  const validate = (e) => {
    const {name , value} = e.target // object destructuring - gatting name and value only from e.target
    if (!!value.match('^[0-9]*$')){
      if (name == 'principal'){
        setPrincipal(value)
        setIsPrincipal(true)
      }
      else if (name == 'rate'){
        setRate(value)
        setIsRate(true)
      }
      else {
        setYear(value)
        setIsYear(true)
      }
    }
    else {
      if (name == 'principal'){
        setPrincipal(value)
        setIsPrincipal(false)
      }
      else if (name == 'rate'){
        setRate(value)
        setIsRate(false)
      }
      else {
        setYear(value)
        setIsYear(false)
      }
    }  
  }
   const handleReset = () => {
    setPrincipal("")
    setRate("")
    setYear("")
    setInterest(0)
    setIsPrincipal(true)
    setIsRate(true)
    setIsYear(true)
   }

   const calculate = () => {
    setInterest((principal*rate*year)/100)
   }
  return (
    <>
      <div className=' row'>
        <div className='col-4'></div>
        <form className='bg-light p-4 col-4 mt-2 rounded'>
          <h1 id='heading'>Simple Interest App</h1>
          <p>Calculate your simple interest easily</p>
          <div id='displ' className='text-center text-white rounded p-3 mb-3'>
            <h3>₹ {interest}</h3>
            <p>Total simple interest</p>
          </div>
          <div className="mb-3">
            <TextField id="outlined-basic" value={principal} name='principal' label="₹ Principal Amount" variant="outlined" className='w-100' onChange={(e) => validate(e)} />
              {!isPrincipal && <span className='text-danger'>*Invalid Input</span>}
          </div>
          <div className="mb-3">
            <TextField id="outlined-basic" value={rate} name='rate' label="Rate of Interest (%)" variant="outlined" className='w-100'  onChange={(e) => validate(e)}  />
            {!isRate && <span className='text-danger'>*Invalid Input</span>}          </div>
          <div className="mb-3">
            <TextField id="outlined-basic" value={year} name='year' label="Year (Yr)" variant="outlined" className='w-100'  onChange={(e) => validate(e)}  />
            {!isYear && <span className='text-danger'>*Invalid Input</span>}          </div>
          <div className=''>
            <Stack spacing={1} direction="row">
              <Button variant="contained" color="success" className='w-50'  size="large" onClick={calculate}>CALCULATE</Button>
              <Button variant="outlined"  className='w-50'  size="large" onClick={handleReset}>RESET</Button>
            </Stack>

          </div>

        </form>
        <div className='col-4'></div>
      </div>
    </>
  )
}

export default App
