import React, { Component } from 'react';

// styles
import '../../../../../assets/css/dd-menu/dd_menu.css';

// libraries
import { withStyles } from '@material-ui/core/styles';
import SearchBar from 'material-ui-search-bar';
import Button from '@material-ui/core/Button';


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


class RestrictSessionPage extends Component{

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
            searchUserWrapperStyle,
            searchUserStyle,

            
        } = styles;

        return(
            <div style={mainContainerStyle}>
                <div style={channelDetailsContainerStyle}>
                    <p style={channelDetailsWrapperStyle}>Restrict users to have a maximum number of sessions</p>
                    <p style={safeguardLabelStyle}>Enable this safeguard to protect your digital assest against user ID and password sharing between your members</p>
                </div>
                <div style={invitaionContainerStyle}>
                    <p style={invitationLabelStyle}>Show this error message when the user exceeds maximum number of sessions</p>
                    <Button style={invitationEditBtnStyle}>Edit</Button>
                </div>
                <div style={memberListHeaderContainerStyle}>
                    <p style={memberLabelStyle}>Restricted user list (10)</p>
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
                    <RestrictUserTemplate/>
                    <RestrictUserTemplate/>
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
    invitaionContainerStyle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
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
        marginLeft:0
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
        maxHeight:'calc(100% - 250px)',  
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
        color:colors.blackColor
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
    }
}

export default withStyles(themeStyles)(RestrictSessionPage);