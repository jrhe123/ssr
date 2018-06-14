import React, { Component } from 'react';

// data
import ExperienceCardData from '../../../../../data/ExperienceCardData';

class ExperienceCard extends Component {

    componentDidMount() {
        console.log('check: ', ExperienceCardData);
    }

    render() {

        const {
            mainContainerStyle,
        } = styles;

        return (
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