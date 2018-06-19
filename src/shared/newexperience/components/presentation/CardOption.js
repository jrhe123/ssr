import React, { Component } from 'react';

// Libraries
import ColorPicker from 'rc-color-picker';
import '../../../../../assets/css/rc-color-picker/rc-color-picker.css';

class CardOption extends Component {

    state = {
        file: null
    };

    handleImageChange = (event) => {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
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
        if (setting == 'IMAGE') {
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
                        src={this.state.file} 
                    />
                </label>
            </div>)
        } else if (setting == 'BACKGROUND_COLOR') {
            option = (
                <ColorPicker
                    animation="slide-up"
                    color={'#FFF'}
                    onChange={(colors) => this.handleChangeHandler(colors)}
                />
            )
        } else if (setting == 'COLOR') {
            option = (
                <ColorPicker
                    animation="slide-up"
                    color={'#000'}
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