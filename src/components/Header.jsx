import React, { Component } from 'react' 
 
export default class Header extends Component { 
 
    render() { 
        return ( 
            <header> 
                <h1>Task App</h1>
                <a href="#" className="add-task-toggle" onClick={this.props.onClick}>Add new task</a>
            </header> 
        ) 
    } 
}