import React, { Component } from 'react';

// styles
import '../../../../../../assets/css/dd-menu/dd_StreamMenu.css';

// Libraries
import IconButton from '@material-ui/core/IconButton';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import DropdownMenu from 'react-dd-menu';

// constants
import fonts from '../../../../styles/fonts';


class LiveStreamTemplate extends Component {

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
            liveStreamWrapperStyle,
            expTitleStyle,
            liveInfoWrapperStyle,
            liveInfoIconStyle,
            importContainerStyle,
            widthStyle
        } = styles;


        return (
            <div style={liveStreamWrapperStyle}>
                <p style={expTitleStyle}>{this.props.streamTitle}</p>
                <div style={liveInfoWrapperStyle}>
                    <DropdownMenu 
                        isOpen={this.state.isImportOpen}
                        close={this.handleCloseImport}
                        toggle={
                            <div>
                                <IconButton style={liveInfoIconStyle} onClick={() => this.handleToggleImport()}><MoreHoriz /></IconButton>
                            </div>
                        }
                        align={'right'}
                    >
                        <div style={importContainerStyle}>
                            <p>{this.props.streamTitle}</p>
                            <p>Option 2</p>
                        </div>
                    </DropdownMenu>
                </div>
            </div>
        );
    }
}

const styles = {

    liveStreamWrapperStyle:{
        textAlign: 'center',
        background:'white',
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
    importContainerStyle:{
        paddingTop:12,
        paddingRight:12,
        paddingBottom:12,
        paddingLeft:12,
        textAlign:'left',
    },
    widthStyle:{
        width:50
    }
}
export default LiveStreamTemplate;