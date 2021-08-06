
import React, {Component} from 'react';
import classes from '../app.module.css'

class App extends Component {
    
    state = {
        name: ""
    }
    handleButtonClick = event => {
        // console.log(event);
        console.log(event.target)
        console.log("I Love Allah")
    }

    handleChange = event => {
        this.setState({name: event.target.value})
    }
    handleFocus = evevt => {
        console.log("I am a Focus evevnt")
    }
    handleBlur = event => {
        if (!event.target.value) {
            alert("Enter your Name:")
        }
        console.log("I am Blur Event.")
    }
    render() {
        return (
            <div className={classes.wrapper}>
                <h1>Events In React</h1>
                <button onClick={this.handleButtonClick} className={classes.btn}>Click Me</button>
                <br />
                <br />
                <input 
                className={classes.TextField} type="text"
                placeholder="Enter your Something" 
                onChange = {this.handleChange}
                onFocus = {this.handleFocus}
                onBlur = {this.handleBlur}
                value = {this.state.name}
                />
                <br />
                <br />
                {this.state.name && <h1>Welcome, {this.state.name}</h1> }         
            </div>
        )
    }
}

export default App;

