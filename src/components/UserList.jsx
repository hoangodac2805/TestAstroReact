import React from 'react';
import {user,users,deleteUser } from '../store/user'
import { useStore } from '@nanostores/react';

const  UserList = (props) => {
    const $user = useStore(user);
    const $users = useStore(users);
    
 return (
   <section>
        <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>password</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    $users.map((item,idx)=>{
                        return (
                            <tr key={idx}>
                                <td>{item._id}</td>
                                <td>{item._name}</td>
                                <td>{item._email}</td>
                                <td>{item._password}</td>
                                <td>
                                  <button onClick={()=>{
                                        deleteUser(item._id)
                                  }}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
   </section>
 )
}

export default UserList;