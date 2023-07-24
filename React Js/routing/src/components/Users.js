import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Users.css'
import Userlist from './Userlist'

function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h3> users information</h3>
            <table>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Company Name</th>
                        <th>City</th>
                        <th>More Info</th>
                    </tr>
                </thead>
                <tbody>
                     {/* {users.map((user, index) => 
                    <tr key={index} >
                    <td>{user.id}</td>
                    <td>Shanku</td>
                    <td>ssk1432@gmail.com</td>
                    <td>{user.website}</td>
                    <td>Shanku Pvt.Ltd</td>
                    <td>{user.address.city}</td>
                 
                    </tr>  
                    )}
                     */}

                {users.map((user,index) => <Userlist key={index} user={user} />)} 
                </tbody>
            </table>
        </div>
    )
}

export default Users
