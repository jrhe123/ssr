import React, { Component } from 'react';

// Libraries
import IconButton from '@material-ui/core/IconButton';

// constants
import fonts from '../../../../styles/fonts';
import colors from '../../../../styles/colors';



class ChannelListInfo extends Component {

    render() {
        const {
            channelInfoContainerStyle,
            channelStatusContainerStyle,
            channelInfo
        } = styles;

        const {
            channelLabel,
            backgroundColor,
            isLive
        }  = this.props;

        const extra = {};
        if (isLive) {
            extra.color = '#2DD1AC';
            extra.channelStatus = 'Live'
        } else {
            extra.color = '#A8B7C5';
            extra.channelStatus = 'Draft'
        }

        return (
            <div style={channelInfoContainerStyle}>
                <div style={channelInfo}>
                    <IconButton 
                        style={{backgroundColor: backgroundColor, height:15, width:15, marginLeft:12}} 
                        iconStyle={{height:5, width:5}}
                    />
                    <p style={{color: backgroundColor, marginLeft:9, fontSize:fonts.h4, marginRight:12}}>{channelLabel}</p>
                </div>
                <div style={channelStatusContainerStyle}>
                        <p style={Object.assign({}, styles.channelStatusStyle, extra)}>{extra.channelStatus}</p>
                </div>
            </div>
        );
    }
}

const styles = {
    channelInfoContainerStyle:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-end'
    },
    channelInfo:{
        height:36,
        width:160,
        background:colors.whiteColor,
        marginRight:30,
        marginTop:18,
        display:'flex',
        alignItems:'center'
    },
    channelStatusContainerStyle:{
        width:60,
        height:12,
        fontSize:8,
        background:colors.lightBlueColor,
        textAlign:'center',
        marginRight:30,
        marginTop:6,
        borderRadius:5.5,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    channelStatusStyle:{
        margin:0
    }
}
export default ChannelListInfo;
