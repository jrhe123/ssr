import React, { Component } from 'react';

// Libraries
import IconButton from '@material-ui/core/IconButton';
import MoreHoriz from '@material-ui/icons/MoreHoriz';

// constants
import fonts from '../../../styles/fonts';


class LiveStreamTemplate extends Component {
    render() {
        const {
            liveStreamWrapperStyle,
            expTitleStyle,
            liveInfoWrapperStyle,
            liveInfoIconStyle
        } = styles;


        return (
            <div style={liveStreamWrapperStyle}>
                <p style={expTitleStyle}>My experience 1</p>
                <div style={liveInfoWrapperStyle}>
                    <IconButton style={liveInfoIconStyle}><MoreHoriz /></IconButton>
                </div>
            </div>
        );
    }
}

const styles = {

    liveStreamWrapperStyle:{
        textAlign: 'center',
        background:'white',
        marginLeft:48,
        marginTop:0,
        marginBottom:6,
        padding:12,
        fontSize: fonts.h4,
        border: '1px dotted #4A90E2',
        display:'flex',
        justifyContent:'space-between',
        height:24
    },
    expTitleStyle:{
        marginTop:0,
        marginLeft:6,
        marginBottom:0,
        fontSize:fonts.h3
    },
    liveInfoWrapperStyle:{
        alignSelf:'center',
        margin:0
    },
    liveInfoIconStyle:{
        height:20, 
        width:20
    },


}
export default LiveStreamTemplate;