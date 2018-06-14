import React, { Component } from 'react';

// data
import ExperienceCardData from '../../../../../data/ExperienceCardData';

// constants
import sizes from '../../../styles/sizes';

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
        width: sizes.dxWidth,
        height: `calc(100vh - ${sizes.headerHeight})`,
        margin: '0 auto',
        background: 'red'
    },
}

export default ExperienceCard;