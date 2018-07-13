import React, { Component } from 'react';

// styles
import '../../../../../assets/css/dd-menu/dd_menu.css';

// libraries
import SearchBar from 'material-ui-search-bar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Schedule from '@material-ui/icons/Schedule';

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

class RestrictDomainPage extends Component{

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
            domainIconContainerStyle,
            domainIconStyle,

            invitaionContainerStyle,
            invitationLabelStyle,
            invitationEditBtnStyle,
            addDomainBtnStyle,

            memberListContainerStyle,
            memberListHeaderContainerStyle,
            memberLabelStyle,
            searchUserWrapperStyle,
            searchUserStyle,

            inviteCodeContainerStyle,
            inviteCodeLabelStyle,
            channelCodeStyle          
        } = styles;

        return(
            <div style={mainContainerStyle}>
                <div style={channelDetailsContainerStyle}>
                    <p style={channelDetailsWrapperStyle}>Allow specific email domains to signup</p>
                    <p style={safeguardLabelStyle}>Enable this safeguard to protect your digital assest against unwanted or malicious users from other domains.</p>
                </div>
                <div style={domainContainerStyle}>
                    <div style={domainWrapperStyle}>
                        <p style={emailLabelStyle}>Email domains</p>
                        <p style={emailContentStyle}>Allow only user(s) with the following email domains to register or signup</p>
                        <div style={inviteCodeContainerStyle}>
                            <div style={inviteCodeLabelStyle}>
                                <p style={domainIconContainerStyle}><Schedule style={domainIconStyle}/></p>
                                <p style={channelCodeStyle}>demo-1</p>
                            </div>
                        </div>
                    </div>
                    <Button style={addDomainBtnStyle}>+ Add Domain</Button>
                </div>
                <div style={invitaionContainerStyle}>
                    <p style={invitationLabelStyle}>Show this error message when the user tries to signup using a different email</p>
                    <Button style={invitationEditBtnStyle}>Edit Message</Button>
                </div>
                <div style={memberListHeaderContainerStyle}>
                    <p style={memberLabelStyle}>Audit trail (10)</p>
                    <div style={searchUserWrapperStyle}>
                        <SearchBar
                            style={searchUserStyle}
                            placeholder={'Search a user'}
                            classes={{ iconButton: classes.yourIconButtonStyle }}
                        />
                    </div>
                </div>
                <div style={memberListContainerStyle}>
                    <RestrictUserTemplate
                        userPicture={require('../../../../../assets/images/dhan.png')} 
                        userName={'Dhaneswar Pandian'}
                        userEmail={'dhan@digitalxi.com'}
                        userRegistrationDate={'10 May 2018'}
                        userRegistrationInfo={'dhan@digitalxi.com'}
                        btnLabel={'Allow'} 
                        btnBackground={colors.whiteColor} 
                        btnTextColor={'#1B2A36'}
                    />
                    <RestrictUserTemplate
                        userPicture={require('../../../../../assets/images/roy.png')} 
                        userName={'Roy'}
                        userEmail={'roy@digitalxi.com'}
                        userRegistrationDate={'10 September 2011'}
                        userRegistrationInfo={'roy@digitalxi.com'}
                        btnLabel={'Allow'} 
                        btnBackground={colors.whiteColor} 
                        btnTextColor={'#1B2A36'}
                    />
                    <RestrictUserTemplate
                        userPicture={require('../../../../../assets/images/vejey.jpeg')} 
                        userName={'Vejey'}
                        userEmail={'vejey@digitalxi.com'}
                        userRegistrationDate={'29 June 2018'}
                        userRegistrationInfo={'vejey@digitalxi.com'}
                        btnLabel={'Allow'} 
                        btnBackground={colors.whiteColor} 
                        btnTextColor={'#1B2A36'}
                    />
                    <RestrictUserTemplate
                        userPicture={require('../../../../../assets/images/paul.jpeg')} 
                        userName={'Paul'}
                        userEmail={'paul@digitalxi.com'}
                        userRegistrationDate={'09 November 2017'}
                        userRegistrationInfo={'paul@digitalxi.com'}
                        btnLabel={'Allow'} 
                        btnBackground={colors.whiteColor} 
                        btnTextColor={'#1B2A36'}
                    />
                    <RestrictUserTemplate
                        userPicture={require('../../../../../assets/images/roy.png')}
                        userName={'Roy'}
                        userEmail={'roy@digitalxi.com'}
                        userRegistrationDate={'10 September 2011'}
                        userRegistrationInfo={'roy@digitalxi.com'}
                        btnLabel={'Allow'} 
                        btnBackground={colors.whiteColor} 
                        btnTextColor={'#1B2A36'}
                    />
                    <RestrictUserTemplate
                        userPicture={require('../../../../../assets/images/vejey.jpeg')} 
                        userName={'Vejey'}
                        userEmail={'vejey@digitalxi.com'}
                        userRegistrationDate={'29 June 2018'}
                        userRegistrationInfo={'vejey@digitalxi.com'}
                        btnLabel={'Allow'} 
                        btnBackground={colors.whiteColor} 
                        btnTextColor={'#1B2A36'}
                    />
                    <RestrictUserTemplate
                        userPicture={require('../../../../../assets/images/paul.jpeg')} 
                        userName={'Paul'}
                        userEmail={'paul@digitalxi.com'}
                        userRegistrationDate={'09 November 2017'}
                        userRegistrationInfo={'paul@digitalxi.com'}
                        btnLabel={'Allow'} 
                        btnBackground={colors.whiteColor} 
                        btnTextColor={'#1B2A36'}
                    />
                    <RestrictUserTemplate
                        userPicture={require('../../../../../assets/images/roy.png')}
                        userName={'Roy'}
                        userEmail={'roy@digitalxi.com'}
                        userRegistrationDate={'10 September 2011'}
                        userRegistrationInfo={'roy@digitalxi.com'}
                        btnLabel={'Allow'} 
                        btnBackground={colors.whiteColor} 
                        btnTextColor={'#1B2A36'}
                    />
                    <RestrictUserTemplate 
                        userPicture={require('../../../../../assets/images/vejey.jpeg')}
                        userName={'Vejey'}
                        userEmail={'vejey@digitalxi.com'}
                        userRegistrationDate={'29 June 2018'}
                        userRegistrationInfo={'vejey@digitalxi.com'}
                        btnLabel={'Allow'} 
                        btnBackground={colors.whiteColor} 
                        btnTextColor={'#1B2A36'}
                    />
                    <RestrictUserTemplate
                        userPicture={require('../../../../../assets/images/paul.jpeg')} 
                        userName={'Paul'}
                        userEmail={'paul@digitalxi.com'}
                        userRegistrationDate={'09 November 2017'}
                        userRegistrationInfo={'paul@digitalxi.com'}
                        btnLabel={'Allow'} 
                        btnBackground={colors.whiteColor} 
                        btnTextColor={'#1B2A36'}
                    />
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
        marginBottom:18,
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
    domainContainerStyle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        width:'auto',
        background:'white',
        marginTop:0,
        marginBottom:30,
        paddingTop:18,
        paddingLeft:12,
        paddingRight:12,
        paddingBottom:18,
        fontSize: fonts.h4,
        marginLeft:48,
        height:96,
        boxShadow: '0 1px 1px 0 #CED5DB'
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
        fontSize:fonts.h2,
        fontWeight:'500',
        fontFamily:'avenir'
    },
    emailContentStyle:{
        marginTop:0,
        marginBottom:12,
        color:colors.lightGreyColor,
        fontSize:fonts.h3,
        fontFamily:'avenir',
        fontWeight:'500'
    },
    invitaionContainerStyle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        width:'auto',
        background:'white',
        marginTop:0,
        marginBottom:24,
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
        textTransform: 'none'
    },
    addDomainBtnStyle:{
        background:colors.blueColor,
        color:colors.whiteColor,
        height:40,
        width:126,
        marginLeft:0,
        fontSize:fonts.h3,
        textTransform: 'none'
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
        maxHeight:'calc(100% - 444px)',
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
        marginBottom:0
    },
    searchUserWrapperStyle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        width:276,
        height:36,
        marginRight:36
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
    domainIconContainerStyle:{
        height:28,
        width:24,
        background:colors.lightGreyColor,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        color:colors.blackColor,
        margin:0
        // border:0
    },
    domainIconStyle:{
        height:18,
        width:12,
        // border:0
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
    channelCodeStyle:{
        background:colors.lightBlueColor,
        color:colors.blackColor,
        margin:0,
        padding:'6px 6px 12px 6px',
        // height:30
    }

}

export default withStyles(themeStyles)(RestrictDomainPage);