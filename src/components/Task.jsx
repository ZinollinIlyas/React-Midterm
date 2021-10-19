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
        const {id, name, date} = this.props.task 
 
        return ( 
            <div className="task-block" style={this.getStyle()}> 
                <div>
                    <p>{ name }</p> 
                    <p>{date}</p>
                </div>
                <div className="action-inputs">
                    <input type='checkbox' onChange={this.props.completed.bind(this, id)}/> 
                    <button className="delete" onClick={() => this.props.onDelete(id)}>Delete</button> 
                </div>
            </div> 
        ) 
    } 
} 
 
