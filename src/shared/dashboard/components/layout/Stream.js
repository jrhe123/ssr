import React, { Component } from 'react';

// styles
import '../../../../../assets/css/dd-menu/dd_menu.css';

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
import ReadyToStreamTemplate from '../presentation/ReadyToStreamTemplate';
import LiveStreamTemplate from '../presentation/LiveStreamTemplate';
import ChannelInfoTemplate from '../presentation/ChannelInfoTemplate'


class Stream extends Component{

    state = {
        isMenuOpen: false,
    }

    handleToggleMenu = () => {
        this.setState({ 
            isMenuOpen: !this.state.isMenuOpen 
        });
    }

    handleCloseMenu = () => {
        this.setState({ isMenuOpen: false });
    }

    handleSearch = (value) => {
        console.log(value)
    }

    render(){

        const {
            mainContainerStyle,
            mainWrapperStyle,

            topContainerStyle,
            targetContainerStyle,
            targetLabelStyle,

            dropdownContainerStyle,
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
            webOptionTopLabelStyle,
            webOptionBottomLabelStyle,
            clickHereLinkStyle,

            channelContainerStyle,
            channelLabelStyle,

            totalLabelstyle,

            bodyContainerStyle,
            channelSearchContainerStyle,
            channelInfoContainerStyle,
            searchBarWrapperStyle,
            searchBarStyle,
            tipsContainerStyle,
            tipsHeaderStyle,
            tipsLabelStyle,

            streamContainerStyle,
            generalwrapperStyle,
            generalHeaderStyle,
            generalContentStyle,

            liveStreamLabelStyle,
            liveStreamContainerStyle,
            liveStreamWrapperStyle,
            liveStreamContentStyle,
            
            readyToStreamLabelStyle,
            readyToStreamWrapperStyle,
            readyToStreamContainerStyle,
            readyToStreamContentStyle,
            
        } = styles;

        return(
            <div style={mainContainerStyle}>
            <div style={mainWrapperStyle}>
                <div style={topContainerStyle}>
                    <div style={targetContainerStyle}>
                        <p style={targetLabelStyle}>Target</p>
                        <div style={dropdownContainerStyle}>
                            <DropdownMenu
                                isOpen={this.state.isMenuOpen}
                                close={this.handleCloseMenu}
                                toggle={
                                    <div>
                                        <Button style={dropdownBtnStyle} onClick={() => this.handleToggleMenu()}>Mobile (iOS / Android)<ExpandMore style={expandIconStyle}/></Button>
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
                                            <p style={comingSoonStyle}>Coming Soon</p>
                                            <div style={dropdownWebBtnStyle}>
                                                <div style={dropdownBtnImgStyle}>
                                                    <Lock/>
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
                    <div style={channelContainerStyle}>
                        <p style={channelLabelStyle}>Channel(s)</p>
                        <p style={totalLabelstyle}>1 Total</p>
                    </div>
                </div>
                <div style={bodyContainerStyle}>
                    <div style={channelSearchContainerStyle}>
                        <div style={searchBarWrapperStyle}>
                            <SearchBar
                                value={this.state.value}
                                onChange={() => handleSearch()}
                                style={searchBarStyle}
                                placeholder={'Type for search'}
                            />
                        </div>
                        <div style={channelInfoContainerStyle}>
                            <ChannelInfoTemplate headerText={'General'}/>
                            <ChannelInfoTemplate headerText={'Renaissance'}/>
                            <ChannelInfoTemplate headerText={'Reading'}/>
                            <ChannelInfoTemplate headerText={'Latin literature'}/>
                            <ChannelInfoTemplate headerText={'Lorem Ipsum'}/>
                            <ChannelInfoTemplate headerText={'Bonorum'}/>
                            <ChannelInfoTemplate headerText={'Rackham'}/>
                            <ChannelInfoTemplate headerText={'Malorum'}/>
                            <ChannelInfoTemplate headerText={'Injected'}/>
                            <ChannelInfoTemplate headerText={'Tutorials'}/>
                            <ChannelInfoTemplate headerText={'Content'}/>
                            <ChannelInfoTemplate headerText={'Specimen'}/>
                            <ChannelInfoTemplate headerText={'Internet'}/>
                            <ChannelInfoTemplate headerText={'Channel 2'}/>         
                        </div>
                        <div style={tipsContainerStyle}>
                            <p style={tipsHeaderStyle}>Tips:</p>
                            <p style={tipsLabelStyle}>Create your own channel to stream content related to your audiences’ interest to improve content discoverability and gather actionable insights. Click <a href='#' style={clickHereLinkStyle}>here</a> to create a new channel</p>
                        </div>
                    </div>
                    <div style={streamContainerStyle}>
                        <div style={generalwrapperStyle}>
                            <p style={generalHeaderStyle}>General</p>
                            <p style={generalContentStyle}>General channel is a default channel created by us, so you can stream first-time welcome messages, important notes and other content directly to all of your audience to be readily available in their feed automatically.</p>
                        </div>
                        <p style={liveStreamLabelStyle}>LIVE STREAMS (6)</p>
                        <div style={liveStreamContainerStyle}>
                            {/* <div style={liveStreamWrapperStyle}>
                                <p style={liveStreamContentStyle}>There are no ready to stream experience(s) found.</p>
                            </div>
                            <div style={liveStreamWrapperStyle}>
                                <p style={liveStreamContentStyle}>There are no ready to stream experience(s) found.</p>
                            </div> */}
                            <LiveStreamTemplate/>
                            <LiveStreamTemplate/>
                            <LiveStreamTemplate/>
                            <LiveStreamTemplate/>
                            <LiveStreamTemplate/>
                            <LiveStreamTemplate/>
                        </div>
                        <p style={readyToStreamLabelStyle}>READY TO STREAM (18)</p>
                        <div style={readyToStreamContainerStyle}>
                            {/* <div style={readyToStreamWrapperStyle}>
                                <p style={readyToStreamContentStyle}>There are no experience(s) found to be streamed. Click <a href='#' style={clickHereLinkStyle}>here</a> to create a new experience</p>
                            </div> */}
                            <ReadyToStreamTemplate/>
                            <ReadyToStreamTemplate/>
                            <ReadyToStreamTemplate/>
                            <ReadyToStreamTemplate/>
                            <ReadyToStreamTemplate/>
                            <ReadyToStreamTemplate/>
                            <ReadyToStreamTemplate/>
                            <ReadyToStreamTemplate/>
                            <ReadyToStreamTemplate/>
                            <ReadyToStreamTemplate/>
                            <ReadyToStreamTemplate/>
                            <ReadyToStreamTemplate/>
                            <ReadyToStreamTemplate/>
                            <ReadyToStreamTemplate/>
                            <ReadyToStreamTemplate/>
                            <ReadyToStreamTemplate/>
                            <ReadyToStreamTemplate/>                        
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

const styles = {
    mainContainerStyle:{
        width: sizes.dxWidth,
        margin: '0 auto',
        display:'flex',
        flexDirection:'row',
    },
    mainWrapperStyle:{
        height: `calc(100vh - ${sizes.headerHeight})`,
        flex:1,
        width: '100%',
    },
    targetContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
        width:308,
        justifyContent:'space-between',
        alignItems:'center',
        marginLeft:100,
        flex:1
    },
    targetLabelStyle:{
        marginTop:0,
        marginBottom:0,
        paddingTop:0,
        fontSize:fonts.h1
    },
    dropdownContainerStyle:{
        marginTop:0,
        marginBottom:0
    },
    dropdownOptionBtnStyle:{
        width:'100%',
        padding:0,
        textTransform: 'none'
    },
    dropdownBtnStyle:{
        padding:0,
        textTransform: 'none',
        fontSize:fonts.h1
    },
    dropdownMobileBtnStyle:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        borderWidth:0.25,
        borderColor:'#d2d8de',
        borderStyle:'solid',
        borderLeft:0,
        borderRight:0,
        borderTop:0
    },
    dropdownWebBtnStyle:{
        display:'flex',
        flexDirection:'row',
        width:'100%'
    },
    dropdownBtnImgStyle:{
        flex:1,
        alignSelf:'center',
        marginLeft:12
    },
    dropdownBtnTextStyle:{
        flex:8,
        flexDirection:'column',
        textAlign:'left',
        marginLeft:6,
        marginRight:24
    },
    imgStyle:{
        height:42,
        width:24
    },
    mobileOptionTopLabelStyle:{
        marginTop:12,
        marginBottom:6,
        fontSize: fonts.h3
    },
    mobileOptionBottomLabelStyle:{
        marginTop:0,
        marginBottom:12,
        color:colors.lightGreyColor,
        fontSize: fonts.h4
    },
    webOptionTopLabelStyle:{
        marginTop:0,
        marginBottom:6,
        fontSize: fonts.h3
    },
    webOptionBottomLabelStyle:{
        marginTop:0,
        marginBottom:0,
        color:colors.lightGreyColor,
        fontSize: fonts.h4
    },
    comingSoonWrapperStyle:{
        display:'flex',
        flexDirection:'column',
        width:'100%',
        marginBottom:32
    },
    comingSoonStyle:{
        alignSelf:'flex-end',
        background:colors.blackColor,
        color:colors.whiteColor,
        width:90,
        padding:6,
        margin:0,
        fontSize: fonts.h4
    },
    clickHereLinkStyle:{
        color:colors.blueColor
    },
    channelContainerStyle:{
        display: 'flex',
        flexDirection: 'row',
        width:308,
        justifyContent:'space-between',
        marginLeft:100,
        alignItems:'center',
        flex:1
    },
    channelLabelStyle:{
        marginTop:0,
        marginBottom:0,
        fontSize:fonts.h1
    },
    totalLabelstyle:{
        marginTop:0,
        marginBottom:0,
        fontSize:fonts.h3,
        color:colors.lightGreyColor
    },
    bodyContainerStyle:{
        height:'calc(100% - 152px)',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center'
    },
    channelSearchContainerStyle: {
        display: 'flex',
        flexDirection: 'column',
        width:308,
        background:'white',
        height:'100%',
        justifyContent:'flex-start',
        marginBottom:0,
        boxShadow: '0 1px 1px 0 #CED5DB',
    },
    channelInfoContainerStyle:{
        height:'calc(100% - 166px)',
        flexDirection:'column',
        overflowY: 'scroll',
    },
    searchBarWrapperStyle:{
        background:'#F1F7FE',
        display:'flex',
        flexDirection:'row',
        borderWidth:1,
        borderColor:colors.borderColor,
        borderStyle:'solid',
        borderLeft:0,
        borderRight:0,
        borderTop:0,
        height:48
    },
    tipsContainerStyle:{
        height:118,
        display:'flex',
        flexDirection:'column',
        fontSize:fonts.h4,
        marginBottom:18,
        marginTop:12,
        align:'center',
        color:colors.lightGreyColor
    },
    tipsHeaderStyle:{
        marginBottom:0,
        marginTop:0,
        paddingBottom:18,
        paddingLeft:12,
        paddingRight:12
    },
    tipsLabelStyle:{
        marginBottom:0,
        marginTop:0,
        paddingLeft:12,
        paddingRight:12
    },
    searchBarStyle:{
        width:'100%',
        boxShadow:'none',
        paddingLeft:6,
        height:'100%'
    },
    streamContainerStyle:{
        height:'100%',
        width:692,
    },
    liveStreamContainerStyle:{
        overflowY:'scroll',
        minHeight:'10%',
        // maxHeight: `calc((100% - 194px)/2)`,
        maxHeight:168
    },
    liveStreamWrapperStyle:{
        textAlign: 'center',
        background:'white',
        marginLeft:48,
        marginTop:0,
        marginBottom:6,
        padding:12,
        fontSize: fonts.h4,
        border: '1px dotted #4A90E2',
        display:'flex',
        justifyContent:'center',
        height:24,
        alignItems:'center'
    },
    liveStreamContentStyle:{
        marginTop:0,
        marginBottom:0,
        color:colors.lightGreyColor,
    },
    readyToStreamContentStyle:{
        marginTop:0,
        marginBottom:0,
        color:colors.lightGreyColor
    },
    generalwrapperStyle:{
        width:'auto',
        background:'white',
        marginLeft:48,
        marginTop:0,
        paddingLeft:12,
        paddingRight:12,
        fontSize: fonts.h4,
        height:102,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
    },
    readyToStreamContainerStyle:{
        minHeight:'10%',
        // maxHeight: `calc((100% - 194px)/2)`,
        maxHeight:168,
        overflowY:'scroll',
    },
    readyToStreamWrapperStyle:{
        textAlign: 'center',
        background:'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:48,
        marginTop:0,
        marginBottom:6,
        padding:12,
        fontSize: fonts.h4,
        border: '1px dotted #4A90E2',
        height:24
    },
    generalHeaderStyle:{
        margin:'0 0',
        paddingBottom:12,
        fontSize:fonts.h2
    },
    generalContentStyle:{
        margin:'0 0',
        color:colors.lightGreyColor
    },

    readyToStreamLabelStyle:{
        marginLeft:48,
        marginTop:18,
        marginBottom:6,
        height:22,
        display:'flex',
        alignItems:'center',

    },
    liveStreamLabelStyle:{
        marginLeft:48,
        height:22,
        display:'flex',
        alignItems:'center',
        marginTop:18,
        marginBottom:6
    },
    expandIconStyle:{
        color:colors.lightGreyColor
    },
    topContainerStyle:{
        height:134,
        display:'flex',
        flexDirection:'column'
    }
}

export default Stream;