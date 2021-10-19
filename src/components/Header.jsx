import React, { Component } from 'react' 
 
export default class Header extends Component { 
 
    render() { 
        return ( 
            <header> 
                <h1>Task App</h1>
                <button onClick={this.props.onClick}>Add new Task</button> 
            </header> 
        ) 
    } 
}