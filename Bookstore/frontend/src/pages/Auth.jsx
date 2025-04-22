import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Auth() {
  return (
    <>
      <div id='loginpage'>
        <div className='grid grid-cols-3'>
          <div></div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl mb-5 font-bold text-white'>BOOKSTORE</h1>

            <form action="" className='w-full p-10 bg-gray-900 flex flex-col justify-center items-center'>
              <div style={{ width: '70px', height: '70px', borderRadius: "50%" }} className='border border-white flex justify-center items-center'>
                <FontAwesomeIcon className='text-white fa-2x' icon={faUser} />
              </div>
              <h1 className='text-white mt-5 text-3xl'>Login</h1>
              <div className='mb-5 w-full mt-8'>
                <input type="text" placeholder='Email Id' className='p-2 rounded placeholder-gray-600 bg-white w-full' />
              </div>
              <div className='mb-5 w-full'>
                <input type="text" placeholder='Password' className='p-2 rounded placeholder-gray-600 bg-white w-full' />
              </div>
              <div className='mb-5 w-full flex justify-between'>
                <p className='text-amber-300' style={{ fontSize: '10px' }}>*Never share the password with others</p>
                <p className='text-white underline' style={{ fontSize: '10px' }}>Forgot password</p>
              </div>
              <div className='mb-3 w-full'>
                <button className='bg-green-800 text-white w-full p-3 rounded'>Login</button>
              </div>
              <p className='text-white'>-----------------------or-----------------------</p>
              <div className='my-3 w-full'>
                <button className='bg-white w-full p-3 rounded'>Sign In with Google</button>
              </div>
              <p className='text-white'>Are you a new user? Register</p>
            </form>


          </div>
          <div></div>
        </div>

      </div>
    </>
  )
}

export default Auth