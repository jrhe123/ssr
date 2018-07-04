import React, { Component } from 'react';

// Libraries
import Button from '@material-ui/core/Button';

// constants
import fonts from '../../../styles/fonts';


class ReadyToStreamTemplate extends Component {
    render() {
        const {
            redayToStreamWrapperStyle,
            expLabelStyle,
            expTitleStyle,
            goLiveBtnStyle,
        } = styles;


        return (
            <div style={redayToStreamWrapperStyle}>
                <p style={expTitleStyle}>My experience 1</p>
                <p style={expLabelStyle}>Streamed in 0 other channel(s)</p>
                <Button variant="Add a new channel" style={goLiveBtnStyle}>Go Live</Button>
            </div>
        );
    }
}

const styles = {
    redayToStreamWrapperStyle:{
        width:'auto',
        background:'white',
        marginTop:12,
        fontSize: fonts.h4,
        marginLeft:48,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:6,
        paddingRight:6,
        alignItems:'center',
        border: '1px dotted #4A90E2'
    },
    expTitleStyle:{
        marginLeft:6,
        marginTop:0,
        marginBottom:0,
        fontSize:fonts.h3
    },
    expLabelStyle:{
        marginTop:0,
        marginBottom:0,
        fontSize:fonts.h4
    },
    goLiveBtnStyle:{
        marginTop:6,
        marginBottom:6,
        marginRight:6,
        padding:0,
        background:'#F0F7FF',
        color:'#2DD1AC',
        fontSize:fonts.h4,
        height:26
    },
}
export default ReadyToStreamTemplate;
