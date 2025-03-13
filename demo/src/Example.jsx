import React from 'react'

function Example(props) {
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

    </>
    
  )
}

export default Example
