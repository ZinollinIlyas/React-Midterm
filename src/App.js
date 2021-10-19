import React from "react" 
import Header from "./components/Header" 
import Tasks from "./components/Tasks" 
 
export default class App extends React.Component { 
  state = { 
    tasks: [ 
    { 
      id: 1, 
      name: 'Do a shit', 
      done: false 
    }, 
    { 
      id: 2, 
      name: 'Drink water', 
      done: false 
    }, 
    { 
      id: 3, 
      name: 'Play a game', 
      done: false 
    } 
  ] 
  } 
 
  taskCompleted = (id) => { 
    this.setState({tasks: this.state.tasks.map(task=>{ 
      if (task.id === id) { 
        task.done = ! task.done 
      }  
      return task 
    })}) 
  } 
 
  render() { 
    return ( 
      <React.Fragment> 
        <Header /> 
        <Tasks tasks={this.state.tasks} taskCompleted={this.taskCompleted}/> 
      </React.Fragment> 
    ) 
  } 
}