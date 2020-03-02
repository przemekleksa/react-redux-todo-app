import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log('Submited', this.state)
        this.props.addTodo(this.state)
        this.setState({
            content: ``
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo:</label>
                    <input type="text" id="todo" onChange={this.handleChange} value={this.state.content}/>
                    <button className ="">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddTodo
