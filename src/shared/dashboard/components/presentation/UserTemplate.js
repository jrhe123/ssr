import React, { Component } from 'react';

// Libraries
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';

// constants
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';



class UserTemplate extends Component {

    render() {
        const {
            memberInfoWrapperStyle,
            userAvatarStyle,
            userNameWrapperStyle,
            userNameStyle,
            userEmailStyle,
            userRegisterWrapperStyle,
            userRegisterDateStyle,
            userRegisterStatusStyle,
            resendBtnContainerStyle,
            resendBtnStyle,
            userCloseBtnContainerStyle,
            channelInfoIconStyle
        } = styles;


        return (
            <div style={memberInfoWrapperStyle}>
                <Avatar alt='Roy He' style={userAvatarStyle} src={require('../../../../../assets/images/ava.png')}/>
                <div style={userNameWrapperStyle}>
                    <p style={userNameStyle}>Dhaneswar pandian</p>
                    <p style={userEmailStyle}>dhan@digitalxi.com</p>
                </div>
                <div style={userRegisterWrapperStyle}>
                    <p style={userRegisterDateStyle}>10 September 2017</p>
                    <p style={userRegisterStatusStyle}>invited</p>
                </div>
                <div style={resendBtnContainerStyle}>                               
                    <Button style={resendBtnStyle} variant="outlined">Resend Invite</Button>
                </div>
                <div style={userCloseBtnContainerStyle}>
                    <IconButton style={channelInfoIconStyle}><Close/></IconButton>
                </div>
            </div> 
        );
    }
}

const styles = {
    memberInfoWrapperStyle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        width:'auto',
        padding:12,
        borderWidth:0.25,
        borderColor:'#d2d8de',
        borderStyle:'solid',
        borderLeft:0,
        borderRight:0,
        borderTop:0
    },
    userAvatarStyle:{
        marginLeft:18,
        marginRight:12,
        width:40
    },
    userNameWrapperStyle:{
        width:180
    },
    userNameStyle:{
        margin:0,
        fontSize:fonts.h3
    },
    userEmailStyle:{
        marginTop:3,
        marginBottom:0,
        color:colors.lightGreyColor,
        fontSize: fonts.h4,
    },
    userRegisterWrapperStyle:{
        marginLeft:6,
        width:180
    },
    userRegisterDateStyle:{
        margin:0,
        fontSize:fonts.h3
    },
    userRegisterStatusStyle:{
        marginTop:3,
        marginBottom:0,
        color:colors.lightGreyColor,
        fontSize: fonts.h4,
    },
    resendBtnContainerStyle:{
        width:126
    },
    resendBtnStyle:{
        textTransform:'none',
        width:126
    },
    userCloseBtnContainerStyle:{
        width: 60,
        display:'flex',
        justifyContent:'center',
        marginLeft:18
    },
    channelInfoIconStyle:{
        height:20, 
        width:20
    },
    

}
export default UserTemplate;
