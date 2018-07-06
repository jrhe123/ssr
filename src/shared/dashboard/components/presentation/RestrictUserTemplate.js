import React, { Component } from 'react';

// Libraries
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

// constants
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';



class RestrictUserTemplate extends Component {

    render() {
        const {
            memberInfoWrapperStyle,
            userAvatarStyle,
            userNameWrapperStyle,
            userNameStyle,
            userEmailStyle,
            userRegisterWrapperStyle,
            userRegisterDateStyle,
            sessionNumberStyle,
            allowBtnContainerStyle,
            allowBtnStyle
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
                    <p style={sessionNumberStyle}>6th session</p>
                </div>
                <div style={allowBtnContainerStyle}>                               
                    <Button style={allowBtnStyle} variant="outlined">Allow</Button>
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
    sessionNumberStyle:{
        marginTop:3,
        marginBottom:0,
        color:colors.lightGreyColor,
        fontSize: fonts.h4,
    },
    allowBtnContainerStyle:{
        width:168,
        marginRight:20,
        display:'flex',
        justifyContent:'flex-end',
    },
    allowBtnStyle:{
        textTransform:'none',
        width:126
    }
}
export default RestrictUserTemplate;
