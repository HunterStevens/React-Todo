import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todoItems = [
  {
    task: 'Commit Everything',
    id:Date.now(),
    completed:false
  }

]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = { 
      TaskList: todoItems
    };
  }

  addTask = (event, item) =>{
    event.preventDefault();
    const newTask = {
      task:item,
      id:Date.now(),
      completed:false
    };
    this.setState({
      Todo: [...this.state.TaskList, newTask]
    });
  }

  clearCompleted = event =>{
    event.preventDefault();
    this.setState({
      Todo: this.state.Todo.filter(item => !item.completed)
    });
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm taskSubmit={this.addTask}
        clearCompleted={this.clearCompleted}
        />

        <TodoList
        taskItem={this.TaskList} 
        />
      </div>
    );
  }
}

export default App;
