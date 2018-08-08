import React, { Component } from 'react';

// Libraries
import IconButton from '@material-ui/core/IconButton';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import DropdownMenu from 'react-dd-menu';

// constants
import fonts from '../../../../styles/fonts';
import colors from '../../../../styles/colors';

class ChannelStreamsTemplate extends Component {

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


    render() {
        const {
            channelInfoStyle,
            channelInfoWrapperStyle,
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
        borderBottom: '1px solid',
        borderColor: colors.borderColor,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
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
export default ChannelStreamsTemplate;