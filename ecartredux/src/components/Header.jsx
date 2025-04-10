import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faHeart, faBars } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const [status, setStatus] = useState(false)
  const wishlistArray = useSelector((state) => state.wishlistReducer) 
  const handleStatus = () => {
    setStatus(!status)
  }
  return (
    <>
      <nav className='bg-violet-800 py-6 px-5 md:flex'>
        <div className="flex">
          <Link to={'/'}> <h1 className='text-white text-3xl'> <FontAwesomeIcon className='me-3' icon={faCartShopping} />Ecart </h1> </Link>
          <button onClick={handleStatus} className='text-white border border-white rounded p-3 ms-auto md:hidden'><FontAwesomeIcon icon={faBars} /></button>
        </div>

        {status &&
          <ul className='flex md:hidden ms-auto mt-5'>
            <li>
              <Link to={'/wishlist'}><button className='border border-white rounded px-6 py-3 text-white hover:bg-white hover:text-violet-900'><FontAwesomeIcon className='me-2' icon={faHeart} style={{ color: "#ff3d3d", }} />Wish List<span className='rounded bg-gray-100 text-gray-600 px-2  ms-2'>{wishlistArray?.length}</span></button></Link>

            </li>
            <li className='ms-3'>
              <Link to={'/cart'}><button className='border border-white rounded px-6 py-3 text-white hover:bg-white hover:text-violet-900'><FontAwesomeIcon className='me-1' icon={faCartShopping} style={{ color: "#108807", }} />Cart<span className='rounded bg-gray-100 text-gray-600 px-2 ms-2'>1</span></button></Link>

            </li>
          </ul>
        }

        <ul className='md:flex ms-auto hidden'>
        <li>
              <Link to={'/wishlist'}><button className='border border-white rounded px-6 py-3 text-white hover:bg-white hover:text-violet-900'><FontAwesomeIcon className='me-2' icon={faHeart} style={{ color: "#ff3d3d", }} />Wish List<span className='rounded bg-gray-100 text-gray-600 px-2 py-2 ms-2'>{wishlistArray?.length}</span></button></Link>

            </li>
            <li className='ms-3'>
              <Link to={'/cart'}><button className='border border-white rounded px-6 py-3 text-white hover:bg-white hover:text-violet-900'><FontAwesomeIcon className='me-1' icon={faCartShopping} style={{ color: "#108807", }} />Cart<span className='rounded bg-gray-100 text-gray-600 px-2 py-2 ms-2'>1</span></button></Link>

            </li>
        </ul>
      </nav>


    </>

  )
}

export default Header