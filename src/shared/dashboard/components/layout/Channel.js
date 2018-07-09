import React, { Component } from 'react';

//component
import NewChannelModal from '../container/NewChannelModal.js';

// libraries
import Button from '@material-ui/core/Button';

// data
import ChannelData from '../../../../../data/ChannelData';

// redux
import { connect } from 'react-redux';

// constants
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import sizes from '../../../styles/sizes';

class Channel extends Component {

    state = {
        newChannelModalOpen: false,
        channelData: {}
    }

    componentDidMount() {
        this.setState({
            channelData: ChannelData
        })
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

    navigateToNewchannel = (val) => {
        this.setState({
            newChannelModalOpen: false
        });
        this.props.history.push(`/new_channel/`+val)
    }

    render() {

        const {
            mainContainerStyle,

            mainWrapperStyle,
            tableContainerStyle,
            tableWrapperStyle,

            btnWrapperStyle,
            fullBtnStyle,
            topLabelStyle,
            middleLabelStyle,
            bottomLabelStyle,
            imgWrapperStyle,
            imgStyle
        } = styles;

        const {
            channelData,
        } = this.state;

        return (
            <div style={mainContainerStyle}>
                <div style={mainWrapperStyle}>
                    <div style={tableContainerStyle}>
                        <div style={tableWrapperStyle}>
                            <p style={topLabelStyle}> Reach your audience via channel.
                            </p>
                            <div style={imgWrapperStyle}>
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
                                    Create a channel
                                </Button>
                            </div>
                            <p style={bottomLabelStyle}> Your audience can subscribe and follow channel(s). Channel(s) improve content discoverablity.
                            </p>
                        </div>
                    </div>
                </div>
                <NewChannelModal 
                    open={this.state.newChannelModalOpen}
                    onCloseModal={() => this.handleCloseChannelModal()}
                    navigateToNewchannel={(val) => this.navigateToNewchannel(val)}
                />
            </div>
        );
    }
}

const styles = {
    mainContainerStyle: {
        display:'flex',
        flexDirection:'row'
    },
    mainWrapperStyle:{
        height: `calc(100vh - ${sizes.headerHeight})`,
        width: '100%',
        flex:1
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
        marginBottom:'30px'
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
    bottomLabelStyle:{
        fontSize: fonts.h4,
        color: colors.lightGreyColor,
    },
    imgStyle:{
        display:'block',
        height:'132px',
        width:'144px',
        marginLeft:'auto',
        marginRight:'auto',

    },
    imgWrapperStyle: {

    }
};

const stateToProps = (state) => {
    return {
        history: state.root.history
    }
}

const dispatchToProps = {

}

export default connect(stateToProps, dispatchToProps)(Channel);