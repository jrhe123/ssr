import React, { Component } from 'react';

// Libraries
import Modal from 'react-responsive-modal';
import Button from '@material-ui/core/Button';

// constants
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

// styles
import '../../../../assets/css/modal/rrm.css';

class DxModal extends Component {

    handleCloseModal = () => {
        this.props.onCloseModal();
    };

    render() {

        const {
            open,
            title,
            description,
            cancel,
            confirm,
            isDanger,
        } = this.props;

        const {
            tableContainerStyle,
            tableWrapperStyle,
            mainContainerStyle,
            titleContainerStyle,
            titleStyle,
            contentContainerStyle,
            contentStyle,
            btnContainerStyle,
            controlContainerStyle,
            btnWrapperStyle,
            cancelBtnStyle,
            confirmBtnStyle,
        } = styles;

        return (
            <Modal
                open={open}
                onClose={() => this.handleCloseModal()}
                center
                classNames={{
                    overlay: 'dx_overlay',
                    modal: 'dx_modal',
                }}
            >
                <div style={mainContainerStyle}>
                    <div style={titleContainerStyle}>
                        <p style={titleStyle}>{title}</p>
                    </div>
                    <div style={contentContainerStyle}>
                        <p style={contentStyle}>{description}</p>
                    </div>
                    <div style={btnContainerStyle}>
                        <div style={controlContainerStyle}>
                            {
                                cancel ?
                                    <div style={btnWrapperStyle}>
                                        <div style={tableContainerStyle}>
                                            <div style={tableWrapperStyle}>
                                                <Button
                                                    style={cancelBtnStyle}
                                                    variant="cancel modal"
                                                    onClick={() => this.handleCloseModal()}
                                                >Cancel</Button>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    null
                            }
                            {
                                confirm ?
                                    <div style={btnWrapperStyle}>
                                        <div style={tableContainerStyle}>
                                            <div style={tableWrapperStyle}>
                                                <Button
                                                    style={Object.assign({}, { backgroundColor: isDanger ? colors.redColor : colors.blueColor }, confirmBtnStyle)}
                                                    variant="confirm modal"
                                                    onClick={() => this.props.handleConfirm()}
                                                >Confirm</Button>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    null
                            }
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

const styles = {
    tableContainerStyle: {
        position: 'relative',
        display: 'table',
        height: '100%',
        width: '100%',
    },
    tableWrapperStyle: {
        display: 'table-cell',
        verticalAlign: 'middle',
    },
    mainContainerStyle: {
        height: '100%',
    },
    titleContainerStyle: {
        borderBottom: '1px solid',
        borderColor: colors.borderColor,
        height: 54,
    },
    titleStyle: {
        fontSize: fonts.h1,
        fontWeight: 'bold',
        margin: 0,
        paddingTop: 15,
        paddingLeft: 18
    },
    contentContainerStyle: {
        height: 'calc(100% - 126px)',
    },
    contentStyle: {
        fontSize: fonts.h1,
        margin: 0,
        padding: 18,
    },
    btnContainerStyle: {
        borderTop: '1px solid',
        borderColor: colors.borderColor,
        height: 72
    },
    controlContainerStyle: {
        float: 'right',
        height: '100%',
        width: '50%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingLeft: 12,
        paddingRight: 12,
    },
    btnWrapperStyle: {
        marginLeft: 6,
        marginRight: 6,
        height: '100%',
    },
    cancelBtnStyle: {
        border: '1px solid',
        borderColor: colors.borderColor,
        color: colors.blackColor,
        textTransform: 'capitalize',
    },
    confirmBtnStyle: {
        color: colors.whiteColor,
        textTransform: 'capitalize',
    },
}

export default DxModal;