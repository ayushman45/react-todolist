import React from 'react'
import notdone from '../notdone.png'
import done from '../done.png'
import add from '../add.png'
import dlt from '../delete.png'

function Instruction() {

const bullet="-->"
  return (
    <div id='instruction'>
        <div id='inst-body'>
        <div id='inst-heading'>
            Instructions
        </div>
        <div className='inst-content'>
            {bullet} Hit <img src={notdone}></img> to mark item complete
        </div>
        <div className='inst-content'>
            {bullet} Hit <img src={done}></img> to mark item pending
        </div>
        <div className='inst-content'>
            {bullet} Hit <img src={dlt}></img> to delete item complete
        </div>
        <div className='inst-content'>
            {bullet} Hit <img src={add}></img> to add new item
        </div>
        </div>
        
    </div>
  )
}

export default Instruction
