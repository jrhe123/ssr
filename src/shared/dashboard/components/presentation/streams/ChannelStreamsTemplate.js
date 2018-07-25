import React, { Component } from 'react';

// Libraries
import IconButton from '@material-ui/core/IconButton';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import DropdownMenu from 'react-dd-menu';

// constants
import fonts from '../../../../styles/fonts';
import colors from '../../../../styles/colors';


class ChannelStreamsTemplate extends Component {

    state = {
        isMenuOpen: false
    }

    handleToggleMenu = () => {
        this.setState({ 
            isMenuOpen: !this.state.isMenuOpen 
        });
    }

    handleCloseMenu = () => {
        this.setState({ isMenuOpen: false });
    }

    handleToggleImport = () => {
        this.setState({ 
            isImportOpen: !this.state.isImportOpen 
        });
    }

    handleCloseImport = () => {
        this.setState({ isImportOpen: false });
    }


    render() {
        const {
            channelInfoStyle,
            channelInfoLeftStyle,
            channelTitleStyle,
            streamLabelStyle,
            channelInfoRightStyle,
            channelInfoIconStyle,
            importContainerStyle
        } = styles;


        return (
            <div style={channelInfoStyle}>
                <div style={channelInfoLeftStyle}>
                    <p style={channelTitleStyle}>{this.props.headerText}</p>
                    <p style={streamLabelStyle}>0 live streams</p>
                </div>
                <div style={channelInfoRightStyle}>
                <DropdownMenu 
                        isOpen={this.state.isImportOpen}
                        close={this.handleCloseImport}
                        toggle={
                            <div>
                                <IconButton style={channelInfoIconStyle} onClick={() => this.handleToggleImport()}><MoreHoriz /></IconButton>
                            </div>
                        }
                        align={'right'}
                        size={'sm'}                                   
                    >
                        <div style={importContainerStyle}>
                            <p>{this.props.headerText}</p>
                            <p>Option 2</p>
                        </div>
                    </DropdownMenu>
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
    importContainerStyle:{
        paddingTop:12,
        paddingRight:12,
        paddingBottom:12,
        paddingLeft:12
    }

}
export default ChannelStreamsTemplate;