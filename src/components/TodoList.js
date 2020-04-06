// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';
import './Todo.css'

const TodoList = props =>{
    return(
        <div>
            {props.taskItem.map(item=>{
                return(
                <Todo key={item.id}
                 item={item}
                 checkTask={props.checkTask} />
                )
            })}
        </div>
    );
}

export default TodoList;