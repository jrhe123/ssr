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

// Elem Libraries
import { Editor, getEventTransfer } from 'slate-react';
import { Value } from 'slate';
import Html from 'slate-html-serializer';
import initialValue from '../../../../../data/editor';

// constants
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

const style = {
    border: '1px dotted',
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

// Slate JS editor
const BLOCK_TAGS = {
    p: 'paragraph',
    li: 'list-item',
    ul: 'bulleted-list',
    ol: 'numbered-list',
    blockquote: 'quote',
    pre: 'code',
    h1: 'heading-one',
    h2: 'heading-two',
    h3: 'heading-three',
    h4: 'heading-four',
    h5: 'heading-five',
    h6: 'heading-six',
}
const MARK_TAGS = {
    strong: 'bold',
    em: 'italic',
    u: 'underline',
    s: 'strikethrough',
    code: 'code',
}
const RULES = [
    {
        deserialize(el, next) {
            const block = BLOCK_TAGS[el.tagName.toLowerCase()]

            if (block) {
                return {
                    object: 'block',
                    type: block,
                    nodes: next(el.childNodes),
                }
            }
        },
    },
    {
        deserialize(el, next) {
            const mark = MARK_TAGS[el.tagName.toLowerCase()]

            if (mark) {
                return {
                    object: 'mark',
                    type: mark,
                    nodes: next(el.childNodes),
                }
            }
        },
    },
    {
        // Special case for code blocks, which need to grab the nested childNodes.
        deserialize(el, next) {
            if (el.tagName.toLowerCase() == 'pre') {
                const code = el.childNodes[0]
                const childNodes =
                    code && code.tagName.toLowerCase() == 'code'
                        ? code.childNodes
                        : el.childNodes

                return {
                    object: 'block',
                    type: 'code',
                    nodes: next(childNodes),
                }
            }
        },
    },
    {
        // Special case for images, to grab their src.
        deserialize(el, next) {
            if (el.tagName.toLowerCase() == 'img') {
                return {
                    object: 'block',
                    type: 'image',
                    isVoid: true,
                    nodes: next(el.childNodes),
                    data: {
                        src: el.getAttribute('src'),
                    },
                }
            }
        },
    },
    {
        // Special case for links, to grab their href.
        deserialize(el, next) {
            if (el.tagName.toLowerCase() == 'a') {
                return {
                    object: 'inline',
                    type: 'link',
                    nodes: next(el.childNodes),
                    data: {
                        href: el.getAttribute('href'),
                    },
                }
            }
        },
    },
]
const serializer = new Html({ rules: RULES })

class PhoneElement extends Component {

    state = {
        value: Value.fromJSON(initialValue),
    }

    static propTypes = {
        connectDragSource: PropTypes.func.isRequired,
        connectDropTarget: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired,
        isDragging: PropTypes.bool.isRequired,
        moveCard: PropTypes.func.isRequired,
    }

    onChange = ({ value }) => {
        this.setState({ value })
    }

    onPaste = (event, change) => {
        const transfer = getEventTransfer(event)
        if (transfer.type != 'html') return
        const { document } = serializer.deserialize(transfer.html)
        change.insertFragment(document)
        return true
    }

    renderNode = props => {
        const { attributes, children, node, isSelected } = props

        switch (node.type) {
            case 'quote':
                return <blockquote {...attributes}>{children}</blockquote>
            case 'code':
                return (
                    <pre>
                        <code {...attributes}>{children}</code>
                    </pre>
                )
            case 'bulleted-list':
                return <ul {...attributes}>{children}</ul>
            case 'heading-one':
                return <h1 {...attributes}>{children}</h1>
            case 'heading-two':
                return <h2 {...attributes}>{children}</h2>
            case 'heading-three':
                return <h3 {...attributes}>{children}</h3>
            case 'heading-four':
                return <h4 {...attributes}>{children}</h4>
            case 'heading-five':
                return <h5 {...attributes}>{children}</h5>
            case 'heading-six':
                return <h6 {...attributes}>{children}</h6>
            case 'list-item':
                return <li {...attributes}>{children}</li>
            case 'numbered-list':
                return <ol {...attributes}>{children}</ol>
            case 'link': {
                const { data } = node
                const href = data.get('href')
                return (
                    <a href={href} {...attributes}>
                        {children}
                    </a>
                )
            }
            case 'image': {
                const src = node.data.get('src')
                const className = isSelected ? 'active' : null
                const style = { display: 'block' }
                return (
                    <img src={src} className={className} style={style} {...attributes} />
                )
            }
        }
    }

    renderMark = props => {
        const { children, mark, attributes } = props

        switch (mark.type) {
            case 'bold':
                return <strong {...attributes}>{children}</strong>
            case 'code':
                return <code {...attributes}>{children}</code>
            case 'italic':
                return <em {...attributes}>{children}</em>
            case 'underlined':
                return <u {...attributes}>{children}</u>
        }
    }

    renderSection = (type) => {

        let section;
        switch (type) {
            case 'EDITOR':
                section = (
                    <div>
                        <Editor
                            placeholder="Paste in some HTML..."
                            value={this.state.value}
                            onPaste={this.onPaste}
                            onChange={this.onChange}
                            renderNode={this.renderNode}
                            renderMark={this.renderMark}
                        />
                    </div>
                )
                break;
            case 'BUTTON':
                section = (
                    <div>
                        button here
                </div>
                )
                break;
            case 'EMBED_PDF':
                section = (
                    <div>
                        pdf here
                </div>
                )
                break;
            case 'SPLASH':
                section = (
                    <div>
                        splash here
                </div>
                )
                break;
            case 'VIDEO':
                section = (
                    <div>
                        video here
                </div>
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

            type,
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
                style={Object.assign({}, mainContainerStyle, { ...style, opacity })}>
                <div style={controlContainerStyle}>
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
                            <div style={contentContainerStyle}>
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

const minHeight = 120;

const styles = {

    mainContainerStyle: {
        position: 'relative',
        minHeight: minHeight,
        overflowX: 'hidden'
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
