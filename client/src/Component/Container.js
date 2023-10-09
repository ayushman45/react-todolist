import React, { useEffect } from 'react'
import { useState,useRef } from 'react';

import { frontend,backend } from '../path';


import Top from './Top'
import Login from './Login'
import Register from './Register'


function Container(props) {
    const [isLogin, setIsLogin] = useState(true);

    useEffect(()=>{
        var user = JSON.parse(localStorage.getItem("usertodolist"));
        if(user){
            window.location.href = frontend+'/dashboard';
        }
    },[])

    const swap = () => {
        var ele1=document.getElementById("current");
        var ele2=document.getElementById("not-current");
        ele1.removeAttribute("id");
        ele1.setAttribute("id","not-current");
        ele2.removeAttribute("id");
        ele2.setAttribute("id","current");
    }

    const setT = () => {
        if(isLogin) return;
        setIsLogin(true);
        // props.properties.setIsLoggedIn(true);
        swap();
    }
    const setF = () => {
        if(!isLogin) return;
        setIsLogin(false);
        swap();
    }

    const toggleObj = {
        setT: setT,
        setF: setF,
    }
  return (
    <div className='container'>
        <Top toggleObj={toggleObj}/>
        <div className='btm-container'>
            {
                isLogin ? <Login properties={props.properties}/> : <Register properties={props.properties}/>
            }
        </div>
        
    </div>
  )
}

export default Container
