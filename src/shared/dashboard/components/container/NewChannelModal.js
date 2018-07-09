import React, { Component } from 'react';

// Libraries
import Modal from 'react-responsive-modal';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Lock from '@material-ui/icons/Lock';

// constants
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

// styles
import '../../../../../assets/css/modal/rrm.css';

class NewExperienceModal extends Component {

    state = {
        value: '0',
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    onCloseModal = () => {
        this.props.onCloseModal();
    };

    handleCreateChannel = () => {
        this.props.navigateToNewchannel(this.state.value);
    }

    render() {
        const {
            mainContainerStyle,
            titleStyle,
            contentContainerStyle,
            txtStyle,
            labelStyle,
            descContainerStyle,
            tableContainerStyle,
            tableWrapperStyle,
            subLabelStyle,
            btnContainerStyle,
            btnStyle,
            lockStyle
        } = styles;
        const { open } = this.props;
        return (
            <Modal
                open={open}
                onClose={() => this.onCloseModal()}
                center
                classNames={{
                    overlay: 'custom-overlay',
                    modal: 'custom-modal',
                }}
            >
                <div style={mainContainerStyle}>
                    <p style={titleStyle}>Create a channel to stream your content or experience(s)</p>
                    <div style={contentContainerStyle}>
                        <p style={txtStyle}>Select one and click continue</p>
                        <FormControl
                            component="fieldset"
                            required
                        >
                            <RadioGroup
                                aria-label="gender"
                                name="gender"
                                value={this.state.value}
                                onChange={this.handleChange}
                            >
                                <FormControlLabel
                                    value="0"
                                    control={<Radio style={{ color: colors.blackColor }} />}
                                    label={<p style={labelStyle}>Public Channel</p>}
                                />
                                <div style={descContainerStyle}>
                                    <div style={tableContainerStyle}>
                                        <div style={tableWrapperStyle}>
                                            <span style={subLabelStyle}>All users can discover this channel and follow the content published in this channel</span>
                                        </div>
                                    </div>
                                </div>
                                <FormControlLabel
                                    value="1"
                                    control={<Radio style={{ color: colors.blackColor }} />}
                                    label={<p style={labelStyle}>Private Channel - Invite only  <Lock style={lockStyle}/> </p>}
                                />
                                <div style={descContainerStyle}>
                                    <div style={tableContainerStyle}>
                                        <div style={tableWrapperStyle}>
                                            <span style={subLabelStyle}>Exclusive invite is required to join this channel. Manage users via audience tab</span>
                                        </div>
                                    </div>
                                </div>
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div style={btnContainerStyle}>
                        <Button
                            style={btnStyle}
                            variant="Create new channel"
                            onClick={() => this.handleCreateChannel()}
                        >
                            Continue
                        </Button>
                    </div>
                </div>
            </Modal>
        )
    }
}

const styles = {
    mainContainerStyle: {

    },
    titleStyle: {
        textAlign: 'center',
        color: colors.labelColor,
        fontSize: fonts.h2
    },
    contentContainerStyle: {
        marginTop: 36,
        paddingLeft: 24,
        paddingRight: 24,
    },
    txtStyle: {
        color: colors.labelColor,
        fontSize: fonts.h2,
        marginBottom: 3
    },
    labelStyle: {
        fontWeight: 'bold',
        fontSize: fonts.h2
    },
    descContainerStyle: {
        display: 'flex'
    },
    imgStyle: {
        display: 'block',
        paddingLeft: 30,
        paddingRight: 12
    },
    tableContainerStyle: {
        position: 'relative',
        display: 'table',
        height: '100%',
        width: '100%',
        paddingLeft: 32,
    },

    tableWrapperStyle: {
        display: 'table-cell',
        verticalAlign: 'middle',
    },
    subLabelStyle: {
        color: colors.lightGreyColor,
        fontSize: fonts.h4,
    },
    btnContainerStyle: {
        marginTop: 60,
        textAlign: 'center'
    },
    btnStyle: {
        backgroundColor: colors.blueColor,
        color: colors.whiteColor,
        textTransform: 'capitalize',
    },
    lockStyle:{
        height:'14px',
        position: 'relative',
    },
}

export default NewExperienceModal;