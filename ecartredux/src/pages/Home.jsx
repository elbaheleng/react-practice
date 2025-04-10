import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons"
import useFetch from '../hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addWishList } from '../redux/slice/wishlistSlice'

function Home() {
  const data = useFetch('https://dummyjson.com/products')
  // console.log(data);
  const dispatch = useDispatch()
  

  return (
    <>
      <div className='md:grid grid-cols-4 gap-4 mb-5'>

        {data.length > 0 ?
          data?.map((item, index) => (
            <div className='p-4 shadow-2xl mt-4'>
              <img src={item?.thumbnail} alt="no image" />
              <div className='mt-3'>
                <p className='text-center text-violet-800'>{item?.title}</p>
                <p className='text-justify'>{item?.description}</p>
                <p className='text-center mt-4'>Price: <span className='text-violet-900'>${item?.price}</span></p>
                <div className='flex justify-between mt-3'>
                  <button><FontAwesomeIcon onClick={()=>dispatch(addWishList(item))} className='text-white bg-red-900 p-2 rounded hover:bg-white  hover:border hover:border-red-900 hover:text-red-900' icon={faHeart} /></button>
                  <button><FontAwesomeIcon className='text-white bg-green-900 p-2 rounded hover:bg-white hover:border hover:border-green-900 hover:text-green-900' icon={faCartShopping} /></button>
                </div>
              </div>
            </div>)) :
          <p>Loading...</p>
        }

      </div>
    </>





  )
}

export default Home