import React, { Component } from 'react';

// constants
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';

// components
import DxInput from '../../../components/dxInput/DxInput';

// Libraries
import Button from '@material-ui/core/Button';

class CardTemplate extends Component {

    state = {
        videoInsert: false,
        videoUrl: ''
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

    handleVideoInputChange = (e) => {
        this.setState({
            videoUrl: e.target.value
        })
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
            iconStyle,
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
                            src={template.Settings[0].Default ? URL.createObjectURL(template.Settings[0].Default) : require('../../../../../assets/images/demo.jpg')}
                        />
                    </div>
                    <div style={Object.assign({}, rightTextContainerStyle, { backgroundColor: template.Settings[1].Default })}>
                        <div style={tableContainerStyle}>
                            <div style={tableWrapperStyle}>
                                <p className="dx_editable_p"
                                    contenteditable={isEditable ? "true" : "false"}
                                    style={Object.assign({}, txtStyle, { color: template.Settings[2].Default, textAlign: 'left' })}>{template.Content}</p>
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
                            <div style={tableWrapperStyle}>
                                <p className="dx_editable_p"
                                    contenteditable={isEditable ? "true" : "false"}
                                    style={Object.assign({}, txtStyle, { color: template.Settings[2].Default, textAlign: 'left' })}>{template.Content}</p>
                            </div>
                        </div>
                    </div>
                    <div style={rightImageContainerStyle}>
                        <img
                            style={imgStyle}
                            src={template.Settings[0].Default ? URL.createObjectURL(template.Settings[0].Default) : require('../../../../../assets/images/demo.jpg')}
                        />
                    </div>
                </div>
            );
        } else if (template.Type == 'BACKGROUND_TEXT') {
            card = (
                <div style={Object.assign({}, tableContainerStyle, { backgroundColor: template.Settings[0].Default })}>
                    <div style={Object.assign({}, tableWrapperStyle, { textAlign: 'center' })}>
                        <p className="dx_editable_p"
                            contenteditable={isEditable ? "true" : "false"}
                            style={Object.assign({}, txtStyle, { color: template.Settings[1].Default })}>{template.Content}</p>
                    </div>
                </div>
            );
        } else if (template.Type == 'BACKGROUND_IMAGE_TEXT') {
            card = (
                <div style={overlayContainerStyle}>
                    <img
                        style={overlayImgStyle}
                        src={template.Settings[0].Default ? URL.createObjectURL(template.Settings[0].Default) : require('../../../../../assets/images/demo.jpg')}
                    />
                    <div style={overlayWrapperStyle}>
                        <div style={Object.assign({}, tableContainerStyle)}>
                            <div style={Object.assign({}, tableWrapperStyle, { textAlign: 'center' })}>
                                <p className="dx_editable_p"
                                    contenteditable={isEditable ? "true" : "false"}
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
                        style={overlayImgStyle}
                        src={template.Settings[0].Default ? URL.createObjectURL(template.Settings[0].Default) : require('../../../../../assets/images/demo.jpg')}
                    />
                    <div style={overlayWrapperStyle}>
                        <div style={Object.assign({}, tableContainerStyle)}>
                            <div style={Object.assign({}, tableWrapperStyle, { textAlign: 'center' })}>
                                {
                                    !this.state.videoInsert ?
                                        <PlayCircleOutline
                                            style={Object.assign({}, iconStyle, { color: colors.whiteColor })}
                                            onClick={() => this.handleVideoInsertClick(true, this.props.isVideoInsertClickable)}
                                        />
                                        :
                                        <div style={videoInputContainerStyle}>
                                            <div style={videoInputWrapperStyle}>
                                                <DxInput
                                                    placeholder="Embed video url"
                                                    handleValChange={(e) => this.handleVideoInputChange(e)}
                                                    isDark={true}
                                                    width="144px"
                                                    disabled={false}
                                                    value={this.state.videoUrl}
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
                        src={template.Settings[0].Default ? URL.createObjectURL(template.Settings[0].Default) : require('../../../../../assets/images/demo.jpg')}
                    />
                </div>
            );
        }

        return card;
    }

    render() {

        const {
            isWithTitle,
            isEditable,
            template,
        } = this.props;

        const {
            mainContainerStyle,
            titleContainerStyle,
            titleStyle,
            cardContainerStyle,
        } = styles;

        return (
            <div style={mainContainerStyle}>
                {
                    isWithTitle ?
                        <div style={titleContainerStyle}>
                            <p style={titleStyle}>{template.Title}</p>
                        </div>
                        :
                        null
                }
                <div style={cardContainerStyle}
                    className="dx_card"
                    onClick={() => this.handleSelectCardTemplate(template)}
                >
                    {
                        this.renderCard(template, isEditable)
                    }
                </div>
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
        paddingLeft: 6,
        paddingRight: 6
    },
    titleContainerStyle: {
        marginBottom: 6,
        paddingLeft: 12,
        paddingRight: 12,
    },
    titleStyle: {
        fontSize: fonts.h4,
        marginBottom: 0
    },
    cardContainerStyle: {
        width: 'calc(100% - 24px)',
        height: 90,
        margin: '0 auto',
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
        fontSize: fonts.h5
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
    iconStyle: {
        fontSize: '42px'
    },
    videoInputContainerStyle: {
        display: 'flex',
        flexDirection: 'row'
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
        marginLeft: 6
    },
}

export default CardTemplate;