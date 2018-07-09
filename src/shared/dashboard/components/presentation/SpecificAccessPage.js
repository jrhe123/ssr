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


class SpecificAccessPage extends Component{

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

            invitaionContainerStyle,
            invitationLabelStyle,
            invitationEditBtnStyle,

            memberListContainerStyle,
            memberListHeaderContainerStyle,
            memberLabelStyle,
            searchUserStyle,

            dropdownContainerStyle,
            dropdownBtnStyle,
            searchUserWrapperStyle,
            dropdownLabelStyle,
            expandIconStyle
            

            
        } = styles;

        return(
            <div style={mainContainerStyle}>
                <div style={channelDetailsContainerStyle}>
                    <p style={channelDetailsWrapperStyle}>Manage users from accessing specific channel’s content</p>
                    <p style={safeguardLabelStyle}>Use this safeguard to manage content access for each user in specific channels by locking and unlocking them</p>
                </div>
                <div style={invitaionContainerStyle}>
                    <p style={invitationLabelStyle}>Show this error message message if the user tries to access a channel where he/she is locked</p>
                    <Button style={invitationEditBtnStyle}>Edit message</Button>
                </div>
                <div style={memberListHeaderContainerStyle}>
                    <p style={memberLabelStyle}>User list (2)</p>
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
                    <RestrictUserTemplate label={'Lock'}/>
                    <RestrictUserTemplate label={'Unlock'}/>
                    <RestrictUserTemplate label={'Unlock'}/>
                    <RestrictUserTemplate label={'Lock'}/>
                    <RestrictUserTemplate label={'Unlock'}/>
                    <RestrictUserTemplate label={'Lock'}/>
                    <RestrictUserTemplate label={'Unlock'}/>
                    <RestrictUserTemplate label={'Unlock'}/>
                    <RestrictUserTemplate label={'Lock'}/>
                    <RestrictUserTemplate label={'Lock'}/>
                    <RestrictUserTemplate label={'Unlock'}/>
                    <RestrictUserTemplate label={'Lock'}/>
                    <RestrictUserTemplate label={'Lock'}/>
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
        marginBottom:24,
        paddingTop:18,
        paddingLeft:30,
        paddingRight:30,
        paddingBottom:6,
        fontSize: fonts.h4,
        marginLeft:48,
        height:72,
        boxShadow: '0 1px 1px 0 #CED5DB'
    },
    channelDetailsWrapperStyle:{
        display:'flex',
        flexDirection:'row',
        marginTop:0,
        marginBottom:12,
        fontSize:fonts.h2,
        fontWeight:'500',
        fontFamily:'avenir'
    },
    invitaionContainerStyle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'auto',
        background:'white',
        marginTop:0,
        marginBottom:30,
        paddingTop:12,
        paddingLeft:12,
        paddingRight:12,
        paddingBottom:12,
        fontSize: fonts.h4,
        marginLeft:48,
        height:36,
        boxShadow: '0 1px 1px 0 #CED5DB' 
    },
    invitationLabelStyle:{
        marginLeft:18,
        fontSize: fonts.h2,
        fontWeight:'500',
        marginTop:0,
        marginBottom:0,
        fontFamily: 'avenir',
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
        maxHeight:'calc(100% - 292px)',
        boxShadow: '0 1px 1px 0 #CED5DB'
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
        height:48,
        boxShadow: '0 1px 1px 0 #CED5DB'
    },
    memberLabelStyle:{
        marginLeft:18,
        fontSize: fonts.h1,
        fontFamily:'avenir',
        fontWeight:'500',
        marginTop:0,
        marginBottom:0,
        width:106
    },
    dropdownContainerStyle:{
        height:30,
        width:138,
    },
    safeguardLabelStyle:{
        margin:0,
        fontSize:fonts.h3,
        fontWeight:'500',
        color:colors.lightGreyColor,
        fontFamily:'avenir'
    },
    dropdownBtnStyle:{
        padding:0,
        textTransform: 'none',
        fontSize:fonts.h3,
        fontWeight: 300,
        background:colors.lightBlueColor,
        color:colors.whiteColor,
        height:30,
        width:138
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
    dropdownLabelStyle:{
        color:colors.blackColor,
        margin:0,
        width: 'calc(100% - 32px)',
        textAlign:'center'
    },
    expandIconStyle:{
        color:colors.lightGreyColor,
        width:32

    }
}

export default withStyles(themeStyles)(SpecificAccessPage);