import React, { Component } from 'react';

// styles
import '../../../../../assets/css/dd-menu/dd_menu.css';

// libraries
import SearchBar from 'material-ui-search-bar'
import IconButton from '@material-ui/core/IconButton';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
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


class Stream extends Component{

    state = {
        isMenuOpen: false,
    }

    toggleMenu = () => {
        this.setState({ 
            isMenuOpen: !this.state.isMenuOpen 
        });
    }

    closeMenu = () => {
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
            channelInfoStyle,
            channelInfoLeftStyle,
            channelTitleStyle,
            streamLabelStyle,
            channelInfoRightStyle,
            channelInfoIconStyle,
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
            redayToStreamWrapperStyle,
            readyToStreamContainerStyle,
            readyToStreamContentStyle,

            expLabelStyle,
            expTitleStyle,
            goLiveBtnStyle,

            liveInfoWrapperStyle,
            liveInfoIconStyle

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
                                close={this.closeMenu}
                                toggle={
                                    <div>
                                        <Button 
                                            style={dropdownBtnStyle}
                                            onClick={() => this.toggleMenu()}>
                                            Mobile (iOS / Android)
                                            <ExpandMore style={expandIconStyle} />
                                        </Button>
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
                                                Coming Soon
                                            </div>
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
                            <div style={channelInfoStyle}>
                                <div style={channelInfoLeftStyle}>
                                    <p style={channelTitleStyle}>General</p>
                                    <p style={streamLabelStyle}>0 live streams</p>
                                </div>
                                <div style={channelInfoRightStyle}>
                                    <IconButton 
                                        style={channelInfoIconStyle} 
                                    >
                                        <MoreHoriz/>
                                    </IconButton>
                                </div>
                            </div>
                            <div style={channelInfoStyle}>
                                <div style={channelInfoLeftStyle}>
                                    <p style={channelTitleStyle}>General</p>
                                    <p style={streamLabelStyle}>0 live streams</p>
                                </div>
                                <div style={channelInfoRightStyle}>
                                    <IconButton 
                                        style={channelInfoIconStyle} 
                                    >
                                        <MoreHoriz/>
                                    </IconButton>
                                </div>
                            </div>
                            <div style={channelInfoStyle}>
                                <div style={channelInfoLeftStyle}>
                                    <p style={channelTitleStyle}>General</p>
                                    <p style={streamLabelStyle}>0 live streams</p>
                                </div>
                                <div style={channelInfoRightStyle}>
                                    <IconButton 
                                        style={channelInfoIconStyle} 
                                    >
                                        <MoreHoriz/>
                                    </IconButton>
                                </div>
                            </div>
                            <div style={channelInfoStyle}>
                                <div style={channelInfoLeftStyle}>
                                    <p style={channelTitleStyle}>General</p>
                                    <p style={streamLabelStyle}>0 live streams</p>
                                </div>
                                <div style={channelInfoRightStyle}>
                                    <IconButton 
                                        style={channelInfoIconStyle} 
                                    >
                                        <MoreHoriz/>
                                    </IconButton>
                                </div>
                            </div>
                            <div style={channelInfoStyle}>
                                <div style={channelInfoLeftStyle}>
                                    <p style={channelTitleStyle}>General</p>
                                    <p style={streamLabelStyle}>0 live streams</p>
                                </div>
                                <div style={channelInfoRightStyle}>
                                    <IconButton 
                                        style={channelInfoIconStyle} 
                                    >
                                        <MoreHoriz/>
                                    </IconButton>
                                </div>
                            </div>
                            <div style={channelInfoStyle}>
                                <div style={channelInfoLeftStyle}>
                                    <p style={channelTitleStyle}>General</p>
                                    <p style={streamLabelStyle}>0 live streams</p>
                                </div>
                                <div style={channelInfoRightStyle}>
                                    <IconButton 
                                        style={channelInfoIconStyle} 
                                    >
                                        <MoreHoriz/>
                                    </IconButton>
                                </div>
                            </div>
                            <div style={channelInfoStyle}>
                                <div style={channelInfoLeftStyle}>
                                    <p style={channelTitleStyle}>General</p>
                                    <p style={streamLabelStyle}>0 live streams</p>
                                </div>
                                <div style={channelInfoRightStyle}>
                                    <IconButton 
                                        style={channelInfoIconStyle} 
                                    >
                                        <MoreHoriz/>
                                    </IconButton>
                                </div>
                            </div>
                            <div style={channelInfoStyle}>
                                <div style={channelInfoLeftStyle}>
                                    <p style={channelTitleStyle}>General</p>
                                    <p style={streamLabelStyle}>0 live streams</p>
                                </div>
                                <div style={channelInfoRightStyle}>
                                    <IconButton 
                                        style={channelInfoIconStyle} 
                                    >
                                        <MoreHoriz/>
                                    </IconButton>
                                </div>
                            </div>
                            <div style={channelInfoStyle}>
                                <div style={channelInfoLeftStyle}>
                                    <p style={channelTitleStyle}>General</p>
                                    <p style={streamLabelStyle}>0 live streams</p>
                                </div>
                                <div style={channelInfoRightStyle}>
                                    <IconButton 
                                        style={channelInfoIconStyle} 
                                    >
                                        <MoreHoriz/>
                                    </IconButton>
                                </div>
                            </div>
                            <div style={channelInfoStyle}>
                                <div style={channelInfoLeftStyle}>
                                    <p style={channelTitleStyle}>General</p>
                                    <p style={streamLabelStyle}>0 live streams</p>
                                </div>
                                <div style={channelInfoRightStyle}>
                                    <IconButton 
                                        style={channelInfoIconStyle} 
                                    >
                                        <MoreHoriz/>
                                    </IconButton>
                                </div>
                            </div>
                            <div style={channelInfoStyle}>
                                <div style={channelInfoLeftStyle}>
                                    <p style={channelTitleStyle}>General</p>
                                    <p style={streamLabelStyle}>0 live streams</p>
                                </div>
                                <div style={channelInfoRightStyle}>
                                    <IconButton 
                                        style={channelInfoIconStyle} 
                                    >
                                        <MoreHoriz/>
                                    </IconButton>
                                </div>
                            </div>
                            <div style={channelInfoStyle}>
                                <div style={channelInfoLeftStyle}>
                                    <p style={channelTitleStyle}>General</p>
                                    <p style={streamLabelStyle}>0 live streams</p>
                                </div>
                                <div style={channelInfoRightStyle}>
                                    <IconButton 
                                        style={channelInfoIconStyle} 
                                    >
                                        <MoreHoriz/>
                                    </IconButton>
                                </div>
                            </div>
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
                        <p style={liveStreamLabelStyle}>LIVE STREAMS (0)</p>
                        <div style={liveStreamContainerStyle}>
                            <div style={liveStreamWrapperStyle}>
                                <p style={liveStreamContentStyle}>There are no ready to stream experience(s) found.</p>
                            </div>
                            <div style={liveStreamWrapperStyle}>
                                <p style={liveStreamContentStyle}>There are no ready to stream experience(s) found.</p>
                            </div>
                            <div style={liveStreamWrapperStyle}>
                                <p style={expTitleStyle}>My experience 1</p>
                                <div style={liveInfoWrapperStyle}>
                                    <IconButton 
                                        style={liveInfoIconStyle} 
                                    >
                                        <MoreHoriz />
                                    </IconButton>
                                </div>
                            </div>
                            {/* <div style={liveStreamWrapperStyle}>
                                <p style={liveStreamContentStyle}>There are no ready to stream experience(s) found.</p>
                            </div>
                            <div style={liveStreamWrapperStyle}>
                                <p style={liveStreamContentStyle}>There are no ready to stream experience(s) found.</p>
                            </div> */}
                            <div style={liveStreamWrapperStyle}>
                                <p style={liveStreamContentStyle}>There are no ready to stream experience(s) found.</p>
                            </div>
                            <div style={liveStreamWrapperStyle}>
                                <p style={liveStreamContentStyle}>There are no ready to stream experience(s) found.</p>
                            </div>
                            <div style={liveStreamWrapperStyle}>
                                <p style={liveStreamContentStyle}>There are no ready to stream experience(s) found.</p>
                            </div>
                            <div style={liveStreamWrapperStyle}>
                                <p style={liveStreamContentStyle}>There are no ready to stream experience(s) found.</p>
                            </div>
                            <div style={liveStreamWrapperStyle}>
                                <p style={liveStreamContentStyle}>There are no ready to stream experience(s) found.</p>
                            </div>
                            <div style={liveStreamWrapperStyle}>
                                <p style={liveStreamContentStyle}>There are no ready to stream experience(s) found.</p>
                            </div>
                            <div style={liveStreamWrapperStyle}>
                                <p style={liveStreamContentStyle}>There are no ready to stream experience(s) found.</p>
                            </div>
                            <div style={liveStreamWrapperStyle}>
                                <p style={liveStreamContentStyle}>There are no ready to stream experience(s) found.</p>
                            </div>
                        </div>
                        <p style={readyToStreamLabelStyle}>READY TO STREAM (0)</p>
                        <div style={readyToStreamContainerStyle}>
                            <div style={readyToStreamWrapperStyle}>
                                <p style={readyToStreamContentStyle}>There are no experience(s) found to be streamed. Click <a href='#' style={clickHereLinkStyle}>here</a> to create a new experience</p>
                            </div>
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
                            {/* <div style={redayToStreamWrapperStyle}>
                                <p style={expTitleStyle}>My experience 1</p>
                                <p style={expLabelStyle}>Streamed in 0 other channel(s)</p>
                                <Button 
                                        variant="Add a new channel" 
                                        style={goLiveBtnStyle}
                                        // onClick={() => this.handleCreateChannel()}
                                >
                                Go Live
                                </Button>
                            </div>
                            <div style={redayToStreamWrapperStyle}>
                                <p style={expTitleStyle}>My experience 1</p>
                                <p style={expLabelStyle}>Streamed in 0 other channel(s)</p>
                                <Button 
                                        variant="Add a new channel" 
                                        style={goLiveBtnStyle}
                                        // onClick={() => this.handleCreateChannel()}
                                >
                                Go Live
                                </Button>
                            </div>
                            <div style={redayToStreamWrapperStyle}>
                                <p style={expTitleStyle}>My experience 1</p>
                                <p style={expLabelStyle}>Streamed in 0 other channel(s)</p>
                                <Button 
                                        variant="Add a new channel" 
                                        style={goLiveBtnStyle}
                                        // onClick={() => this.handleCreateChannel()}
                                >
                                Go Live
                                </Button>
                            </div>
                            <div style={redayToStreamWrapperStyle}>
                                <p style={expTitleStyle}>My experience 1</p>
                                <p style={expLabelStyle}>Streamed in 0 other channel(s)</p>
                                <Button 
                                        variant="Add a new channel" 
                                        style={goLiveBtnStyle}
                                        // onClick={() => this.handleCreateChannel()}
                                >
                                Go Live
                                </Button>
                            </div>
                            <div style={redayToStreamWrapperStyle}>
                                <p style={expTitleStyle}>My experience 1</p>
                                <p style={expLabelStyle}>Streamed in 0 other channel(s)</p>
                                <Button 
                                        variant="Add a new channel" 
                                        style={goLiveBtnStyle}
                                        // onClick={() => this.handleCreateChannel()}
                                >
                                Go Live
                                </Button>
                            </div>
                            <div style={redayToStreamWrapperStyle}>
                                <p style={expTitleStyle}>My experience 1</p>
                                <p style={expLabelStyle}>Streamed in 0 other channel(s)</p>
                                <Button 
                                        variant="Add a new channel" 
                                        style={goLiveBtnStyle}
                                        // onClick={() => this.handleCreateChannel()}
                                >
                                Go Live
                                </Button>
                            </div>
                            <div style={redayToStreamWrapperStyle}>
                                <p style={expTitleStyle}>My experience 1</p>
                                <p style={expLabelStyle}>Streamed in 0 other channel(s)</p>
                                <Button 
                                        variant="Add a new channel" 
                                        style={goLiveBtnStyle}
                                        // onClick={() => this.handleCreateChannel()}
                                >
                                Go Live
                                </Button>
                            </div>
                            <div style={redayToStreamWrapperStyle}>
                                <p style={expTitleStyle}>My experience 1</p>
                                <p style={expLabelStyle}>Streamed in 0 other channel(s)</p>
                                <Button 
                                        variant="Add a new channel" 
                                        style={goLiveBtnStyle}
                                        // onClick={() => this.handleCreateChannel()}
                                >
                                Go Live
                                </Button>
                            </div>
                            <div style={redayToStreamWrapperStyle}>
                                <p style={expTitleStyle}>My experience 1</p>
                                <p style={expLabelStyle}>Streamed in 0 other channel(s)</p>
                                <Button 
                                        variant="Add a new channel" 
                                        style={goLiveBtnStyle}
                                        // onClick={() => this.handleCreateChannel()}
                                >
                                Go Live
                                </Button>
                            </div>
                            <div style={redayToStreamWrapperStyle}>
                                <p style={expTitleStyle}>My experience 1</p>
                                <p style={expLabelStyle}>Streamed in 0 other channel(s)</p>
                                <Button 
                                        variant="Add a new channel" 
                                        style={goLiveBtnStyle}
                                        // onClick={() => this.handleCreateChannel()}
                                >
                                Go Live
                                </Button>
                            </div>
                            <div style={redayToStreamWrapperStyle}>
                                <p style={expTitleStyle}>My experience 1</p>
                                <p style={expLabelStyle}>Streamed in 0 other channel(s)</p>
                                <Button 
                                        variant="Add a new channel" 
                                        style={goLiveBtnStyle}
                                        // onClick={() => this.handleCreateChannel()}
                                >
                                Go Live
                                </Button>
                            </div>
                            <div style={redayToStreamWrapperStyle}>
                                <p style={expTitleStyle}>My experience 1</p>
                                <p style={expLabelStyle}>Streamed in 0 other channel(s)</p>
                                <Button 
                                        variant="Add a new channel" 
                                        style={goLiveBtnStyle}
                                        // onClick={() => this.handleCreateChannel()}
                                >
                                Go Live
                                </Button>
                            </div>
                            <div style={redayToStreamWrapperStyle}>
                                <p style={expTitleStyle}>My experience 1</p>
                                <p style={expLabelStyle}>Streamed in 0 other channel(s)</p>
                                <Button 
                                        variant="Add a new channel" 
                                        style={goLiveBtnStyle}
                                        // onClick={() => this.handleCreateChannel()}
                                >
                                Go Live
                                </Button>
                            </div>
                            <div style={redayToStreamWrapperStyle}>
                                <p style={expTitleStyle}>My experience 1</p>
                                <p style={expLabelStyle}>Streamed in 0 other channel(s)</p>
                                <Button 
                                        variant="Add a new channel" 
                                        style={goLiveBtnStyle}
                                        // onClick={() => this.handleCreateChannel()}
                                >
                                Go Live
                                </Button>
                            </div> */}
                        
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
        // paddingTop: 42,
        width:308,
        justifyContent:'space-between',
        // marginBottom:0,
        //
        alignItems:'center',
        // background:'pink',
        marginLeft:100,
        flex:1
    },
    targetLabelStyle:{
        marginTop:0,
        marginBottom:0,
        // paddingTop:6,
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
        // marginTop: 33,
        // paddingTop:32,
        // paddingBottom:18,
        width:308,
        justifyContent:'space-between',
        // marginBottom:18,
        // background:'green',
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
        //height:'100%'
        height:'80%',
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
        // justifyContent:'space-between',
        justifyContent:'flex-start',
        marginBottom:0,
        boxShadow: '0 1px 1px 0 #CED5DB',
        //background:'blue'

        //
        // overflowY:'scroll'
    },
    channelInfoContainerStyle:{
        //display:'flex',

        //
        height:'80%',

        flexDirection:'column',
        overflowY: 'scroll',
        // minHeight: 0
    },
    channelInfoStyle:{
        background:'#F1F7FE',
        display:'flex',
        flexDirection:'row',
        borderWidth:0.25,
        borderColor:'#d2d8de',
        borderStyle:'solid',
        borderLeft:0,
        borderRight:0,
        borderTop:0,
        flex:1,
        //
        // flexBasis: 'auto',

    },
    channelInfoLeftStyle:{
        //
        display:'flex',
        flexDirection:'column',

        flex:6,
        marginLeft:24,
        fontSize:fonts.h4,
        paddingTop:12,
        paddingBottom:12
    },
    channelTitleStyle:{
        //
        flex:1,
        fontSize:fonts.h3,
        marginBottom:6,
        marginTop:0
    },
    streamLabelStyle:{
                //
                flex:1,
        fontSize:fonts.h4,
        color:colors.lightGreyColor,
        margin:0
    },
    channelInfoRightStyle:{
        flex:1,
        alignSelf:'center',
        margin:0
    },
    channelInfoIconStyle:{
        height:20, 
        width:20
    },
    liveInfoIconStyle:{
        height:20, 
        width:20
    },
    searchBarWrapperStyle:{
        background:'#F1F7FE',
        display:'flex',
        flexDirection:'row',
        borderWidth:0.25,
        borderColor:'#d2d8de',
        borderStyle:'solid',
        borderLeft:0,
        borderRight:0,
        borderTop:0
    },
    tipsContainerStyle:{
        //
        height:'20%',
        //background:'pink',

        display:'flex',
        flexDirection:'column',
        fontSize:fonts.h4,
        marginLeft:12,
        marginRight:12,
        marginBottom:24,
        align:'center',
        color:colors.lightGreyColor
    },
    tipsHeaderStyle:{
        marginTop:18,
        marginBottom:12
    },
    tipsLabelStyle:{
        marginTop:0,
        marginBottom:18
    },
    searchBarStyle:{
        width:'100%',
        boxShadow:'none',
        borderWidth:0.25,
        borderColor:'#d2d8de',
        borderStyle:'solid',
        borderLeft:0,
        borderRight:0,
        borderTop:0,
        paddingLeft:6
    },
    streamContainerStyle:{
        height:'100%',
        width:692,
        //
        //background:'green'
    },
    liveStreamContainerStyle:{
        overflowY:'scroll',
        minHeight:'10%',
        maxHeight:'38%',
        // marginBottom:18,
        // paddingTop:12
    },
    liveStreamWrapperStyle:{
        textAlign: 'center',
        background:'white',
        marginLeft:48,
        // marginTop:12,
        marginTop:0,
        marginBottom:6,
        padding:12,
        fontSize: fonts.h4,
        border: '1px dotted #4A90E2',
        //
        display:'flex',
        justifyContent:'space-between'
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
        // marginBottom:18,
        // paddingTop:12,
        paddingLeft:12,
        paddingRight:12,
        // paddingBottom:12,
        fontSize: fonts.h4,
        //
        height:'12%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
    },
    readyToStreamContainerStyle:{
        //
        minHeight:'10%',
        maxHeight:'38%',
        overflowY:'scroll',
        // paddingTop:12
    },
    readyToStreamWrapperStyle:{
        textAlign: 'center',
        background:'white',
        marginLeft:48,
        // marginTop:12,
        marginTop:0,
        marginBottom:6,
        padding:12,
        fontSize: fonts.h4,
        border: '1px dotted #4A90E2'
    },
    generalHeaderStyle:{
        margin:'0 0',
        paddingBottom:12
    },
    generalContentStyle:{
        margin:'0 0',
        color:colors.lightGreyColor
    },

    readyToStreamLabelStyle:{
        marginLeft:48,
        marginTop:0,
        marginBottom:0,
        //
        height:'6%',
        display:'flex',
        alignItems:'center',
        // paddingTop:18
        // color:colors.lightGreyColor,
        // fontWeight:'bold',
        // fontFamily: 'Avenir'

    },
    liveStreamLabelStyle:{
        marginLeft:48,
        marginTop:0,
        marginBottom:0,
        // paddingTop:18,
        //
        height:'6%',
        display:'flex',
        alignItems:'center'
    },
    expandIconStyle:{
        color:colors.lightGreyColor
    },
    redayToStreamWrapperStyle:{
        width:'auto',
        background:'white',
        marginTop:12,
        fontSize: fonts.h4,
        marginLeft:48,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:6,
        paddingRight:6,
        alignItems:'center',
        border: '1px dotted #4A90E2'
    },
    expTitleStyle:{
        // marginTop:12,
        // marginLeft:12,
        // marginBottom:12,
        marginTop:6,
        marginLeft:6,
        marginBottom:6,
        fontSize:fonts.h3
    },
    expLabelStyle:{
        // marginTop:12,
        // marginBottom:12,
        marginTop:6,
        marginBottom:6,
        fontSize:fonts.h4
    },
    goLiveBtnStyle:{
        marginTop:6,
        marginBottom:6,
        // marginRight:12,
        marginRight:6,
        padding:0,
        background:'#F0F7FF',
        color:'#2DD1AC',
        fontSize:fonts.h4,
        height:26
    },
    liveInfoWrapperStyle:{
        alignSelf:'center',
        margin:0
    },

    topContainerStyle:{
        //background:'red',
        height:'16%',
        display:'flex',
        flexDirection:'column'
    }
}

export default Stream;