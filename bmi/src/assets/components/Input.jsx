import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import { useState } from 'react'

function Input() {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [bmi, setBmi] = useState("")
  const [isWeight, setIsWeight] = useState(true)
  const [isHeight, setIsHeight] = useState(true)

  const validate = (e) => {
    const { name, value } = e.target // object destructuring - gatting name and value only from e.target
    if (!!value.match('^[0-9]*$')) {
      if (name == 'weight') {
        setWeight(value)
        setIsWeight(true)
      } else {
        setHeight(value)
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
    setBmi((weight / ((height / 100) ** 2)).toFixed(2))
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
        <Col md={3}>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>

        </Col>
        <Col md={3} className='mb-3'>
          <TextField id="outlined-basic" value={weight} label="Weight" variant="outlined" name='weight' onChange={(e) => validate(e)} />
          {!isWeight && <p className='text-danger'>*Invalid Input</p>}
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="kg" control={<Radio />} label="kg" />
            <FormControlLabel value="lbs" control={<Radio />} label="lbs" />
          </RadioGroup>

        </Col>
        <Col md={3} className='mb-3'>
          <TextField id="outlined-basic" value={height} label="Height" variant="outlined" name='height' onChange={(e) => validate(e)} />
          {!isHeight && <p className='text-danger'>*Invalid Input</p>}
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="cms" control={<Radio />} label="cm" />
            <FormControlLabel value="feet" control={<Radio />} label="feet" />
          </RadioGroup>

        </Col>
      </Row>
      <div className='text-center w-75'>
        <button className='btn btn-primary' onClick={calc}>CALCULATE BMI</button>
        <button className='btn btn-primary ms-3' onClick={reset}>RESET</button>
      </div>

      {bmi != "" && <h3>Your BMI is {bmi}</h3>}

      {(bmi != '' && bmi <= 18.5) &&
        <> <div className='d-flex flex-column'> <img src="https://media2.giphy.com/media/MsCIVAa4oV2K4wWdHG/200w.gif?cid=6c09b952yfq3jjuyw64cgw5g65yyr3kezdugqbayo5flrcz3&ep=v1_stickers_search&rid=200w.gif&ct=s" alt="" className='w-25'></img>
          <p>You're underweight. Consider a nutritious diet rich in proteins and healthy fats.</p></div></>}


      {(bmi != '' && bmi > 18.5 && bmi <= 24.9) &&
        <><div className='d-flex '> <img src="https://cdn.pixabay.com/animation/2022/12/11/04/11/04-11-18-929_512.gif" alt="" className='w-25'></img>
          <p> Great! You have a healthy BMI. Maintain your balanced diet and active lifestyle. </p></div></>}

      {(bmi != '' && bmi > 24.9 && bmi <= 29.9) &&
        <><div className='d-flex '><div><img src="https://media2.giphy.com/media/MsCIVAa4oV2K4wWdHG/200w.gif?cid=6c09b952yfq3jjuyw64cgw5g65yyr3kezdugqbayo5flrcz3&ep=v1_stickers_search&rid=200w.gif&ct=s" alt=""></img></div> 
         <div className='w-25'><p> You are in the overweight range. A combination of a balanced diet and exercise can help. </p></div> </div></>}

      {(bmi != '' && bmi >= 30) &&
        <><div className='d-flex flex-column'> <img src="https://media2.giphy.com/media/MsCIVAa4oV2K4wWdHG/200w.gif?cid=6c09b952yfq3jjuyw64cgw5g65yyr3kezdugqbayo5flrcz3&ep=v1_stickers_search&rid=200w.gif&ct=s" alt="" ></img>
          <p> Your BMI indicates obesity. Consider consulting a healthcare professional for personalized advice. </p></div></>}

    </>
  )
}

export default Input