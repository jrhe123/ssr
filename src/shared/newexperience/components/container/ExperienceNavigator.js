import React, { Component } from 'react';

// components
import NavBar from '../../../components/navBar/NavBar';

class ExperienceNavigator extends Component{

    render(){

        return(
            <div>
                <NavBar 
                    isRoute={false}
                />

            </div>
        )
    }
}

export default ExperienceNavigator;