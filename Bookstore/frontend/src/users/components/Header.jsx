import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faUser, faBars  } from '@fortawesome/free-solid-svg-icons'

function Header() {
    const [status, setStatus] =useState(false)
    return (
        <>
            <div className='grid grid-cols-3 p-3'>
                <div className='flex items-center'>
                    <img src="https://cdn-icons-png.flaticon.com/512/8983/8983117.png" alt="logo" width={'50px'} />
                    <h1 className='text-2xl md:hidden font-bold ms-2'>BOOKSTORE</h1>
                </div>
                <div className='md:flex justify-center items-center hidden'>
                    <h1 className='text-2xl font-bold'>BOOKSTORE</h1>
                </div>
                <div className='md:flex justify-end items-center hidden'>
                    <FontAwesomeIcon className='me-2 text-2xl' icon={faInstagram} />
                    <FontAwesomeIcon className='me-2 text-2xl' icon={faTwitter} />
                    <FontAwesomeIcon className='me-4 text-2xl' icon={faFacebook} />
                    <button className='border border-black rounded px-3 py-2'><FontAwesomeIcon className='me-2' icon={faUser} />
                    Login</button>
                </div>
            </div>
            <nav className='p-3 w-full bg-gray-900 text-white md:flex justify-center'>
                <div className='flex justify-between px-3 md:hidden'>
                <span onClick={()=>setStatus(!status)} className='text-2xl mt-1'><FontAwesomeIcon icon={faBars} /></span>
                <button className='border border-white rounded px-3 py-2'><FontAwesomeIcon className='me-2' icon={faUser} />
                Login</button>
                </div>
                <ul className={status ? 'md:flex' : 'md:flex justify-center hidden'}>
                    <li className='mx-4 mt-2'>Home</li>
                    <li className='mx-4 mt-2'>Books</li>
                    <li className='mx-4 mt-2'>Careers</li>
                    <li className='mx-4 mt-2'>Contact</li>
                </ul>

            </nav>
        </>
    )
}

export default Header