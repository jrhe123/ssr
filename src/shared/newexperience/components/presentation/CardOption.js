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

    render() {

        const {
            isImage,
            isColor,
        } = this.props;

        const {
            mainContainerStyle,
            imgInputContainerStyle,
            imgInputStyle,
        } = styles;

        return (
            <div style={mainContainerStyle}>
                {
                    isImage ?
                        <div style={imgInputContainerStyle}>
                            <input
                                style={imgInputStyle}
                                type="file"
                                onChange={(event) => this.handleImageChange(event)}
                            />
                            <img src={this.state.file} />
                        </div>
                        :
                        null
                }
                {
                    isColor ?
                        <ColorPicker
                            animation="slide-up"
                            color={'#36c'}
                            onChange={(colors) => this.handleChangeHandler(colors)}
                        />
                        :
                        null
                }
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        height: 48,
        width: 48,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
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
        cursor: 'pointer',
    },
}

export default CardOption;