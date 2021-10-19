import React, { Component } from 'react' 
import Task from './Task' 
 
export default class Tasks extends Component { 

    render() { 
        return this.props.tasks.map((task)=>( 
            <Task key={task.id} task={task} completed={this.props.taskCompleted} onDelete={this.props.onDelete}/> 
        )) 
    } 
}