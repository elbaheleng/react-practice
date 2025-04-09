import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'

function Cart() {
  return (


    <>
    <h1 className='text-center text-violet-900 mt-10 text-4xl mb-5'>Cart</h1>
    <div className='md:p-10 md:grid grid-cols-[2fr_1fr] gap-4'>
      <div className='px-10 overflow-x-auto'>
        <table className='w-full border border-gray-500 shadow-2xl'>
          <thead>
            <tr>
              <th className='border border-gray-900 p-4 bg-gray-600 text-white'>#</th>
              <th className='border border-gray-900 p-4 bg-gray-600 text-white'>Title</th>
              <th className='border border-gray-900 p-4 bg-gray-600 text-white'>Image</th>
              <th className='border border-gray-900 p-4 bg-gray-600 text-white'>Price</th>
              <th className='border border-gray-900 p-4 bg-gray-600 text-white'>Action</th>
            </tr>

          </thead>
          <tbody>
            <tr>
              <td className='text-center border border-gray-500 p-2'>1</td>
              <td className='text-center border border-gray-500 p-2'>dummy</td>
              <td className='text-center border border-gray-500 p-2 justify-center'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Nmm8skoqXP8d6ivj2jzocwEVr1miJf-8xg&s" alt="no image" /></td>
              <td className='text-center border border-gray-500 p-2'>dummy</td>
              <td className='text-center border border-gray-500 p-2'><button className='bg-red-900 text-white rounded px-3 py-2 hover:border hover:border-red-900 hover:text-red-900 hover:bg-white'><FontAwesomeIcon icon={faTrash} /></button></td>
            </tr>

          </tbody>
        </table>
      </div>

      <div className='md:px-10 px-5 mb-5'>
        <div className='shadow-xl mt-5'> 
          <div className='px-5 py-5'>
            <h1 className='text-center text-3xl mb-3'>Cart Summary</h1>
            <h4 className='mb-1'>Total number of products: 2 </h4>
            <h4  className='mb-1'>Grand Total: $ 546532 </h4>
            <button className='w-full px-3 py-2 bg-green-600 text-white hover:border hover:border-green-600 hover:bg-white hover:text-green-600 mt-2'>CheckOut</button>
          </div>
        </div>
      </div>
    </div>



    {/* no item in cart */}
    <div className='md:grid grid-cols-3 md:p-10 p-5 '>
        <div></div>
        <div className='flex justify-center items-center flex-col'>
          <img src="https://grocery.capitaltechnology.org/public/images/empty-cart.png" alt="" style={{ width: '100%' }} />
          <Link to={'/'}><button className=' px-3 py-2 mt-4 rounded bg-green-800 text-white hover:border hover:text-green-800 hover:bg-white'>Back Home</button></Link>
        </div>
        <div></div>
      </div>



    </>
   
  )
}

export default Cart