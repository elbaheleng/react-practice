import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextField from '@mui/material/TextField';
import { useState } from 'react'
import Display from './Display';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Input() {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [bmi, setBmi] = useState("")
  const [isWeight, setIsWeight] = useState(true)
  const [isHeight, setIsHeight] = useState(true)

  const validate = (e) => {
    const { name, value } = e.target // object destructuring - gatting name and value only from e.target
    if (name == 'weight') {
      setWeight(value)
    } else {
      setHeight(value)
    }
    if (!!value.match('^[0-9]+(\\.[0-9]+)?$')) {
      if (name == 'weight') {
        setIsWeight(true)
      } else {
        setIsHeight(true)
      }
    } else {
      if (name == 'weight') {
        setIsWeight(false)
      } else {
        setIsHeight(false)
      }
    }
  }
  const calc = () => {
    if (isWeight && isHeight) {
      setBmi((weight / ((height / 100) ** 2)).toFixed(2))
    } else {
      alert("Please enter a valid Weight & Height")
    }
  }
  const reset = () => {
    setWeight("")
    setHeight("")
    setBmi("")
    setIsWeight(true)
    setIsHeight(true)
  }

  return (
    <>
      <Row className='ms-2'>
        <Col md={3} className='mb-3'>
          <TextField id="outlined-basic" value={weight} label="Weight" variant="outlined" name='weight' onChange={(e) => validate(e)}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    kg
                  </InputAdornment>
                ),
              },
            }} />
          {!isWeight && <p className='text-danger'>*Invalid Input</p>}


        </Col>
        <Col md={3} className='mb-3'>
          <TextField id="outlined-basic" value={height} label="Height" variant="outlined" name='height' onChange={(e) => validate(e)}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    cms
                  </InputAdornment>
                ),
              },
            }} />
          {!isHeight && <p className='text-danger'>*Invalid Input</p>}


        </Col>
      </Row>
      <Stack spacing={5} direction="row" className='w-50 ms-5 mb-3'>
              <Button variant="contained" color="primary" size="small" onClick={calc}>CALCULATE BMI</Button>
              <Button variant="contained" color="primary" size="small" onClick={reset}>RESET</Button>
      </Stack>

      <div className='bg-light container rounded-2 bg-opacity-50'>
        {bmi != "" && <h1 className='text-center pt-3 mb-0'>Your BMI is {bmi}</h1>}

        {(bmi != '' && bmi <= 18.5) &&
          <>
            <div className='row'>
              <div className='col-md-4 col-sm-12 mx-auto my-auto'>
                <Display index={bmi} />
              </div>
              <div className='col-md-4 col-sm-12 my-auto  bg-primary bg-opacity-75 text-white p-3 rounded-2'>
                <h3 className='text-center fst-italic mb-2'>Underweight</h3>
                <p style={{ textAlign: "justify" }}>⚠️ You're underweight. Consider a nutritious diet rich in proteins and healthy fats.</p>
                <p style={{ textAlign: "justify" }}>🥗 Focus on balanced meals and strength training to gain healthy weight.</p>
              </div>
              <div className='col-md-4 col-sm-12 my-auto'>
                <img src="https://cliply.co/wp-content/uploads/2021/03/392103390_SAD_EMOJI_400px.gif" alt="gif" className='w-75'></img>
              </div>
            </div>
          </>}


        {(bmi != '' && bmi > 18.5 && bmi <= 24.9) &&
          <><div className='row'>
            <div className='col-md-4 col-sm-12 mx-auto  my-auto'>
              <Display index={bmi} />
            </div>
            <div className='col-md-4 col-sm-12 my-auto  bg-success  bg-opacity-75 text-white p-3 rounded-2'>
              <h3 className='text-center fst-italic mb-2'>Normal</h3>
              <p style={{ textAlign: "justify" }}>✅ Great! You have a healthy BMI. Maintain your balanced diet and active lifestyle.</p>
              <p style={{ textAlign: "justify" }}>🥗 Keep up the good work! Regular exercise and mindful eating are key.</p>

            </div>
            <div className='col-md-4 col-sm-12 my-auto'>
              <img src="https://cdn.pixabay.com/animation/2022/12/11/04/11/04-11-18-929_512.gif" alt="gif" className='w-75'></img>
            </div>
          </div></>}

        {(bmi != '' && bmi > 24.9 && bmi <= 29.9) &&
          <><div className='row'>
            <div className='col-md-4 col-sm-12 mx-auto my-auto'>
              <Display index={bmi} />
            </div>
            <div className='col-md-4 col-sm-12 my-auto  bg-warning  bg-opacity-75 p-3 rounded-2'>
              <h3 className='text-center fst-italic mb-2'>Overweight</h3>
              <p style={{ textAlign: "justify" }}>⚠️ You're in the overweight range. A combination of healthy diet and exercise can help.</p>
              <p style={{ textAlign: "justify" }}>🥗 Reducing sugar intake and increasing physical activity can make a big difference.</p>
            </div>
            <div className='col-md-4 col-sm-12 my-auto'>
              <img src="https://i.pinimg.com/originals/7f/e3/69/7fe369d429de10edf315585f518bcc11.gif" alt="gif" className='w-75'></img>
            </div>
          </div></>}

        {(bmi != '' && bmi >= 30) &&
          <><div className='row'>
            <div className='col-md-4 col-sm-12 mx-auto my-auto'>
              <Display index={bmi} />
            </div>
            <div className='col-md-4 col-sm-12 my-auto bg-danger bg-opacity-75 text-white p-3 rounded-2'>
              <h3 className='text-center fst-italic mb-2'>Obese</h3>
              <p style={{ textAlign: "justify" }}>❌ Your BMI indicates obesity. Consider consulting a healthcare professional for personalized advice.</p>
              <p style={{ textAlign: "justify" }}>🥗 It's never too late to start a healthier lifestyle. Start with small, consistent changes.</p>

            </div>
            <div className='col-md-4 col-sm-12 my-auto'>
              <img src="https://i.pinimg.com/originals/79/d0/47/79d04781ef5d09f81984f8f1d436e37d.gif" alt="gif" className='w-75'></img>
            </div>
          </div></>}
      </div>
    </>
  )
}

export default Input