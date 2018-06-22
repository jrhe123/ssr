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
        let card;
        if (template.Type == 'EDITOR') {
            card = (
                <div>EDITOR</div>
            )
        } else if (template.Type == 'BUTTON') {
            card = (
                <div>BUTTON</div>
            )
        } else if (template.Type == 'EMBED_PDF') {
            card = (
                <div>EMBED_PDF</div>
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
            tableContainerStyle,
            tableWrapperStyle,
            pageContainerStyle,
        } = styles;

        return connectDragSource(
            <div style={mainContainerStyle}>
                <div style={Object.assign({}, pageContainerStyle, { opacity })}>
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
}

export default DragSource('template', itemSource, collect)(PageTemplate);
