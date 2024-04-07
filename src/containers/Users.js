import React,  {useState} from "react"

function Users(){
    const[users, setUsers] = useState([
        {name: 'Janhvi', age: 20},
        {name: 'Anjali', age: 20}
    ])
    return<div>
        <h2>Users</h2>
        <ul>
            {
                users.map((user, index) => {
                    return <li>{user.name}, {user.age}</li>
                })
            }
        </ul>
    </div>
}

export default Users;