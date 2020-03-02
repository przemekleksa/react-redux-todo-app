import React, {Component} from 'react';
import Todos from './components/todos/todos';


class App extends Component {
  state = {
    todos: [
      {id: 1, content: "buy bread"},
      {id: 2, content: "buy chicken"},
      {id: 3, content: "buy coke"},
      {id: 4, content: "play witcher"},
    ]
  }

  deleteTodo = (id) =>{
    let todos = this.state.todos.filter(todo =>{
      return todo.id !== id
    })
    this.setState({
      todos: todos
    })
  }
  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos = {this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
