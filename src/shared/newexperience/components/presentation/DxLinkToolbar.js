import React, { Component } from 'react';

// Libraries
import ColorPicker from 'rc-color-picker';
import '../../../../../assets/css/rc-color-picker/rc-color-picker.css';

class DxLinkToolbar extends Component {

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
            displayImgStyle,
        } = styles;

        return (
            <div
                className={this.props.isActive ? 'dx_show_toolbar' : 'dx_hidden_toolbar'}
            >
                <div style={mainContainerStyle}>
                    <div style={optionContainerStyle}>
                        <img
                            style={displayImgStyle}
                            src={require('../../../../../assets/images/link_icon.png')}
                        />
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
    displayImgStyle: {
        display: 'block',
        width: 48,
        height: 48
    },
}

export default DxLinkToolbar;