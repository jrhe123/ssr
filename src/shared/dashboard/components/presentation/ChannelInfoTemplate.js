import React, { Component } from 'react';

// Libraries
import IconButton from '@material-ui/core/IconButton';
import MoreHoriz from '@material-ui/icons/MoreHoriz';

// constants
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';



class ChannelInfoTemplate extends Component {

    render() {
        const {
            channelInfoStyle,
            channelInfoLeftStyle,
            channelTitleStyle,
            streamLabelStyle,
            channelInfoRightStyle,
            channelInfoIconStyle
        } = styles;


        return (
            <div style={channelInfoStyle}>
                <div style={channelInfoLeftStyle}>
                    <p style={channelTitleStyle}>{this.props.headerText}</p>
                    <p style={streamLabelStyle}>0 live streams</p>
                </div>
                <div style={channelInfoRightStyle}>
                    <IconButton style={channelInfoIconStyle}><MoreHoriz/></IconButton>
                </div>
            </div>
        );
    }
}

const styles = {

    channelInfoStyle:{
        background:'white',
        display:'flex',
        flexDirection:'row',
        borderWidth:0.25,
        borderColor:colors.borderColor,
        borderStyle:'solid',
        borderLeft:0,
        borderRight:0,
        borderTop:0,
        flex:1,

    },
    channelInfoLeftStyle:{
        display:'flex',
        flexDirection:'column',
        flex:6,
        marginLeft:24,
        fontSize:fonts.h4,
        paddingTop:12,
        paddingBottom:12
    },
    channelTitleStyle:{
        flex:1,
        fontSize:fonts.h3,
        marginBottom:6,
        marginTop:0
    },
    streamLabelStyle:{
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

}
export default ChannelInfoTemplate;