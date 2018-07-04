import React, { Component } from 'react';

// Libraries
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.core.css';

const modules = {
    toolbar: [
        ['bold', 'italic', 'underline', 'strike'],       // toggled buttons
        ['blockquote', 'code-block'],                    // blocks
        [{ 'header': 1 }, { 'header': 2 }],              // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],    // lists
        [{ 'script': 'sub' }, { 'script': 'super' }],     // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],         // outdent/indent
        [{ 'direction': 'rtl' }],                        // text direction
        [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],       // header dropdown
        [{ 'color': [] }, { 'background': [] }],         // dropdown with defaults
        [{ 'font': [] }],                                // font family
        [{ 'align': [] }],                               // text align
        ['clean'],                                       // remove formatting
    ]
}
const formats = [
    'header', 'font', 'background', 'color', 'code', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent', 'script', 'align', 'direction',
    'link', 'image', 'code-block', 'formula', 'video'
]

class DxEditor extends Component {

    constructor(props) {
        super(props)
        this.state = {
            editorHtml: '',
            mountedEditor: false
        }
        this.quillRef = null;
        this.reactQuillRef = null;
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.attachQuillRefs = this.attachQuillRefs.bind(this);
    }

    componentDidMount() {
        this.attachQuillRefs();
    }

    componentDidUpdate() {
        this.attachQuillRefs();
    }

    attachQuillRefs() {
        // Ensure React-Quill reference is available:
        if (typeof this.reactQuillRef.getEditor !== 'function') return;
        // Skip if Quill reference is defined:
        if (this.quillRef != null) return;
        const quillRef = this.reactQuillRef.getEditor();
        if (quillRef != null) this.quillRef = quillRef;
    }

    handleClick() {
        var range = this.quillRef.getSelection();
        let position = range ? range.index : 0;
        this.quillRef.insertText(position, 'Hello, World! ')
    }

    handleChange(html) {
        this.setState({ editorHtml: html });
    }

    render() {
        return (
            <div>
                <ReactQuill
                    ref={(el) => { this.reactQuillRef = el }}
                    theme={'snow'}
                    onChange={this.handleChange}
                    modules={modules}
                    formats={formats}
                    defaultValue={this.state.editorHtml}
                    placeholder={this.props.placeholder} />
                <button onClick={this.handleClick}>Insert Text</button>
            </div>
        )
    }
}

export default DxEditor;