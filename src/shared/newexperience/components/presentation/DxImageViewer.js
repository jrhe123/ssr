import React, { Component } from 'react';

class DxImageViewer extends Component {

    render() {

        const {
            mainContainerStyle,
            imgStyle,
        } = styles;

        return (
            <div style={mainContainerStyle}>
                <img
                    style={imgStyle}
                    src={require('../../../../../assets/images/demo.jpg')}
                />
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        width: 320,
        height: 180,
        cursor: 'default'
    },
    imgStyle: {
        display: 'block',
        width: 320,
        height: 180,
    },
}

export default DxImageViewer;