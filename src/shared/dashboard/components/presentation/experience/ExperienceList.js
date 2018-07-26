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

        } = styles;

        return (
            <div>
                {/* list of experiences */}
                <div>card</div>
                <div>flow</div>
                <div>status</div>
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

    
}

export default ExperienceList;