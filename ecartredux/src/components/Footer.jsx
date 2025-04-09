import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'
import { faSquareFacebook, faSquareInstagram, faYoutube, faSquareXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <>
      <div className='grid md:grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)] gap-4 bg-violet-800 text-white py-10'>
        <div className=" ps-3">
          <div>
            <h2 className='text-xl'><FontAwesomeIcon className='mx-2' icon={faCartShopping} />E-CART</h2>
          </div>
          <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident praesentium cupiditate neque, laborum corrupti possimus soluta voluptate labore cumque dolor totam! Perspiciatis iusto cum dolor qui. Tempora illo similique molestiae.</p>
        </div>
        <div className='md:flex justify-center'>
          <div className="ps-3">
            <h2 className='text-xl'>Links</h2>
            <Link to={'/'}><p className='mt-4'>Home</p></Link>
            <Link to={'/wishlist'}><p>Wishlist</p></Link>
            <Link to={'/cart'}><p>Cart</p></Link>
          </div>
        </div>
        <div className='md:flex justify-center'>
          <div className="ps-3">
            <h2 className='text-xl'>Guide</h2>
            <Link to={'/'}><p className='mt-4'>Tailwind</p></Link>
            <Link to={'/wishlist'}><p>React</p></Link>
            <Link to={'/cart'}><p>Vite</p></Link>
          </div>
        </div>
        <div className=" ps-3">
          <h2 className='text-xl'>Contact Us</h2>
          <div className="flex mt-2">
            <input type="text" placeholder='Email Id' className='text-gray-700 bg-white rounded me-3 p-2 w-full placeholder-neutral-600' />
            <button className='bg-amber-700 text-white p-2 rounded me-1'>Subscribe</button>
          </div>
          <div className=' mt-2'>
            <FontAwesomeIcon className='me-2 fa-2x'  icon={faSquareFacebook} />
            <FontAwesomeIcon className='me-2 fa-2x' icon={faSquareInstagram} />
            <FontAwesomeIcon className='me-2 fa-2x' icon={faYoutube} />
            <FontAwesomeIcon className='me-2 fa-2x' icon={faSquareXTwitter} />
            <FontAwesomeIcon className='me-2 fa-2x' icon={faLinkedin} />
          </div>
        </div>

      </div>
    </>
  )
}

export default Footer