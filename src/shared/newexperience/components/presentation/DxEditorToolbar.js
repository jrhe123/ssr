import React, { Component } from 'react';

// constants
import colors from '../../../styles/colors';

class DxEditorToolbar extends Component {

    render() {

        const {
            toolDivisionStyle,
        } = styles;

        return (
            <div className={this.props.isActive ? 'dx_show_toolbar' : 'dx_hidden_toolbar'}>
                <div id={"toolbar-" + this.props.sectionGUID}>
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
                            <option value="12px">12</option>
                            <option value="16px" selected>16</option>
                            <option value="20px">20</option>
                            <option value="24px">24</option>
                            <option value="28px">28</option>
                        </select>
                    </span>
                    <span class="ql-formats">
                        <span style={toolDivisionStyle}></span>
                    </span>
                    <span class="ql-formats">
                        <select className="ql-color"></select>
                        <select className="ql-align"></select>
                    </span>
                    <span class="ql-formats">
                        <span style={toolDivisionStyle}></span>
                    </span>
                    <span class="ql-formats dx_tool_bar">
                        <button className="ql-bold" />
                        <button className="ql-italic" />
                        <button className="ql-underline" />
                    </span>
                    <span class="ql-formats">
                        <span style={toolDivisionStyle}></span>
                    </span>
                    <span class="ql-formats">
                        <select className="ql-background"></select>
                    </span>
                    <span class="ql-formats">
                        <button className="ql-clean"></button>
                    </span>
                </div>
            </div>
        )
    }
}

const styles = {

    toolDivisionStyle: {
        display: 'inline-block',
        height: 36,
        borderRight: '1px solid',
        borderColor: colors.toolbarBorderColor,
    },
}

export default DxEditorToolbar;