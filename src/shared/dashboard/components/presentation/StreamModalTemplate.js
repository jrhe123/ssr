import React, { Component } from 'react';

// Libraries
import Button from '@material-ui/core/Button';
import Modal from 'react-responsive-modal';
import SearchBar from 'material-ui-search-bar';

// constants
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

//style
import '../../../../../assets/css/modal/rrm.css';



class StreamModalTemplate extends Component {

            
    state = {
        handleOpenModal: false
    };
    
    onOpenModal = () => {
        this.setState({ handleOpenModal: true });
    };
    
    handleCloseModal = () => {
        this.setState({ handleOpenModal: false });
    };
    

    render() {

        const { handleOpenModal } = this.state;

        const {           
            goLiveBtnStyle,
            modalContainerStyle,
            modalWrapperStyle,
            streamLabelStyle,
            channelCountLabelStyle,
            searchBarWrapperStyle,
            searchBarStyle,
            channelListContainer,
            channelInfoStyle,
            channelLabelStyle,
            saveBtnContainerStyle,
            saveBtnStyle
        } = styles;


        return (
            <div>
                <Button variant="Add a new channel" style={goLiveBtnStyle} onClick={this.onOpenModal}>Go Live</Button>
                <Modal 
                    open={handleOpenModal} 
                    onClose={this.handleCloseModal} 
                    classNames={{
                        overlay: 'custom-overlay',
                        modal: 'custom-StreamModal',
                    }}
                    center
                    closeIconSize={0}
                >
                    <div style={modalContainerStyle}>
                        <div style={modalWrapperStyle}>
                            <p style={streamLabelStyle}>My experience 3</p>
                            <p style={channelCountLabelStyle}>Currently streamed in <b>2</b> channels</p>
                            <div style={searchBarWrapperStyle}>
                                <SearchBar
                                    value={this.state.value}
                                    onChange={() => handleSearch()}
                                    style={searchBarStyle}
                                    placeholder={'search channel(s)'}
                                />
                            </div>
                            <div style={channelListContainer}>
                                <div style={channelInfoStyle}>
                                    <p style={channelLabelStyle}>Sample channel one</p>
                                </div>
                                <div style={channelInfoStyle}>
                                    <p style={channelLabelStyle}>Hypertension</p>
                                </div>
                            </div>
                        </div>
                        <div style={saveBtnContainerStyle}>
                            <Button style={saveBtnStyle} onClick={this.handleCloseModal}>Close</Button>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

const styles = {
    goLiveBtnStyle:{
        marginTop:6,
        marginBottom:6,
        marginRight:6,
        padding:0,
        background:'#F0F7FF',
        color:'#2DD1AC',
        fontSize:fonts.h4,
        height:26
    },

    modalContainerStyle:{
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'flex-start',
    },
    modalWrapperStyle:{
        paddingLeft:36,
        width:'100%',
        width: `calc(100% - 36px)`,
        height:`calc(100% - 84px)`,
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'flex-start',
    },
    streamLabelStyle:{
        marginTop:42,
        marginBottom:24,
        fontSize:fonts.h3,
        fontWeight:'bold',
        marginLeft:6
    },
    channelCountLabelStyle:{
        marginTop:0,
        marginBottom:24,
        fontSize:fonts.h3,
        fontWeight:'300',
        marginLeft:6
    },
    searchBarWrapperStyle:{
        background:'#F1F7FE',
        display:'flex',
        flexDirection:'row',
        borderWidth:1,
        borderLeft:0,
        borderTop:0,
        borderRight:0,
        borderColor:colors.borderColor,
        borderStyle:'solid',
        height:36,
        width:300,
        marginBottom:12,
        marginLeft:6
    },
    searchBarStyle:{
        width:'100%',
        boxShadow:'none',
        paddingLeft:6,
        height:'100%',
        fontSize:fonts.h3
    },
    channelListContainer:{
        overflowY: 'scroll',
        width: 312,
        minHeight:45,
        maxHeight:`calc(100% - 182px)`,
        paddingLeft:6,
        paddingTop:6
    },
    channelInfoStyle:{
        height:42,
        width:300,
        boxShadow: '0 2px 4px 0 rgba(0,0,0,0.5)',
        marginBottom:3,
    },
    channelLabelStyle:{
        margin:0,
        paddingLeft:12,
        paddingTop:12,
        paddingBottom:12,
        fontSize:fonts.h3,
        fontWeight:'300',
    },
    saveBtnContainerStyle:{
        height:84,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-start',
        width:'100%'
    },
    saveBtnStyle:{
        background:colors.blueColor,
        color:colors.whiteColor,
        height:40,
        fontSize: fonts.h5,
        width:120
    }

}
export default StreamModalTemplate;