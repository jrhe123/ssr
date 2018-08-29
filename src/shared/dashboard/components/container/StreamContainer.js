import React, { Component } from 'react';

// libraries
import SearchBar from 'material-ui-search-bar';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Lock from '@material-ui/icons/Lock';
import Language from '@material-ui/icons/Language';
import Fingerprint from '@material-ui/icons/Fingerprint';
import DropdownMenu from 'react-dd-menu';
import Button from '@material-ui/core/Button';

// constants
import sizes from '../../../styles/sizes';
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

// component
import ChannelStream from '../presentation/streams/ChannelStream'
import ReadyToStream from '../presentation/streams/ReadyToStream';
import ChannelTab from '../presentation/streams/ChannelTab';
import LiveStream from '../presentation/streams/LiveStream';
import DxModal from '../../../components/dxModal/DxModal';
import DxSearchBar from '../../../components/searchBar/SearchBar';

// redux
import { connect } from 'react-redux';
import {
    dxDashboardNavi as dxDashboardNaviAction,
    dxFetchStreamChannel as dxFetchStreamChannelAction,
    dxSelectStreamChannel as dxSelectStreamChannelAction,
    dxCreateStream as dxCreateStreamAction,
    dxRemoveStream as dxRemoveStreamAction,
} from '../../actions';

// styles
import '../../../../../assets/css/material-ui-search-bar/index.css';

class StreamContainer extends Component {

    state = {
        isMenuOpen: false,
        isChannelMenuOpen: false,
        isModalOpen: false,
        modalType: 'CREATE',
        modalTitle: '',
        modalDesc: '',
        isContentModal: false,
        modalContent: null,
        isModalDanger: false,
        targetExperience: {},
        targetExperienceStream: {},
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

    handleToggleChannelMenu = () => {
        this.setState({
            isChannelMenuOpen: !this.state.isChannelMenuOpen
        });
    }

    handleCloseChannelMenu = () => {
        this.setState({ isChannelMenuOpen: false });
    }

    handleSelectChannel = (channel) => {
        this.props.dxSelectStreamChannelAction(channel);
    }

    handleConfirmModal = () => {
        const {
            modalType,
        } = this.state;
        if (modalType == 'CREATE') {
            this.handleConfirmLiveStream();
        } else if (modalType == 'REMOVE') {
            this.handleConfirmRemoveLiveStream();
        }
    }

    handleCloseModal = () => {
        this.setState({ isModalOpen: false });
    }

    handleGoLiveStream = (experience) => {
        this.setState({
            isModalOpen: true,
            modalType: 'CREATE',
            modalTitle: 'Confirm Stream Experience',
            modalDesc: 'Do you want to proceed?',
            isContentModal: false,
            isModalDanger: false,
            targetExperience: experience,
        })
    }

    handleConfirmLiveStream = () => {
        const {
            targetExperience
        } = this.state;

        const {
            CurrentStreamChannel
        } = this.props;

        this.setState({ isModalOpen: false });
        this.props.dxCreateStreamAction(CurrentStreamChannel, targetExperience);
    }

    handleRemoveStream = (experienceStream) => {
        this.setState({
            isModalOpen: true,
            modalType: 'REMOVE',
            modalTitle: 'Confirm Remove Stream',
            modalDesc: 'Do you want to proceed?',
            isContentModal: false,
            isModalDanger: true,
            targetExperienceStream: experienceStream,
        })
    }

    handleConfirmRemoveLiveStream = () => {
        const {
            targetExperienceStream,
        } = this.state;

        this.setState({ isModalOpen: false });
        this.props.dxRemoveStreamAction(targetExperienceStream.ExperienceStreamGUID);
    }

    handleNavigateToChannel = () => {
        this.props.dxDashboardNaviAction(1);
    }

    handleNavigateToExperience = () => {
        this.props.dxDashboardNaviAction(0);
    }

    handleClickOtherStreamHyper = (experience) => {
        const {
            modalSearchContainerStyle,
            modalChannelTabListContainerStyle,
        } = styles;

        const content = (
            <div>
                <div style={modalSearchContainerStyle}>
                    <DxSearchBar
                        isShort={false}
                        placeholder="search channel(s)"
                    />
                </div>
                <div style={modalChannelTabListContainerStyle}>
                    {
                        experience.ExperienceStreams.map((experienceStream, index) => (
                            <ChannelTab
                                channelName={experienceStream.ChannelName}
                                channelColor={experienceStream.ChannelColor}
                            />
                        ))
                    }
                </div>
            </div>
        );
        this.setState({
            isModalOpen: true,
            modalType: 'VIEW',
            modalTitle: experience.ExperienceTitle,
            modalDesc: `Currently streamed in ${experience.ExperienceStreams.length} channels`,
            isContentModal: true,
            modalContent: content,
            isModalDanger: false,
            targetExperience: experience,
        })
    }

    renderActiveChannelList = () => {
        const {
            CurrentStreamChannel,
            StreamActiveChannels,
        } = this.props;

        const {
            tableContainerStyle,
            tableWrapperStyle,
            channelMsgContainerStyle,
            channelMsgStyle
        } = styles;

        if (!StreamActiveChannels.length) {
            return (
                <div style={channelMsgContainerStyle}>
                    <div style={tableContainerStyle}>
                        <div style={tableWrapperStyle}>
                            <p style={channelMsgStyle}>No channels found</p>
                        </div>
                    </div>
                </div>
            )
        }

        let list = StreamActiveChannels.map((channel, index) => (
            <ChannelStream
                channel={channel}
                active={CurrentStreamChannel.ExperienceChannelGUID == channel.ExperienceChannelGUID ? true : false}
                handleSelectChannel={() => this.handleSelectChannel(channel)}
            />
        ))
        return list;
    }

    render() {

        const {
            tableContainerStyle,
            tableWrapperStyle,
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

            channelFilterContainerStyle,
            channelDropdownWrapperStyle,
            channelDropdownBtnStyle,
            channelFilterOptionContainerStyle,
            channelFilterOptionWrapperStyle,
            channelFilterOptionIconContainerStyle,
            channelFilterOptionIconStyle,
            channelFilterOptionTextContainerStyle,
            channelFilterOptionTextStyle,

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
            streamsWrapperStyle,
            currentChannleContainerStyle,
            currentChannelNameStyle,
            currentChannelDescriptionWrapperStyle,
            currentChannelDescriptionStyle,
            liveStreamLabelStyle,
            liveStreamNumberStyle,
            liveStreamWrapperStyle,
            liveStreamLabelContainerStyle,
            readyToStreamLabelWrapperStyle,
            readyToStreamLabelStyle,
            readyToStreamNumberStyle,
            readyToStreamWrapperStyle,

            liveMsgContainerStyle,
            liveMsgWrapperStyle,
            liveMsgStyle,
            goLabelStyle,
            sectionLabelStyle,
            pendingMsgContainerStyle,
            pendingMsgWrapperStyle,
            pendingMsgStyle,
        } = styles;

        const {
            CurrentStreamChannel,
            TotalLiveExperienceStreamRecord,
            LiveExperienceStreams,
            TotalPendingExperienceRecord,
            PendingExperiences,

            StreamChannelSearchInput,
            TotalStreamActiveChannelRecord,
            StreamChannelTypeFilter,
            StreamChannelTypeFilterLabel,
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
                        <div style={channelFilterContainerStyle}>
                            <div style={channelDropdownWrapperStyle}>
                                <DropdownMenu
                                    className="dx_channel_type_filter_menu"
                                    isOpen={this.state.isChannelMenuOpen}
                                    close={this.handleCloseChannelMenu}
                                    toggle={
                                        <Button
                                            style={Object.assign({}, channelDropdownBtnStyle, !this.state.isChannelMenuOpen ? { borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px' } : { borderTop: '1px solid', borderLeft: '1px solid', borderRight: '1px solid', borderColor: colors.borderColor })}
                                            onClick={() => this.handleToggleChannelMenu()}
                                        >{StreamChannelTypeFilterLabel}<ExpandMore style={expandIconStyle} /></Button>
                                    }
                                    align={'center'}
                                    size={'md'}
                                >
                                    <div style={Object.assign({}, channelFilterOptionContainerStyle)}>
                                        <div style={channelFilterOptionWrapperStyle}>
                                            <div style={channelFilterOptionTextContainerStyle}>
                                                <div style={tableContainerStyle}>
                                                    <div style={tableWrapperStyle}>
                                                        <p style={channelFilterOptionTextStyle}>All channel</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={Object.assign({}, channelFilterOptionContainerStyle)}>
                                        <div style={channelFilterOptionWrapperStyle}>
                                            <div style={channelFilterOptionIconContainerStyle}>
                                                <Language style={channelFilterOptionIconStyle} />
                                            </div>
                                            <div style={channelFilterOptionTextContainerStyle}>
                                                <div style={tableContainerStyle}>
                                                    <div style={tableWrapperStyle}>
                                                        <p style={channelFilterOptionTextStyle}>Public channel</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={Object.assign({}, channelFilterOptionContainerStyle, { borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px' })}>
                                        <div style={channelFilterOptionWrapperStyle}>
                                            <div style={channelFilterOptionIconContainerStyle}>
                                                <Fingerprint style={channelFilterOptionIconStyle} />
                                            </div>
                                            <div style={channelFilterOptionTextContainerStyle}>
                                                <div style={tableContainerStyle}>
                                                    <div style={tableWrapperStyle}>
                                                        <p style={channelFilterOptionTextStyle}>Password channel</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </DropdownMenu>
                            </div>
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
                                    className="dx_stream_search_bar"
                                    value={StreamChannelSearchInput}
                                    style={searchBarStyle}
                                    placeholder={'Type for search'}
                                    onChange={(val) => this.handleSearchChannel(val)}
                                />
                            </div>
                            <div style={channelInfoWrapperStyle}>
                                {this.renderActiveChannelList()}
                            </div>
                            <div style={tipsWrapperStyle}>
                                <p style={tipsHeaderStyle}>Tips:</p>
                                <p style={tipsLabelStyle}>Create your own channel to stream content related to your audiences’ interest to improve content discoverability and gather actionable insights. Click <a onClick={() => this.handleNavigateToChannel()} style={clickHereLinkStyle}>here</a> to create a new channel</p>
                            </div>
                        </div>
                    </div>

                    <div style={rightContainerStyle}>
                        <div style={streamsContainerStyle}>

                            {
                                CurrentStreamChannel.ExperienceChannelGUID ?
                                    <div style={streamsWrapperStyle}>
                                        <div style={currentChannleContainerStyle}>
                                            <p style={Object.assign({}, currentChannelNameStyle, { color: CurrentStreamChannel.ChannelColor })}>{CurrentStreamChannel.ChannelName}</p>
                                            <div style={currentChannelDescriptionWrapperStyle}>
                                                <p style={currentChannelDescriptionStyle}>{CurrentStreamChannel.ChannelDescription ? CurrentStreamChannel.ChannelDescription : 'No description..'}</p>
                                            </div>
                                        </div>

                                        <div style={liveStreamLabelContainerStyle}>
                                            <span style={liveStreamLabelStyle}>LIVE STREAMS</span><span style={liveStreamNumberStyle}>({TotalLiveExperienceStreamRecord})</span>
                                        </div>
                                        {
                                            LiveExperienceStreams.length ?
                                                <div style={liveStreamWrapperStyle}>
                                                    {
                                                        LiveExperienceStreams.map((stream, index) => (
                                                            <LiveStream
                                                                streamTitle={stream.ExperienceTitle}
                                                                handleRemoveStream={() => this.handleRemoveStream(stream)}
                                                            />
                                                        ))
                                                    }
                                                </div>
                                                :
                                                <div style={liveMsgContainerStyle}>
                                                    <div style={liveMsgWrapperStyle}>
                                                        <div style={tableContainerStyle}>
                                                            <div style={tableWrapperStyle}>
                                                                {
                                                                    PendingExperiences.length ?
                                                                        <p style={liveMsgStyle}>Click the green <span style={goLabelStyle}>Go Live</span> button in the below <span style={sectionLabelStyle}>READY TO STREAM</span> section</p>
                                                                        :
                                                                        <p style={liveMsgStyle}>There are no ready to stream experience(s) found</p>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        }


                                        <div style={readyToStreamLabelWrapperStyle}>
                                            <span style={readyToStreamLabelStyle}>READY TO STREAM</span><span style={readyToStreamNumberStyle}>({TotalPendingExperienceRecord})</span>
                                        </div>
                                        {
                                            PendingExperiences.length ?
                                                <div style={readyToStreamWrapperStyle}>
                                                    {
                                                        PendingExperiences.map((experience, index) => (
                                                            <ReadyToStream
                                                                experience={experience}
                                                                handleGoLiveStream={() => this.handleGoLiveStream(experience)}
                                                                handleClickOtherStreamHyper={() => this.handleClickOtherStreamHyper(experience)}
                                                            />
                                                        ))
                                                    }
                                                </div>
                                                :
                                                <div style={pendingMsgContainerStyle}>
                                                    <div style={pendingMsgWrapperStyle}>
                                                        <div style={tableContainerStyle}>
                                                            <div style={tableWrapperStyle}>
                                                                <p style={pendingMsgStyle}>There are no experience(s) found to be streamed. Click <span onClick={() => this.handleNavigateToExperience()} style={clickHereLinkStyle}>here</span> to create a new experience</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        }
                                    </div>
                                    :
                                    <div style={currentChannleContainerStyle}>
                                        <div style={tableContainerStyle}>
                                            <div style={tableWrapperStyle}>
                                                <p style={currentChannelNameStyle}>Please select a channel to stream</p>
                                            </div>
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>

                </div>
                <DxModal
                    open={this.state.isModalOpen}
                    title={this.state.modalTitle}
                    hasBottomDiv={true}
                    description={this.state.modalDesc}
                    cancel={true}
                    confirm={true}
                    isContent={this.state.isContentModal}
                    content={this.state.modalContent}
                    isDanger={this.state.isModalDanger}
                    handleConfirm={() => this.handleConfirmModal()}
                    onCloseModal={() => this.handleCloseModal()}
                />
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
        textAlign: 'center'
    },
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
        fontSize: fonts.h2
    },
    dropdownWrapperStyle: {

    },
    dropdownBtnStyle: {
        padding: 0,
        textTransform: 'none',
        fontSize: fonts.h2
    },
    expandIconStyle: {
        paddingLeft: 3,
        fontSize: '18px',
        color: colors.blackColor
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
        fontSize: fonts.h2
    },
    channelFilterContainerStyle: {

    },
    channelDropdownWrapperStyle: {

    },
    channelDropdownBtnStyle: {
        textTransform: 'none',
        fontSize: fonts.h4,
        backgroundColor: colors.whiteColor,
        borderTopLeftRadius: '12px',
        borderTopRightRadius: '12px',
        width: '156px',
    },
    channelFilterOptionContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
        height: 36,
        cursor: 'pointer',
        border: '1px solid',
        borderTop: 'none',
        borderColor: colors.borderColor,
        boxSizing: 'border-box'
    },
    channelFilterOptionWrapperStyle: {
        display: 'inline-block',
        margin: '0 auto',
    },
    channelFilterOptionIconContainerStyle: {
        float: 'left',
        width: 14,
        height: 36,
        position: 'relative',
    },
    channelFilterOptionIconStyle: {
        position: 'absolute',
        top: 9,
        left: 0,
        width: 14,
        height: 14,
    },
    channelFilterOptionTextContainerStyle: {
        float: 'left',
        height: 36,
        paddingLeft: 3,
    },
    channelFilterOptionTextStyle: {
        margin: 0,
        fontSize: fonts.h4,
        color: colors.blackColor
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
        marginTop: 6,
        height: `calc(100% - 210px)`,
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
        height: '100%',
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
        textAlign: 'justify'
    },
    clickHereLinkStyle: {
        color: colors.blueColor,
        cursor: 'pointer',
    },

    rightContainerStyle: {
        height: '100%',
        flex: '832px 0 0',
        paddingLeft: 48,

    },
    streamsContainerStyle: {
        height: '100%'
    },
    streamsWrapperStyle: {
        height: '100%'
    },
    currentChannleContainerStyle: {
        backgroundColor: colors.whiteColor,
        padding: 12,
        height: 78,
        marginBottom: 24,
    },
    currentChannelNameStyle: {
        margin: 0,
        fontSize: fonts.h1
    },
    currentChannelDescriptionWrapperStyle: {
        height: 42,
        overflowY: 'scroll',
    },
    currentChannelDescriptionStyle: {
        margin: 0,
        marginTop: 12,
        color: colors.lightGreyColor,
        fontSize: fonts.h3,
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
        overflowY: 'auto',
        height: 'calc((100% - 212px)/2)',
        marginBottom: 18,
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
        overflowY: 'auto',
        height: 'calc((100% - 212px)/2)',
    },

    liveMsgContainerStyle: {
        height: 'calc((100% - 212px)/2)',
        marginBottom: 18,
    },
    liveMsgWrapperStyle: {
        height: 72,
        marginBottom: 106,
        border: '1px dotted',
        borderColor: colors.blueBorderColor,
        backgroundColor: colors.whiteColor,
    },
    liveMsgStyle: {
        color: colors.greyLabelColor,
        fontSize: fonts.h3,
        margin: 0,
    },
    goLabelStyle: {
        color: colors.greenColor,
        fontWeight: 'bold'
    },
    sectionLabelStyle: {
        color: colors.blackColor,
        fontWeight: 'bold'
    },
    pendingMsgContainerStyle: {
        height: 'calc((100% - 212px)/2)',
    },
    pendingMsgWrapperStyle: {
        height: 72,
        marginBottom: 24,
        border: '1px dotted',
        borderColor: colors.blueBorderColor,
        backgroundColor: colors.whiteColor,
    },
    pendingMsgStyle: {
        color: colors.greyLabelColor,
        fontSize: fonts.h3,
        margin: 0,
    },
    channelMsgContainerStyle: {
        height: 48,
    },
    channelMsgStyle: {
        fontSize: fonts.h3,
        color: colors.labelColor,
    },

    modalSearchContainerStyle: {
        marginBottom: 18
    },
    modalChannelTabListContainerStyle: {

    },
}

const stateToProps = (state) => {
    return {
        history: state.root.history,
        CurrentStreamChannel: state.dashboard.CurrentStreamChannel,
        TotalLiveExperienceStreamRecord: state.dashboard.TotalLiveExperienceStreamRecord,
        LiveExperienceStreams: state.dashboard.LiveExperienceStreams,
        TotalPendingExperienceRecord: state.dashboard.TotalPendingExperienceRecord,
        PendingExperiences: state.dashboard.PendingExperiences,

        StreamChannelSearchInput: state.dashboard.StreamChannelSearchInput,
        StreamActiveChannels: state.dashboard.StreamActiveChannels,
        TotalStreamActiveChannelRecord: state.dashboard.TotalStreamActiveChannelRecord,
        StreamChannelTypeFilter: state.dashboard.StreamChannelTypeFilter,
        StreamChannelTypeFilterLabel: state.dashboard.StreamChannelTypeFilterLabel,
    }
}

const dispatchToProps = {
    dxDashboardNaviAction,
    dxFetchStreamChannelAction,
    dxSelectStreamChannelAction,
    dxCreateStreamAction,
    dxRemoveStreamAction,
}

export default connect(stateToProps, dispatchToProps)(StreamContainer);