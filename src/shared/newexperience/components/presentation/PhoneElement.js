import React from 'react';
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

// constants
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

const style = {
    border: '1px dotted',
    borderColor: colors.blueBorderColor,
    backgroundColor: colors.whiteColor,
    cursor: 'move',
};

const cardSource = {
    beginDrag(props) {
        return {
            id: props.id,
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

class PhoneElement extends React.Component {
    static propTypes = {
        connectDragSource: PropTypes.func.isRequired,
        connectDropTarget: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired,
        isDragging: PropTypes.bool.isRequired,
        id: PropTypes.any.isRequired,
        text: PropTypes.string.isRequired,
        moveCard: PropTypes.func.isRequired,
    }

    render() {
        const {
            text,
            isDragging,
            connectDragSource,
            connectDropTarget,
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
        } = styles;

        return (
            <div
                style={Object.assign({}, mainContainerStyle, { ...style, opacity })}>
                <div style={controlContainerStyle}>
                    <div style={tableContainerStyle}>
                        <div style={tableWrapperStyle}>
                            <div style={controlWrapperStyle}>
                                <div style={removeControlContainerStyle}>
                                    1
                                </div>
                                <div style={copyControlContainerStyle}>
                                    3
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
                            <div style={contentContainerStyle}>
                                <div style={dragControlContainerStyle}>
                                    2
                                </div>
                                <input defaultValue={text} />
                            </div>
                        ),
                    )
                }
            </div>
        );
    }
}

const minHeight = 120;

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
        left: -40,
        width: 18,
        height: '100%',
    },
    controlWrapperStyle: {
        width: 18,
        height: 72,
        border: '1px solid green'
    },

    contentContainerStyle: {
        minHeight: minHeight,
    },
    removeControlContainerStyle: {
        width: 18,
        height: 18,
        border: '1px solid purple'
    },
    copyControlContainerStyle: {
        width: 18,
        height: 18,
        border: '1px solid red'
    },
    dragControlContainerStyle: {
        position: 'absolute',
        left: -40,
        top: 'calc(50%)',
        width: 18,
        height: 18,
        border: '1px solid yellow'
    },
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
