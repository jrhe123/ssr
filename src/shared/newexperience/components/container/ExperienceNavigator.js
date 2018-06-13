import React, { Component } from 'react';

// components
import NavBar from '../../../components/navBar/NavBar';

class ExperienceNavigator extends Component {

    handleTitleChange = (e) => {
        console.log('getting val from: ', e.target.value);
    }

    render() {

        return (
            <NavBar
                isRoute={false}
                handleInputChange={(e) => this.handleTitleChange(e)}
            />
        )
    }
}

export default ExperienceNavigator;