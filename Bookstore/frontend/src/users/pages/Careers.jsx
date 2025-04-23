import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLocationDot, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'

function Careers() {
    return (
        <>
            <Header />
            <div className='flex flex-col justify-center items-center md:px-40 px-10'>
                <h1 className='font-bold text-2xl my-5'>Careers</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quod tempore incidunt inventore voluptatem aspernatur unde, quibusdam, qui dolor a nulla debitis, voluptas quas! Quisquam veritatis ullam officia ratione earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fugiat animi velit, rerum eaque vero beatae. Reiciendis expedita, nam totam, voluptatum pariatur nemo et vel eius consequatur nostrum omnis exercitationem?</p>
            </div>

            <div className='md:px-20 p-5 '>
                <h1 className='text-2xl'>Current Openings</h1>
                <div className='flex justify-center items-center m-5'>
                    <input placeholder='Job Title' className='border border-gray-400 px-5 py-2 w-96 placeholder-gray-400' type="text" />
                    <button className='bg-green-800 text-white px-5 py-2 border border-blue-800 hover:bg-white hover:text-blue-800'>Search</button>
                </div>
            </div>

            <div className='md:px-20 py-5 p-5'>
                <div className='shadow border border-gray-500'>
                    <div className="grid grid-cols-[8fr_1fr] p-5">
                        <div>
                            <h1 className='mb-3'>Job Title</h1>
                            <hr />
                            <p className='mt-3'><FontAwesomeIcon icon={faLocationDot} className='text-blue-600 me-3' />Kochi</p>
                            <p className='mt-3'> Job Type:</p>
                            <p className='mt-3'> Salary:</p>
                            <p className='mt-3'> Qualification:</p>
                            <p className='mt-3'> Experience:</p>
                            <p className='text-justify'>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur inventore quas in ad quidem aperiam nesciunt laborum incidunt itaque aliquid maxime blanditiis sequi, sed suscipit dolores illo reiciendis doloribus quod.Aliquam rem in, omnis voluptas aut nihil placeat autem dolores dignissimos reprehenderit atque velit, similique veritatis fugit quod? Rerum eligendi beatae dicta eos, molestiae omnis accusantium repellendus reiciendis iure! Voluptatem? At, nulla temporibus! Cum incidunt delectus velit praesentium pariatur libero quibusdam numquam. Eligendi, natus blanditiis. Ipsum, cupiditate at sit doloremque suscipit sint, ad necessitatibus incidunt qui enim laudantium, quibusdam esse.</p>
                        </div>
                        <div>
                            <button className='bg-blue-800 text-white px-5 py-2 border border-blue-800 hover:bg-white hover:text-blue-800 p-3 rounded ms-3'> Apply <FontAwesomeIcon icon={faSquareArrowUpRight} /></button>
                        </div>

                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Careers