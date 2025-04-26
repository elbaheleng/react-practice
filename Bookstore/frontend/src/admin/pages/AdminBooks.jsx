import React from 'react'
import Footer from '../../components/Footer'
import HeaderAdmin from '../components/HeaderAdmin'
import SidebarAdmin from '../components/SidebarAdmin'

function AdminBooks() {
  return (
    <>
    <HeaderAdmin/>
    <div className='md:grid grid-cols-[1fr_4fr]'>
        <div className='bg-blue-100 flex flex-col items-center p-5'>
            <SidebarAdmin/>
        </div>
        <div>Books</div>

    </div>
    <Footer/>
    </>
  )
}

export default AdminBooks