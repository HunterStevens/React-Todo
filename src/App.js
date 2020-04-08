import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
//import './Todo.css';

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
      todoItems
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
      todoItems: [...this.state.todoItems, newTask]
    });
    console.log(newTask);
  }

  checkTask = itemId =>{
    console.log(itemId);

    this.setState({
      todoItems:this.state.todoItems.map(item =>{
        if(itemId === item.id){
          return{
            ...item,
            completed:!item.completed
          };
          console.log(item, item.completed)
        }
        return item;
      })
    })
  }

  clearCompleted = event =>{
    console.log("Clear button clicked");
    this.setState({
      todoItems: this.state.todoItems.filter(item => !item.completed)
    });
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        

        <TodoList
        taskItem={this.state.todoItems}
        checkTask={this.checkTask} 
        />
        <TodoForm addTask={this.addTask}
        clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
