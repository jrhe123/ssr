import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

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
            tableContainerStyle,
            tableWrapperStyle,
            leftImageContainerStyle,
            rightTextContainerStyle,
            imgStyle,
            txtStyle,
            btnPageContainerStyle,
            topBtnContainerStyle,
            btnLabelContainerStyle,
            btnLabelStyle,
            bottomDescContainerStyle,
        } = styles;

        let card;
        if (template.Type == 'EDITOR') {
            card = (
                <div>
                    <div style={leftImageContainerStyle}>
                        <div style={tableContainerStyle}>
                            <div style={tableWrapperStyle}>
                                <img
                                    style={imgStyle}
                                    src={require('../../../../../assets/images/demo.jpg')}
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
                <div style={btnPageContainerStyle}>
                    <div style={topBtnContainerStyle}>
                        <div style={tableContainerStyle}>
                            <div style={tableWrapperStyle}>
                                <div style={btnLabelContainerStyle}>
                                    <p style={btnLabelStyle}>Text for a button</p>
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
            )
        } else if (template.Type == 'EMBED_PDF') {
            card = (
                <div>
                    <div style={leftImageContainerStyle}>
                        <div style={tableContainerStyle}>
                            <div style={tableWrapperStyle}>
                                <img
                                    style={imgStyle}
                                    src={require('../../../../../assets/images/demo.jpg')}
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
                <div>SPLASH</div>
            )
        } else if (template.Type == 'VIDEO') {
            card = (
                <div>VIDEO</div>
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
            pageContainerStyle,
        } = styles;

        return connectDragSource(
            <div style={mainContainerStyle}>
                <div style={Object.assign({}, pageContainerStyle, { opacity })}
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
        paddingLeft: 6,
        paddingRight: 6
    },
    pageContainerStyle: {
        width: 'calc(100% - 24px)',
        height: 90,
        cursor: 'pointer',
        margin: '0 auto'
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
    imgStyle: {
        display: 'block',
        width: 60,
        height: 60,
        margin: '0 auto'
    },
    txtStyle: {
        fontSize: fonts.h5
    },
    btnPageContainerStyle: {
        display: 'flex',
        flexDirection: 'column',
        height: 90,
    },
    topBtnContainerStyle: {
        flex: 2,
    },
    btnLabelContainerStyle: {
        width: 'calc(100% - 24px)',
        margin: '0 auto',
        backgroundColor: colors.greyColor,
        paddingTop: 6,
        paddingBottom: 6
    },
    btnLabelStyle: {

    },
    bottomDescContainerStyle: {
        flex: 1,
        paddingLeft: 6,
        paddingRight: 6,
    },
}

export default DragSource('template', itemSource, collect)(PageTemplate);
