import React, { Component } from 'react';

// styles
import '../../../../../assets/css/dd-menu/dd_menu.css';

// Libraries
import TextField from '@material-ui/core/TextField';

// redux
import { connect } from 'react-redux';
import {
    dxChannelTypeUpdate as dxChannelTypeUpdateAction,
    dxChannelColor as dxChannelColorAction,
} from '../../actions';

// constants
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import sizes from '../../../styles/sizes';

// components
import ChannelOptionBar from '../presentation/ChannelOptionBar';
import ColorOptionBar from '../presentation/ColorOptionBar';

class ChannelPanel extends Component {

    state = {
        isTypeMenuOpen: false,
        isColorMenuOpen: false,
        btnPickerColor: '#EE2E24',
        titleCharacterCount: 0,
        descriptionCharacterCount: 0
    }

    toggleTypeSelect = () => {
        // this.setState({
        //     isTypeMenuOpen: !this.state.isTypeMenuOpen
        // });
    }

    handleClickOption = (val) => {
        // this.props.dxChannelTypeUpdateAction(val);
    }

    closeTypeSelect = () => {
        // this.setState({ isTypeMenuOpen: false });
    }

    handleColorPicker = (obj) => {
        this.setState({ btnPickerColor: obj.color });
        this.props.dxChannelColorAction(obj.color)
    }

    handleTitleCharacterChange = () => {
        // var input = event.target.value;
        // this.setState({
        //     titleCharacterCount: 0 + input.length
        // });
    }

    handleDescriptionCharacterChange = () => {
        // var input = event.target.value;
        // this.setState({
        //     descriptionCharacterCount: 0 + input.length
        // });
    }

    render() {

        const {
            tableContainerStyle,
            tableWrapperStyle,
            mainContainerStyle,
            mainWrapperStyle,
            optionContainerStyle,
            leftContainerStyle,
            labelStyle,
            descLabelStyle,
            rightContainerStyle,
            textAreaStyle,
            characterCounterStyle,
            titleInputStyle,
        } = styles;

        const {
            channel
        } = this.props;

        return (
            <div style={mainContainerStyle}>
                <div style={tableContainerStyle}>
                    <div style={tableWrapperStyle}>
                        <div style={mainWrapperStyle}>
                            <div style={optionContainerStyle}>
                                <div style={leftContainerStyle}>
                                    <p style={labelStyle}>Visibility</p>
                                </div>
                                <div style={rightContainerStyle}>
                                    <p style={descLabelStyle}>What kind of channel visibility you would like your end user to experience?</p>

                                    <ChannelOptionBar 
                                        channel={channel}
                                    />
                                   
                                </div>
                            </div>
                            <div style={optionContainerStyle}>
                                <div style={leftContainerStyle}>
                                    <p style={labelStyle}>Color</p>
                                </div>
                                <div style={rightContainerStyle}>
                                    <p style={descLabelStyle}>Choose a color for your channel. We recommend using one color for each channel you own.</p>
                                    <ColorOptionBar />
                                </div>
                            </div>
                            <div style={optionContainerStyle}>
                                <div style={leftContainerStyle}>
                                    <p style={labelStyle}>Title</p>
                                </div>
                                <div style={rightContainerStyle}>
                                    <p style={descLabelStyle}>Choose a channel title relevant to your audience’s interest. Ex. Diabetes, Radiology, News etc.</p>
                                    <input
                                        type="text"
                                        maxlength="50"
                                        placeholder="Hypertension"
                                        style={titleInputStyle}
                                        onChange={this.handleTitleCharacterChange.bind(this)} />
                                    <p style={characterCounterStyle}>{this.state.titleCharacterCount}/50</p>
                                </div>
                            </div>
                            <div style={optionContainerStyle}>
                                <div style={leftContainerStyle}>
                                    <p style={labelStyle}>Description</p>
                                </div>
                                <div style={rightContainerStyle}>
                                    <p style={descLabelStyle}>Write an amazing description for your channel. Your audience will read this before joining the channel</p>
                                    <TextField
                                        id="multiline-static"
                                        multiline
                                        rows="5"
                                        margin="normal"
                                        InputProps={{
                                            disableUnderline: true,
                                        }}
                                        inputProps={{ maxLength: 1000 }}
                                        style={textAreaStyle}
                                        fullWidth
                                        placeholder={'Type something'}
                                        onChange={this.handleDescriptionCharacterChange.bind(this)}
                                    />
                                    <p style={characterCounterStyle}>{this.state.descriptionCharacterCount}/1000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const styles = {

    tableContainerStyle: {
        position: 'relative',
        display: 'table',
        height: '100%',
        width: '100%',
    },
    tableWrapperStyle: {
        display: 'table-cell',
        verticalAlign: 'middle',
    },
    mainContainerStyle: {
        height: `calc(100vh - ${sizes.headerHeight})`,
        width: '100%',
    },
    mainWrapperStyle: {
        width: 600,
        margin: '0 auto',
    },
    optionContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 36,
    },
    leftContainerStyle: {
        flex: '120px 0 0',
        display: 'flex',
        flexDirection: 'row',
    },
    rightContainerStyle: {
        flex: 1,
    },
    labelStyle: {
        margin: 0,
        fontSize: fonts.h3,
        color: colors.blackColor,
    },
    descLabelStyle: {
        margin: 0,
        color: colors.labelColor,
        fontSize: fonts.h4,
        marginBottom: 24,
    },
    defaultColorOptionIconContainerStyle: {
        height: 36,
    },
    colorOptionIconContainerStyle: {
        height: 42,
        width: 42,
        marginLeft: 3,
        marginRight: 3,
    },
    colorOptionIconWrapperStyle: {
        height: 30,
        width: 30,
    },
    colorOptionIconStyle: {
        height: 4,
        width: 4,
    },
    textAreaStyle: {
        backgroundColor: colors.whiteColor,
    },
    colorOptionContainerStyle: {
        display: 'flex',
        flexDirection: 'row'
    },
    characterCounterStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: 0
    },
    colorPickerContainerStyle: {
        textAlign: 'Left',
        height: 42,
        width: 60,
    },
    hexColorPickerStyle: {
        backgroundColor: colors.lightBlueColor,
        color: colors.labelColor,
    },
    titleInputStyle: {
        height: 36,
        width: '100%',
        fontSize: fonts.h3,
        border: 'none',
        outlineStyle: 'none',
        marginBottom: 6,
    },
}

const stateToProps = (state) => {
    return {
        channel: state.newchannel.CHANNEL
    }
}

const dispatchToProps = {
    dxChannelTypeUpdateAction,
    dxChannelColorAction,
}

export default connect(stateToProps, dispatchToProps)(ChannelPanel);
