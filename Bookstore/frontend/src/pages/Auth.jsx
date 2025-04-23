import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Auth({ register }) {
  return (
    <>
      <div id='loginpage'>
        <div className='md:grid grid-cols-3'>
          <div></div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl mb-5 font-bold text-white md:text-black mt-3'>BOOKSTORE</h1>

            <form action="" className='w-full mx-5 p-10 bg-gray-900 flex flex-col justify-center items-center'>
              <div style={{ width: '70px', height: '70px', borderRadius: "50%" }} className='border border-white flex justify-center items-center'>
                <FontAwesomeIcon className='text-white fa-2x' icon={faUser} />
              </div>
              {!register ? <h1 className='text-white mt-5 text-3xl mb-8'>Login</h1>
                : <h1 className='text-white mt-5 text-3xl mb-8'>Register</h1>}
              {register && <div className='mb-5 w-full'>
                <input type="text" placeholder='Username' className='p-2 rounded placeholder-gray-600 bg-white w-full' />
              </div>}
              <div className='mb-5 w-full'>
                <input type="text" placeholder='Email Id' className='p-2 rounded placeholder-gray-600 bg-white w-full' />
              </div>
              <div className='mb-5 w-full'>
                <input type="text" placeholder='Password' className='p-2 rounded placeholder-gray-600 bg-white w-full' />
              </div>
              <div className='mb-5 w-full flex justify-between'>
                <p className='text-amber-300' style={{ fontSize: '10px' }}>*Never share the password with others</p>
                {!register && <p className='text-white underline' style={{ fontSize: '10px' }}>Forgot password</p>}
              </div>
              {register ? <div className='mb-3 w-full'>
                <button className='bg-green-800 text-white w-full p-3 rounded'>Register</button>
              </div> :
                <div className='mb-3 w-full'>
                  <button className='bg-green-800 text-white w-full p-3 rounded'>Login</button>
                </div>}
                {!register && <p className='text-white'>-----------------------or-----------------------</p>}
                {!register && <div className='my-3 w-full'>
                <button className='bg-white w-full p-3 rounded'>Sign In with Google</button>
              </div>}
              { register ? <p className='text-white'>Are you already a user? <Link to={'/login'} className='text-blue-400 underline ms-2'>Login</Link></p> :
              <p className='text-white'>Are you a new user? <Link to={'/register'} className='text-blue-400 underline ms-2'>Register</Link></p>}
            </form>


          </div>
          <div></div>
        </div>

      </div>
    </>
  )
}

export default Auth