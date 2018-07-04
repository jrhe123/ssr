import React, { Component } from 'react';

class DxEditorToolbar extends Component {

    render() {

        return (
            <div id="toolbar">
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
                    <select className="ql-color"></select>
                    <select className="ql-align"></select>
                </span>
                <span class="ql-formats">
                    <button className="ql-bold" />
                    <button className="ql-italic" />
                    <button className="ql-underline" />
                </span>
                <span class="ql-formats">                    
                    <select className="ql-background"></select>
                </span>
                <span class="ql-formats">
                    <button className="ql-clean"></button>
                </span>
            </div>
        )
    }
}

export default DxEditorToolbar;