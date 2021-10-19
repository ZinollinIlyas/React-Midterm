import React from "react";


class Form extends React.Component {
    state = {
        text: '',
        date: ''
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
    
    render(){
        return (
            <div>
                <form method="get">
                    <input type="text" placeholder="Type name of Task" onChange={this.onTextChange}/>
                    <input type="date" onChange={this.onDateChange}/>
                    <input type="submit" value="Add task"/>
                </form>
            </div>
        )
    }
}

export default Form