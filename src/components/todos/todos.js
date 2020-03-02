import React from 'react'

const Todos = ({todos, deleteTodo}) => {
        const todosList =  todos.length ? (todos.map(todo => {
            return (
            <div className="collection-item" key={todo.id}>
                <p>{todo.content}</p>
                <button onClick={() =>{deleteTodo(todo.id)}}>delete</button>
            </div>
            )
        })) : <p className="center">you have no todos left</p>
        return (
            <div className='todos collection'>
                {todosList}
            </div>
        )
    
}

export default Todos
