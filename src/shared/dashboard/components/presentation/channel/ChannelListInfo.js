import React, { Component } from 'react';

// Libraries
import IconButton from '@material-ui/core/IconButton';
import DropdownMenu from 'react-dd-menu';
import Button from '@material-ui/core/Button';

// constants
import fonts from '../../../../styles/fonts';
import colors from '../../../../styles/colors';

class ChannelListInfo extends Component {

    state = {
        isMenuOpen: false,
    }

    handleMenuToggle = () => {
        this.setState({
            isMenuOpen: !this.state.isMenuOpen
        });
    }

    handleMenuClose = () => {
        this.setState({
            isMenuOpen: false
        });
    }

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
        } = this.props;

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

                <DropdownMenu
                    className="dx_channel_drop_menu"
                    isOpen={this.state.isMenuOpen}
                    close={() => this.handleMenuClose()}
                    size={'md'}
                    align='left'
                    toggle={
                        <div style={channelInfo}
                            onClick={() => this.handleMenuToggle()}>
                            <IconButton
                                style={{ backgroundColor: backgroundColor, height: 15, width: 15, marginLeft: 12 }}
                                iconStyle={{ height: 5, width: 5 }}
                            />
                            <p style={{ color: backgroundColor, marginLeft: 9, fontSize: fonts.h4, marginRight: 12 }}>{channelLabel}</p>
                        </div>
                    }
                    closeOnInsideClick={false}
                    closeOnOutsideClick={true}
                >
                    <Button onClick={() => this.props.handleEditChannel()}>Edit</Button>
                    <Button onClick={() => console.log('remove')}>REMOVE</Button>
                </DropdownMenu>

                <div style={channelStatusContainerStyle}>
                    <p style={Object.assign({}, styles.channelStatusStyle, extra)}>{extra.channelStatus}</p>
                </div>
            </div>
        );
    }
}

const styles = {

    channelInfoContainerStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        paddingBottom: 72
    },
    channelInfo: {
        height: 36,
        width: 160,
        background: colors.whiteColor,
        marginRight: 30,
        marginTop: 18,
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
    },
    channelStatusContainerStyle: {
        width: 60,
        height: 12,
        fontSize: 8,
        background: colors.lightBlueColor,
        textAlign: 'center',
        marginRight: 30,
        marginTop: 6,
        borderRadius: 5.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    channelStatusStyle: {
        margin: 0
    }
}

export default ChannelListInfo;
