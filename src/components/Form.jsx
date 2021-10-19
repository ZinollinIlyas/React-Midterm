import React from "react";


class Form extends React.Component {
    state = {
        text: '',
        date: '',
    }

    onAdd = this.props.onAdd

    onTextChange = (e) => {
        this.setState({text: e.target.value})
        console.log(this.state.text)
    }

    onDateChange = (e) => {
        this.setState({date: e.target.value})
        console.log(this.state.date)
    }
    

    onSubmit = (e) => {
        e.preventDefault();
        let text_input = document.getElementById('text');
        let date_input = document.getElementById('date');
        if (!this.state.text || !this.state.date){
            alert("Inputs must not be empty")
        } else {
            const {text, date} = this.state;
            text_input.value = '';
            date_input.value = '';
            const createTask = this.props.onCreateTask;
            createTask(text, date)
        }
        
    }

    render(){
        return (

            <form method="get" onSubmit={this.onSubmit}>
                <p><input type="text" placeholder="Type name of Task" id="text" onChange={this.onTextChange}/></p>
                <p><input type="date" id="date" onChange={this.onDateChange}/></p>
                <p className="add-task"><input type="submit" value="Add task"/></p>
            </form>

        )
    }
}

export default Form