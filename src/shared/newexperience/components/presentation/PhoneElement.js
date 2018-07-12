import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';

// Libraries
import {
    DragSource,
    DropTarget,
    ConnectDropTarget,
    ConnectDragSource,
    DropTargetMonitor,
    DropTargetConnector,
    DragSourceConnector,
    DragSourceMonitor,
} from 'react-dnd';
import { XYCoord } from 'dnd-core';
import flow from 'lodash/flow';
import Delete from '@material-ui/icons/Delete';
import ContentCopy from '@material-ui/icons/ContentCopy';
import DragHandle from '@material-ui/icons/DragHandle';

// components
import DxEditor from './DxEditor';
import DxButtonConnector from './DxButtonConnector';
import DxPdfViewer from './DxPdfViewer';
import DxSplash from './DxSplash';
import DxVideoViewer from './DxVideoViewer';
import DxImageViewer from './DxImageViewer';

// constants
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

const style = {
    borderTop: '1px dotted',
    borderBottom: '0.5px dotted',
    borderLeft: '1px dotted',
    borderRight: '1px dotted',
    borderColor: colors.blueBorderColor,
    boxSize: 'border-box',
    backgroundColor: colors.whiteColor,
    cursor: 'move',
};

const cardSource = {
    beginDrag(props) {
        return {
            index: props.index,
        }
    },
};

const cardTarget = {
    hover(props, monitor, component) {
        const dragIndex = monitor.getItem().index
        const hoverIndex = props.index

        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return;
        }

        // Determine rectangle on screen
        const hoverBoundingRect = (findDOMNode(
            component,
        )).getBoundingClientRect();

        // Get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

        // Determine mouse position
        const clientOffset = monitor.getClientOffset();

        // Get pixels to the top
        const hoverClientY = (clientOffset).y - hoverBoundingRect.top;

        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%
        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }

        // Time to actually perform the action
        props.moveCard(dragIndex, hoverIndex);

        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        monitor.getItem().index = hoverIndex;
    },
}

class PhoneElement extends Component {

    static propTypes = {
        connectDragSource: PropTypes.func.isRequired,
        connectDropTarget: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired,
        isDragging: PropTypes.bool.isRequired,
        moveCard: PropTypes.func.isRequired,
    }

    renderSection = (type) => {

        let section;
        switch (type) {
            case 'EDITOR':
                section = (
                    <DxEditor
                        sectionGUID={this.props.sectionGUID}
                        htmlContent={this.props.htmlContent}
                        handleUpdateHtmlContent={(html) => this.props.handleUpdateHtmlContent(html)}
                    />
                )
                break;
            case 'BUTTON':
                section = (
                    <DxButtonConnector
                        sectionGUID={this.props.sectionGUID}
                        btnContent={this.props.btnContent}
                        dropdownOptionArr={this.props.dropdownOptionArr}
                        handleBtnInputChange={(e) => this.props.handleBtnInputChange(e)}
                        handleBtnConnectPageChange={(pageGUID) => this.props.handleBtnConnectPageChange(pageGUID)}
                    />
                )
                break;
            case 'EMBED_PDF':
                section = (
                    <DxPdfViewer 
                        pdfPath={this.props.pdfPath}
                    />
                )
                break;
            case 'SPLASH':
                section = (
                    <DxSplash 
                        splashContent={this.props.splashContent}
                        splashImg={this.props.splashImg}
                        splashColor={this.props.splashColor}
                        handleDescInputChange={(e) => this.props.handleDescInputChange(e)}
                    />
                )
                break;
            case 'VIDEO':
                section = (
                    <DxVideoViewer 
                        videoUrl={this.props.videoUrl}
                        handleVideoError={(msg) => this.props.handleVideoError(msg)}
                    />
                )
                break;
            case 'IMAGE':
                section = (
                    <DxImageViewer 
                        img={this.props.img}
                    />
                )
                break;
            default:
                break;
        }

        return section;
    }

    render() {
        const {
            isDragging,
            connectDragSource,
            connectDropTarget,

            activePage,
            type,
            isActive,
        } = this.props;

        const opacity = isDragging ? 0 : 1;
        const {
            mainContainerStyle,
            tableContainerStyle,
            tableWrapperStyle,
            controlContainerStyle,
            controlWrapperStyle,

            contentContainerStyle,
            removeControlContainerStyle,
            copyControlContainerStyle,
            dragControlContainerStyle,
            controlIconStyle,
        } = styles;

        return (
            <div
                className={activePage ? 'dx_show' : 'dx_hidden'}
                style={Object.assign({}, mainContainerStyle, { ...style, opacity })}>
                <div className="dx_float_active_side_tab"
                    style={Object.assign({}, controlContainerStyle, { borderColor: isActive ? colors.activeBlueColor : 'transparent' })}>
                    <div style={tableContainerStyle}>
                        <div style={tableWrapperStyle}>
                            <div style={controlWrapperStyle}>
                                <div style={removeControlContainerStyle}>
                                    <Delete style={controlIconStyle} />
                                </div>
                                <div style={copyControlContainerStyle}>
                                    <ContentCopy style={controlIconStyle} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    connectDragSource &&
                    connectDropTarget &&
                    connectDragSource(
                        connectDropTarget(
                            <div
                                style={contentContainerStyle}
                                onClick={() => this.props.handleSectionClick(this.props.sectionGUID)}>
                                <div style={dragControlContainerStyle}>
                                    <DragHandle style={controlIconStyle} />
                                </div>
                                {
                                    this.renderSection(type)
                                }
                            </div>
                        ),
                    )
                }
            </div>
        );
    }
}

const minHeight = 72;

const styles = {

    mainContainerStyle: {
        position: 'relative',
        minHeight: minHeight,
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
        textAlign: 'center'
    },
    controlContainerStyle: {
        position: 'absolute',
        left: -42,
        width: 18,
        height: '100%',
        paddingRight: 30,
        borderRight: '4px solid',
        boxSizing: 'border-box'
    },

    controlWrapperStyle: {
        width: 18,
        height: 54,
        boxSizing: 'border-box'
    },
    contentContainerStyle: {
        minHeight: minHeight,
    },
    removeControlContainerStyle: {
        width: 18,
        height: 18,
        boxSizing: 'border-box'
    },
    controlIconStyle: {
        color: colors.lightGreyColor,
        fontSize: fonts.h2
    },
    copyControlContainerStyle: {
        width: 18,
        height: 18,
        boxSizing: 'border-box',
        marginTop: 36
    },
    dragControlContainerStyle: {
        position: 'absolute',
        left: -40,
        top: 'calc(50%)',
        width: 18,
        height: 18,
        boxSizing: 'border-box'
    }
}

export default flow(
    DragSource(
        'card',
        cardSource,
        (connect, monitor) => ({
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging(),
        }),
    ),
    DropTarget('card', cardTarget, (connect) => ({
        connectDropTarget: connect.dropTarget(),
    }))
)(PhoneElement);
