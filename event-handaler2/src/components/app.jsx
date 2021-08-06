import React, { Component } from 'react'
import classes from './app.module.css'


class App extends Component {

    state = {
        name: "",
        country: "",
        bio: "",
        birthDay: "",
        gender: "",
        agree:false
    }

    handaleChance = event => {
        this.setState({
            [event.target.name] : event.target.value
        }     
        )
       
    }

    handleChecked = event => {
        this.setState({
            agree: event.target.checked
        })
    }

    render() {

        const {name, country, bio ,birthDay,agree} = this.state
        return(
            <div className={classes.wrapper}>
                <h3>Input Field</h3>
                <input 
                    className="form-control" 
                    type="text"
                    name='name'
                    placeholder="Enter your name:"
                    value={name}
                    onChange = {this.handaleChance}
                />
                <select 
                    className="form-control my-2"
                    name="country"
                    onChange = {this.handaleChance}
                    value={country}
                      >
                    <option value="Bangladesh" >Bangladesh</option>
                    <option value="India">India</option>
                    <option value="Srilanka">Srilanka</option>
                    <option value="China">China</option>
                </select>
                <textarea 
                    className="form-control my-4" 
                    name="bio" 
                    placeholder="Tell me about yourself"
                    onChange = {this.handaleChance}
                    value={bio}
                >
                </textarea>
                <input 
                    className="form-control my-4" 
                    type="date" 
                    name="birthDay" 
                    onChange = {this.handaleChance}
                    value={birthDay}
                />
                <div>
                    <input 
                    type="radio"
                    name="gender"
                    onChange = {this.handaleChance}
                    value = "male"
                    />
                    Male

                    <input 
                    type="radio"
                    name="gender"
                    onChange = {this.handaleChance}
                    value = "female"
                    />
                    Female

                    <input 
                    type="radio"
                    name="gender"
                    onChange = {this.handaleChance}
                    value = "other"
                    />
                    Other

                </div>
                <div>
                    <input type="checkbox" name="agree" onChange={this.handleChecked} checked={agree} />
                    Show the Data
                </div>
                <button onClick={()=>{
                    console.log(this.state)
                }}>
                    Show data
                </button>
            </div>
        )
    }
}


export default App;