import React, { Component } from 'react';

// constants
import colors from '../../../styles/colors';

// Libraries
import DropdownMenu from 'react-dd-menu';
import IconButton from '@material-ui/core/IconButton';
import ColorPicker from 'rc-color-picker';

const colorOptions = ['#4A90E2', '#DFA92E', '#913D88', '#1AA98B', '#EC5C03', '#83909B'];

import 'rc-color-picker/assets/index.css';

class ColorOptionBar extends Component {

    state = {
        isColorMenuOpen: false,
    }

    handleColorToggle = () => {
        this.setState({
            isColorMenuOpen: !this.state.isColorMenuOpen
        });
    }

    handleColorClose = () => {
        console.log('hit here');
        this.setState({
            isColorMenuOpen: false
        });
    }

    handleColorOptionclick = (color) => {
        this.setState({
            btnPickerColor: color,
            isColorMenuOpen: false
        });
    }

    renderColorOptions = () => {
        const {
            tableContainerStyle,
            tableWrapperStyle,
            colorOptionIconContainerStyle,
            colorOptionIconWrapperStyle,
            colorOptionIconStyle,
        } = styles;
        return colorOptions.map((color, index) => (
            <div style={colorOptionIconContainerStyle}>
                <div style={tableContainerStyle}>
                    <div style={tableWrapperStyle}>
                        <IconButton
                            style={Object.assign({}, { backgroundColor: color }, colorOptionIconWrapperStyle)}
                            iconStyle={colorOptionIconStyle}
                            onClick={() => this.handleColorOptionclick(color)}
                        />
                    </div>
                </div>
            </div>
        ))
    }

    render() {

        const {
            tableContainerStyle,
            tableWrapperStyle,
            colorOptionContainerStyle,
            defaultColorOptionIconContainerStyle,
            colorOptionIconWrapperStyle,
            colorOptionIconStyle,
            colorPickerContainerStyle,
            hexColorPickerStyle,
        } = styles;

        return (
            <div>
                <DropdownMenu
                    isOpen={this.state.isColorMenuOpen}
                    close={() => this.handleColorClose()}
                    size={'md'}
                    align='left'
                    toggle={
                        <div style={defaultColorOptionIconContainerStyle}>
                            <div style={tableContainerStyle}>
                                <div style={tableWrapperStyle}>
                                    <IconButton
                                        style={Object.assign({}, { backgroundColor: this.state.btnPickerColor }, colorOptionIconWrapperStyle)}
                                        iconStyle={colorOptionIconStyle}
                                        onClick={() => this.handleColorToggle()}
                                    />
                                </div>
                            </div>
                        </div>
                    }
                    closeOnInsideClick={false}
                    closeOnOutsideClick={false}
                >
                    <div style={colorOptionContainerStyle}>
                        {this.renderColorOptions()}
                        <div style={colorPickerContainerStyle}>
                            <div style={tableContainerStyle}>
                                <div style={tableWrapperStyle}>
                                    <ColorPicker
                                        style={hexColorPickerStyle}
                                        animation="slide-up"
                                        color={colors.whiteColor}
                                        onChange={this.handleColorPicker}
                                    ><span className="react-custom-trigger" fullWidth>red</span>
                                    </ColorPicker>
                                </div>
                            </div>
                        </div>
                    </div>
                </DropdownMenu>
            </div>
        )
    }
}

const styles = {

    tableContainerStyle: {
        position: 'relative',
        display: 'table',
        height: '100%',
        width: '100%',
    },
    tableWrapperStyle: {
        display: 'table-cell',
        verticalAlign: 'middle',
    },
    optionContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 36,
    },
    defaultColorOptionIconContainerStyle: {
        height: 36,
    },
    colorOptionIconContainerStyle: {
        height: 42,
        width: 42,
        marginLeft: 3,
        marginRight: 3,
    },
    colorOptionIconWrapperStyle: {
        height: 30,
        width: 30,
    },
    colorOptionIconStyle: {
        height: 4,
        width: 4,
    },
    colorOptionContainerStyle: {
        display: 'flex',
        flexDirection: 'row'
    },
    colorPickerContainerStyle: {
        textAlign: 'Left',
        height: 42,
        width: 60,
    },
    hexColorPickerStyle: {
        backgroundColor: colors.lightBlueColor,
        color: colors.labelColor,
    },
}

export default ColorOptionBar;