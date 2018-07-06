import React, { Component } from 'react';

// styles
import '../../../../../assets/css/dd-menu/dd_menu.css';

// libraries
import SearchBar from 'material-ui-search-bar';
import Button from '@material-ui/core/Button';
import DropdownMenu from 'react-dd-menu';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';


// constants
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

// component
import RestrictUserTemplate from './RestrictUserTemplate';

const themeStyles = () => ({
    yourIconButtonStyle: {
        height: 36
    }
});


class PrivateInvitePage extends Component{

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

    render(){

        const {
            classes
        } = this.props;

        const {
            mainContainerStyle,
            
            channelDetailsContainerStyle,
            channelDetailsWrapperStyle,
            safeguardLabelStyle,

            domainContainerStyle,
            domainWrapperStyle,
            emailLabelStyle,
            emailContentStyle,
            inviteCodeContainerStyle,
            inviteCodeLabelStyle,
            channelNameStyle,
            channelCodeStyle,

            invitaionContainerStyle,
            invitationLabelStyle,
            invitationEditBtnStyle,

            memberListContainerStyle,
            memberListHeaderContainerStyle,
            memberLabelStyle,
            searchUserWrapperStyle,
            searchUserStyle,
            
            dropdownContainerStyle,
            expandIconStyle,
            dropdownBtnStyle,
            dropdownLabelStyle

            
        } = styles;

        return(
            <div style={mainContainerStyle}>
                <div style={channelDetailsContainerStyle}>
                    <p style={channelDetailsWrapperStyle}>Enable invite codes for channels</p>
                    <p style={safeguardLabelStyle}>By enabling this safeguard, users are required to enter a specific invite code (set by you) before accessing the channel’s content</p>
                </div>
                <div style={domainContainerStyle}>
                    <div style={domainWrapperStyle}>
                        <p style={emailLabelStyle}>Channel - Invite codes</p>
                        <p style={emailContentStyle}>Allow only user(s) with the following invite codes to access the channel</p>
                        <div style={inviteCodeContainerStyle}>
                            <div style={inviteCodeLabelStyle}>
                                <p style={channelNameStyle}>#generic</p>
                                <p style={channelCodeStyle}>demo-1</p>
                            </div>
                            <div style={inviteCodeLabelStyle}>
                                <p style={channelNameStyle}>#diabetes-channel</p>
                                <p style={channelCodeStyle}>diabetes101</p>
                            </div>
                        </div>
                    </div>
                    <Button style={invitationEditBtnStyle}>+ add invite code</Button>
                </div>
                <div style={invitaionContainerStyle}>
                    <p style={invitationLabelStyle}>Show this error message when the user tries to enter a wrong invite code</p>
                    <Button style={invitationEditBtnStyle}>Edit Message</Button>
                </div>
                <div style={memberListHeaderContainerStyle}>
                    <p style={memberLabelStyle}>Audit trail (2)</p>
                    <div style={dropdownContainerStyle}>
                        <DropdownMenu
                            isOpen={this.state.isMenuOpen}
                            close={this.handleCloseMenu}
                            toggle={
                                <div>
                                    <Button style={dropdownBtnStyle} onClick={() => this.handleToggleMenu()}><p style={dropdownLabelStyle}>#generic</p><ExpandMore style={expandIconStyle}/></Button>
                                </div>
                            }
                            align={'center'}
                            size={'sm'}
                        >
                            <div>
                                <p>#generic</p>
                            </div>
                        </DropdownMenu>
                    </div>
                    <div style={searchUserWrapperStyle}>
                        <SearchBar
                            style={searchUserStyle}
                            placeholder={'Search a user'}
                            classes={{ iconButton: classes.yourIconButtonStyle }}
                        />
                    </div>
                </div>
                <div style={memberListContainerStyle}>
                    <RestrictUserTemplate/>
                    <RestrictUserTemplate/>
                    <RestrictUserTemplate/>
                    <RestrictUserTemplate/> 
                </div>
            </div>
        )
    }
}

const styles = {
    mainContainerStyle:{
        height:'100%',
        width:'100%'
    },
    clickHereLinkStyle:{
        color:colors.blueColor
    },
    channelDetailsContainerStyle:{
        display:'flex',
        flexDirection:'column',
        width:'auto',
        background:'white',
        marginTop:0,
        marginBottom:12,
        paddingTop:18,
        paddingLeft:30,
        paddingRight:30,
        paddingBottom:6,
        fontSize: fonts.h4,
        marginLeft:48,
        height:72
    },
    channelDetailsWrapperStyle:{
        display:'flex',
        flexDirection:'row',
        marginTop:0,
        marginBottom:12,
        fontSize:fonts.h2,
        fontWeight:'500',
        color:colors.blackColor,
        fontFamily:'avenir'
    },
    domainContainerStyle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        width:'auto',
        background:'white',
        marginTop:0,
        marginBottom:12,
        paddingTop:18,
        paddingLeft:12,
        paddingRight:12,
        paddingBottom:18,
        fontSize: fonts.h4,
        marginLeft:48,
        height:96
    },
    domainWrapperStyle:{
        marginLeft:18,
        marginTop:0,
        marginBottom:0,
        width:'calc(100% - 152px)',
        paddingRight:12,
        height:'100%'
    },
    emailLabelStyle:{
        marginTop:0,
        marginBottom:12,
        fontSize:fonts.h2
    },
    emailContentStyle:{
        marginTop:0,
        marginBottom:12,
        color:colors.lightGreyColor,
        fontSize:fonts.h3,
        fontFamily:'avenir'
    },
    invitaionContainerStyle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        width:'auto',
        background:'white',
        marginTop:0,
        marginBottom:12,
        paddingTop:12,
        paddingLeft:12,
        paddingRight:12,
        paddingBottom:12,
        fontSize: fonts.h4,
        marginLeft:48,
        height:36
    },
    invitationLabelStyle:{
        marginLeft:18,
        fontSize: fonts.h2,
        fontWeight:'500',
        color:colors.blackColor,
        marginTop:0,
        marginBottom:0,
        fontFamily:'avenir',
        width:'calc(100% - 152px)',
        paddingRight:12
    },
    invitationEditBtnStyle:{
        background:colors.blueColor,
        color:colors.whiteColor,
        height:40,
        width:120,
        marginLeft:0,
        fontSize:fonts.h3,
        textTransform: 'none',
        fontFamily:'avenir',
        paddingLeft:3,
        paddingRight:3,
        fontWeight: 300
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
        maxHeight:'calc(100% - 408px)',  
    },
    memberListHeaderContainerStyle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
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
        height:48
    },
    memberLabelStyle:{
        marginLeft:18,
        fontSize: fonts.h1,
        fontFamily:'avenir',
        fontWeight:'500',
        marginTop:0,
        marginBottom:0,
        color:colors.blackColor,
        width:106
    },
    searchUserWrapperStyle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        width:276,
        height:36,
        marginRight:36,
        // marginLeft:36
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
    safeguardLabelStyle:{
        margin:0,
        fontSize:fonts.h3,
        fontWeight:'500',
        color:colors.lightGreyColor,
        fontFamily:'avenir'
    },
    inviteCodeContainerStyle:{
        display:'flex',
        flexDirection:'row'
    },
    inviteCodeLabelStyle:{
        height:28,
        display:'flex',
        marginRight:18
    },
    channelNameStyle:{
        background:colors.blackColor,
        color:colors.whiteColor,
        margin:0,
        padding:'6px 6px 6px 6px'
    },
    channelCodeStyle:{
        background:colors.lightBlueColor,
        color:colors.blackColor,
        margin:0,
        padding:'6px 6px 12px 6px'
    },
    dropdownLabelStyle:{
        color:colors.whiteColor,
        margin:0,
        width: 'calc(100% - 32px)',
        textAlign:'center'
    },
    expandIconStyle:{
        color:colors.whiteColor,
        // paddingLeft:36,
        width:32

    },
    dropdownContainerStyle:{
        // marginTop:0,
        // marginBottom:0,
        height:30,
        width:138,
        // marginLeft:54
    },
    dropdownBtnStyle:{
        padding:0,
        textTransform: 'none',
        fontSize:fonts.h3,
        fontWeight: 300,
        background:colors.blackColor,
        color:colors.whiteColor,
        height:30,
        width:138
    },
}

export default withStyles(themeStyles)(PrivateInvitePage);