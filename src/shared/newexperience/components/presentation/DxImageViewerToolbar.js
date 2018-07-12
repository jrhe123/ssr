import React, { Component } from 'react';

class DxImageViewerToolbar extends Component {

    handleImgChange = (event) => {
        let file = event.target.files[0];
        if (!file.type.match('image.*')) {
            console.log('err');
            // this.props.handleImageError('The supported file types are .jpg , .jpeg , .png , .bmp');
            return;
        }
        console.log('ok redux');
        // this.props.handleImgChange(file);
    }

    render() {

        const {
            mainContainerStyle,
            imgInputContainerStyle,
            imgInputStyle,
            displayImgContainerStyle,
            displayImgStyle,
        } = styles;

        return (
            <div
                className={this.props.isActive ? 'dx_show_toolbar' : 'dx_hidden_toolbar'}
            >
                <div style={mainContainerStyle}>
                    <div
                        style={imgInputContainerStyle}
                    >
                        <input
                            style={imgInputStyle}
                            type="file"
                            onChange={(event) => this.handleImgChange(event)}
                        />
                        <label
                            style={displayImgContainerStyle}
                        >
                            <img
                                style={displayImgStyle}
                                src={require('../../../../../assets/images/demo.png')}
                            />
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        display: 'flex',
        justifyContent: 'center'
    },
    imgInputContainerStyle: {
        position: 'relative',
        width: 40,
        height: 48,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    },
    imgInputStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 40,
        height: 48,
        opacity: 0,
        overflow: 'hidden',
        cursor: 'pointer',
    },
    displayImgContainerStyle: {
        width: 40,
        height: 48,
    },
    displayImgStyle: {
        display: 'block',
        width: 41,
        height: 49
    },
}

export default DxImageViewerToolbar;