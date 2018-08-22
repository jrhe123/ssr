import React, { Component } from 'react';

// config
import config from '../../../config';

// constants
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

// components
import DxInput from '../../../components/dxInput/DxInput';
import DxModal from '../../../components/dxModal/DxModal';

// Libraries
import Button from '@material-ui/core/Button';
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import DropdownMenu from 'react-dd-menu';
import ReactPlayer from 'react-player';

class DxCard extends Component {

    state = {
        videoInsert: false,
        isMenuOpen: false,
        isModalOpen: false,
    }

    handleSelectCardTemplate = (template) => {
        if (this.props.isClickable)
            this.props.handleSelectCardTemplate(template)
    }

    handleVideoInsertClick = (toggle, isVideoInsertClickable) => {
        if (!isVideoInsertClickable) return;
        this.setState({
            videoInsert: toggle
        })
    }

    handleContentChange = () => {
        let textContent = this.refs.dx_editable_p.textContent;
        this.props.handleContentChange(textContent);
    }

    handleVideoInputChange = (e) => {
        this.props.handleContentChange(e.target.value);
    }

    handleVideoError = (e) => {
        this.props.handleVideoError('The supported link: youtube, facebook, soundcloud, vimeo');
    }

    handleToggleBurger = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }

    handleMenuClose = () => {
        this.setState({ isMenuOpen: false });
    }

    handleRemoveCardTemplateClick = () => {
        this.setState({ isModalOpen: true });
    }

    handleCloseModal = () => {
        this.setState({ isModalOpen: false });
    }

    renderCard = (template, isEditable) => {

        const {
            tableContainerStyle,
            tableWrapperStyle,
            leftImageContainerStyle,
            rightTextContainerStyle,
            leftTextContainerStyle,
            rightImageContainerStyle,
            imgStyle,
            txtStyle,
            overlayContainerStyle,
            overlayWrapperStyle,
            overlayImgStyle,
            videoOverlayImgStyle,
            iconStyle,
            videoContainerStyle,
            videoInputContainerStyle,
            videoInputWrapperStyle,
            videoInputBtnStyle,
        } = styles;

        let card;
        if (template.Type == 'LEFT_IMAGE_TEXT') {
            card = (
                <div>
                    <div style={leftImageContainerStyle}>
                        <img
                            style={imgStyle}
                            src={template.Settings[0].Default ? `${config.picHost}${template.Settings[0].Default}` : require('../../../../../assets/images/demo.jpg')}
                        />
                    </div>
                    <div style={Object.assign({}, rightTextContainerStyle, { backgroundColor: template.Settings[1].Default })}>
                        <div style={tableContainerStyle}>
                            <div style={Object.assign({}, tableWrapperStyle, { textAlign: 'left' })}>
                                <p ref="dx_editable_p"
                                    className="dx_editable_p"
                                    contenteditable={isEditable ? "true" : "false"}
                                    onBlur={() => this.handleContentChange()}
                                    style={Object.assign({}, txtStyle, { color: template.Settings[2].Default })}>{template.Content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (template.Type == 'RIGHT_IMAGE_TEXT') {
            card = (
                <div>
                    <div style={Object.assign({}, leftTextContainerStyle, { backgroundColor: template.Settings[1].Default })}>
                        <div style={tableContainerStyle}>
                            <div style={Object.assign({}, tableWrapperStyle, { textAlign: 'left' })}>
                                <p ref="dx_editable_p"
                                    className="dx_editable_p"
                                    contenteditable={isEditable ? "true" : "false"}
                                    onBlur={() => this.handleContentChange()}
                                    style={Object.assign({}, txtStyle, { color: template.Settings[2].Default })}>{template.Content}</p>
                            </div>
                        </div>
                    </div>
                    <div style={rightImageContainerStyle}>
                        <img
                            style={imgStyle}
                            src={template.Settings[0].Default ? `${config.picHost}${template.Settings[0].Default}` : require('../../../../../assets/images/demo.jpg')}
                        />
                    </div>
                </div>
            );
        } else if (template.Type == 'BACKGROUND_TEXT') {
            card = (
                <div style={Object.assign({}, tableContainerStyle, { backgroundColor: template.Settings[0].Default })}>
                    <div style={Object.assign({}, tableWrapperStyle, { textAlign: 'center' })}>
                        <p ref="dx_editable_p"
                            className="dx_editable_p"
                            contenteditable={isEditable ? "true" : "false"}
                            onBlur={() => this.handleContentChange()}
                            style={Object.assign({}, txtStyle, { color: template.Settings[1].Default })}>{template.Content}</p>
                    </div>
                </div>
            );
        } else if (template.Type == 'BACKGROUND_IMAGE_TEXT') {
            card = (
                <div style={overlayContainerStyle}>
                    <img
                        style={overlayImgStyle}
                        src={template.Settings[0].Default ? `${config.picHost}${template.Settings[0].Default}` : require('../../../../../assets/images/demo.jpg')}
                    />
                    <div style={overlayWrapperStyle}>
                        <div style={Object.assign({}, tableContainerStyle)}>
                            <div style={Object.assign({}, tableWrapperStyle, { textAlign: 'center' })}>
                                <p ref="dx_editable_p"
                                    className="dx_editable_p"
                                    contenteditable={isEditable ? "true" : "false"}
                                    onBlur={() => this.handleContentChange()}
                                    style={Object.assign({}, txtStyle, { color: template.Settings[1].Default })}>{template.Content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (template.Type == 'VIDEO') {
            card = (
                <div style={overlayContainerStyle}>
                    <img
                        style={this.state.videoInsert ? videoOverlayImgStyle : overlayImgStyle}
                        src={template.Settings[0].Default ? `${config.picHost}${template.Settings[0].Default}` : require('../../../../../assets/images/demo.jpg')}
                    />
                    <div style={overlayWrapperStyle}>
                        <div style={Object.assign({}, tableContainerStyle)}>
                            <div style={Object.assign({}, tableWrapperStyle, { textAlign: 'center' })}>
                                {
                                    !this.state.videoInsert ?
                                        <div style={videoContainerStyle}>
                                            <PlayCircleOutline
                                                style={Object.assign({}, iconStyle, { color: colors.whiteColor })}
                                                onClick={() => this.handleVideoInsertClick(true, this.props.isVideoInsertClickable)}
                                            />
                                            {
                                                template.Content ?
                                                    <ReactPlayer
                                                        config={{
                                                            facebook: {
                                                                appId: '868742783317382'
                                                            },
                                                            file: {
                                                                attributes: {
                                                                    poster: template.Settings[0].Default ? `${config.picHost}${template.Settings[0].Default}` : require('../../../../../assets/images/demo.jpg')
                                                                }
                                                            }
                                                        }}
                                                        width={275}
                                                        height={90}
                                                        url={template.Content}
                                                        controls={true}
                                                        onError={(e) => this.handleVideoError(e)}
                                                    />
                                                    :
                                                    null
                                            }
                                        </div>
                                        :
                                        <div style={videoInputContainerStyle}>
                                            <div style={videoInputWrapperStyle}>
                                                <DxInput
                                                    enableEnter={true}
                                                    placeholder="Embed video url"
                                                    handleValChange={(e) => this.handleVideoInputChange(e)}
                                                    isDark={true}
                                                    width="144px"
                                                    disabled={false}
                                                    value={template.Content}
                                                    handleKeyPress={() => this.handleVideoInsertClick(false, this.props.isVideoInsertClickable)}
                                                    isRounded={true}
                                                />
                                            </div>
                                            <Button
                                                style={videoInputBtnStyle}
                                                onClick={() => this.handleVideoInsertClick(false, this.props.isVideoInsertClickable)}
                                                variant="Enter video url">
                                                Confirm
                                            </Button>
                                        </div>

                                }
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (template.Type == 'IMAGE') {
            card = (
                <div style={overlayContainerStyle}>
                    <img
                        style={overlayImgStyle}
                        src={template.Settings[0].Default ? `${config.picHost}${template.Settings[0].Default}` : require('../../../../../assets/images/demo.jpg')}
                    />
                </div>
            );
        }

        return card;
    }

    render() {

        const {
            isWithBottomBar,
            isEditable,
            isCenterCard,
            template,
            cardTitle,
        } = this.props;

        const {
            mainContainerStyle,
            tableContainerStyle,
            tableWrapperStyle,
            cardContainerStyle,
            bottomEditContainerStyle,
            cardTemplateNameContainerStyle,
            cardTemplateEditContainerStyle,
            cardTemplateTitleContainerStyle,
            cardTemplateTitleStyle,
            cardTemplateEditBurgerContainerStyle,
            editBurgerStyle,
        } = styles;

        return (
            <div style={mainContainerStyle}>
                <div style={Object.assign({}, cardContainerStyle, isCenterCard ? { margin: '0 auto' } : {})}
                    className={!isWithBottomBar ? "dx_card" : "dx_card_bottom_bar"}
                    onClick={() => this.handleSelectCardTemplate(template)}
                >
                    {
                        this.renderCard(template, isEditable)
                    }
                </div>
                {
                    isWithBottomBar ?
                        <div style={Object.assign({}, bottomEditContainerStyle, isCenterCard ? { margin: '0 auto' } : {})}
                            className="dx_card_bottom_bar"
                        >
                            <div style={cardTemplateNameContainerStyle}>
                                <div style={tableContainerStyle}>
                                    <div style={tableWrapperStyle}>
                                        <div style={cardTemplateTitleContainerStyle}>
                                            <p style={cardTemplateTitleStyle}>{cardTitle}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={cardTemplateEditContainerStyle}>
                                <div style={cardTemplateEditBurgerContainerStyle}>
                                    <DropdownMenu
                                        className="dx_card_template_bottom_bar_menu"
                                        isOpen={this.state.isMenuOpen}
                                        close={() => this.handleMenuClose()}
                                        toggle={
                                            <MoreHoriz
                                                onClick={() => this.handleToggleBurger()}
                                                style={editBurgerStyle} />
                                        }
                                        align='right'
                                        closeOnInsideClick={false}
                                    >
                                        <Button onClick={() => this.props.handleEditCardTemplateClick()}>Edit</Button>
                                        <Button onClick={() => this.handleRemoveCardTemplateClick()}>Remove</Button>
                                    </DropdownMenu>
                                </div>
                            </div>
                        </div>
                        :
                        null
                }
                <DxModal
                    open={this.state.isModalOpen}
                    title="Confirm Delete Card"
                    description="Do you want to proceed?"
                    cancel={true}
                    confirm={true}
                    isDanger={true}
                    handleConfirm={() => this.props.handleConfirmDeleteCard()}
                    onCloseModal={() => this.handleCloseModal()}
                />
            </div>
        )
    }
}

const styles = {
    mainContainerStyle: {
        marginBottom: 24
    },
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
    cardContainerStyle: {
        width: 'calc(100% - 24px)',
        height: 90,
        cursor: 'pointer'
    },
    leftImageContainerStyle: {
        display: 'inline-block',
        float: 'left',
        width: 90,
        height: 90,
    },
    rightTextContainerStyle: {
        display: 'inline-block',
        float: 'left',
        width: 'calc(100% - 90px)',
        height: 90,
    },
    leftTextContainerStyle: {
        display: 'inline-block',
        float: 'left',
        width: 'calc(100% - 90px)',
        height: 90,
    },
    rightImageContainerStyle: {
        display: 'inline-block',
        float: 'left',
        width: 90,
        height: 90,
    },
    imgStyle: {
        display: 'block',
        width: 90,
        height: 90
    },
    txtStyle: {
        fontSize: fonts.h5,
        paddingLeft: 6,
        paddingRight: 6,
    },
    overlayContainerStyle: {
        position: 'relative',
        height: 90,
        width: '100%',
    },
    overlayWrapperStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        display: 'block',
        background: 'rgba(0, 0, 0, .4)',
        zIndex: 99
    },
    overlayImgStyle: {
        height: 90,
        width: '100%',
    },
    videoOverlayImgStyle: {
        height: 90,
        width: 90,
        margin: '0 auto',
        display: 'block'
    },
    iconStyle: {
        fontSize: '42px',
        position: 'absolute',
        zIndex: 99,
        top: 24,
        left: '50%',
        transform: 'translateX(-50%)'
    },
    videoContainerStyle: {
        position: 'relative',
        height: 90,
        width: '100%',
    },
    videoInputContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
    },
    videoInputWrapperStyle: {
        flex: 4,
        marginTop: 4
    },
    videoInputBtnStyle: {
        flex: 1,
        backgroundColor: colors.blueColor,
        color: colors.whiteColor,
        textTransform: 'capitalize',
        marginLeft: 6,
        marginRight: 6,
    },
    bottomEditContainerStyle: {
        width: 'calc(100% - 24px)',
        height: 30,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.whiteColor,
    },
    cardTemplateNameContainerStyle: {
        flex: 1
    },
    cardTemplateEditContainerStyle: {
        flex: '30px 0 0',
        position: 'relative'
    },
    cardTemplateTitleContainerStyle: {
        marginLeft: 6
    },
    cardTemplateTitleStyle: {
        margin: 0,
        fontSize: fonts.h3,
        width: 180,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
    },
    cardTemplateEditBurgerContainerStyle: {
        position: 'absolute',
        top: 0,
        right: 0,
        height: 30,
        width: 30,
    },
    editBurgerStyle: {
        fontSize: 30,
        cursor: 'pointer'
    }
}

export default DxCard;