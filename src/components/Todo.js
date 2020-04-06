import React from 'react';



const Todo = props =>{
    return(
        <div className={`task${props.item.completed ? 'Completed' : ''}`}
        onClick={()=> {console.log("cleared Task");
            props.checkTask(props.item.id)}}
        >
            <p>{props.item.task}</p>
        </div>
    )
}
export default Todo;