import React, { useState } from 'react'

export default function Register() {

    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        passwd: ""
    })

    const [newArray, setNewArray] = useState([
        { username: 'Max', age: 27 },
        { username: 'Neel', age: 37 },
        { username: 'Mikki', age: 27 },
        { username: 'Manu', age: 37 }
    ])

    const getName = (e) => {
        setUserDetails({ ...userDetails, name: e.target.value })
    }
    const getEmail = (e) => {
        setUserDetails({ ...userDetails, email: e.target.value })
    }
    const getPassword = (e) => {
        setUserDetails({ ...userDetails, passwd: e.target.value })
    }

    return (
        <>
            <form className="mt-5 w-75 border shadow p-5 ms-5">
                <h1 className='text-center mb-4'>Register Form</h1>
                <div className="mb-5">
                    <input type="text" placeholder='Full Name' className='form-control' onChange={(e) => getName(e)} />
                </div>
                <div className="mb-5">
                    <input type="text" placeholder='Email' className='form-control' onChange={(e) => getEmail(e)} />
                </div>
                <div className="mb-5">
                    <input type="text" placeholder='Password' className='form-control' onChange={(e) => getPassword(e)} />
                </div>
                <div className="mb-5">
                    <button type='button' className='btn btn-primary' onClick={() => { console.log(userDetails) }}>Submit</button>
                </div>

            </form>
            <table>
                <thead>
                    <tr>
                        <th>Sl.No.</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        newArray.map((item, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.username}</td>
                                <td>{item.age}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </>

    )
}
