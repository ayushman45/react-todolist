import React from 'react'
import { useRef } from 'react';



function Top(props) {
    
    return (
        <div className="top">
                <div className='top-itm' id='current' onClick={props.toggleObj.setT}>
                    <div>Login</div>
                </div>
                <div className='top-itm' id="not-current" onClick={props.toggleObj.setF}>
                    <div>Register</div>
                </div>
        </div>
    )
}

export default Top
