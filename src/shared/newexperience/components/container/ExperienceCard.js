import React, { Component } from 'react';

class ExperienceCard extends Component{

    render(){

        const {
            mainContainerStyle,
        } = styles;

        return(
            <div style={mainContainerStyle}>
                experience card here
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        border: '1px solid red',
    },
}

export default ExperienceCard;