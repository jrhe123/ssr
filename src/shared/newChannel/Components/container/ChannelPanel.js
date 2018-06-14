import React, { Component } from 'react';

// styles
import '../../../../../assets/css/dd-menu/dd_menu.css';

// Libraries
import Button from '@material-ui/core/Button';
import DropdownMenu from 'react-dd-menu';
import TextField from '@material-ui/core/TextField';

// constants
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

// // components
import DxInput from '../../../components/dxInput/DxInput';

class ChannelPanel extends Component{

    state = {
        isMenuOpen: false,
        isMenuOpen2: false,
    }

    toggle = () => {
        this.setState({ 
            isMenuOpen: !this.state.isMenuOpen 
        });
    }

    toggle2 = () => {
        this.setState({ 
            isMenuOpen2: !this.state.isMenuOpen2 
        });
    }
    
    close = () => {
        this.setState({ isMenuOpen: false });
    }

    close2 = () => {
        this.setState({ isMenuOpen2: false });
    }


    render(){

        const {
            mainContainerStyle,
            optionContainerStyle,
            leftContainerStyle,
            labelStyle,
            rightContainerStyle,
            outlineBtnStyle,
            optionBtnStyle,
            textAreaStyle,
            colorOptnBtnStyle,
            colorOptionsStyle,
            colorContainerStyle,
            hexColorStyle
        } = styles;

        return(
            <div style={mainContainerStyle}>
                <div style={optionContainerStyle}>
                    <div style={leftContainerStyle}>
                        <p style={labelStyle}>Visibility</p>
                    </div>
                    <div style={rightContainerStyle}>
                        <p>What kind of channel visibility you would like your end user to experience?</p>
                        <DropdownMenu
                            isOpen={this.state.isMenuOpen}
                            close={this.close}
                            toggle={
                                <div>
                                    <DxInput 
                                        placeholder="type"
                                        width="120px"
                                        disabled={true}
                                        // value={this.props.experienceType == 0 ? 'Public Channel' : 'Public Channel - Invite only'}
                                    />
                                    <Button 
                                        style={outlineBtnStyle}
                                        onClick={() => this.toggle()}>
                                        EDIT
                                    </Button>
                                </div>
                            }
                            align='left'
                        >
                            <div onClick={() => this.props.handleClickOption(0)}>
                                <Button 
                                    style={optionBtnStyle}
                                    className="dx-lower-case"
                                >
                                    Public Channel
                                </Button>
                            </div>
                            <div onClick={() => this.props.handleClickOption(1)}>
                                <Button 
                                    style={optionBtnStyle}
                                    className="dx-lower-case"
                                >
                                    Public Channel - Invite only
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
                            isOpen={this.state.isMenuOpen2}
                            close={this.close2}
                            // menuAlign={'left'}
                            size={'md'}
                            align='left'
                            toggle={
                                <div>
                                    <Button 
                                        variant="fab"
                                        mini
                                        color="secondary"
                                        onClick={() => this.toggle2()}>
                                    </Button>
                                </div>
                            }
                        >
                            <div style={colorContainerStyle}>
                                <div style={colorOptionsStyle}>
                                    <Button
                                        style={colorOptnBtnStyle}
                                        variant="fab"
                                        mini
                                        color="default"
                                        className="dx-lower-case"
                                    />
                                </div>
                                <div style={colorOptionsStyle}>
                                    <Button
                                        style={colorOptnBtnStyle}
                                        variant="fab"
                                        mini
                                        color="primary"
                                        className="dx-lower-case"
                                    />
                                </div>
                                <div style={colorOptionsStyle}>
                                    <TextField
                                        margin="normal"
                                        placeholder="#hex" 
                                        InputProps={{
                                            disableUnderline: true,
                                        }}
                                        style={hexColorStyle}
                                    />
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
                            }}
                            style={textAreaStyle}
                            fullWidth
                        />
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
                            style={textAreaStyle}
                            fullWidth
                        />
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
        //background:'yellow'
    },
    optionContainerStyle:{
        display:'flex',
        flexDirection: 'row',
        marginTop: 36, 
    },
    leftContainerStyle: {
        flex:1,
        display:'flex',
        flexDirection: 'row',
        fontSize: fonts.h3,
        color: colors.blackColor,
        //backgroundColor:'blue'
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
        paddingLeft:10,
        paddingTop:10,
        paddingRight:10,
        paddingBottom:10,
    },
    colorOptnBtnStyle:{
        margin:0
    },
    colorOptionsStyle:{
        paddingTop:5,
        paddingLeft:10,
        paddingBottom:5,
        marginTop:0
    },
    colorContainerStyle:{
        display:'flex',
        flexDirection:'row'
    },
    hexColorStyle:{
        backgroundColor:colors.backgroundColor,
    }
}

export default ChannelPanel;