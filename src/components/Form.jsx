import {user,users,createAndUpdate,deleteUser } from '../store/user'
import { useStore } from '@nanostores/react';
import { useState } from 'react';
import {nanoid} from "nanoid";

const UserForm = (props) => {
    let array = { 
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
    };
    for(let key in array){
        console.log(array[key])
    }
    const $user = useStore(user);
    const $users = useStore(users);
    const submitFnc = (e) =>{
        e.preventDefault()
        createAndUpdate($user);
    }
    const setUser = (e) =>{
        user.set({
            ...$user,
            [e.target.name] : e.target.value,

        })
    }
 return (
    <section className='c-userform'>
        <h2 className='c-userform_title'>User Form</h2>
        <form className='c-userform_body' onSubmit={submitFnc}>
            <input type="text" name='_name' placeholder='Ngo Dac Hoa' onChange={setUser} value={$user._name ? $user._name : "" }/> 
            <input type="text" name='_email' placeholder='Email' onChange={setUser} value={$user._email ? $user._email : "" }/>
            <input type="password" name='_password' placeholder='*********' onChange={setUser} value={$user._password ? $user._password : ""}/>
            <br />
            <button type='submit'>Submit</button>
        </form>
        
</section>
 )
}

export default UserForm;