import React, { Component } from 'react';

// styles
import '../../../../../../assets/css/dd-menu/dd_StreamMenu.css';

// Libraries
import IconButton from '@material-ui/core/IconButton';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import DropdownMenu from 'react-dd-menu';

// constants
import fonts from '../../../../styles/fonts';
import colors from '../../../../styles/colors';

class LiveStream extends Component {

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
                            <p>Remove</p>
                        </div>
                    </DropdownMenu>
                </div>
            </div>
        );
    }
}

const styles = {

    liveStreamWrapperStyle: {
        textAlign: 'center',
        backgroundColor: colors.whiteColor,
        marginBottom: 6,
        padding: 12,
        fontSize: fonts.h4,
        display: 'flex',
        justifyContent: 'space-between',
        height: 24
    },
    expTitleStyle: {
        marginTop: 0,
        marginLeft: 6,
        marginBottom: 0,
        fontSize: fonts.h3
    },
    liveInfoWrapperStyle: {
        alignSelf: 'center',
        margin: 0
    },
    liveInfoIconStyle: {
        height: 24,
        width: 24
    },
    importContainerStyle: {
        textAlign: 'left',
    },
}
export default LiveStream;