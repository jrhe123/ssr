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
            leftContainerStyle,
            cateContainerStyle,
            itemContainerStyle,
            rightContainerStyle,
        } = styles;

        return (
            <div style={mainContainerStyle}>
                <div style={leftContainerStyle}>
                    <div style={cateContainerStyle}>category</div>
                    <div style={itemContainerStyle}>items</div>
                </div>
                <div style={rightContainerStyle}>right</div>
            </div>
        )
    }
}

const styles = {
    mainContainerStyle: {
        width: sizes.dxWidth,
        height: `calc(100vh - ${sizes.headerHeight})`,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row'
    },
    leftContainerStyle: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row'
    },
    cateContainerStyle: {
        flex: 1,
        background: 'purple',
    },
    itemContainerStyle: {
        flex: 3,
        background: 'yellow',
    },
    rightContainerStyle: {
        flex: 2,
        background: 'green'
    },
}

export default ExperienceCard;