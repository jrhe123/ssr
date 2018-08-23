import React, { Component } from 'react';

// Libraries
import ColorPicker from 'rc-color-picker';
import '../../../../../assets/css/rc-color-picker/rc-color-picker.css';

// config
import config from '../../../config';

class DxAdButton2ConnectorToolbar extends Component {

    render() {

        const {
            mainContainerStyle,
            optionContainerStyle,
        } = styles;

        return (
            <div
                className={this.props.isActive ? 'dx_show_toolbar' : 'dx_hidden_toolbar'}
            >
                <div style={mainContainerStyle}>
                    <div style={optionContainerStyle}>
                        <ColorPicker
                            animation="slide-up"
                            color={this.props.bgColor}
                            onChange={(colors) => this.props.handleBgColorChange(colors)}
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
        height: 48,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    optionContainerStyle: {
        width: 48,
        height: 48,
        marginLeft: 6,
        marginRight: 6,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    },
}

export default DxAdButton2ConnectorToolbar;