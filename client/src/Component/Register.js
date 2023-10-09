import React from 'react'
import { useState } from 'react';
import axios from  'axios'

import { frontend,backend } from '../path';

function Register() {
    const init={
        name: '',
        username: '',
        password: '',
        confirm: '',
    }
    const [user, setUser] = useState(init);
    const reset = () => {
        setUser(init);
    }

    const handleRegister = () =>{
        if(user.password !== user.confirm){
            alert("Passwords do not match");
        }
        else{
            axios.post(backend+'/api/register', {
                user:user
            }).then((res) => {
                console.log(res);
                alert("User registered !! Proceed to login")
                window.location.href=frontend;
            }).catch((err) => {
                console.log(err);
            })
        }
        reset();
        return;
    }

  return (

    <div className="bottom">
        <input type="text" placeholder="Name" onChange={(e) => setUser({...user,name:e.target.value})} />
        <input type="text" placeholder="Username" onChange={(e) => setUser({...user,username:e.target.value})} />
        <input type="password" placeholder="Password" onChange={(e) => setUser({...user,password:e.target.value})} />
        <input type="password" placeholder="Confirm Password" onChange={(e) => setUser({...user,confirm:e.target.value})} />
        <button type="submit" onClick={handleRegister}>Register</button>
    </div>
  )
}

export default Register