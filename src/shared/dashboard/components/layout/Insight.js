import React, { Component } from 'react';

// constants
import sizes from '../../../styles/sizes';

class Insight extends Component {
    render() {
        const {
            mainContainerStyle,
            mainWrapperStyle,
            topContainerStyle
        } = styles;


        return (
            <div style={mainContainerStyle}>
                <div style={mainWrapperStyle}>
                    <div style={topContainerStyle}>
                    <p>Reports for</p>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    mainContainerStyle:{
        width: sizes.dxWidth,
        margin: '0 auto',
        display:'flex',
        flexDirection:'row',
    },
    mainWrapperStyle:{
        height: `calc(100vh - ${sizes.headerHeight})`,
        flex:1,
        width: '100%',
        // background:'yellow'
    },
    topContainerStyle:{
        height:60,
        display:'flex',
        flexDirection:'row',
        paddingTop:28
    },
}
export default Insight;