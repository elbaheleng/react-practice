import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons"

function Home() {
  return (
    <>
      <div className='md:grid grid-cols-4 gap-4 mb-5'>
        <div className='p-4 shadow-2xl mt-4'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Nmm8skoqXP8d6ivj2jzocwEVr1miJf-8xg&s" alt="mascara" />
          <div className='mt-3'>
            <p>Mascara</p>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nesciunt dolor, incidunt a reprehenderit saepe ipsum iste fuga similique unde consequatur ut praesentium, ex nobis cupiditate blanditiis quaerat autem repellendus.</p>
            <p>Price: <span className='text-violet-900'>$100</span></p>
            <div className='flex justify-between mt-3'>
              <button><FontAwesomeIcon className='text-white bg-red-900 p-2 rounded hover:bg-white  hover:border hover:border-red-900 hover:text-red-900' icon={faHeart} /></button>
              <button><FontAwesomeIcon className='text-white bg-green-900 p-2 rounded hover:bg-white hover:border hover:border-green-900 hover:text-green-900' icon={faCartShopping} /></button>
            </div>
          </div>
        </div>
        <div className='p-4 shadow-2xl  mt-4'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Nmm8skoqXP8d6ivj2jzocwEVr1miJf-8xg&s" alt="mascara" />
          <div className='mt-3'>
            <p>Mascara</p>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nesciunt dolor, incidunt a reprehenderit saepe ipsum iste fuga similique unde consequatur ut praesentium, ex nobis cupiditate blanditiis quaerat autem repellendus.</p>
            <p>Price: <span className='text-violet-900'>$100</span></p>
            <div className='flex justify-between mt-3'>
              <button><FontAwesomeIcon className='text-white bg-red-900 p-2 rounded hover:bg-white  hover:border hover:border-red-900 hover:text-red-900' icon={faHeart} /></button>
              <button><FontAwesomeIcon className='text-white bg-green-900 p-2 rounded hover:bg-white hover:border hover:border-green-900 hover:text-green-900' icon={faCartShopping} /></button>
            </div>
          </div>
        </div>
        <div className='p-4 shadow-2xl  mt-4'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Nmm8skoqXP8d6ivj2jzocwEVr1miJf-8xg&s" alt="mascara" />
          <div className='mt-3'>
            <p>Mascara</p>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nesciunt dolor, incidunt a reprehenderit saepe ipsum iste fuga similique unde consequatur ut praesentium, ex nobis cupiditate blanditiis quaerat autem repellendus.</p>
            <p>Price: <span className='text-violet-900'>$100</span></p>
            <div className='flex justify-between mt-3'>
              <button><FontAwesomeIcon className='text-white bg-red-900 p-2 rounded hover:bg-white  hover:border hover:border-red-900 hover:text-red-900' icon={faHeart} /></button>
              <button><FontAwesomeIcon className='text-white bg-green-900 p-2 rounded hover:bg-white hover:border hover:border-green-900 hover:text-green-900' icon={faCartShopping} /></button>
            </div>
          </div>
        </div>
        <div className='p-4 shadow-2xl  mt-4'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Nmm8skoqXP8d6ivj2jzocwEVr1miJf-8xg&s" alt="mascara" />
          <div className='mt-3'>
            <p>Mascara</p>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nesciunt dolor, incidunt a reprehenderit saepe ipsum iste fuga similique unde consequatur ut praesentium, ex nobis cupiditate blanditiis quaerat autem repellendus.</p>
            <p>Price: <span className='text-violet-900'>$100</span></p>
            <div className='flex justify-between mt-3'>
              <button><FontAwesomeIcon className='text-white bg-red-900 p-2 rounded hover:bg-white  hover:border hover:border-red-900 hover:text-red-900' icon={faHeart} /></button>
              <button><FontAwesomeIcon className='text-white bg-green-900 p-2 rounded hover:bg-white hover:border hover:border-green-900 hover:text-green-900' icon={faCartShopping} /></button>
            </div>
          </div>
        </div>
      



      </div>
    </>





  )
}

export default Home