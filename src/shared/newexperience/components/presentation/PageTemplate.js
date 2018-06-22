import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

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
    render() {
        const { isDragging, connectDragSource, template } = this.props;
        const opacity = isDragging ? 0 : 1;

        return connectDragSource(
            <div style={{ opacity }}>
                <span>{template.Title}</span>
            </div>
        );
    }
}

export default DragSource('template', itemSource, collect)(PageTemplate);
