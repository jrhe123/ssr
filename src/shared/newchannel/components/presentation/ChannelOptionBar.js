import React, { Component } from 'react';

// Libraries
import Button from '@material-ui/core/Button';
import DropdownMenu from 'react-dd-menu';
import Lock from '@material-ui/icons/Lock';

// components
import DxInput from '../../../components/dxInput/DxInput';

// constants
import colors from '../../../styles/colors';

// styles
import '../../../../../assets/css/dd-menu/dd_menu.css';

class ChannelOptionBar extends Component {

    state = {
        isTypeMenuOpen: false,
    }

    handleToggleTypeSelect = () => {
        this.setState({
            isTypeMenuOpen: !this.state.isTypeMenuOpen
        });
    }

    handleCloseTypeSelect = () => {
        this.setState({ isTypeMenuOpen: false });
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
                    close={() => this.handleCloseTypeSelect()}
                    toggle={
                        <div>
                            <DxInput
                                placeholder="type"
                                width="226px"
                                disabled={true}
                                value={channel.Type == 0 ? 'Public Channel' : 'Private Channel - Invite only'}
                            />
                            <Button
                                style={outlineBtnStyle}
                                onClick={() => this.handleToggleTypeSelect()}
                            >EDIT</Button>
                        </div>
                    }
                    align='left'
                >
                    <div onClick={() => this.props.handleClickOption(0)}>
                        <Button
                            style={optionBtnStyle}
                            className="dx-lower-case"
                        >Public Channel</Button>
                    </div>
                    <div onClick={() => this.props.handleClickOption(1)}>
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