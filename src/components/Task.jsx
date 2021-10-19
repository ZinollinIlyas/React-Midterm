import React, { Component } from 'react' 
 
export default class Task extends Component { 
 
    getStyle = () => { 
        return { 
            backgroundColor: '#f2f2f2', 
            padding: 2, 
            textDecoration: this.props.task.done ? 'line-through' : 'none' 
        }    
    } 
 
    render() { 
        const {id, name} = this.props.task 
 
        return ( 
            <div style={this.getStyle()}> 
                <input type='checkbox' onChange={this.props.completed.bind(this, id)}/> 
                <p>{ name }</p> 
                <button style={btnStyle}>Delete</button> 
            </div> 
        ) 
    } 
} 
 
var btnStyle = { 
    backgroundColor: 'red', 
    color: 'white', 
    padding: '5px 10px', 
    border: 'none', 
    borderRadius: '50%', 
    cursor: 'pointer', 
    float: 'right' 
}