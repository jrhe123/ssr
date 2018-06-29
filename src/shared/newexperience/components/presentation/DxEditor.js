import React, { Component } from 'react';

// Libraries
import { Editor, getEventTransfer } from 'slate-react';
import { Value } from 'slate';
import Html from 'slate-html-serializer';
import initialValue from '../../../../../data/editor';

// Slate JS setup
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


class DxEditor extends Component {

    state = {
        value: Value.fromJSON(initialValue),
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

    render() {

        return (
            <Editor
                placeholder="Your content.."
                value={this.state.value}
                onPaste={this.onPaste}
                onChange={this.onChange}
                renderNode={this.renderNode}
                renderMark={this.renderMark}
            />
        )
    }
}

export default DxEditor;