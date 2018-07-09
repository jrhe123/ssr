import React, { Component } from 'react';

// styles
import '../../../../../assets/css/dd-menu/dd_menu.css';

// libraries
import SearchBar from 'material-ui-search-bar';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Lock from '@material-ui/icons/Lock';
import DropdownMenu from 'react-dd-menu';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import { withStyles } from '@material-ui/core/styles';
import PersonAdd from '@material-ui/icons/PersonAdd';

// constants
import sizes from '../../../styles/sizes';
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

// component
import ChannelInfoTemplate from '../presentation/ChannelInfoTemplate';
import UserTemplate from '../presentation/UserTemplate';
import InviteModalTemplate from '../presentation/InviteModalTemplate';

const themeStyles = () => ({
    yourIconButtonStyle: {
        height: 36
    }
});

class Audience extends Component{

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

    handleToggleImport = () => {
        this.setState({ 
            isImportOpen: !this.state.isImportOpen 
        });
    }

    handleCloseImport = () => {
        this.setState({ isImportOpen: false });
    }

    render(){

        const {
            classes
        } = this.props;

        const {
            mainContainerStyle,
            mainWrapperStyle,

            topContainerStyle,
            topLeftContainerStyle,
            topRightContainerStyle,
            inviteLabelStyle,

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

            channelContainerStyle,
            channelLabelStyle,

            totalLabelstyle,

            bodyContainerStyle,
            channelSearchContainerStyle,
            channelInfoContainerStyle,
            searchBarWrapperStyle,
            searchBarStyle,

            streamContainerStyle,
            
            channelDetailsContainerStyle,
            channelDetailsWrapperStyle,
            channelNameWrapperStyle,
            channelRegisteredWrapperStyle,
            channelInvitedWrapperStyle,
            channelNameStyle,
            channelCreatedStyle,
            channelRegisteredNumberStyle,
            channelRegisteredLabelStyle,
            channelInvitedNumberStyle,
            channelInvitedLabelStyle,
            channeEditStyle,
            channelInfoIconStyle,

            invitaionContainerStyle,
            invitationLabelStyle,

            memberListContainerStyle,
            memberListHeaderContainerStyle,
            memberLabelStyle,
            searchUserWrapperStyle,
            searchUserStyle,
            memberListInfoStyle,
            importContainerStyle,
            importHeaderStyle,
            importTextContentStyle,
            importBtnStyle,

            invitationUserBtnStyle,
            addIconStyle
            
        } = styles;

        return(
            <div style={mainContainerStyle}>
            <div style={mainWrapperStyle}>
                <div style={topContainerStyle}>
                    <div style={topLeftContainerStyle}>
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
                    <div style={topRightContainerStyle}>
                        <p style={inviteLabelStyle}>Invite your users directly to this private channel. When the user accepts the invitation, this private channel’s content will be automatically visibile to them on their feed along with the Generic content (latest posts will be shown first and follows reverse chronological order)</p>
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
                    </div>
                    <div style={streamContainerStyle}>
                        <div style={channelDetailsContainerStyle}>
                            <div style={channelDetailsWrapperStyle}>
                            <div style={channelNameWrapperStyle}>
                                <p style={channelNameStyle}>Cardiology</p>
                                <p style={channelCreatedStyle}>Created 01.01.1972</p>
                            </div>
                            <div style={channelRegisteredWrapperStyle}>
                                <p style={channelRegisteredNumberStyle}>246</p>
                                <p style={channelRegisteredLabelStyle}>Registered</p>
                            </div>
                            <div style={channelInvitedWrapperStyle}>
                                <p style={channelInvitedNumberStyle}>257</p>
                                <p style={channelInvitedLabelStyle}>Invited</p>
                            </div>
                            </div>
                            <div style={channeEditStyle}>
                                    <IconButton style={channelInfoIconStyle}><MoreHoriz/></IconButton>
                            </div>
                        </div>
                        <div style={invitaionContainerStyle}>
                            <p style={invitationLabelStyle}>Invitation email Template</p>
                            <InviteModalTemplate/>
                        </div>
                        <div style={memberListHeaderContainerStyle}>
                            <p style={memberLabelStyle}>Members list</p>
                            <Button style={invitationUserBtnStyle}><PersonAdd style={addIconStyle}/>Invite New Users</Button>
                            <div style={searchUserWrapperStyle}>
                                <SearchBar
                                    value={this.state.value}
                                    onChange={() => handleSearch()}
                                    style={searchUserStyle}
                                    placeholder={'Search a user'}
                                    classes={{ iconButton: classes.yourIconButtonStyle }}
                                />
                            </div>
                            <div style={memberListInfoStyle}>
                                <DropdownMenu 
                                    isOpen={this.state.isImportOpen}
                                    close={this.handleCloseImport}
                                    toggle={
                                        <div>
                                            <IconButton style={channelInfoIconStyle} onClick={() => this.handleToggleImport()}><MoreHoriz/></IconButton>
                                        </div>
                                    }
                                    align={'right'}
                                    size={'md'}                                   
                                >
                                    <div style={importContainerStyle}>
                                        <p style={importHeaderStyle}>Import CSV file</p>
                                        <p style={importTextContentStyle}>Upload and send all your users using this feature. Save time</p>
                                        <Button color="primary" style={importBtnStyle}>Download a sample CSV file</Button>
                                    </div>
                                </DropdownMenu>
                            </div>
                        </div>
                        <div style={memberListContainerStyle}>
                            <UserTemplate/>
                            <UserTemplate/>
                            <UserTemplate/>
                            <UserTemplate/>
                            <UserTemplate/>
                            <UserTemplate/>
                            <UserTemplate/>
                            <UserTemplate/>
                            <UserTemplate/>
                            <UserTemplate/>
                            <UserTemplate/>
                            <UserTemplate/>
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
        height:'calc(100% - 48px)',
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
    expandIconStyle:{
        color:colors.lightGreyColor
    },
    topContainerStyle:{
        height:134,
        display:'flex',
        flexDirection:'row'
    },
    topLeftContainerStyle:{
        height:'100%',
        display:'flex',
        flexDirection:'column'
    },
    topRightContainerStyle:{
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:48,
        width:692
    },
    inviteLabelStyle:{
        paddingLeft:0,
        paddingRight:48,
        paddingTop:0,
        paddingBottom:0,
        fontSize:fonts.h3,
        color:colors.lightGreyColor,
        height:66
    },

    channelDetailsContainerStyle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'auto',
        background:'white',
        marginTop:0,
        marginBottom:6,
        paddingTop:30,
        paddingLeft:12,
        paddingRight:12,
        paddingBottom:18,
        fontSize: fonts.h4,
        marginLeft:48,
        height:36,
        boxShadow: '0 1px 1px 0 #CED5DB'
    },
    channelDetailsWrapperStyle:{
        display:'flex',
        flexDirection:'row'
    },
    channelNameWrapperStyle:{
        marginLeft:18,
        width:162
    },
    channelRegisteredWrapperStyle:{
        marginLeft:12,
        width:72
    },
    channelInvitedWrapperStyle:{
        marginLeft:12,
        width:60
    },
    channelNameStyle:{
        margin:0,
        fontSize: fonts.h2
    },
    channelCreatedStyle:{
        marginTop:3,
        marginBottom:0,
        color:colors.lightGreyColor,
        fontSize: fonts.h3,
    },
    channelRegisteredNumberStyle:{
        margin:0,
        fontSize: fonts.h2
    },
    channelRegisteredLabelStyle:{
        marginTop:3,
        marginBottom:0,
        fontSize: fonts.h3,
        color:colors.lightGreyColor
    },
    channelInvitedNumberStyle:{
        margin:0,
        fontSize: fonts.h2
    },
    channelInvitedLabelStyle:{
        marginTop:3,
        marginBottom:0,
        fontSize: fonts.h3,
        color:colors.lightGreyColor
    },
    channeEditStyle:{
        marginTop:0,
        marginBottom:0,
        marginRight:30
    },
    channelInfoIconStyle:{
        height:20, 
        width:20
    },

    invitaionContainerStyle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'auto',
        background:'white',
        marginTop:0,
        marginBottom:6,
        paddingTop:12,
        paddingLeft:12,
        paddingRight:12,
        paddingBottom:12,
        fontSize: fonts.h4,
        marginLeft:48,
        boxShadow: '0 1px 1px 0 #CED5DB',
    },
    invitationLabelStyle:{
        marginLeft:18,
        fontSize: fonts.h2,
        marginTop:0,
        marginBottom:0
    },

    memberListContainerStyle:{
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'space-between',
        width:'auto',
        background:'white',
        marginLeft:48,
        marginTop:0,
        marginBottom:0,
        padding:0,
        fontSize: fonts.h4,
        overflowY:'scroll',
        minHeight:0,
        maxHeight:'calc(100% - 232px)',
        boxShadow: '0 1px 1px 0 #CED5DB' 
    },
    memberListHeaderContainerStyle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        width:'auto',
        paddingTop:12,
        paddingLeft:12,
        paddingRight:12,
        paddingBottom:12,
        borderWidth:0.25,
        borderColor:'#d2d8de',
        borderStyle:'solid',
        borderLeft:0,
        borderRight:0,
        borderTop:0,
        marginLeft:48,
        background:colors.whiteColor,
        height:48,
        boxShadow: '0 1px 1px 0 #CED5DB',
    },
    memberLabelStyle:{
        marginLeft:18,
        fontSize: fonts.h2,
        marginTop:0,
        marginBottom:0
    },
    searchUserWrapperStyle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        marginLeft:6,
        width:240,
        height:36
    },
    searchUserStyle:{
        width:'100%',
        boxShadow:'none',
        borderWidth:1,
        borderColor:'#d2d8de',
        borderStyle:'solid',
        paddingLeft:6,
        height:'100%'
    },
    memberListInfoStyle:{
        alignSelf:'center',
        marginLeft:24
    },
    importContainerStyle:{
        paddingTop:18,
        paddingRight:18,
        paddingBottom:12,
        paddingLeft:12
    },
    importHeaderStyle:{
        marginTop:0,
        marginBottom:12,
        fontSize:fonts.h3
    },
    importTextContentStyle:{
        marginTop:0,
        marginBottom:0,
        fontSize:fonts.h5
    },
    importBtnStyle:{
        margin:0,
        fontSize:fonts.h5,
        padding:0
    },

    invitationUserBtnStyle:{
        background:colors.blueColor,
        color:colors.whiteColor,
        height:40,
        marginLeft:36,
        fontSize: fonts.h5,
        marginRight:12,
    },
    addIconStyle:{
        paddingRight:6,
    },

}

export default withStyles(themeStyles)(Audience);