import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'
import { backend,frontend } from '../path';

function Login(props) {
    const [user, setUser] = useState({
        username: '',
        password: '',
    });
    const handleLogin = () =>{
        axios.post(backend+'/api/login', {
            user:user
        }).then((res) => {
            console.log(res.data,"from login.js")
            props.properties.setUsr(res.data);
            localStorage.setItem("usertodolist",JSON.stringify(res.data));
            // props.properties.setIsLoggedIn(true);
            window.location.href = frontend+'/dashboard';
        }).catch((err) => {
            console.log(err);
        })
    }

  return (
    <div className="bottom">
        <input type="text" placeholder="Username" value={user.username} onChange={(e) => setUser({...user,username:e.target.value})} autoComplete='off'/>
        <input type="password" placeholder="Password" value={user.password} onChange={(e) =>  setUser({...user,password:e.target.value})} autoComplete='off'/>
        <button type="submit" onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
