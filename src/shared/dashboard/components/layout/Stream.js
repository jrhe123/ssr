import React, { Component } from 'react';

// libraries
import Slide from 'react-reveal/Slide';

class Stream extends Component {

    render() {
        const {
            active
        } = this.props;

        if (!active) {
            return null;
        }

        return (
            <Slide right>
                <div>stream container here</div>
            </Slide>
        )
    }
}

export default Stream;