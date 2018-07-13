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
                    src={this.props.img ? URL.createObjectURL(this.props.img) : require('../../../../../assets/images/demo.jpg')}
                />
            </div>
        )
    }
}

const padding = 12;

const styles = {

    mainContainerStyle: {
        width: 320,
        height: 180,
        cursor: 'default'
    },
    imgStyle: {
        display: 'block',
        width: 320 - 2 * padding,
        height: 180 - 2 * padding,
        padding: padding,
    },
}

export default DxImageViewer;