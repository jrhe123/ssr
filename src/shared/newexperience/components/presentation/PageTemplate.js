import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

// Libraries
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

// constants
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

const itemSource = {
    beginDrag(props) {
        return props.template;
    },
    endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
            return;
        }
        return props.handleDrop(props.template.PageTemplateGUID);
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging(),
    }
}

class PageTemplate extends Component {

    renderPage = (template) => {

        const {
            pageContainerStyle,
            tableContainerStyle,
            tableWrapperStyle,
            leftImageContainerStyle,
            rightTextContainerStyle,
            imgStyle,
            txtStyle,
            btnPageContainerStyle,
            topBtnContainerStyle,
            btnLabelContainerStyle,
            btnLabelWrapperStyle,
            btnLabelStyle,
            expandIconContainerStyle,
            expandIconStyle,
            bottomDescContainerStyle,
            splashContainerStyle,
            statusbarContainerStyle,
            toolbarContainerStyle,
            splashContentContainerStyle,
        } = styles;

        let card;
        if (template.Type == 'EDITOR') {
            card = (
                <div style={pageContainerStyle}>
                    <div style={leftImageContainerStyle}>
                        <div style={tableContainerStyle}>
                            <div style={tableWrapperStyle}>
                                <img
                                    style={imgStyle}
                                    src={require('../../../../../assets/images/edit_icon.png')}
                                />
                            </div>
                        </div>
                    </div>
                    <div style={rightTextContainerStyle}>
                        <div style={tableContainerStyle}>
                            <div style={Object.assign({}, tableWrapperStyle, { textAlign: 'left' })}>
                                <p style={txtStyle}>Embed a full featured responsive publishXi editor directly in the page</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if (template.Type == 'BUTTON') {
            card = (
                <div style={Object.assign({}, pageContainerStyle, btnPageContainerStyle)}>
                    <div style={tableContainerStyle}>
                        <div style={tableWrapperStyle}>
                            <div style={topBtnContainerStyle}>
                                <div style={btnLabelContainerStyle}>
                                    <div style={btnLabelWrapperStyle}>
                                        <div style={tableContainerStyle}>
                                            <div style={tableWrapperStyle}>
                                                <p style={btnLabelStyle}>Text for a button</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={expandIconContainerStyle}>
                                        <div style={tableContainerStyle}>
                                            <div style={tableWrapperStyle}>
                                                <KeyboardArrowRight style={expandIconStyle} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={bottomDescContainerStyle}>
                                <div style={tableContainerStyle}>
                                    <div style={tableWrapperStyle}>
                                        <p style={txtStyle}>Connect another page with this button</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if (template.Type == 'EMBED_PDF') {
            card = (
                <div style={Object.assign({}, pageContainerStyle)}>
                    <div style={leftImageContainerStyle}>
                        <div style={tableContainerStyle}>
                            <div style={tableWrapperStyle}>
                                <img
                                    style={imgStyle}
                                    src={require('../../../../../assets/images/pdf_icon.png')}
                                />
                            </div>
                        </div>
                    </div>
                    <div style={rightTextContainerStyle}>
                        <div style={tableContainerStyle}>
                            <div style={Object.assign({}, tableWrapperStyle, { textAlign: 'left' })}>
                                <p style={txtStyle}>Choose this page element to embed and show a PDF file on the page directly to the user</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if (template.Type == 'SPLASH') {
            card = (
                <div style={Object.assign({}, pageContainerStyle)}>
                    <div style={splashContainerStyle}>
                        <div style={statusbarContainerStyle}>status bar</div>
                        <div style={toolbarContainerStyle}>tool bar</div>
                        <div style={splashContentContainerStyle}>content</div>
                    </div>
                </div>
            )
        } else if (template.Type == 'VIDEO') {
            card = (
                <div style={Object.assign({}, pageContainerStyle)}>
                    VIDEO
                </div>
            )
        }
        return card;
    }

    render() {
        const {
            isDragging,
            connectDragSource,
            template
        } = this.props;
        const opacity = isDragging ? 0 : 1;

        const {
            mainContainerStyle,
        } = styles;

        return connectDragSource(
            <div style={mainContainerStyle}>
                <div style={Object.assign({}, {width: 'calc(100% - 24px)', margin: '0 auto'} ,{ opacity })}
                    className="dx_page"
                >
                    {this.renderPage(template)}
                </div>
            </div>
        );
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
    pageContainerStyle: {
        height: 90,
        cursor: 'pointer',
    },
    leftImageContainerStyle: {
        display: 'inline-block',
        float: 'left',
        width: 72,
        height: 90,
    },
    rightTextContainerStyle: {
        display: 'inline-block',
        float: 'left',
        width: 'calc(100% - 84px)',
        height: 90,
        paddingRight: 12
    },
    imgStyle: {
        display: 'block',
        width: 42,
        height: 48,
        margin: '0 auto'
    },
    txtStyle: {
        fontSize: fonts.h5,
        margin: 0
    },
    btnPageContainerStyle: {
        height: 78,
        paddingTop: 6,
        paddingBottom: 6
    },
    topBtnContainerStyle: {
        paddingLeft: 12,
        paddingRight: 12
    },
    btnLabelContainerStyle: {
        backgroundColor: colors.greyColor,
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 9,
        paddingBottom: 9,
    },
    btnLabelWrapperStyle: {
        flex: 1,
    },
    btnLabelStyle: {
        fontSize: fonts.h4,
        paddingLeft: 6,
        margin: 0,
    },
    expandIconContainerStyle: {
        flex: 1
    },
    expandIconStyle: {
        paddingRight: 6,
        fontSize: 18,
        float: 'right'
    },
    bottomDescContainerStyle: {
        marginTop: 6,
        paddingLeft: 12,
        paddingRight: 12
    },
    splashContainerStyle: {
        height: 90,
        backgroundColor: 'red'
    },
    statusbarContainerStyle: {
        height: 18,
        backgroundColor: 'yellow',
    },
    toolbarContainerStyle: {
        height: 18,
        backgroundColor: 'green',
    },
    splashContentContainerStyle: {
        backgroundColor: 'blue',
        height: 54,
    },
}

export default DragSource('template', itemSource, collect)(PageTemplate);
