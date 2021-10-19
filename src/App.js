import React from "react" 
import Form from "./components/Form"
import Header from "./components/Header" 
import Tasks from "./components/Tasks" 
import './App.css'
 
export default class App extends React.Component { 
  state = { 
    tasks: [ 
      { 
        id: 1, 
        name: 'Do a shit',
        date: '2021-09-10',
        done: false 
      }, 
      { 
        id: 2, 
        name: 'Drink water', 
        date: '2021-10-15',
        done: false 
      }, 
      { 
        id: 3, 
        name: 'Play a game', 
        date: '2021-11-25',
        done: false 
      } 
  ],
    show_form: false
  } 
 
  taskCompleted = (id) => { 
    this.setState({tasks: this.state.tasks.map(task=>{ 
      if (task.id === id) { 
        task.done = ! task.done 
      }  
      return task 
    })}) 
  } 

  //Delete task 
  deleteTask = (id) =>{
    this.setState({ 
      tasks: this.state.tasks.filter(task => task.id !== id)
    })
  }

  createTask(text, date) {
    let last_id = this.state.tasks[this.state.tasks.length -1].id
    console.log(last_id)
    this.setState({
      tasks: [
        ...this.state.tasks,
        {id: last_id+=1, name: text, date: date, done: false}
      ]
    })
  }

  toggleForm = () => {
    this.setState({show_form: !this.state.show_form})
  }

  render() { 
    return ( 
      <React.Fragment> 
        <Header onClick={this.toggleForm}/> 
        {this.state.show_form && <Form onCreateTask={this.createTask.bind(this)}/>}
        <Tasks tasks={this.state.tasks} taskCompleted={this.taskCompleted} onDelete={this.deleteTask}/> 
      </React.Fragment> 
    ) 
  } 
}