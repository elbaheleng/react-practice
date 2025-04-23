import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Contact() {
    return (
        <>
            <Header />
            <div className='flex flex-col justify-center items-center md:px-40 px-10 mb-3'>
                <h1 className='font-bold text-2xl my-5'>Contact</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quod tempore incidunt inventore voluptatem aspernatur unde, quibusdam, qui dolor a nulla debitis, voluptas quas! Quisquam veritatis ullam officia ratione earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fugiat animi velit, rerum eaque vero beatae. Reiciendis expedita, nam totam, voluptatum pariatur nemo et vel eius consequatur nostrum omnis exercitationem?</p>
            </div>
            <div className='md:grid grid-cols-3'>
                <div className='flex justify-center items-center'>
                    <div className='bg-gray-200 rounded-full'>
                        <FontAwesomeIcon icon={faLocationDot} className='p-3' />
                    </div>
                    <div>
                        <p>123 Main Street, Apt 4B,</p>
                        <p>AnyTown, CA, 91234</p>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
            <Footer />
        </>
    )
}

export default Contact