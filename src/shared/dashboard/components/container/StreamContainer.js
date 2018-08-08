import React, { Component } from 'react';

// libraries
import SearchBar from 'material-ui-search-bar';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Lock from '@material-ui/icons/Lock';
import DropdownMenu from 'react-dd-menu';
import Button from '@material-ui/core/Button';

// constants
import sizes from '../../../styles/sizes';
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

// component
import ChannelStreamsTemplate from '../presentation/streams/ChannelStreamsTemplate'
import ReadyToStreamTemplate from '../presentation/streams/ReadyToStreamTemplate';
import LiveStreamTemplate from '../presentation/streams/LiveStreamTemplate';

// redux
import { connect } from 'react-redux';
import {
    dxFetchStreamChannel as dxFetchStreamChannelAction,
    dxSelectStreamChannel as dxSelectStreamChannelAction,
} from '../../actions';

class StreamContainer extends Component {

    state = {
        isMenuOpen: false,
    }

    componentDidMount() {
        // 1. Fetch active experience channels
        this.props.dxFetchStreamChannelAction();
    }

    handleToggleMenu = () => {
        this.setState({
            isMenuOpen: !this.state.isMenuOpen
        });
    }

    handleCloseMenu = () => {
        this.setState({ isMenuOpen: false });
    }

    handleSearchChannel = (value) => {
        console.log('value: ', value)
    }

    handleSelectChannel = (channel) => {
        this.props.dxSelectStreamChannelAction(channel);
    }

    renderActiveChannelList = () => {
        const {
            CurrentStreamChannel,
            StreamActiveChannels,
        } = this.props;
        let list = StreamActiveChannels.map((channel, index) => (
            <ChannelStreamsTemplate
                channel={channel}
                active={CurrentStreamChannel.ExperienceChannelGUID == channel.ExperienceChannelGUID ? true : false}
                handleSelectChannel={() => this.handleSelectChannel(channel)}
            />
        ))
        return list;
    }

    render() {

        const {
            mainContainerStyle,
            topContainerStyle,
            topWrapperStyle,
            targetWrapperStyle,
            targetLabelStyle,
            dropdownWrapperStyle,
            dropdownBtnStyle,
            expandIconStyle,
            dropdownOptionBtnStyle,
            dropdownMobileBtnStyle,
            dropdownWebBtnStyle,
            dropdownBtnImgStyle,
            dropdownBtnTextStyle,
            imgStyle,
            mobileOptionTopLabelStyle,
            mobileOptionBottomLabelStyle,
            comingSoonWrapperStyle,
            comingSoonStyle,
            comingSoonLabelStyle,
            webOptionTopLabelStyle,
            webOptionBottomLabelStyle,

            middleContainerstyle,
            middleWrapperStyle,
            channelLabelWrapperStyle,
            totalChannelWrapperStyle,
            totalNumberStyle,
            channelLabelStyle,
            totalLabelstyle,

            bottomContainerStyle,
            leftContainerStyle,
            channelSearchContainerStyle,
            channelInfoWrapperStyle,
            searchBarWrapperStyle,
            searchBarStyle,
            tipsWrapperStyle,
            tipsHeaderStyle,
            tipsLabelStyle,
            clickHereLinkStyle,

            rightContainerStyle,
            streamsContainerStyle,
            currentChannleWrapperStyle,
            currentChannelNameStyle,
            currentChannelDescriptionStyle,
            liveStreamLabelStyle,
            liveStreamNumberStyle,
            liveStreamWrapperStyle,
            liveStreamLabelContainerStyle,
            readyToStreamLabelWrapperStyle,
            readyToStreamLabelStyle,
            readyToStreamNumberStyle,
            readyToStreamWrapperStyle,

        } = styles;

        const {
            CurrentStreamChannel,
            TotalStreamActiveChannelRecord,
        } = this.props;

        return (
            <div style={mainContainerStyle}>
                <div style={topContainerStyle}>
                    <div style={topWrapperStyle}>
                        <div style={targetWrapperStyle}>
                            <p style={targetLabelStyle}>Target</p>
                        </div>
                        <div style={dropdownWrapperStyle}>
                            <DropdownMenu
                                isOpen={this.state.isMenuOpen}
                                close={this.handleCloseMenu}
                                toggle={
                                    <div>
                                        <Button
                                            style={dropdownBtnStyle}
                                            onClick={() => this.handleToggleMenu()}
                                        >Mobile (iOS / Android)<ExpandMore style={expandIconStyle} /></Button>
                                    </div>
                                }
                                align={'right'}
                                size={'md'}
                            >
                                <div>
                                    <Button
                                        style={dropdownOptionBtnStyle}
                                    >
                                        <div style={dropdownMobileBtnStyle}>
                                            <div style={dropdownBtnImgStyle}>
                                                <img
                                                    style={imgStyle}
                                                    src={require('../../../../../assets/images/mob_icon.png')}
                                                />
                                            </div>
                                            <div style={dropdownBtnTextStyle}>
                                                <p style={mobileOptionTopLabelStyle}>Mobile (iOS / Android)</p>
                                                <p style={mobileOptionBottomLabelStyle}>Users viewing streams using native iOS and Android mobile apps</p>
                                            </div>
                                        </div>
                                    </Button>
                                </div>
                                <div>
                                    <Button
                                        style={dropdownOptionBtnStyle}
                                    >
                                        <div style={comingSoonWrapperStyle}>
                                            <div style={comingSoonStyle}>
                                                <p style={comingSoonLabelStyle}>Coming Soon</p>
                                            </div>
                                            <div style={dropdownWebBtnStyle}>
                                                <div style={dropdownBtnImgStyle}>
                                                    <Lock />
                                                </div>
                                                <div style={dropdownBtnTextStyle}>
                                                    <p style={webOptionTopLabelStyle}>Web application</p>
                                                    <p style={webOptionBottomLabelStyle}>Users viewing streams using their web browsers</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Button>
                                </div>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>

                <div style={middleContainerstyle}>
                    <div style={middleWrapperStyle}>
                        <div style={channelLabelWrapperStyle}>
                            <p style={channelLabelStyle}>Channel(s)</p>
                        </div>
                        <div style={totalChannelWrapperStyle}>
                            <p style={totalNumberStyle}>{TotalStreamActiveChannelRecord}</p>
                            <p style={totalLabelstyle}>Total</p>
                        </div>
                    </div>
                </div>

                <div style={bottomContainerStyle}>

                    <div style={leftContainerStyle}>
                        <div style={channelSearchContainerStyle}>
                            <div style={searchBarWrapperStyle}>
                                <SearchBar
                                    value={this.state.value}
                                    onChange={(val) => this.handleSearchChannel(val)}
                                    style={searchBarStyle}
                                    placeholder={'Type for search'}
                                />
                            </div>
                            <div style={channelInfoWrapperStyle}>
                                {this.renderActiveChannelList()}
                            </div>
                            <div style={tipsWrapperStyle}>
                                <p style={tipsHeaderStyle}>Tips:</p>
                                <p style={tipsLabelStyle}>Create your own channel to stream content related to your audiences’ interest to improve content discoverability and gather actionable insights. Click <a href='#' style={clickHereLinkStyle}>here</a> to create a new channel</p>
                            </div>
                        </div>
                    </div>

                    <div style={rightContainerStyle}>
                        <div style={streamsContainerStyle}>

                            {
                                CurrentStreamChannel ?
                                    <div style={currentChannleWrapperStyle}>
                                        <p style={Object.assign({}, currentChannelNameStyle, { color: CurrentStreamChannel.ChannelColor })}>{CurrentStreamChannel.ChannelName}</p>
                                        <p style={currentChannelDescriptionStyle}>{CurrentStreamChannel.ChannelDescription ? CurrentStreamChannel.ChannelDescription : 'No description..'}</p>
                                    </div>
                                    :
                                    null
                            }

                            <div style={liveStreamLabelContainerStyle}>
                                <span style={liveStreamLabelStyle}>LIVE STREAMS</span><span style={liveStreamNumberStyle}>(6)</span>
                            </div>
                            <div style={liveStreamWrapperStyle}>
                                <LiveStreamTemplate
                                    streamTitle="My Experience 1"
                                />
                            </div>

                            <div style={readyToStreamLabelWrapperStyle}>
                                <span style={readyToStreamLabelStyle}>READY TO STREAM</span><span style={readyToStreamNumberStyle}>(18)</span>
                            </div>
                            <div style={readyToStreamWrapperStyle}>
                                <ReadyToStreamTemplate />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}


const styles = {
    mainContainerStyle: {
        height: `calc(100vh - ${sizes.headerHeight})`,
        position: 'relative',
        width: '100%',
    },
    topContainerStyle: {
        height: 66,
        display: 'flex',
        paddingTop: 18
    },
    topWrapperStyle: {
        flex: '320px 0 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    targetWrapperStyle: {

    },
    targetLabelStyle: {
        margin: 0,
        fontSize: fonts.h1
    },
    dropdownWrapperStyle: {

    },
    dropdownBtnStyle: {
        padding: 0,
        textTransform: 'none',
        fontSize: fonts.h1
    },
    expandIconStyle: {
        color: colors.lightGreyColor
    },
    dropdownOptionBtnStyle: {
        width: '100%',
        padding: 0,
        textTransform: 'none'
    },
    dropdownMobileBtnStyle: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        borderBottom: '0.25px solid #D9DDE2',
        paddingLeft: 12,
        paddingRight: 24
    },
    dropdownWebBtnStyle: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
    dropdownBtnImgStyle: {
        flex: 1,
        alignSelf: 'center',
    },
    dropdownBtnTextStyle: {
        flex: 8,
        flexDirection: 'column',
        textAlign: 'left',
        marginLeft: 6,
    },
    imgStyle: {
        height: 42,
        width: 24
    },
    mobileOptionTopLabelStyle: {
        marginTop: 12,
        marginBottom: 6,
        fontSize: fonts.h3
    },
    mobileOptionBottomLabelStyle: {
        marginTop: 0,
        marginBottom: 12,
        color: colors.lightGreyColor,
        fontSize: fonts.h4
    },
    webOptionTopLabelStyle: {
        marginTop: 0,
        marginBottom: 6,
        fontSize: fonts.h3
    },
    webOptionBottomLabelStyle: {
        margin: 0,
        color: colors.lightGreyColor,
        fontSize: fonts.h4
    },
    comingSoonWrapperStyle: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginBottom: 32,
        marginLeft: 12
    },
    comingSoonStyle: {
        alignSelf: 'flex-end',
        background: colors.blackColor,
        width: 90,
        padding: 6,

    },
    comingSoonLabelStyle: {
        margin: 0,
        fontSize: fonts.h4,
        color: colors.whiteColor,
    },

    middleContainerstyle: {
        height: 48,
        display: 'flex',
    },
    middleWrapperStyle: {
        flex: '320px 0 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    channelLabelWrapperStyle: {

    },
    channelLabelStyle: {
        margin: 0,
        fontSize: fonts.h1
    },
    totalChannelWrapperStyle: {
        paddingRight: 6,
        display: 'flex',
    },
    totalNumberStyle: {
        margin: 0,
        fontSize: fonts.h3,
        color: colors.lightGreyColor
    },
    totalLabelstyle: {
        margin: 0,
        fontSize: fonts.h3,
        color: colors.lightGreyColor,
        marginLeft: 3
    },

    bottomContainerStyle: {
        height: `calc(100% - 240px)`,
        position: 'relative',
        display: 'flex'
    },
    leftContainerStyle: {
        background: colors.whiteColor,
        height: '100%',
        flex: '320px 0 0',
    },
    channelSearchContainerStyle: {
        height: '100%'
    },
    searchBarWrapperStyle: {
        borderBottom: '1px solid #D9DDE2',
        height: 48
    },
    searchBarStyle: {
        boxShadow: 'none',
        paddingLeft: 6,
        height: '100%'
    },
    channelInfoWrapperStyle: {
        height: 'calc(100% - 174px)',
        flexDirection: 'column',
        overflowY: 'scroll',
    },
    tipsWrapperStyle: {
        height: 114,
        padding: '12px 12px 0px 12px'
    },
    tipsHeaderStyle: {
        marginBottom: 12,
        marginTop: 0,
        fontSize: fonts.h4
    },
    tipsLabelStyle: {
        fontSize: fonts.h4,
        margin: 0,
    },
    clickHereLinkStyle: {
        color: colors.blueColor
    },

    rightContainerStyle: {
        height: '100%',
        flex: '832px 0 0',
        paddingLeft: 48,

    },
    streamsContainerStyle: {
        height: '100%'
    },
    currentChannleWrapperStyle: {
        backgroundColor: colors.whiteColor,
        padding: 12,
        height: 78,
        marginBottom: 24,
    },
    currentChannelNameStyle: {
        margin: 0,
        paddingBottom: 12,
        fontSize: fonts.h1
    },
    currentChannelDescriptionStyle: {
        margin: 0,
        color: colors.lightGreyColor,
        fontSize: fonts.h3
    },
    liveStreamLabelContainerStyle: {
        marginBottom: 12,
    },
    liveStreamLabelStyle: {
        margin: 0,
        color: colors.labelColor,
        fontSize: fonts.h3,
    },
    liveStreamNumberStyle: {
        margin: 0,
        paddingLeft: 12,
        color: colors.labelColor,
        fontSize: fonts.h3,
    },
    liveStreamWrapperStyle: {
        overflowY: 'scroll',
        height: `calc((100% - 198px)/2)`,
    },
    readyToStreamLabelWrapperStyle: {
        marginBottom: 12,
    },
    readyToStreamLabelStyle: {
        margin: 0,
        color: colors.labelColor,
        fontSize: fonts.h3,
    },
    readyToStreamNumberStyle: {
        margin: 0,
        paddingLeft: 12,
        color: colors.labelColor,
        fontSize: fonts.h3,
    },
    readyToStreamWrapperStyle: {
        overflowY: 'scroll',
        height: `calc((100% - 198px)/2)`,
    },
}

const stateToProps = (state) => {
    return {
        history: state.root.history,
        CurrentStreamChannel: state.dashboard.CurrentStreamChannel,
        StreamActiveChannels: state.dashboard.StreamActiveChannels,
        TotalStreamActiveChannelRecord: state.dashboard.TotalStreamActiveChannelRecord,
    }
}

const dispatchToProps = {
    dxFetchStreamChannelAction,
    dxSelectStreamChannelAction,
}

export default connect(stateToProps, dispatchToProps)(StreamContainer);