import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/slice/wishlistSlice'
import { addToCart } from '../redux/slice/cartSlice'

function Wishlist() {

  const wishlistArray = useSelector((state) => state.wishlistReducer)
  const dispatch = useDispatch()
  const handleCart = (item) => {
    dispatch(addToCart(item))
    dispatch(removeWishlistItem(item.id))
  }
  
  return (
    <>

      <h1 className='text-center text-violet-900 mt-32 text-4xl'>Wishlist</h1>


      {wishlistArray.length > 0 ?
        <div className='md:grid grid-cols-4 gap-4 mb-5'>
          {wishlistArray?.map((item, index) => (
            <div className='p-4 shadow-2xl mt-4' key={index}>
              <img src={item?.thumbnail} alt="no image" />
              <div className='mt-3'>
                <p className='text-center text-violet-800'>{item?.title}</p>
                <p className='text-justify'>{item?.description}</p>
                <p className='text-center mt-4'>Price: <span className='text-violet-900'>${item?.price}</span></p>
                <div className='flex justify-between mt-3'>
                  <button><FontAwesomeIcon onClick={() => dispatch(removeWishlistItem(item.id))} className='text-white bg-red-900 p-2 rounded hover:bg-white  hover:border hover:border-red-900 hover:text-red-900' icon={faTrash} /></button>
                  <button><FontAwesomeIcon onClick={() => handleCart(item)} className='text-white bg-green-900 p-2 rounded hover:bg-white hover:border hover:border-green-900 hover:text-green-900' icon={faCartShopping} /></button>
                </div>
              </div>
            </div>
          ))}</div> : <div className='md:grid grid-cols-3 md:p-10 p-5 '>
          <div></div>
          <div className='flex justify-center items-center flex-col'>
            <img src="https://i.pinimg.com/564x/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.jpg" alt="" style={{ width: '100%' }} />
            <Link to={'/'}><button className=' px-3 py-2 mt-4 rounded bg-green-800 text-white hover:border hover:text-green-800 hover:bg-white'>Back Home</button></Link>
          </div>
          <div></div>
        </div>}








    </>

  )
}

export default Wishlist