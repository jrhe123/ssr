import React, { Component } from 'react';

// Libraries
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DropdownMenu from 'react-dd-menu';
import ExpandMore from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';

// constants
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import sizes from '../../../styles/sizes';

// components
import ChannelListInfo from '../presentation/ChannelListInfo';


const themeStyles = () => ({
    yourIconButtonStyle: {
        height: 36,
        textAlign:'left'
    }
});

class ChannelList extends Component {

    state = {
        isMenuOpen: false
    }

    handleToggleMenu = () => {
        this.setState({ 
            isMenuOpen: !this.state.isMenuOpen 
        });
    }

    handleCloseMenu = () => {
        this.setState({ isMenuOpen: false });
    }

    handleToggleImport = () => {
        this.setState({ 
            isImportOpen: !this.state.isImportOpen 
        });
    }

    handleCloseImport = () => {
        this.setState({ isImportOpen: false });
    }



    render() {

        const {
            classes
        } = this.props;

        const {
            mainContainerStyle,
            mainWrapperStyle,
            topContainerStyle,
            searchBarWrapperSrtyle,
            serachIconStyle,
            searchUserStyle,
            channelListInfoContainerStyle,
            channelListInfoWrapperStyle,
            channelListButtonStyle,
            questionMarkLabelStyle,
            fullBtnStyle,
            channelNumberStyle,
            dropdownBtnStyle,
            menuItemStyle,
            expandIconStyle,
            channelListContainer,
            textFieldStyle
        } = styles;


        return (
            <div style={mainContainerStyle}>
                <div style={mainWrapperStyle}>
                    <div style={topContainerStyle}>
                        <div style={searchBarWrapperSrtyle}>
                            <div style={serachIconStyle}>
                                <Search/>
                            </div>
                            <div>
                                <TextField
                                    id="input-with-icon-textfield"
                                    placeholder="search channel(s)"
                                    style={textFieldStyle}
                                />
                            </div>
                        </div>
                    </div>
                    <div style={channelListInfoContainerStyle}>
                        <div style={channelListInfoWrapperStyle}>
                            <p style={channelNumberStyle}>2 Channel(s)</p>
                            <DropdownMenu
                                isOpen={this.state.isMenuOpen}
                                close={this.handleCloseMenu}
                                toggle={
                                    <div>
                                        <Button style={dropdownBtnStyle} onClick={() => this.handleToggleMenu()}>All<ExpandMore style={expandIconStyle}/></Button>
                                    </div>
                                }
                                align={'center'}
                                size={'sm'}
                            >
                                <div>
                                    <p style={menuItemStyle}>First option</p>
                                </div>
                                <div>
                                    <p style={menuItemStyle}>Second option</p>
                                </div>
                            </DropdownMenu>
                        </div>
                        <div style={channelListButtonStyle}>
                            <Button 
                                variant="Add a new channel" 
                                style={fullBtnStyle}
                                onClick={this.props.onClick}
                            >
                                Add channel
                            </Button>
                            <p style={questionMarkLabelStyle}>?</p>
                        </div>
                    </div>
                    <div style={channelListContainer}>
                        <ChannelListInfo backgroundColor={'#EE2E24'} channelLabel={'Diabetes'} isLive/>
                        <ChannelListInfo backgroundColor={'#913D88'} channelLabel={'Hypertension'}/>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    mainContainerStyle:{
        width: sizes.dxWidth,
        margin: '0 auto',
        display:'flex',
        flexDirection:'row'
    },
    mainWrapperStyle:{
        height: `calc(100vh - ${sizes.headerHeight})`,
        flex:1,
        width: '100%'
    },
    topContainerStyle:{
        height:32,
        display:'flex',
        flexDirection:'row',
        marginTop:44,
        marginLeft:120,
        marginRight:120,
        marginBottom:56,
        alignItems:'flex-start',
        justifyContent:'flex-start'
    },
    searchBarWrapperSrtyle:{
         display:'flex',
         flexDirection:'flex-start',
         alignItems:'center'
    },
    searchUserStyle:{
        width:'100%',
        boxShadow:'none',
        borderWidth:0,
        borderBottom:1,
        borderColor:'#A8B7C5',
        borderStyle:'solid',
        paddingLeft:0,
        height:'100%',
        background:colors.backgroundColor
    },
    channelListInfoContainerStyle:{
        height:32,
        flexDirection:'row',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        marginLeft:120,
        marginRight:120,
        borderBottom:'1px solid #FFFFFF',
        paddingBottom:9
    },
    channelListInfoWrapperStyle:{
        flexDirection:'row',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        width:352
    },
    channelListButtonStyle:{
        flexDirection:'row',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
    },
    questionMarkLabelStyle:{
        margin: '0px 12px 0px 15px',
        color:colors.lightGreyColor,
    },
    fullBtnStyle: {
        backgroundColor: colors.blueColor,
        color: colors.whiteColor,
        textTransform: 'none',
        width:99,
        height:24,
        fontSize:fonts.h4,
        paddingTop:3,
        paddingBottom:3,
    },
    dropdownBtnStyle:{
        padding:0,
        textTransform: 'none',
        fontSize:fonts.h2,
        color:'#4E546C'
    },
    expandIconStyle:{
        color:colors.lightGreyColor
    },
    channelNumberStyle:{
        fontSize:fonts.h2,
        color:'#4E546C',
    },
    channelListContainer:{
        marginLeft:120,
        marginRight:120,
        minHeight:72,
        maxHeight:'calc(100% - 190px)',
        overflowY: 'scroll',
        display:'flex',
        flexWrap:'wrap'
    },
    menuItemStyle:{
        margin:0,
        paddingTop:9,
        paddingBottom:9,
        textAlign:'center',
        borderWidth:0,
        borderBottom:1,
        borderColor:'#A8B7C5',
        borderStyle:'solid',
    },
    textFieldStyle:{
        height:30
    },
    serachIconStyle:{
        height:18,
        width:18,
        marginRight:9,
        color:colors.lightGreyColor
    }
}

export default withStyles(themeStyles)(ChannelList);