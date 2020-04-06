import React from 'react';

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state ={
            task: ''
        };
    }

    change = event =>{
        this.setState({ [event.target.name]:event.target.value })
    }

    taskSubmit = event =>{
        event.preventDefault();
        this.setState({ task:'' });
        this.props.addTask(event, this.state.task);
    }

    clearCompleted = event =>{
        event.preventDefault();
            this.props.clearCompleted();
    }

    render(){
        console.log('rendering Form');
        return(
            <form>
                <input type="text"
                value={this.state.task}
                name="task"
                onChange={this.change}
                />
                <button onClick={this.taskSubmit}>Add Task</button>
                <button onClick={this.clearCompleted}>Clear Completed</button>
            </form>
        )
    }
}
export default TodoForm;