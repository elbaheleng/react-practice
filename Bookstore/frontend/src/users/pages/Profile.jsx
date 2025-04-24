import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import EditProfile from '../components/EditProfile'



function Profile() {
  return (
   <>
   <Header/>
   <div className='bg-gray-900 h-32'>
   </div>
   <div><img className='rounded-full border-10 border-white' style={{height:'200px', width:'200px', marginTop:"-100px", marginLeft:"40px"}} src="https://cdn-icons-png.freepik.com/512/8742/8742495.png" alt="" /></div>

   <div className="flex justify-between px-14">
    <p className='text-3xl'>Elba Helen George <span className='ms-3 text-blue-400 text-xl'><FontAwesomeIcon icon={faCircleCheck} /></span></p>
    <EditProfile/>
   </div>

   <Footer/>
   </>
  )
}

export default Profile