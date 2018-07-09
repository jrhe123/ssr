import React, { Component } from 'react';

// styles
import '../../../../../assets/css/dd-menu/dd_menu.css';

// libraries
import SearchBar from 'material-ui-search-bar';
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


class RemoveUserPage extends Component{

    render(){

        const {
            classes
        } = this.props;

        const {
            mainContainerStyle,
            
            channelDetailsContainerStyle,
            channelDetailsWrapperStyle,
            safeguardLabelStyle,

            memberListContainerStyle,
            memberListHeaderContainerStyle,
            memberLabelStyle,
            searchUserWrapperStyle,
            searchUserStyle,

            
        } = styles;

        return(
            <div style={mainContainerStyle}>
                <div style={channelDetailsContainerStyle}>
                    <p style={channelDetailsWrapperStyle}>Remove users & wipe downloaded content</p>
                    <p style={safeguardLabelStyle}>Use this safeguard to remove users from all channels and wipe downloaded content</p>
                </div>
                <div style={memberListHeaderContainerStyle}>
                    <p style={memberLabelStyle}>User list (2)</p>
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
                        userPicture={require('../../../../../assets/images/vejey.jpeg')}
                        userName={'Vejey'}
                        userEmail={'vejey@digitalxi.com'}
                        userRegistrationDate={'29 June 2018'}
                        userRegistrationInfo={'locked'}
                        btnLabel={'remove'} 
                        btnBackground={'#EE2E24'} 
                        btnTextColor={colors.whiteColor} btnBorder={'none'}
                    />
                    <RestrictUserTemplate
                        userPicture={require('../../../../../assets/images/paul.jpeg')} 
                        userName={'Paul'}
                        userEmail={'paul@digitalxi.com'}
                        userRegistrationDate={'09 November 2017'}
                        userRegistrationInfo={'joined'}
                        btnLabel={'remove'} 
                        btnBackground={'#EE2E24'} 
                        btnTextColor={colors.whiteColor} 
                        btnBorder={'none'}
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
        marginBottom:30,
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
        maxHeight:'calc(100% - 216px)', 
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
        boxShadow:'0 1px 1px 0 #CED5DB'
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
    }
}

export default withStyles(themeStyles)(RemoveUserPage);