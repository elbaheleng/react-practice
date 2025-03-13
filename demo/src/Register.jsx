import React from 'react'

export default function Register() {
    const getName = (e) => {
        console.log(e.target.value);
        
    }
    const getEmail = (e) => {
        console.log(e.target.value);
    }
    const getPassword = (e) => {
        console.log(e.target.value);
    }
  return (
    <form  className="mt-5 w-50 border shadow p-5 ms-5">
        <h1 className='text-center mb-4'>Register Form</h1>
        <div className="mb-5">
            <input type="text" placeholder='Full Name'className='form-control' onChange={(event) => getName(event)} />
        </div>
        <div className="mb-5">
            <input type="text" placeholder='Email'className='form-control' onChange={(e) => getEmail(e)} />
        </div>
        <div className="mb-5">
            <input type="text" placeholder='Password'className='form-control' onChange={(e) => getPassword(e)} />
        </div>
        <div className="mb-5">
            <button className='btn btn-primary'>Submit</button>
        </div>

    </form>

  )
}
