import React, { Component } from 'react';

class ThumbnailPhoneElement extends Component {

    render() {

        const {
            section
        } = this.props;

        console.log('section: ', section);

        return (
            <div>{section.type}</div>
        )
    }
}

export default ThumbnailPhoneElement;