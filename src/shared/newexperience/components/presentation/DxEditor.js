import React, { Component } from 'react';

// Libraries
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.core.css';
import '../../../../../assets/css/quill/index.css';

// constants
import fonts from '../../../styles/fonts';

// Quill setup
const Quill = ReactQuill.Quill
var Font = Quill.import('formats/font');
var Size = Quill.import('attributors/style/size');
Font.whitelist = ['Open_Sans', 'Roboto', 'Lato', 'Raleway', 'Ubuntu', 'Monoton'];
Size.whitelist = ['12px', '16px', '20px', '24px', '28px'];
Quill.register(Font, true);
Quill.register(Size, true);

const modules = {
    // toolbar: [
    //     ['bold', 'italic', 'underline'],                 // toggled buttons
    //     [{ 'size': Size.whitelist }],                    // custom dropdown
    //     [{ 'color': [] }, { 'background': [] }],         // dropdown with defaults
    //     [{ 'font': Font.whitelist }],                    // font family
    //     [{ 'align': [] }],                               // text align
    //     ['clean'],                                       // remove formatting
    // ]
    toolbar: {
        container: '#toolbar'
    }
}
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

    handleChange(html) {
        this.setState({ editorHtml: html });
    }

    handleExport = () => {
        console.log('hit: ', this.state.editorHtml);
    }

    render() {

        const {
            mainContainerStyle,
        } = styles;

        return (
            <div style={mainContainerStyle}>
                <a onClick={() => this.handleExport()}>export here</a>
                <div id="toolbar">
                    <span class="ql-formats">
                        <select class="ql-size">
                            <option value="12px">12px</option>
                            <option value="16px" selected>16px</option>
                            <option value="20px">20px</option>
                            <option value="24px">24px</option>
                            <option value="28px">28px</option>
                        </select>
                    </span>
                    <span class="ql-formats">
                        <select class="ql-font">
                            <option value="Open_Sans" selected>Open Sans</option>
                            <option value="Roboto">Roboto</option>
                            <option value="Lato">Lato</option>
                            <option value="Raleway">Raleway</option>
                            <option value="Ubuntu">Ubuntu</option>
                            <option value="Monoton">Monoton</option>
                        </select>
                    </span>
                    <button className="ql-bold" />
                    <button className="ql-italic" />
                    <button className="ql-underline" />
                    <select className="ql-align"></select>
                    <select className="ql-color"></select>
                    <select className="ql-background"></select>
                    <button className="ql-clean"></button>
                </div>
                <ReactQuill
                    ref={(el) => { this.reactQuillRef = el }}
                    theme={'snow'}
                    onChange={this.handleChange}
                    modules={modules}
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