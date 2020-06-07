import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Todos from "./Todos";

export class TodoItem extends Component {
    getStyle = () => {
       return {
           background: '#f4f4f4',
           padding: '10px',
           borderBottom: '1px #ccc dotted',
           textDecoration: this.props.todo.completed ? 'line-through' : 'none'
       }
    }

    // markComplete = (e) => {
    //     console.log(this.props)  //before we started "component drilling"
    // }


    render() {
        // This is called destructuring - where we pull the variables out of the todo and the props
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                 <p>
                     <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                     { title }
                     <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                 </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem