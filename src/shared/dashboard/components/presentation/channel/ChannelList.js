import React, { Component } from 'react';

// Libraries
import Button from '@material-ui/core/Button';
import DropdownMenu from 'react-dd-menu';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Lock from '@material-ui/icons/Lock';
import Language from '@material-ui/icons/Language';
import Fingerprint from '@material-ui/icons/Fingerprint';
import Edit from '@material-ui/icons/Edit';
import FlashOn from '@material-ui/icons/FlashOn';
import FlashOff from '@material-ui/icons/FlashOff';

// constants
import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';
import sizes from '../../../../styles/sizes';

// components
import ChannelListInfo from './ChannelListInfo';
import SearchBar from '../../../../components/searchBar/SearchBar';

class ChannelList extends Component {

    state = {
        isMenuOpen: false,
        isChannelTypeMenuOpen: false,
        channelTypeFilterLabel: 'All channel',
        channelTypeFilter: 'ALL',
        isChannelStatusMenuOpen: false,
        channelStatusFilterLabel: 'All',
        channelStatusFilter: 'ALL',
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

    handleToggleChannelTypeMenu = () => {
        this.setState({
            isChannelTypeMenuOpen: !this.state.isChannelTypeMenuOpen
        });
    }

    handleCloseChannelTypeMenu = () => {
        this.setState({ isChannelTypeMenuOpen: false });
    }

    handleToggleChannelStatusMenu = () => {
        this.setState({
            isChannelStatusMenuOpen: !this.state.isChannelStatusMenuOpen
        });
    }

    handleCloseChannelStatusMenu = () => {
        this.setState({ isChannelStatusMenuOpen: false });
    }

    render() {

        const {
            tableContainerStyle,
            tableWrapperStyle,
            mainContainerStyle,
            mainWrapperStyle,
            topContainerStyle,
            searchBarWrapperSrtyle,

            channelTypeFilterContainerStyle,
            channelTypeFilterLabelContainerStyle,
            channelTypeFilterLabelStyle,
            channelTypeDropdownWrapperStyle,
            channelTypeDropdownBtnStyle,
            channelTypeFilterOptionContainerStyle,
            channelTypeFilterOptionIconContainerStyle,
            channelTypeFilterOptionIconStyle,
            channelTypeFilterOptionTextContainerStyle,
            channelTypeFilterOptionTextStyle,

            channelStatusFilterContainerStyle,
            channelStatusFilterLabelContainerStyle,
            channelStatusFilterLabelStyle,
            channelStatusDropdownWrapperStyle,
            channelStatusDropdownBtnStyle,
            channelStatusFilterOptionContainerStyle,
            channelStatusFilterOptionIconContainerStyle,
            channelStatusFilterOptionIconStyle,
            channelStatusFilterOptionTextContainerStyle,
            channelStatusFilterOptionTextStyle,

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
                        <div style={channelTypeFilterContainerStyle}>
                            <div style={channelTypeFilterLabelContainerStyle}>
                                <div style={tableContainerStyle}>
                                    <div style={tableWrapperStyle}>
                                        <p style={channelTypeFilterLabelStyle}>Type</p>
                                    </div>
                                </div>
                            </div>
                            <div style={channelTypeDropdownWrapperStyle}>
                                <DropdownMenu
                                    className="dx_channel_filter_menu"
                                    isOpen={this.state.isChannelTypeMenuOpen}
                                    close={this.handleCloseChannelTypeMenu}
                                    toggle={
                                        <Button
                                            style={Object.assign({}, channelTypeDropdownBtnStyle, !this.state.isChannelTypeMenuOpen ? { borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px' } : { borderTop: '1px solid', borderLeft: '1px solid', borderRight: '1px solid', borderColor: colors.borderColor })}
                                            onClick={() => this.handleToggleChannelTypeMenu()}
                                        >{this.state.channelTypeFilterLabel}<ExpandMore style={expandIconStyle} /></Button>
                                    }
                                    align={'center'}
                                    size={'md'}
                                >
                                    <div style={Object.assign({}, channelTypeFilterOptionContainerStyle)}>
                                        <div style={channelTypeFilterOptionIconContainerStyle}>
                                            icon
                                        </div>
                                        <div style={channelTypeFilterOptionTextContainerStyle}>
                                            <div style={tableContainerStyle}>
                                                <div style={tableWrapperStyle}>
                                                    text
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={Object.assign({}, channelTypeFilterOptionContainerStyle, { borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px' })}>
                                        <div style={channelTypeFilterOptionIconContainerStyle}>
                                            icon
                                        </div>
                                        <div style={channelTypeFilterOptionTextContainerStyle}>
                                            <div style={tableContainerStyle}>
                                                <div style={tableWrapperStyle}>
                                                    text
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </DropdownMenu>
                            </div>
                        </div>
                        <div style={channelStatusFilterContainerStyle}>
                            <div style={channelStatusFilterLabelContainerStyle}>
                                <div style={tableContainerStyle}>
                                    <div style={tableWrapperStyle}>
                                        <p style={channelStatusFilterLabelStyle}>Status</p>
                                    </div>
                                </div>
                            </div>
                            <div style={channelStatusDropdownWrapperStyle}>
                                <DropdownMenu
                                    className="dx_channel_filter_menu"
                                    isOpen={this.state.isChannelStatusMenuOpen}
                                    close={this.handleCloseChannelStatusMenu}
                                    toggle={
                                        <Button
                                            style={Object.assign({}, channelStatusDropdownBtnStyle, !this.state.isChannelStatusMenuOpen ? { borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px' } : { borderTop: '1px solid', borderLeft: '1px solid', borderRight: '1px solid', borderColor: colors.borderColor })}
                                            onClick={() => this.handleToggleChannelStatusMenu()}
                                        >{this.state.channelStatusFilterLabel}<ExpandMore style={expandIconStyle} /></Button>
                                    }
                                    align={'center'}
                                    size={'md'}
                                >
                                    <div style={Object.assign({}, channelStatusFilterOptionContainerStyle)}>
                                        <div style={channelStatusFilterOptionIconContainerStyle}>
                                            icon
                                        </div>
                                        <div style={channelStatusFilterOptionTextContainerStyle}>
                                            <div style={tableContainerStyle}>
                                                <div style={tableWrapperStyle}>
                                                    text
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={Object.assign({}, channelStatusFilterOptionContainerStyle, { borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px' })}>
                                        <div style={channelStatusFilterOptionIconContainerStyle}>
                                            icon
                                        </div>
                                        <div style={channelStatusFilterOptionTextContainerStyle}>
                                            <div style={tableContainerStyle}>
                                                <div style={tableWrapperStyle}>
                                                    text
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </DropdownMenu>
                            </div>
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
                                align={'right'}
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
                                    channelType={channel.ChannelType}
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
    },
    searchBarWrapperSrtyle: {
        flex: 1,
    },


    expandIconStyle: {
        paddingLeft: 3,
        fontSize: '18px',
        color: colors.blackColor
    },
    channelTypeFilterContainerStyle: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
    },
    channelTypeFilterLabelContainerStyle: {
        flex: '60px 0 0'
    },
    channelTypeFilterLabelStyle: {
        margin: 0,
        fontSize: fonts.h3,
        color: colors.labelColor,
        textAlign: 'center',
    },
    channelTypeDropdownWrapperStyle: {
        flex: 1,
    },
    channelTypeDropdownBtnStyle: {
        textTransform: 'none',
        fontSize: fonts.h4,
        backgroundColor: colors.whiteColor,
        borderTopLeftRadius: '12px',
        borderTopRightRadius: '12px',
        width: '130px',
    },
    channelTypeFilterOptionContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
        height: 36,
        paddingLeft: 6,
        paddingRight: 6,
        cursor: 'pointer',
        border: '1px solid',
        borderTop: 'none',
        borderColor: colors.borderColor,
        boxSizing: 'border-box'
    },
    channelTypeFilterOptionIconContainerStyle: {
        flex: '14px 0 0',
        height: 36,
        position: 'relative',
    },
    channelTypeFilterOptionIconStyle: {
        position: 'absolute',
        top: 9,
        left: 0,
        width: 14,
        height: 14,
    },
    channelTypeFilterOptionTextContainerStyle: {
        flex: 1,
        height: 36,
        paddingLeft: 3,
    },
    channelTypeFilterOptionTextStyle: {
        margin: 0,
        fontSize: fonts.h4,
        color: colors.blackColor
    },




    channelStatusFilterContainerStyle: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
    },
    channelStatusFilterLabelContainerStyle: {
        flex: '60px 0 0'
    },
    channelStatusFilterLabelStyle: {
        margin: 0,
        fontSize: fonts.h3,
        color: colors.labelColor,
        textAlign: 'center',
    },
    channelStatusDropdownWrapperStyle: {
        flex: 1,
    },
    channelStatusDropdownBtnStyle: {
        textTransform: 'none',
        fontSize: fonts.h4,
        backgroundColor: colors.whiteColor,
        borderTopLeftRadius: '12px',
        borderTopRightRadius: '12px',
        width: '130px',
    },
    channelStatusFilterOptionContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
        height: 36,
        paddingLeft: 6,
        paddingRight: 6,
        cursor: 'pointer',
        border: '1px solid',
        borderTop: 'none',
        borderColor: colors.borderColor,
        boxSizing: 'border-box'
    },
    channelStatusFilterOptionIconContainerStyle: {
        flex: '14px 0 0',
        height: 36,
        position: 'relative',
    },
    channelStatusFilterOptionIconStyle: {
        position: 'absolute',
        top: 9,
        left: 0,
        width: 14,
        height: 14,
    },
    channelStatusFilterOptionTextContainerStyle: {
        flex: 1,
        height: 36,
        paddingLeft: 3,
    },
    channelStatusFilterOptionTextStyle: {
        margin: 0,
        fontSize: fonts.h4,
        color: colors.blackColor
    },

    channelListInfoContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        height: 54,
    },
    channelListInfoWrapperStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: 240,
        borderBottom: '1px solid',
        borderColor: colors.borderColor
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
    channelNumberStyle: {
        fontSize: fonts.h2,
        color: colors.labelColor,
    },
    channelListContainer: {
        overflowY: 'scroll',
        display: 'flex',
        flexWrap: 'wrap',
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