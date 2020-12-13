import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo.js'

class App extends Component {

  state = {
    todos : [
      {id : 1, content : 'buy some Fruits'},
      {id : 2, content : 'paly video games'}
    ]
  }
  deleteTodo = (id) => {
    //console.log(id);
    const todos  = this.state.todos.filter(todo => {
      return todo.id !==id 
    });
    //set the todos to be equal to this new array right here.
    this.setState({
      todos : todos
    });
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    });
  }

   render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} /> 
        <AddTodo addTodo = {this.addTodo}/>
      </div>
    );
  }
}

export default App;
