import React, {useState} from 'react'

function Example(props) {
const [empName, changeName] = useState("Neel")
const [color, changeColor] = useState({
  color1 : 'Red',
  color2 : 'Yellow',
  color3 : 'Green',
})

const change = () => {
  changeColor({...color, color2 : 'Blue'})
}

  console.log(props);

  return (
    <>
    <h3>From Example component</h3>
    <div>{props.n1}</div>
    <div>{props.n2}</div>
    <div>{props.n3}</div>
    <h3>Conditional Rendering</h3>
    <p>Terneray</p>
    {props.n1 == 'Elba'? <h2>First name is Elba</h2> : <h2>First name is not Elba</h2> }
    <p>Truthy</p>
    {props.n1 == 'Elba'&& <h2>First name is Elba</h2> }


    <h3>Using useState in functional component</h3>
    <p>Employee Name is : {empName}</p>
    <button className='btn btn-primary' onClick={() => {changeName('Maxwell')}}>Click to change name</button>

    <ul>
      <li>{color.color1}</li>
      <li>{color.color2}</li>
      <li>{color.color3}</li>
    </ul>
    <button className='btn btn-primary' onClick={change}>Click to change color</button>
    </>
    
  )
}

export default Example
