import React, { Component } from 'react';

// components
import NavBar from '../../../components/navBar/NavBar';


class HeaderNavigator extends Component{

    state = {
        index: 0,
    };

    handleChange = (index) => {
        this.setState({ 
            index
        });
    };
    
    render(){

        return(
            <div>
                <NavBar 
                    index={this.state.index} 
                    handleChange={(index) => this.handleChange(index)}
                />
            </div>
        )
    }
}

export default HeaderNavigator;