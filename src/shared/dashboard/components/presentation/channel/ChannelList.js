import React, { Component } from 'react';

// Libraries
import Button from '@material-ui/core/Button';
import DropdownMenu from 'react-dd-menu';
import ExpandMore from '@material-ui/icons/ExpandMore';

// constants
import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';
import sizes from '../../../../styles/sizes';

// components
import ChannelListInfo from './ChannelListInfo';
import SearchBar from '../../../../components/searchBar/SearchBar';

class ChannelList extends Component {

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
            mainContainerStyle,
            mainWrapperStyle,
            topContainerStyle,
            searchBarWrapperSrtyle,
            channelListInfoContainerStyle,
            channelListInfoWrapperStyle,
            channelListButtonStyle,
            fullBtnStyle,
            channelNumberStyle,
            dropdownBtnStyle,
            menuItemStyle,
            expandIconStyle,
            channelListContainer,
        } = styles;

        const {
            experienceChannels,
            channelNumber,
        } = this.props;

        return (
            <div style={mainContainerStyle}>
                <div style={mainWrapperStyle}>
                    <div style={topContainerStyle}>
                        <div style={searchBarWrapperSrtyle}>                        
                            <SearchBar
                                isShort={false}
                                placeholder="search channel(s)"
                            />
                        </div>
                        <div style={channelListButtonStyle}>
                            <Button
                                variant="Add a new channel"
                                style={fullBtnStyle}
                                onClick={() => this.props.handleAddChannelClick()}
                            >
                                Add Channel
                            </Button>
                        </div>
                    </div>
                    <div style={channelListInfoContainerStyle}>
                        <div style={channelListInfoWrapperStyle}>
                            <p style={channelNumberStyle}>{channelNumber} Channel(s)</p>
                            <DropdownMenu
                                isOpen={this.state.isMenuOpen}
                                close={this.handleCloseMenu}
                                toggle={
                                    <div>
                                        <Button style={dropdownBtnStyle} onClick={() => this.handleToggleMenu()}>All<ExpandMore style={expandIconStyle} /></Button>
                                    </div>
                                }
                                align={'center'}
                                size={'sm'}
                            >
                                <div>
                                    <p style={menuItemStyle}>First option</p>
                                </div>
                                <div>
                                    <p style={menuItemStyle}>Second option</p>
                                </div>
                            </DropdownMenu>
                        </div>
                    </div>

                    <div style={channelListContainer}>
                        {
                            experienceChannels.map((channel, index) => (
                                <ChannelListInfo
                                    key={index}
                                    backgroundColor={channel.ChannelColor}
                                    channelLabel={channel.ChannelName}
                                    isLive={channel.ChannelStatus == 'LIVE' ? true : false}
                                    handleEditChannel={() => this.props.handleEditChannel(channel)}
                                    handleActiveChannel={() => this.props.handleActiveChannel(channel)}
                                    handleDeactiveChannel={() => this.props.handleDeactiveChannel(channel)}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        width: sizes.dxWidth,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
    },
    mainWrapperStyle: {
        height: `calc(100vh - ${sizes.headerHeight})`,
        flex: 1,
        width: '100%'
    },
    topContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 36,
        paddingBottom: 48,
        //

    },
    searchBarWrapperSrtyle: {
        flex: 1
    },
    channelListInfoContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderBottom: '1px solid',
        borderColor: colors.whiteColor,
        height: 54,
    },
    channelListInfoWrapperStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    channelListButtonStyle: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    questionMarkLabelStyle: {
        margin: '0px 12px 0px 15px',
        color: colors.lightGreyColor,
    },
    fullBtnStyle: {
        backgroundColor: colors.blueColor,
        color: colors.whiteColor,
        textTransform: 'none',
    },
    dropdownBtnStyle: {
        padding: 0,
        textTransform: 'none',
        fontSize: fonts.h2,
        color: colors.labelColor,
    },
    expandIconStyle: {
        color: colors.lightGreyColor
    },
    channelNumberStyle: {
        fontSize: fonts.h2,
        color: colors.labelColor,
    },
    channelListContainer: {
        overflowY: 'scroll',
        display: 'flex',
        flexWrap: 'wrap',
        height: `calc(100vh - ${sizes.headerHeight} - 116px - 60px - 36px)`,
        paddingTop: 36,
    },
    menuItemStyle: {
        margin: 0,
        paddingTop: 9,
        paddingBottom: 9,
        textAlign: 'center',
        borderBottom: '1px solid',
        borderColor: colors.borderColor,
    },
    textFieldStyle: {
        height: 30
    },
    serachIconStyle: {
        height: 18,
        width: 18,
        marginRight: 9,
        color: colors.lightGreyColor
    }
}

export default ChannelList;