import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Headers from "./components/layout/headers";
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

//Was struggling to figure out why my uuid wasn't working...I needed to claim it as { v4 as uuidv4 } instead of just import uuid ...


class App extends Component {
    state = {
        todos: []
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(res => this.setState({ todos: res.data }))
    }

    // Toggle Complete
    markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo;
            }) });
    }

  //   Delete Todo
    delTodo = (id) => {
        axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));

         //We're looping through and returning a todo that doesn't match the id that's being passed in, thus creating the delete functionality
    }

  //  Add Todo
    addTodo = (title) => {
        // console.log(title)
        axios.post('http://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
        })
            .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
    }

  render() {
        // console.log(this.state.todos);
    return (
        <Router>
            <div className="App">
                <div className="container">
                    <Headers />
                    <Route exact path="/" render={props => (  //This is how we're able to load both of these components at the same time using React Router
                        <React.Fragment>
                            <AddTodo addTodo={this.addTodo} />
                            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                        </React.Fragment>
                    )} />
                    <Route path="/about" component={About} />
                </div>
            </div>
        </Router>
    );
  }
}

export default App;
