// https://randomuser.me/api/?results=10

import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

//component
import SingleUser from './SingleUser'

const UserList = () => {

    const [users, setuser] = useState([])

    const fetchUser = async () => {
        const response = await axios.get("https://randomuser.me/api/?results=10")
        setuser(response.data.results)
    }
    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <div className='user-list'>
            <ul>
                {users.map((user, idx) =>(
                    <li>
                        {' '}
                        <SingleUser user={user} key={idx} />
                        {' '}
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default UserList
