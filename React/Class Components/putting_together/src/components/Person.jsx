import React, { Component } from 'react';

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }

    render() {
        let addAge = ()=>{
            this.setState({age:this.state.age+1})
        }
        return (
            <div>
                <h2>{this.props.name}</h2>
                <h4>Age: {this.state.age}</h4>
                <h4>hair Color: {this.props.hairColor}</h4>
                <button onClick={addAge}>Birthday Button for {this.props.name}</button>
            </div>
        )
    }
}
    
export default Person;