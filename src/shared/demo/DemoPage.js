import React, { Component } from 'react';

export class DemoPage extends Component {

    state = {
        count: 0
    }

    increment = () => {
        this.setState(prevState => {
            return{
                count: prevState.count + 1
            }
        })
    }

    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => this.increment()}>click</button>
            </div>
        )
    }
}

export default DemoPage;