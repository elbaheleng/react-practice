import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeCartItem } from '../redux/slice/cartSlice'

function Cart() {

  const cartArray = useSelector((state) => state.cartReducer)
  //console.log(cartArray);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleCheckout = () => {
    dispatch(emptyCart())
    navigate('/')
    alert('Order Placed')

  }

  return (
    <>
      <h1 className='text-center text-violet-900  mt-32 text-4xl mb-5'>Cart</h1>
      {cartArray.length > 0 ?
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
                {cartArray?.map((item, index) => (
                  <tr>
                    <td className='text-center border border-gray-500 p-2'>{index + 1}</td>
                    <td className='text-center border border-gray-500 p-2'>{item?.title}</td>
                    <td className='text-center border border-gray-500 p-2 justify-center'><img src={item?.thumbnail} alt="no image" /></td>
                    <td className='text-center border border-gray-500 p-2'>${item?.price}</td>
                    <td className='text-center border border-gray-500 p-2'><button onClick={() => dispatch(removeCartItem(item?.id))} className='bg-red-900 text-white rounded px-3 py-2 hover:border hover:border-red-900 hover:text-red-900 hover:bg-white'><FontAwesomeIcon icon={faTrash} /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='text-center mt-5'>
              <button onClick={() => dispatch(emptyCart())} className='px-3 py-2 bg-red-700 text-white hover:border hover:text-red-600 hover:bg-white hover:border-red-600'>Empty Cart</button>
            </div>
          </div>

          <div className='md:px-10 px-5 mb-5'>
            <div className='shadow-xl mt-5'>
              <div className='px-5 py-5'>
                <h1 className='text-center text-3xl mb-3'>Cart Summary</h1>
                <h4 className='mb-1'>Total number of products: {cartArray?.length} </h4>
                <h4 className='mb-1'>Grand Total: ${(cartArray?.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)).toFixed(2)} </h4>
                <button onClick={handleCheckout} className='w-full px-3 py-2 bg-green-600 text-white hover:border hover:border-green-600 hover:bg-white hover:text-green-600 mt-2'>CheckOut</button>
              </div>
            </div>
          </div>
        </div>
        :

        <div className='md:grid grid-cols-3 md:p-10 p-5 '>
          <div></div>
          <div className='flex justify-center items-center flex-col'>
            <img src="https://grocery.capitaltechnology.org/public/images/empty-cart.png" alt="" style={{ width: '100%' }} />
            <Link to={'/'}><button className=' px-3 py-2 mt-4 rounded bg-green-800 text-white hover:border hover:text-green-800 hover:bg-white'>Back Home</button></Link>
          </div>
          <div></div>
        </div>}



    </>

  )
}

export default Cart