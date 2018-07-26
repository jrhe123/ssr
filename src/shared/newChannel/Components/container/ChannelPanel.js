import React, { Component } from 'react';

// styles
import '../../../../../assets/css/dd-menu/dd_menu.css';

// Libraries
import Button from '@material-ui/core/Button';
import DropdownMenu from 'react-dd-menu';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';
import Lock from '@material-ui/icons/Lock';

// redux
import { connect } from 'react-redux';
import {
    dxChannelTypeUpdate as dxChannelTypeUpdateAction,
} from '../../actions';

// constants
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

// // components
import DxInput from '../../../components/dxInput/DxInput';


const themeStyles = () => ({
    textField: {
        color: 'red'
    }
});


class ChannelPanel extends Component{

    state = {
        isTypeMenuOpen: false,
        isColorMenuOpen: false,
        btnPickerColor: '#EE2E24',
        hexPickerColor:'#hex',
        titleCharacterCount: 0,
        descriptionCharacterCount: 0
    }

    toggleTypeSelect = () => {
        this.setState({ 
            isTypeMenuOpen: !this.state.isTypeMenuOpen 
        });
    }

    toggleColorSelect = () => {
        this.setState({ 
            isColorMenuOpen: !this.state.isColorMenuOpen 
        });
    }
    
    closeTypeSelect = () => {
        this.setState({ isTypeMenuOpen: false });
    }

    closeColorSelect = () => {
        this.setState({ isColorMenuOpen: false });
    }

    colorBlueOptionclick = () => {
        this.setState({ btnPickerColor: '#4A90E2'});
        this.setState({ isColorMenuOpen: false });
        console.log('btnPickerColor', this.state.btnPickerColor);
    }

    colorYellowOptionclick = () => {
        this.setState({ btnPickerColor: '#DFA92E'});
        this.setState({ isColorMenuOpen: false });
        console.log('btnPickerColor', this.state.btnPickerColor);
    }

    colorPurpleOptionclick = () => {
        this.setState({ btnPickerColor: '#913D88'});
        this.setState({ isColorMenuOpen: false });
        console.log('btnPickerColor', this.state.btnPickerColor);
    }

    colorGreenOptionclick = () => {
        this.setState({ btnPickerColor: '#1AA98B'});
        this.setState({ isColorMenuOpen: false });
        console.log('btnPickerColor', this.state.btnPickerColor);
    }

    colorOrangeOptionclick = () => {
        this.setState({ btnPickerColor: '#EC5C03'});
        this.setState({ isColorMenuOpen: false });
        console.log('btnPickerColor', this.state.btnPickerColor);
    }

    colorGreyOptionclick = () => {
        this.setState({ btnPickerColor: '#83909B'});
        this.setState({ isColorMenuOpen: false });
    }

    handleColorPicker = (obj) => {
        this.setState({ btnPickerColor: obj.color});
        this.setState({ hexPickerColor: obj.color});
        console.log('btnPickerColor', this.state.btnPickerColor);
    }

    handleTitleCharacterChange = () => {
        var input = event.target.value;
        this.setState({
            titleCharacterCount: 0 + input.length
        });

    }

    handleDescriptionCharacterChange = () => {
        var input = event.target.value;
        this.setState({
            descriptionCharacterCount: 0 + input.length
        });   
    }

    handleClickOption = (val) => {
        this.props.dxChannelTypeUpdateAction(val);
    }

    render(){
        const {
            classes
        } = this.props;     

        const {
            mainContainerStyle,
            optionContainerStyle,
            leftContainerStyle,
            labelStyle,
            rightContainerStyle,
            outlineBtnStyle,
            optionBtnStyle,
            textAreaStyle,
            colorOptionContainerStyle,
            colorOptionStyle,
            characterCounterStyle,
            colorPickerStyle,
            lockStyle,
            privateChannelLabel
        } = styles;

        const {
            channel
        } = this.props;

        return(
            <div style={mainContainerStyle}>
                <div style={optionContainerStyle}>
                    <div style={leftContainerStyle}>
                        <p style={labelStyle}>Visibility</p>
                    </div>
                    <div style={rightContainerStyle}>
                        <p>What kind of channel visibility you would like your end user to experience?</p>
                        <DropdownMenu
                            isOpen={this.state.isTypeMenuOpen}
                            close={this.closeTypeSelect}
                            toggle={
                                <div>
                                    <DxInput 
                                        placeholder="type"
                                        width="226px"
                                        disabled={true}
                                        value={channel.type == 0 ? 'Public Channel' : 'Private Channel - Invite only 🔒'}
                                    />
                                    <Button 
                                        style={outlineBtnStyle}
                                        onClick={() => this.toggleTypeSelect()}>
                                        EDIT
                                    </Button>
                                </div>
                            }
                            align='left'
                        >
                            <div onClick={() => this.handleClickOption(0)}>
                                <Button 
                                    style={optionBtnStyle}
                                    className="dx-lower-case"
                                >Public Channel</Button>
                            </div>
                            <div onClick={() => this.handleClickOption(1)}>
                                <Button 
                                    style={optionBtnStyle}
                                    className="dx-lower-case"
                                >
                                    <p style={privateChannelLabel}>Private Channel - Invite only<Lock style={lockStyle}/></p>
                                </Button>
                            </div>
                        </DropdownMenu>
                    </div>
                </div>
                <div style={optionContainerStyle}>
                    <div style={leftContainerStyle}>
                        <p style={labelStyle}>Color</p>
                    </div>
                    <div style={rightContainerStyle}>
                        <p>Choose a color for your channel. We recommend using one color for each channel you own.</p>
                        
                        <DropdownMenu
                            isOpen={this.state.isColorMenuOpen}
                            close={this.closeColorSelect}
                            size={'md'}
                            align='left'
                            toggle={
                                <div>
                                    <IconButton 
                                        style={{backgroundColor:this.state.btnPickerColor, height:20, width:20}} 
                                        iconStyle={{height:5, width:5}} 
                                        onClick={() => this.toggleColorSelect()}
                                    />
                                </div>
                            }
                            closeOnInsideClick={false}
                            closeOnOutsideClick={false}
                        >
                            <div style={colorOptionContainerStyle}>
                                <div style={colorOptionStyle}>
                                    <IconButton
                                        style={{backgroundColor:'#4A90E2', height:20, width:20}} 
                                        iconStyle={{height:5, width:5}} 
                                        onClick={this.colorBlueOptionclick}
                                    />
                                </div>
                                <div style={colorOptionStyle}>
                                    <IconButton 
                                        style={{backgroundColor:'#DFA92E', height:20, width:20}} 
                                        iconStyle={{height:5, width:5}}
                                        onClick={this.colorYellowOptionclick}
                                    />
                                </div>
                                <div style={colorOptionStyle}>
                                    <IconButton 
                                        style={{backgroundColor:'#913D88', height:20, width:20}} 
                                        iconStyle={{height:5, width:5}}
                                        onClick={this.colorPurpleOptionclick}
                                    />
                                </div>
                                <div style={colorOptionStyle}>
                                    <IconButton 
                                        style={{backgroundColor:'#1AA98B', height:20, width:20}} 
                                        iconStyle={{height:5, width:5}}
                                        onClick={this.colorGreenOptionclick}
                                    />
                                </div>
                                <div style={colorOptionStyle}>
                                    <IconButton 
                                        style={{backgroundColor:'#EC5C03', height:20, width:20}} 
                                        iconStyle={{height:5, width:5}}
                                        onClick={this.colorOrangeOptionclick}
                                    />
                                </div>
                                <div style={colorOptionStyle}>
                                    <IconButton 
                                        style={{backgroundColor:'#83909B', height:20, width:20}} 
                                        iconStyle={{height:5, width:5}}
                                        onClick={this.colorGreyOptionclick}
                                    />
                                </div>
                                <div style={colorPickerStyle}>
                                    <ColorPicker
                                        animation="slide-up"
                                        color={'#F0F7FF'}
                                        onChange={this.handleColorPicker}
                                    >
                                        <span className="react-custom-trigger" fullWidth>{this.state.hexPickerColor}</span>
                                    </ColorPicker>
                                </div>                               
                            </div>
                        </DropdownMenu>
                    </div>
                </div>
                <div style={optionContainerStyle}>
                    <div style={leftContainerStyle}>
                        <p style={labelStyle}>Title</p>
                    </div>
                    <div style={rightContainerStyle}>
                        <p>Choose a channel title relevant to your audience’s interest. Ex. Diabetes, Radiology, News etc.</p>
                        <TextField
                            id="multiline-static"
                            multiline
                            rows="1"
                            margin="normal"
                            InputProps={{
                                disableUnderline: true,
                                classes:{
                                    input: classes.textField
                                },
                            }}
                            inputProps={{maxLength: 50}}
                            style = {textAreaStyle}
                            fullWidth
                            placeholder={'Hypertension'}
                            onChange={this.handleTitleCharacterChange.bind(this)}
                        />
                        <p style={characterCounterStyle}>{this.state.titleCharacterCount}/50</p>
                    </div>
                </div>
                <div style={optionContainerStyle}>
                    <div style={leftContainerStyle}>
                        <p style={labelStyle}>Description</p>
                    </div>
                    <div style={rightContainerStyle}>
                        <p>Write an amazing description for your channel. Your audience will read this before joining the channel</p>
                        <TextField
                            id="multiline-static"
                            multiline
                            rows="5"
                            margin="normal"
                            InputProps={{
                                disableUnderline: true,
                            }}
                            inputProps={{maxLength: 1000}}
                            style={textAreaStyle}
                            fullWidth
                            placeholder= {'Type something'}
                            onChange={this.handleDescriptionCharacterChange.bind(this)}
                        />
                        <p style={characterCounterStyle}>{this.state.descriptionCharacterCount}/1000</p>
                    </div>
                </div>
            </div>
        )
    }

}

const styles = {

    mainContainerStyle:{
        width: 600,
        margin: '0 auto',
    },
    optionContainerStyle:{
        display:'flex',
        flexDirection: 'row',
        paddingTop:36,
    },
    leftContainerStyle: {
        flex:1,
        display:'flex',
        flexDirection: 'row',
        fontSize: fonts.h3,
        color: colors.blackColor,
    },
    rightContainerStyle: {
        flex:4,
        color: colors.labelColor,
        fontSize: fonts.h4
    },
    labelStyle:{
        textAlign: 'left',
    },
    outlineBtnStyle: {
        color: colors.blueColor,
    },
    optionBtnStyle: {
        width: 144
    },
    textAreaStyle:{
        backgroundColor:'white',
        paddingLeft:12,
        paddingTop:12,
        paddingRight:12,
        paddingBottom:12,
        color:'red',
        width:'96%'
    },
    colorOptionStyle:{
        paddingTop:6,
        paddingLeft:12,
        paddingBottom:6,
        marginTop:0
    },
    colorOptionContainerStyle:{
        display:'flex',
        flexDirection:'row'
    },
    characterCounterStyle:{
        display:'flex', 
        flexDirection:'row',
        justifyContent: 'flex-end',
        margin:0
    },
    colorPickerStyle:{
        margin: '6px 12px', 
        paddingLeft:'6px', 
        paddingRight:'6px', 
        textAlign: 'Left', 
        height:'20px', 
        width:'64px', 
        backgroundColor:'#F0F7FF', 
        color: '#6A6875'
    },
    lockStyle:{
        height:'14px',
        position: 'relative',
    },
    privateChannelLabel:{
        margin:0
    }
}

const stateToProps = (state) => {
    return {
        channel: state.newchannel.channel
    }
}

const dispatchToProps = {
    dxChannelTypeUpdateAction
}

export default connect(stateToProps, dispatchToProps)(withStyles(themeStyles)(ChannelPanel));
// export default withStyles(themeStyles)(ChannelPanel);