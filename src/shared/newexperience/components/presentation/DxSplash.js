import React, { Component } from 'react';

// Libraries
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import SignalCellular0Bar from '@material-ui/icons/SignalCellular0Bar';
import Wifi from '@material-ui/icons/Wifi';
import Bluetooth from '@material-ui/icons/Bluetooth';
import BatteryFull from '@material-ui/icons/BatteryFull';
import MoreVert from '@material-ui/icons/MoreVert';
import Search from '@material-ui/icons/Search';

// components
import DxInput from '../../../components/dxInput/DxInput';

// constants
import fonts from '../../../styles/fonts';

class DxSplash extends Component {

    render() {

        const {
            txtCenterStyle,
            marginLeftStyle,
            marginRightStyle,
            tableContainerStyle,
            tableWrapperStyle,
            txtStyle,
            splashContainerStyle,
            statusbarContainerStyle,
            leftStatusContainerStyle,
            leftStatusWrapperStyle,
            midStatusContainerStyle,
            rightStatusContainerStyle,
            rightStatusWrapperStyle,
            iconContainerStyle,
            statusbarIconStyle,
            statusbarLabelStyle,
            toolbarContainerStyle,
            leftToolbarContainerStyle,
            leftToolbarWrapperStyle,
            rightToolbarContainerStyle,
            rightToolbarWrapperStyle,
            splashContentContainerStyle,
            overlayContainerStyle,
            overlayWrapperStyle,
            overlayImgStyle,
            descContainerStyle,
        } = styles;

        return (
            <div style={Object.assign({}, overlayContainerStyle, { color: this.props.splashColor })}>
                <img
                    style={overlayImgStyle}
                    src={this.props.splashImg ? URL.createObjectURL(this.props.splashImg) : require('../../../../../assets/images/demo.jpg')}
                />
                <div style={overlayWrapperStyle}>
                    <div style={splashContainerStyle}>
                        <div style={statusbarContainerStyle}>
                            <div style={leftStatusContainerStyle}>
                                <div style={leftStatusWrapperStyle}>
                                    <div style={Object.assign({}, marginLeftStyle, iconContainerStyle)}>
                                        <SignalCellular0Bar
                                            style={statusbarIconStyle}
                                        />
                                    </div>
                                    <div style={Object.assign({}, marginLeftStyle, iconContainerStyle)}>
                                        <span style={statusbarLabelStyle}>Sketch</span>
                                    </div>
                                    <div style={Object.assign({}, marginLeftStyle, iconContainerStyle)}>
                                        <Wifi
                                            style={statusbarIconStyle}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div style={midStatusContainerStyle}>
                                <div style={tableContainerStyle}>
                                    <div style={tableWrapperStyle}>
                                        <p style={Object.assign({}, txtCenterStyle, statusbarLabelStyle, { width: '100%' })}>9:41 AM</p>
                                    </div>
                                </div>
                            </div>
                            <div style={rightStatusContainerStyle}>
                                <div style={rightStatusWrapperStyle}>
                                    <div style={Object.assign({}, marginRightStyle, iconContainerStyle)}>
                                        <Bluetooth
                                            style={statusbarIconStyle}
                                        />
                                    </div>
                                    <div style={Object.assign({}, marginRightStyle, iconContainerStyle)}>
                                        <span style={statusbarLabelStyle}>100%</span>
                                    </div>
                                    <div style={Object.assign({}, marginRightStyle, iconContainerStyle)}>
                                        <BatteryFull
                                            className="dx_battery_icon"
                                            style={statusbarIconStyle}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={toolbarContainerStyle}>
                            <div style={leftToolbarContainerStyle}>
                                <div style={leftToolbarWrapperStyle}>
                                    <div style={tableContainerStyle}>
                                        <div style={tableWrapperStyle}>
                                            <KeyboardArrowLeft />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={rightToolbarContainerStyle}>
                                <div style={rightToolbarWrapperStyle}>
                                    <div style={tableContainerStyle}>
                                        <div style={tableWrapperStyle}>
                                            <Search />
                                            <MoreVert />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={splashContentContainerStyle}>
                            <div style={tableContainerStyle}>
                                <div style={tableWrapperStyle}>
                                    <div style={descContainerStyle}>
                                        <DxInput
                                            multiLine={true}
                                            placeholder="Splash image with page title"
                                            color={this.props.splashColor}
                                            width={descContainerWidth}
                                            maxHeight={118}
                                            isTransparent={true}
                                            textCenter={true}
                                            value={this.props.splashContent}
                                            handleValChange={(e) => this.props.handleDescInputChange(e)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const splashHeight = 180;
const descContainerWidth = 264;

const styles = {

    txtCenterStyle: {
        textAlign: 'center'
    },
    marginLeftStyle: {
        marginLeft: 3
    },
    marginRightStyle: {
        marginRight: 3
    },
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
    imgStyle: {
        display: 'block',
        width: 42,
        height: 48,
        margin: '0 auto'
    },
    txtStyle: {
        fontSize: fonts.h5,
    },
    splashContainerStyle: {
        height: splashHeight,
    },
    statusbarContainerStyle: {
        height: 24,
        display: 'flex',
        flexDirection: 'row'
    },
    leftStatusContainerStyle: {
        flex: 1
    },
    leftStatusWrapperStyle: {
        float: 'left',
        height: 24,
        display: 'flex',
    },
    midStatusContainerStyle: {
        flex: 1
    },
    rightStatusContainerStyle: {
        flex: 1
    },
    rightStatusWrapperStyle: {
        float: 'right',
        height: 24,
        display: 'flex',
        flexDirection: 'row'
    },
    iconContainerStyle: {
        flex: 1,
    },
    statusbarIconStyle: {
        fontSize: 14,
        display: 'inline-block',
        marginTop: 6,
    },
    statusbarLabelStyle: {
        fontSize: fonts.h5,
        display: 'inline-block',
        margin: 0,
    },
    toolbarContainerStyle: {
        height: 24,
        display: 'flex',
        flexDirection: 'row',
    },
    leftToolbarContainerStyle: {
        flex: 1
    },
    leftToolbarWrapperStyle: {
        float: 'left'
    },
    rightToolbarContainerStyle: {
        flex: 1
    },
    rightToolbarWrapperStyle: {
        float: 'right'
    },
    splashContentContainerStyle: {

    },
    overlayContainerStyle: {
        position: 'relative',
        height: splashHeight,
        width: '100%',
        cursor: 'default'
    },
    overlayWrapperStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        display: 'block',
        background: 'rgba(0, 0, 0, .4)',
        zIndex: 1
    },
    overlayImgStyle: {
        height: splashHeight,
        width: '100%',
    },
    descContainerStyle: {
        width: descContainerWidth,
        margin: '0 auto'
    },
}

export default DxSplash;