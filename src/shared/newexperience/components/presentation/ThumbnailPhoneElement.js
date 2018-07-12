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
import '../../../../../assets/css/react-pdf/index.css';

// styles
import '../../../../../assets/css/quill/thumbnail.css';

// constants
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

class ThumbnailPhoneElement extends Component {

    state = {
        numPages: null,
    }

    handleDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
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
        switch (section.type) {
            case 'EDITOR':
                elem = (
                    <div
                        style={editorContainerStyle}
                        dangerouslySetInnerHTML={{ __html: section.htmlContent }} />
                );
                break;
            case 'BUTTON':
                elem = (
                    <div style={btnContainerStyle}>
                        <div style={contentContainerStyle}>
                            <div style={leftContentContainerStyle}>
                                <div style={tableContainerStyle}>
                                    <div style={tableWrapperStyle}>
                                        <p style={btnLabelStyle}>{section.btnContent}</p>
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
                            file={section.pdfPath}
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
                                            width={120}
                                        />
                                    ),
                                )
                            }
                        </Document>
                    </div>
                );
                break;
            case 'SPLASH':
                elem = (
                    <div className="dx_thumbnail_elem_splash"
                        style={Object.assign({}, overlayContainerStyle, { color: section.splashColor })}>
                        <img
                            style={overlayImgStyle}
                            src={section.splashImg ? URL.createObjectURL(section.splashImg) : require('../../../../../assets/images/demo.jpg')}
                        />
                        <div style={overlayWrapperStyle}>
                            <div style={splashContainerStyle}>
                                <div style={statusbarContainerStyle}>
                                    <div style={leftStatusContainerStyle}>
                                        <div style={leftStatusWrapperStyle}>
                                            <div style={Object.assign({}, marginLeftStyle, iconContainerStyle)}>
                                                <SignalCellular0Bar
                                                    style={statusbarIconStyle}
                                                />
                                            </div>
                                            <div style={Object.assign({}, marginLeftStyle, iconContainerStyle)}>
                                                <span style={statusbarLabelStyle}>Sketch</span>
                                            </div>
                                            <div style={Object.assign({}, marginLeftStyle, iconContainerStyle)}>
                                                <Wifi
                                                    style={statusbarIconStyle}
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
                                        <div style={rightStatusWrapperStyle}>
                                            <div style={Object.assign({}, marginRightStyle, iconContainerStyle)}>
                                                <Bluetooth
                                                    style={statusbarIconStyle}
                                                />
                                            </div>
                                            <div style={Object.assign({}, marginRightStyle, iconContainerStyle)}>
                                                <span style={statusbarLabelStyle}>100%</span>
                                            </div>
                                            <div style={Object.assign({}, marginRightStyle, iconContainerStyle)}>
                                                <BatteryFull
                                                    className="dx_battery_icon"
                                                    style={statusbarIconStyle}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={toolbarContainerStyle}>
                                    <div style={leftToolbarContainerStyle}>
                                        <div style={leftToolbarWrapperStyle}>
                                            <div style={tableContainerStyle}>
                                                <div style={tableWrapperStyle}>
                                                    <KeyboardArrowLeft style={statusbarSubIconStyle} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={rightToolbarContainerStyle}>
                                        <div style={rightToolbarWrapperStyle}>
                                            <div style={tableContainerStyle}>
                                                <div style={tableWrapperStyle}>
                                                    <Search style={statusbarSubIconStyle} />
                                                    <MoreVert style={statusbarSubIconStyle} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={splashContentContainerStyle}>
                                    <div style={tableContainerStyle}>
                                        <div style={tableWrapperStyle}>
                                            <div style={descContainerStyle}>
                                                <p style={Object.assign({}, splashLableStyle, txtCenterStyle)}>{section.splashContent}</p>
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
                elem = (
                    <div style={videoOverlayContainerStyle}>
                        <div
                            style={videoOverlayImgStyle}
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
                elem = (
                    <div style={imgContainerStyle}>
                        <img
                            style={imgStyle}
                            src={section.img ? URL.createObjectURL(section.img) : require('../../../../../assets/images/demo.jpg')}
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

const splashHeight = 60;
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
        height: splashHeight,
    },
    statusbarContainerStyle: {
        height: 12,
        display: 'flex',
        flexDirection: 'row'
    },
    leftStatusContainerStyle: {
        flex: 1
    },
    leftStatusWrapperStyle: {
        float: 'left',
        height: 12,
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
        height: 12,
        display: 'flex',
        flexDirection: 'row'
    },
    iconContainerStyle: {
        flex: 1,
    },
    statusbarIconStyle: {
        fontSize: 7,
        display: 'inline-block',
        marginTop: 2,
    },
    statusbarSubIconStyle: {
        fontSize: 7,
    },
    statusbarLabelStyle: {
        display: 'inline-block',
        margin: 0,
    },
    toolbarContainerStyle: {
        height: 12,
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
        height: splashHeight,
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
        height: splashHeight,
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
        height: 54,
        width: '100%',
        border: '1px solid',
        borderColor: colors.whiteColor,
        boxSizing: 'border-box',
        marginTop: 1
    },
    videoOverlayImgStyle: {
        height: 54,
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
        height: 48
    },
}

export default ThumbnailPhoneElement;