import React, { Component } from 'react';

// styles
import '../../../../../assets/css/quill/thumbnail.css';

class ThumbnailPhoneElement extends Component {

    renderSection = (section) => {

        console.log('check: ', section);

        let elem;
        switch (section.type) {
            case 'EDITOR':
                elem = (
                    <div dangerouslySetInnerHTML={{ __html: section.htmlContent }} />
                );
                break;
            case 'BUTTON':
                elem = (
                    <div>button here</div>
                );
                break;
            case 'EMBED_PDF':
                elem = (
                    <div>pdf here</div>
                );
                break;
            case 'SPLASH':
                elem = (
                    <div>SPLASH here</div>
                );
                break;
            case 'VIDEO':
                elem = (
                    <div>VIDEO here</div>
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