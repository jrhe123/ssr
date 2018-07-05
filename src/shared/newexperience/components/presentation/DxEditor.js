import React, { Component } from 'react';

// Libraries
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.core.css';
import '../../../../../assets/css/quill/index.css';

// Quill setup
const Quill = ReactQuill.Quill
var Font = Quill.import('formats/font');
var Size = Quill.import('attributors/style/size');
Font.whitelist = ['Open_Sans', 'Roboto', 'Lato', 'Raleway', 'Ubuntu', 'Monoton'];
Size.whitelist = ['12px', '16px', '20px', '24px', '28px'];
Quill.register(Font, true);
Quill.register(Size, true);


const formats = [
    'header', 'font', 'background', 'color', 'code', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent', 'script', 'align', 'direction',
    'link', 'image', 'code-block', 'formula', 'video'
];

class DxEditor extends Component {

    constructor(props) {
        super(props)
        this.state = {
            editorHtml: '',
            mountedEditor: false
        }
        this.modules = {
            // toolbar: [
            //     ['bold', 'italic', 'underline'],                 // toggled buttons
            //     [{ 'size': Size.whitelist }],                    // custom dropdown
            //     [{ 'color': [] }, { 'background': [] }],         // dropdown with defaults
            //     [{ 'font': Font.whitelist }],                    // font family
            //     [{ 'align': [] }],                               // text align
            //     ['clean'],                                       // remove formatting
            // ]
            toolbar: {
                container: '#toolbar-'+this.props.sectionGUID
            }
        }
        this.quillRef = null;
        this.reactQuillRef = null;
        this.handleChange = this.handleChange.bind(this)
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

    handleChange(html) {
        this.setState({ editorHtml: html });
    }

    render() {

        const {
            mainContainerStyle,
        } = styles;

        return (
            <div style={mainContainerStyle}>
                <ReactQuill
                    ref={(el) => { this.reactQuillRef = el }}
                    theme={'snow'}
                    onChange={this.handleChange}
                    modules={this.modules}
                    formats={formats}
                    defaultValue={this.state.editorHtml}
                    placeholder={this.props.placeholder} />
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {

    }
}

export default DxEditor;