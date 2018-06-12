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
        display: 'flex',
        flexDirection: 'row',
    },
    contentContainerStyle: {
        flex: 4
    },
    newContainerStyle: {
        flex: 1
    },
}

export default Experience;