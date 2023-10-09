import React from 'react'

function TaskBody(props) {

    const user=props.obj.user;
    const fun=props.obj.fun;
    const deleteItem=props.obj.deleteItem;
    const dn=props.obj.dn;
    const dlt=props.obj.dlt;
    const heading=props.obj.heading
    const condition=props.obj.condition

  return (
    <div className="tasks">
                <div className="pending-head">{heading}</div>
                <div className='task-body'>
                {
                        user.tasks.map((item) => {
                            if(item.completed === condition){
                                return(
                                    <div className="item" key={item.id}>
                                        <div className="item-title">{item.task}</div>
                                        <div className="item-icon">
                                            <div className="img-container">
                                                <img src={dn} alt={"dn img"} onClick={()=>fun(item.id)} key={item.id}/>
                                            </div>                                                                               
                                        </div>
                                        <div className="item-icon">
                                            <div className="img-container">
                                                <img src={dlt} alt='delete' onClick={()=>deleteItem(item.id)}/>
                                            </div>                                                                               
                                        </div>
                                        
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                    
            </div>
  )
}

export default TaskBody
