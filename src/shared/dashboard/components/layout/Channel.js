import React, { Component } from 'react';

//component
import NewChannelModal from '../container/NewChannelModal.js';

// libraries
import Button from '@material-ui/core/Button';

// data
import ChannelData from '../../../../../data/ChannelData';

// constants
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

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

    // dhan added jun14
    // navigateToNewexperience = (val) => {
    //     this.setState({
    //         newExperienceModalOpen: false
    //     });
    //     this.props.history.push(`/new_experience/`+val)
    // }

    render() {

        const {
            mainContainerStyle,

            mainWrapperStyle,
            tableContainerStyle,
            tableWrapperStyle,

            buttonWrapperStyle,
            fullBtnStyle,
            header1Style,
            header2Style,
            header3Style,
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
                            <p style={header1Style}> Reach your audience via channel.
                            </p>
                            <div>
                                <img 
                                    style={imgStyle}
                                    src={require('../../../../../assets/images/channelPage.png')}
                                />
                            </div>
                            <p style={header2Style}> Let's create a channel to stream your experience(s)
                            </p>
                            <div style={buttonWrapperStyle}>
                                <Button 
                                    variant="Add a new channel" 
                                    style={fullBtnStyle}
                                    onClick={() => this.handleCreateChannel()}>
                                    Create a channel
                                </Button>
                            </div>
                            <p style={header3Style}> Your audience can subscribe and follow channel(s). Channel(s) improve content discoverablity.
                            </p>
                            <NewChannelModal 
                                open={this.state.newChannelModalOpen}
                                onCloseModal={() => this.handleCloseChannelModal()}
                                // navigateToNewexperience={(val) => this.navigateToNewexperience(val)}
                            />
                        </div>
                    </div>
                </div>
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
        height: 'calc(100vh - 84px)',
        width: '100%',
        flex:1
    },
    tableContainerStyle: {
        position: 'relative',
        display: 'table',
        width: '100%',
        height: 'calc(100vh - 84px)',
    },
    tableWrapperStyle: {
        display: 'table-cell',
        verticalAlign: 'middle',
        textAlign: 'center',
    },
    buttonWrapperStyle: {
        marginTop: '38px',
        marginBottom:'27px'
    },
    fullBtnStyle: {
        backgroundColor: colors.blueColor,
        color: colors.whiteColor,
        textTransform: 'none',
    },
    header1Style: {
        fontSize: fonts.h1,
        color: colors.lightGreyColor,
    },
    header2Style: {
        fontSize: fonts.h1,
        color: colors.lightGreyColor,
    },
    header3Style:{
        fontSize: fonts.h4,
        color: colors.lightGreyColor,
    },
    imgStyle:{
        display:'block',
        height:'131px',
        width:'142px',
        marginTop:'47px',
        marginBottom:'38px',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
};

export default Channel;