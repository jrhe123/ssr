import React, { Component } from 'react';

class ExperiencePanel extends Component{

    render(){

        const {
            mainContainerStyle,
        } = styles;

        return(
            <div style={mainContainerStyle}>
                panel here
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        width: 720,
        margin: '0 auto',
        border: '1px solid red'
    },

}

export default ExperiencePanel;