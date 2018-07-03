import React, { Component } from 'react';

// Libraries
import { Editor, getEventTransfer } from 'slate-react';
import { Value } from 'slate';
import Html from 'slate-html-serializer';
import { isKeyHotkey } from 'is-hotkey';

// Slate JS setup
const BLOCK_TAGS = {
    blockquote: 'quote',
    p: 'paragraph',
    pre: 'code',
}

// Add a dictionary of mark tags.
const MARK_TAGS = {
    em: 'italic',
    strong: 'bold',
    u: 'underline',
}
const rules = [
    {
        deserialize(el, next) {
            const type = BLOCK_TAGS[el.tagName.toLowerCase()]
            if (type) {
                return {
                    object: 'block',
                    type: type,
                    data: {
                        className: el.getAttribute('class'),
                    },
                    nodes: next(el.childNodes),
                }
            }
        },
        serialize(obj, children) {
            if (obj.object == 'block') {
                switch (obj.type) {
                    case 'code':
                        return (
                            <pre>
                                <code>{children}</code>
                            </pre>
                        )
                    case 'paragraph':
                        return <p className={obj.data.get('className')}>{children}</p>
                    case 'quote':
                        return <blockquote>{children}</blockquote>
                }
            }
        },
    },
    // Add a new rule that handles marks...
    {
        deserialize(el, next) {
            const type = MARK_TAGS[el.tagName.toLowerCase()]
            if (type) {
                return {
                    object: 'mark',
                    type: type,
                    nodes: next(el.childNodes),
                }
            }
        },
        serialize(obj, children) {
            if (obj.object == 'mark') {
                switch (obj.type) {
                    case 'bold':
                        return <strong>{children}</strong>
                    case 'italic':
                        return <em>{children}</em>
                    case 'underline':
                        return <u>{children}</u>
                }
            }
        },
    },
]
const html = new Html({ rules })
const initialValue = localStorage.getItem('content') || '<p></p>'

class DxEditor extends Component {

    state = {
        value: html.deserialize(initialValue),
    }

    onChange = ({ value }) => {
        // When the document changes, save the serialized HTML to Local Storage.
        if (value.document != this.state.value.document) {
            const string = html.serialize(value)
            localStorage.setItem('content', string)
        }
        this.setState({ value })
    }

    renderNode = props => {
        switch (props.node.type) {
            case 'code':
                return (
                    <pre {...props.attributes}>
                        <code>{props.children}</code>
                    </pre>
                )
            case 'paragraph':
                return (
                    <p {...props.attributes}>
                        {props.children}
                    </p>
                )
            case 'quote':
                return <blockquote {...props.attributes}>{props.children}</blockquote>
        }
    }

    // Add a `renderMark` method to render marks.
    renderMark = props => {
        const { mark, attributes } = props
        switch (mark.type) {
            case 'bold':
                return <strong {...attributes}>{props.children}</strong>
            case 'italic':
                return <em {...attributes}>{props.children}</em>
            case 'underline':
                return <u {...attributes}>{props.children}</u>
        }
    }

    render() {
        return (
            <div>
                <Editor
                    value={this.state.value}
                    onChange={this.onChange}
                    // Add the ability to render our nodes and marks...
                    renderNode={this.renderNode}
                    renderMark={this.renderMark}
                />
            </div>
        )
    }
}

export default DxEditor;