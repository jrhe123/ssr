import React, { Component } from 'react';

// config
import config from '../../../config';

// Libraries
import ColorPicker from 'rc-color-picker';
import '../../../../../assets/css/rc-color-picker/rc-color-picker.css';

class DxSplashToolbar extends Component {

    handleImgChange = (event) => {
        let file = event.target.files[0];
        if (!file.type.match('image.*')) {
            this.props.handleImgError('The supported file types are .jpg , .jpeg , .png , .bmp');
            return;
        }
        this.props.handleImgChange(file);
    }

    render() {

        const {
            mainContainerStyle,
            optionContainerStyle,
            imgInputContainerStyle,
            imgInputStyle,
            displayImgContainerStyle,
            displayImgStyle,
        } = styles;

        return (
            <div className={this.props.isActive ? 'dx_show_toolbar' : 'dx_hidden_toolbar'}>
                <div style={mainContainerStyle}>
                    <div style={Object.assign({}, optionContainerStyle, imgInputContainerStyle)}>
                        <input
                            style={imgInputStyle}
                            type="file"
                            onChange={(event) => this.handleImgChange(event)}
                        />
                        <label style={displayImgContainerStyle}>
                            <img
                                style={displayImgStyle}
                                src={this.props.imgFile ? `${config.picHost}${this.props.imgFile}` : require('../../../../../assets/images/demo.jpg')}
                            />
                        </label>
                    </div>
                    <div style={optionContainerStyle}>
                        <ColorPicker
                            animation="slide-up"
                            color={this.props.color}
                            onChange={(colors) => this.props.handleColorChange(colors)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        display: 'flex',
        justifyContent: 'center',
    },
    optionContainerStyle: {
        width: 48,
        height: 48,
        marginLeft: 6,
        marginRight: 6,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    },
    imgInputContainerStyle: {
        position: 'relative',
    },
    imgInputStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 48,
        height: 48,
        opacity: 0,
        overflow: 'hidden',
        cursor: 'pointer',
    },
    displayImgContainerStyle: {
        width: 48,
        height: 48,
    },
    displayImgStyle: {
        display: 'block',
        width: 48,
        height: 48
    },
}

export default DxSplashToolbar;