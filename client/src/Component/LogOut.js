import React from 'react'
import { frontend } from '../path';

function LogOut() {
  return (
    <div id="logout">
                <button onClick={()=>{
                    localStorage.removeItem("usertodolist");
                    window.location.href = frontend;
                }}>Logout</button>
    </div>
  )
}

export default LogOut
