import React, { Component } from 'react';

// Libraries
import ColorPicker from 'rc-color-picker';
import Button from '@material-ui/core/Button';
import '../../../../../assets/css/rc-color-picker/rc-color-picker.css';

// components
import DxInput from '../../../components/dxInput/DxInput';

// constants
import colors from '../../../styles/colors';

class DxLinkToolbar extends Component {

    state = {
        isOpen: false
    }

    handleLinkInsertClick = () => {
        this.setState({ isOpen: !this.state.isOpen });
        this.props.handleLinkInsertClick();
    }

    render() {

        const {
            mainContainerStyle,
            optionContainerStyle,
            displayImgStyle,
            linkInputContainerStyle,
            linkInputWrapperStyle,
            linkInputBtnStyle,
        } = styles;

        return (
            <div
                className={this.props.isActive ? 'dx_show_toolbar' : 'dx_hidden_toolbar'}
            >
                <div>
                    {
                        this.state.isOpen ?
                            <div style={linkInputContainerStyle}>
                                <div style={linkInputWrapperStyle}>
                                    <DxInput
                                        enableEnter={true}
                                        placeholder="Embed hyperlink"
                                        handleValChange={(e) => this.props.handleLinkInputChange(e)}
                                        width="200px"
                                        disabled={false}
                                        value={this.props.linkInput == null ? this.props.link : this.props.linkInput}
                                        handleKeyPress={() => this.handleLinkInsertClick()}
                                        isRounded={true}
                                    />
                                </div>
                                <Button
                                    style={linkInputBtnStyle}
                                    onClick={() => this.handleLinkInsertClick()}
                                    variant="Enter video url">
                                    Confirm
                                </Button>
                            </div>
                            :
                            <div style={mainContainerStyle}>
                                <div 
                                    style={optionContainerStyle}
                                    onClick={() => this.setState({ isOpen: !this.state.isOpen })}
                                >
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
                    }
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
    displayImgStyle: {
        display: 'block',
        width: 48,
        height: 48,
        cursor: 'pointer'
    },
    linkInputContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
        width: 320,
        margin: '0 auto'
    },
    linkInputWrapperStyle: {
        flex: 4,
        marginTop: 3
    },
    linkInputBtnStyle: {
        flex: 1,
        backgroundColor: colors.blueColor,
        color: colors.whiteColor,
        textTransform: 'capitalize',
        marginLeft: 6
    },
}

export default DxLinkToolbar;