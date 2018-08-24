import React, { Component } from 'react';

// Libraries
import IconButton from '@material-ui/core/IconButton';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import Language from '@material-ui/icons/Language';
import Lock from '@material-ui/icons/Lock';
import Fingerprint from '@material-ui/icons/Fingerprint';
import DropdownMenu from 'react-dd-menu';

// constants
import fonts from '../../../../styles/fonts';
import colors from '../../../../styles/colors';

class ChannelStream extends Component {

    state = {
        isMenuOpen: false
    }

    handleToggleMenu = () => {
        this.setState({
            isMenuOpen: !this.state.isMenuOpen
        });
    }

    handleCloseMenu = () => {
        this.setState({ isMenuOpen: false });
    }

    handleToggleImport = () => {
        this.setState({
            isImportOpen: !this.state.isImportOpen
        });
    }

    handleCloseImport = () => {
        this.setState({ isImportOpen: false });
    }

    renderChannelIcon = (channel) => {
        const {
            channelIconStyle
        } = styles;
        let icon;
        switch (channel.ChannelType) {
            case '0':
            case '3':
                icon = (
                    <Language style={channelIconStyle}/>
                )
                break;
            case '1':
                icon = (
                    <Lock style={channelIconStyle}/>
                )
                break;
            case '2':
                icon = (
                    <Fingerprint style={channelIconStyle}/>
                )
                break;
            default:
                break;
        }
        return icon;
    }

    render() {
        const {
            channelInfoStyle,
            channelInfoWrapperStyle,
            channelIconContainerStyle,
            channelInfoLeftStyle,
            channelTitleStyle,
            streamLabelStyle,
            channelInfoRightStyle,
            channelInfoIconStyle,
        } = styles;

        const {
            channel,
            active,
        } = this.props;

        return (
            <div
                className="dx_tab"
                style={Object.assign({}, channelInfoStyle, { backgroundColor: active ? colors.lightBlueColor : colors.whiteColor })}
                onClick={() => this.props.handleSelectChannel()}
            >
                <div style={channelInfoWrapperStyle}>
                    <div style={channelIconContainerStyle}>
                        {
                            this.renderChannelIcon(channel)
                        }
                    </div>
                    <div style={channelInfoLeftStyle}>
                        <p style={Object.assign({}, channelTitleStyle, { color: channel.ChannelColor })}>{channel.ChannelName}</p>
                        <p style={streamLabelStyle}>{channel.ExperienceStreams.length} live streams</p>
                    </div>
                    <div style={channelInfoRightStyle}>
                        <DropdownMenu
                            isOpen={this.state.isImportOpen}
                            close={this.handleCloseImport}
                            toggle={
                                <div>
                                    <IconButton style={channelInfoIconStyle} onClick={() => this.handleToggleImport()}><MoreHoriz /></IconButton>
                                </div>
                            }
                            align={'right'}
                            size={'sm'}
                        >
                            <div>option 1</div>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {

    channelInfoStyle: {
        display: 'flex',
        paddingLeft: 18,
        paddingRight: 18,
        cursor: 'pointer',
    },
    channelInfoWrapperStyle: {
        position: 'relative',
        borderBottom: '1px solid',
        borderColor: colors.borderColor,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 24,
    },
    channelIconContainerStyle: {
        position: 'absolute',
        top: 12,
        left: 0,
        height: 18,
        width: 18,
    },
    channelIconStyle: {
        width: 18,
        height: 18,
    },
    channelInfoLeftStyle: {
        flex: 1,
        fontSize: fonts.h4,
        paddingTop: 12,
        paddingBottom: 12,
    },
    channelTitleStyle: {
        fontSize: fonts.h3,
        margin: 0,
        marginBottom: 6,
    },
    streamLabelStyle: {
        fontSize: fonts.h4,
        color: colors.lightGreyColor,
        margin: 0
    },
    channelInfoRightStyle: {
        flex: '24px 0 0',
        alignSelf: 'center',
        margin: 0,
    },
    channelInfoIconStyle: {
        height: 20,
        width: 20
    }

}
export default ChannelStream;