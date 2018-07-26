import React, { Component } from 'react';

// constatnt
import fonts from '../../../../styles/fonts';
import colors from '../../../../styles/colors';

class ExperienceList extends Component {

    render() {

        const {
            experiences
        } = this.props;

        const {
            mainContainerStyle,
        } = styles;

        console.log('experiences: ', experiences);

        return (
            <div style={mainContainerStyle}>
                {
                    experiences.map((experience, index) => (
                        <div>12</div>
                    ))
                }
                {/* new experience */}
                <div>
                    <img />
                    <p>ADD EXPERIENCE</p>
                </div>
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid red'
    },
}

export default ExperienceList;