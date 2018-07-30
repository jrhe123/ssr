import React, { Component } from 'react';

// Libraries
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SignalCellular0Bar from '@material-ui/icons/SignalCellular0Bar';
import Wifi from '@material-ui/icons/Wifi';
import Bluetooth from '@material-ui/icons/Bluetooth';
import BatteryFull from '@material-ui/icons/BatteryFull';
import MoreVert from '@material-ui/icons/MoreVert';
import Search from '@material-ui/icons/Search';
import { Document, Page } from 'react-pdf';
import '../../../../assets/css/react-pdf/index.css';

// styles
import '../../../../assets/css/quill/thumbnail.css';

// config
import config from '../../config';

// constants
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

class ThumbnailPhoneElement extends Component {

    state = {
        numPages: null,
    }

    handleDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    handleLoadHtml = (section) => {
        const {
            isLoadHtml
        } = this.props;

        if (!isLoadHtml) {
            if (section.HtmlContent) return section.HtmlContent;
            else return '';
        } else {
            if (section.HtmlContent) return section.HtmlContent;
            if (section.Html) this.props.handleLoadHtml(section.SectionGUID, section.Html);
            else return '';
        }
    }

    renderSection = (section) => {

        const {
            tableContainerStyle,
            tableWrapperStyle,
            // editor
            editorContainerStyle,
            // btn
            btnContainerStyle,
            contentContainerStyle,
            leftContentContainerStyle,
            btnLabelStyle,
            rightIconContainerStyle,
            expandIconStyle,
            // pdf
            pdfContainerStyle,
            // splash
            txtCenterStyle,
            marginLeftStyle,
            marginRightStyle,
            splashContainerStyle,
            statusbarContainerStyle,
            leftStatusContainerStyle,
            leftStatusWrapperStyle,
            midStatusContainerStyle,
            rightStatusContainerStyle,
            rightStatusWrapperStyle,
            iconContainerStyle,
            statusbarIconStyle,
            statusbarSubIconStyle,
            statusbarLabelStyle,
            toolbarContainerStyle,
            leftToolbarContainerStyle,
            leftToolbarWrapperStyle,
            rightToolbarContainerStyle,
            rightToolbarWrapperStyle,
            splashContentContainerStyle,
            overlayContainerStyle,
            overlayWrapperStyle,
            overlayImgStyle,
            descContainerStyle,
            splashLableStyle,
            // video
            playIconStyle,
            videoOverlayContainerStyle,
            videoOverlayImgStyle,
            // img
            imgContainerStyle,
            imgStyle,
        } = styles;

        let elem;
        switch (section.Type) {
            case 'EDITOR':
                elem = (
                    <div
                        style={editorContainerStyle}
                        dangerouslySetInnerHTML={{ __html: this.handleLoadHtml(section) }} />
                );
                break;
            case 'BUTTON':
                elem = (
                    <div style={btnContainerStyle}>
                        <div style={contentContainerStyle}>
                            <div style={leftContentContainerStyle}>
                                <div style={tableContainerStyle}>
                                    <div style={tableWrapperStyle}>
                                        <p style={btnLabelStyle}>{section.BtnContent}</p>
                                    </div>
                                </div>
                            </div>
                            <div style={rightIconContainerStyle}>
                                <div style={tableContainerStyle}>
                                    <div style={tableWrapperStyle}>
                                        <KeyboardArrowRight style={expandIconStyle} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
                break;
            case 'EMBED_PDF':
                const { numPages } = this.state;
                elem = (
                    <div style={pdfContainerStyle}>
                        <Document
                            loading="Loading PDF.."
                            file={section.Pdf ? config.fileHost + '/' + section.Pdf + '.pdf' : null}
                            noData="Please select a PDF.."
                            onLoadSuccess={this.handleDocumentLoadSuccess}
                        >
                            {
                                Array.from(
                                    new Array(numPages),
                                    (el, index) => (
                                        <Page
                                            key={`page_${index + 1}`}
                                            pageNumber={index + 1}
                                            width={this.props.pdfWidth}
                                        />
                                    ),
                                )
                            }
                        </Document>
                    </div>
                );
                break;
            case 'SPLASH':

                const iconSize = this.props.splashSize == 'SMALL' ? 7 : 12;
                const marginTop = this.props.splashSize == 'SMALL' ? 2 : 4;
                const height = this.props.splashSize == 'SMALL' ? 60 : 90;
                const line = this.props.splashSize == 'SMALL' ? 12 : 24;

                elem = (
                    <div className="dx_thumbnail_elem_splash"
                        style={Object.assign({}, overlayContainerStyle, { color: section.SplashColor, height })}>
                        <img
                            style={Object.assign({}, overlayImgStyle, { height })}
                            src={section.SplashImg ? `${config.picHost}${section.SplashImg}` : require('../../../../assets/images/demo.jpg')}
                        />
                        <div style={overlayWrapperStyle}>
                            <div style={Object.assign({}, splashContainerStyle, { height })}>
                                <div style={Object.assign({}, statusbarContainerStyle, { height: line })}>
                                    <div style={leftStatusContainerStyle}>
                                        <div style={Object.assign({}, leftStatusWrapperStyle, { height: line })}>
                                            <div style={Object.assign({}, marginLeftStyle, iconContainerStyle)}>
                                                <SignalCellular0Bar
                                                    style={Object.assign({}, statusbarIconStyle, { fontSize: iconSize, marginTop })}
                                                />
                                            </div>
                                            <div style={Object.assign({}, marginLeftStyle, iconContainerStyle)}>
                                                <span
                                                    style={Object.assign({}, statusbarLabelStyle, { marginTop: this.props.splashSize == 'SMALL' ? 0 : 5 })}>
                                                    Sketch
                                                </span>
                                            </div>
                                            <div style={Object.assign({}, marginLeftStyle, iconContainerStyle)}>
                                                <Wifi
                                                    style={Object.assign({}, statusbarIconStyle, { fontSize: iconSize, marginTop })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div style={midStatusContainerStyle}>
                                        <div style={tableContainerStyle}>
                                            <div style={tableWrapperStyle}>
                                                <p style={Object.assign({}, txtCenterStyle, statusbarLabelStyle, { width: '100%' })}>9:41 AM</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={rightStatusContainerStyle}>
                                        <div style={Object.assign({}, rightStatusWrapperStyle, { height: line })}>
                                            <div style={Object.assign({}, marginRightStyle, iconContainerStyle)}>
                                                <Bluetooth
                                                    style={Object.assign({}, statusbarIconStyle, { fontSize: iconSize, marginTop })}
                                                />
                                            </div>
                                            <div style={Object.assign({}, marginRightStyle, iconContainerStyle)}>
                                                <span
                                                    style={Object.assign({}, statusbarLabelStyle, { marginTop: this.props.splashSize == 'SMALL' ? 0 : 5 })}
                                                >100%</span>
                                            </div>
                                            <div style={Object.assign({}, marginRightStyle, iconContainerStyle)}>
                                                <BatteryFull
                                                    className="dx_battery_icon"
                                                    style={Object.assign({}, statusbarIconStyle, { fontSize: iconSize, marginTop })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={Object.assign({}, toolbarContainerStyle, { height: line })}>
                                    <div style={leftToolbarContainerStyle}>
                                        <div style={leftToolbarWrapperStyle}>
                                            <div style={tableContainerStyle}>
                                                <div style={tableWrapperStyle}>
                                                    <KeyboardArrowLeft style={Object.assign({}, statusbarSubIconStyle, { fontSize: iconSize })} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={rightToolbarContainerStyle}>
                                        <div style={rightToolbarWrapperStyle}>
                                            <div style={tableContainerStyle}>
                                                <div style={tableWrapperStyle}>
                                                    <Search style={Object.assign({}, statusbarSubIconStyle, { fontSize: iconSize })} />
                                                    <MoreVert style={Object.assign({}, statusbarSubIconStyle, { fontSize: iconSize })} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={splashContentContainerStyle}>
                                    <div style={tableContainerStyle}>
                                        <div style={tableWrapperStyle}>
                                            <div style={descContainerStyle}>
                                                <p style={Object.assign({}, splashLableStyle, txtCenterStyle)}>{section.SplashContent}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
                break;
            case 'VIDEO':

                const videoHeight = this.props.videoSize == 'SMALL' ? 54 : 120;

                elem = (
                    <div style={Object.assign({}, videoOverlayContainerStyle, { height: videoHeight })}>
                        <div
                            style={Object.assign({}, videoOverlayImgStyle, { height: videoHeight })}
                        />
                        <div style={overlayWrapperStyle}>
                            <div style={Object.assign({}, tableContainerStyle)}>
                                <div style={Object.assign({}, tableWrapperStyle, txtCenterStyle)}>
                                    <PlayCircleOutline
                                        style={Object.assign({}, playIconStyle, { color: colors.whiteColor })}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );
                break;
            case 'IMAGE':

                const imgHeight = this.props.imgSize == 'SMALL' ? 48 : 90;

                elem = (
                    <div style={imgContainerStyle}>
                        <img
                            style={Object.assign({}, imgStyle, { height: imgHeight })}
                            src={section.Img ? `${config.picHost}${section.Img}` : require('../../../../assets/images/demo.jpg')}
                        />
                    </div>
                );
                break;
            default:
                break;
        }
        return elem;
    }

    render() {

        const {
            section
        } = this.props;

        return (
            <div
                className='dx_thumbnail_elem'
            >
                {this.renderSection(section)}
            </div>
        )
    }
}

const descContainerWidth = 100;

const styles = {
    txtCenterStyle: {
        textAlign: 'center'
    },
    marginLeftStyle: {
        marginLeft: 3
    },
    marginRightStyle: {
        marginRight: 3
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
    // editor
    editorContainerStyle: {
        padding: 4
    },
    // btn
    btnContainerStyle: {
        margin: '0 auto',
        backgroundColor: colors.greyColor,
        minHeight: 18,
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: colors.borderColor
    },
    contentContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
    },
    leftContentContainerStyle: {
        flex: 1,
    },
    btnLabelStyle: {
        margin: 0,
        padding: 3,
        paddingLeft: 6,
        paddingRight: 6,
        fontSize: fonts.thumbnail,
    },
    rightIconContainerStyle: {
        flex: '3px 0 0',
    },
    expandIconStyle: {
        paddingRight: 1,
        fontSize: 12,
        float: 'right',
    },
    // pdf
    pdfContainerStyle: {

    },
    // splash
    splashContainerStyle: {

    },
    statusbarContainerStyle: {
        display: 'flex',
        flexDirection: 'row'
    },
    leftStatusContainerStyle: {
        flex: 1
    },
    leftStatusWrapperStyle: {
        float: 'left',
        display: 'flex',
    },
    midStatusContainerStyle: {
        flex: 1
    },
    rightStatusContainerStyle: {
        flex: 1
    },
    rightStatusWrapperStyle: {
        float: 'right',
        display: 'flex',
        flexDirection: 'row'
    },
    iconContainerStyle: {
        flex: 1,
    },
    statusbarIconStyle: {
        display: 'inline-block',
    },
    statusbarSubIconStyle: {

    },
    statusbarLabelStyle: {
        display: 'inline-block',
        margin: 0,
    },
    toolbarContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
    },
    leftToolbarContainerStyle: {
        flex: 1
    },
    leftToolbarWrapperStyle: {
        float: 'left'
    },
    rightToolbarContainerStyle: {
        flex: 1
    },
    rightToolbarWrapperStyle: {
        float: 'right'
    },
    splashContentContainerStyle: {

    },
    overlayContainerStyle: {
        position: 'relative',
        width: '100%',
        cursor: 'default'
    },
    overlayWrapperStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        display: 'block',
        background: 'rgba(0, 0, 0, .4)',
        zIndex: 1
    },
    overlayImgStyle: {
        width: '100%',
    },
    descContainerStyle: {
        width: descContainerWidth,
        margin: '0 auto'
    },
    splashLableStyle: {
        margin: 0,
    },
    // video
    playIconStyle: {
        fontSize: 24
    },
    videoOverlayContainerStyle: {
        position: 'relative',
        // height: 54,
        width: '100%',
        border: '1px solid',
        borderColor: colors.whiteColor,
        boxSizing: 'border-box',
        marginTop: 1
    },
    videoOverlayImgStyle: {
        // height: 54,
        width: '100%',
        cursor: 'pointer',
        backgroundColor: colors.blackColor
    },
    // img
    imgContainerStyle: {
        padding: 4,
        paddingLeft: 6,
        paddingRight: 6,
    },
    imgStyle: {
        display: 'block',
        width: '100%',
    },
}

export default ThumbnailPhoneElement;