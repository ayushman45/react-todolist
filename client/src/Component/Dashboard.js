import notdone from '../notdone.png'
import done from '../done.png'
import add from '../add.png'
import dlt from '../delete.png'
import TaskBody from './TaskBody'
import Instruction from './Instruction'
import LogOut from './LogOut'

import { frontend,backend } from '../path'

import React from 'react'
import { useState,useEffect,useRef } from 'react';

import axios from 'axios'

function Dashboard(props) {

    const [task, setTask] = useState('');
    const user = JSON.parse(localStorage.getItem("usertodolist"));
    if(!user){
        window.location.href = frontend+'/error';
    }
    const ele=useRef(null);

    const toggleVisibility = () => {
        ele.current.classList.toggle("show");
        ele.current.children[0].focus();
    }

    const addItem = () => {
        console.log(task)
        axios.post(backend+'/api/addtask', {
            user:user,
            task:task
        }).then((res) => {
            console.log(res.data,"from dashboard.js")
            props.properties.setUsr(res.data);
            localStorage.setItem("usertodolist",JSON.stringify(res.data));
            // props.properties.setIsLoggedIn(true);
            window.location.href = frontend+'/dashboard';
        }).catch((err) => {
            console.log(err);
        })
    }

    const complete = (id) => {
        axios.post(backend+'/api/completetask', {
            user:user,
            id:id
        }).then((res) => {
            console.log(res.data,"from dashboard.js")
            localStorage.setItem("usertodolist",JSON.stringify(res.data));
            window.location.href = frontend+'/dashboard';
        }).catch((err) => {
            console.log(err);
        })
    }

    const pending = (id) => {
        axios.post(backend+'/api/pendingtask', {
            user:user,
            id:id
        }).then((res) => {
            console.log(res.data,"from dashboard.js")
            localStorage.setItem("usertodolist",JSON.stringify(res.data));
            window.location.href = frontend+'/dashboard';
        }).catch((err) => {
            console.log(err);
        })
    }

    const deleteItem = (id) => {
        axios.post(backend+'/api/delete', {
            user:user,
            id:id
        }).then((res) => {
            console.log(res.data,"from dashboard.js")
            props.properties.setUsr(res.data);
            localStorage.setItem("usertodolist",JSON.stringify(res.data));
            // props.properties.setIsLoggedIn(true);
            window.location.href = frontend+'/dashboard';
        }).catch((err) => {
            console.log(err);
        })
    }

    const obj1={
        user:user,
        fun:complete,
        deleteItem:deleteItem,
        dn:notdone,
        dlt:dlt,
        heading:"Pending Tasks",
        condition:false
    }
    const obj2={
        user:user,
        fun:pending,
        deleteItem:deleteItem,
        dn:done,
        dlt:dlt,
        heading:"Completed Tasks",
        condition:true
    }

    return (
        <div>
            <div id='tasks-container'>
            <TaskBody obj={obj1} />
            <TaskBody obj={obj2} />   
            </div>
            
            <div id="footer">
                <div id="add-btn">
                    <div id="add-img-container" onClick={toggleVisibility}>
                        <img src={add} alt='add'/>
                    </div>                   
                </div>
                <div id="add-form" ref={ele} className='show'>
                    <input type="text" placeholder="Add a task" autoComplete='off' onChange={(e)=>setTask(e.target.value)}/>
                    <button type="submit" onClick={addItem} id='add-button'>Add</button>
                </div>
            </div>
            <LogOut />
            <Instruction />             
        </div>
    )
}

export default Dashboard
