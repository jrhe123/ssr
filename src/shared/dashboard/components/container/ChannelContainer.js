import React, { Component } from 'react';

//component
import NewChannelModal from '../presentation/channel/NewChannelModal.js';

// libraries
import Button from '@material-ui/core/Button';

// redux
import { connect } from 'react-redux';
import {
    dxFetchChannel as dxFetchChannelAction,
    dxUpdateChannel as dxUpdateChannelAction,
} from '../../actions';

// constants
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import sizes from '../../../styles/sizes';

// components
import ChannelList from '../presentation/channel/ChannelList';

class ChannelContainer extends Component {

    state = {
        newChannelModalOpen: false,
    }

    componentDidMount() {
        this.props.dxFetchChannelAction();
    }

    handleCreateChannel = () => {
        this.setState({
            newChannelModalOpen: true
        })
    }

    handleCloseChannelModal = () => {
        this.setState({
            newChannelModalOpen: false
        })
    }

    handleNavigateToNewchannel = (val) => {
        this.setState({
            newChannelModalOpen: false
        });
        this.props.history.push(`/new_channel/` + val)
    }

    handleEditChannel = (channel) => {
        this.props.history.push(`/edit_channel/` + channel.ExperienceChannelGUID)
    }

    handleActiveChannel = (channel) => {
        this.props.dxUpdateChannelAction({ ExperienceChannelGUID: channel.ExperienceChannelGUID, ChannelStatus: 'LIVE' });
    }

    handleDeactiveChannel = (channel) => {
        this.props.dxUpdateChannelAction({ ExperienceChannelGUID: channel.ExperienceChannelGUID, ChannelStatus: 'DRAFT' });
    }

    render() {

        const {
            ExperienceChannels,
            TotalChannelRecord,
        } = this.props;

        const {
            mainContainerStyle,
            channelListContainerStyle,

            mainWrapperStyle,
            tableContainerStyle,
            tableWrapperStyle,

            btnWrapperStyle,
            fullBtnStyle,
            topLabelStyle,
            middleLabelStyle,
            bottomLabelStyle,
            imgStyle,
        } = styles;

        return (
            <div style={mainContainerStyle}>
                {
                    ExperienceChannels.length ?
                        (
                            <div style={channelListContainerStyle}>
                                <ChannelList
                                    experienceChannels={ExperienceChannels}
                                    channelNumber={TotalChannelRecord}
                                    handleAddChannelClick={() => this.handleCreateChannel()}
                                    handleEditChannel={(channel) => this.handleEditChannel(channel)}
                                    handleActiveChannel={(channel) => this.handleActiveChannel(channel)}
                                    handleDeactiveChannel={(channel) => this.handleDeactiveChannel(channel)}
                                />
                            </div>
                        )
                        :
                        <div style={mainWrapperStyle}>
                            <div style={tableContainerStyle}>
                                <div style={tableWrapperStyle}>
                                    <p style={topLabelStyle}> Reach your audience via channel.
                                </p>
                                    <div>
                                        <img
                                            style={imgStyle}
                                            src={require('../../../../../assets/images/channelPage.png')}
                                        />
                                    </div>
                                    <p style={middleLabelStyle}> Let's create a channel to stream your experience(s)
                                </p>
                                    <div style={btnWrapperStyle}>
                                        <Button
                                            variant="Add a new channel"
                                            style={fullBtnStyle}
                                            onClick={() => this.handleCreateChannel()}>
                                            Create A Channel
                                    </Button>
                                    </div>
                                    <p style={bottomLabelStyle}> Your audience can subscribe and follow channel(s). Channel(s) improve content discoverablity.
                                </p>
                                </div>
                            </div>

                        </div>
                }
                <NewChannelModal
                    open={this.state.newChannelModalOpen}
                    onCloseModal={() => this.handleCloseChannelModal()}
                    navigateToNewchannel={(val) => this.handleNavigateToNewchannel(val)}
                />

            </div>
        );
    }
}

const styles = {

    mainContainerStyle: {
        display: 'flex',
        flexDirection: 'row'
    },
    channelListContainerStyle: {

    },
    mainWrapperStyle: {
        height: `calc(100vh - ${sizes.headerHeight})`,
        width: '100%',
        flex: 1
    },
    tableContainerStyle: {
        position: 'relative',
        display: 'table',
        width: '100%',
        height: `calc(100vh - ${sizes.headerHeight})`,
    },
    tableWrapperStyle: {
        display: 'table-cell',
        verticalAlign: 'middle',
        textAlign: 'center',
    },
    btnWrapperStyle: {
        marginTop: '3px',
        marginBottom: '30px'
    },
    fullBtnStyle: {
        backgroundColor: colors.blueColor,
        color: colors.whiteColor,
        textTransform: 'none',
    },
    topLabelStyle: {
        fontSize: fonts.h1,
        color: colors.lightGreyColor,
    },
    middleLabelStyle: {
        fontSize: fonts.h1,
        color: colors.lightGreyColor,
    },
    bottomLabelStyle: {
        fontSize: fonts.h4,
        color: colors.lightGreyColor,
    },
    imgStyle: {
        display: 'block',
        height: '132px',
        width: '144px',
        marginLeft: 'auto',
        marginRight: 'auto',

    }
};

const stateToProps = (state) => {
    return {
        history: state.root.history,
        ExperienceChannels: state.dashboard.ExperienceChannels,
        TotalChannelRecord: state.dashboard.TotalChannelRecord,
    }
}

const dispatchToProps = {
    dxFetchChannelAction,
    dxUpdateChannelAction,
}

export default connect(stateToProps, dispatchToProps)(ChannelContainer);
