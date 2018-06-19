import React, { Component } from 'react';

// Libraries
import ColorPicker from 'rc-color-picker';
import '../../../../../assets/css/rc-color-picker/rc-color-picker.css';

class CardOption extends Component {

    handleImageChange = (event) => {
        this.props.handleImageChange(event.target.files[0]);
    }

    handleChangeHandler = (colors) => {
        console.log(colors);
    }

    renderOption = (setting) => {

        const {
            imgInputContainerStyle,
            imgInputStyle,
            displayImgContainerStyle,
            displayImgStyle,
        } = styles;

        let option;
        if (setting.Type == 'IMAGE') {
            option = (<div style={imgInputContainerStyle}>
                <input
                    name="dx_img_upload"
                    style={imgInputStyle}
                    type="file"
                    onChange={(event) => this.handleImageChange(event)}
                />
                <label 
                    style={displayImgContainerStyle} 
                    htmlFor="dx_img_upload"
                >
                    <img 
                        style={displayImgStyle}
                        src={this.props.imgFile ? URL.createObjectURL(this.props.imgFile) : require('../../../../../assets/images/demo.jpg')} 
                    />
                </label>
            </div>)
        } else if (setting.Type == 'BACKGROUND_COLOR') {
            option = (
                <ColorPicker
                    animation="slide-up"
                    color={setting.Default}
                    onChange={(colors) => this.handleChangeHandler(colors)}
                />
            )
        } else if (setting.Type == 'COLOR') {
            option = (
                <ColorPicker
                    animation="slide-up"
                    color={setting.Default}
                    onChange={(colors) => this.handleChangeHandler(colors)}
                />
            )
        }
        return option;
    }

    render() {

        const {
            setting,
        } = this.props;

        const {
            mainContainerStyle,
        } = styles;

        return (
            <div style={mainContainerStyle}>
                {
                    this.renderOption(setting)
                }
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        height: 48,
        width: 48,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        marginLeft: 6,
        marginRight: 6,
    },
    imgInputContainerStyle: {
        position: 'relative',
    },
    imgInputStyle: {
        position: 'absolute',
        top: 0,
        right: 0,
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
        height: 48,
    },
}

export default CardOption;