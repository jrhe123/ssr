import React, { Component } from 'react';

// component
import ExperienceList from '../container/ExperienceList';

class Experience extends Component{

    render(){

        const {
            mainContainerStyle,
            contentContainerStyle,
            newContainerStyle,
        } = styles;

        return(
            <div style={mainContainerStyle}>
                <div style={contentContainerStyle}>
                    <ExperienceList />
                </div>
                <div style={newContainerStyle}>
                    add btn
                </div>
            </div>
        )
    }
}

const styles = {
    mainContainerStyle: {
        
    },
    contentContainerStyle: {

    },
    newContainerStyle: {

    },
}

export default Experience;