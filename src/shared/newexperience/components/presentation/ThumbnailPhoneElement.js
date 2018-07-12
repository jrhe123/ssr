import React, { Component } from 'react';

import '../../../../../assets/css/quill/thumbnail.css';

class ThumbnailPhoneElement extends Component {

    renderSection = (section) => {

        console.log('check: ', section.htmlContent);

        let elem;
        switch (section.type) {
            case 'EDITOR':
                elem = (
                    <div dangerouslySetInnerHTML={{ __html: section.htmlContent }} />
                );
                break;
            default:
                break;
        }
        return elem;
    }

    render() {

        const {
            mainContainerStyle
        } = styles;

        const {
            section
        } = this.props;

        return (
            <div 
                className='dx_thumbnail_elem'
                style={mainContainerStyle}>
                {this.renderSection(section)}
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        padding: 4
    }
}

export default ThumbnailPhoneElement;