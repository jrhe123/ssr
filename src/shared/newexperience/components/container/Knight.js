import React, { Component } from 'react';
import { ItemTypes } from '../../constants';
import { DragSource } from 'react-dnd';

const knightSource = {
    beginDrag(props, dnd, element) {
        return {}
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Knight extends Component {

    render() {
        const { connectDragSource, isDragging } = this.props

        return connectDragSource(
            <div action={this.action} 
                style={{
                    backgroundColor: 'transparent',
                    opacity: isDragging ? 0.25 : 1,
                    fontSize: 40,
                    fontWeight: 'bold',
                    cursor: 'move'
                }}
            >
                <input type="text" value="123"/>
            </div>
        )
    }
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight)
