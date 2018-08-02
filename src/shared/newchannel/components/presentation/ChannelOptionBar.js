import React, { Component } from 'react';

// Libraries
import Button from '@material-ui/core/Button';
import DropdownMenu from 'react-dd-menu';
import Lock from '@material-ui/icons/Lock';

// components
import DxInput from '../../../components/dxInput/DxInput';

// constants
import colors from '../../../styles/colors';

class ChannelOptionBar extends Component {

    state = {
        isTypeMenuOpen: false,
    }

    render() {

        const {
            outlineBtnStyle,
            optionBtnStyle,
            lockStyle,
            privateChannelLabel,
        } = styles;

        const {
            channel
        } = this.props;

        return (
            <div>
                <DropdownMenu
                    isOpen={this.state.isTypeMenuOpen}
                    close={this.closeTypeSelect}
                    toggle={
                        <div>
                            <DxInput
                                placeholder="type"
                                width="226px"
                                disabled={true}
                                value={channel.TYPE == 0 ? 'Public Channel' : 'Private Channel - Invite only 🔒'}
                            />
                            <Button
                                style={outlineBtnStyle}
                                onClick={() => this.toggleTypeSelect()}
                            >EDIT</Button>
                        </div>
                    }
                    align='left'
                >
                    <div onClick={() => this.handleClickOption(0)}>
                        <Button
                            style={optionBtnStyle}
                            className="dx-lower-case"
                        >Public Channel</Button>
                    </div>
                    <div onClick={() => this.handleClickOption(1)}>
                        <Button
                            style={optionBtnStyle}
                            className="dx-lower-case"
                        >
                            <p style={privateChannelLabel}>Private Channel - Invite only<Lock style={lockStyle} /></p>
                        </Button>
                    </div>
                </DropdownMenu>
            </div>
        )
    }
}

const styles = {

    outlineBtnStyle: {
        color: colors.blueColor,
    },
    optionBtnStyle: {
        width: 144
    },
    lockStyle: {
        height: '14px',
        position: 'relative',
    },
    privateChannelLabel: {
        margin: 0
    },
}

export default ChannelOptionBar;