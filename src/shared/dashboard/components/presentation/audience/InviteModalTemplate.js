import React, { Component } from 'react';

// Libraries
import Button from '@material-ui/core/Button';
import Modal from 'react-responsive-modal';

// constants
import fonts from '../../../../styles/fonts';
import colors from '../../../../styles/colors';

//style
import '../../../../../../assets/css/modal/rrm.css';


class InviteModalTemplate extends Component {

            
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
            invitationEditBtnStyle,

            modalContainerStyle,
            headerStyle,
            bodyContainerStyle,
            topBarStyle,
            imgContainerStyle,
            imgStyle,
            inviteTextStyle,
            acceptBtnStyle,
            contentContainerStyle,
            contentStyle,
            bottomBarStyle,
            learnMoreLabelStyle,
            copyrightLabelStyle,
            saveBtnStyle
        } = styles;


        return (
            <div>
                <Button style={invitationEditBtnStyle} onClick={this.onOpenModal}>Edit</Button>
                <Modal 
                    open={handleOpenModal} 
                    onClose={this.handleCloseModal} 
                    classNames={{
                        overlay: 'custom-overlay',
                        modal: 'custom-InviteModal',
                    }}
                    center
                >
                    <div style={modalContainerStyle}>
                        <p style={headerStyle}>Create your own personalized invitation for General</p>
                        <div style={bodyContainerStyle}>
                            <div style={topBarStyle}></div>
                            <div style={imgContainerStyle}>
                                <img
                                    style={imgStyle}
                                    src={require('../../../../../../assets/images/uhn_logo.png')}
                                />
                            </div>
                            <p style={inviteTextStyle}>Princess Margeret Hospital has invited you to join their live content stream on ContentXi</p>
                            <Button style={acceptBtnStyle}>Accept Invite</Button>
                            <div style={contentContainerStyle}>
                                <p style={contentStyle}><b>ContentXi keeps you up-to-date with all the relevant content, and discover relevant content:</b></p>
                                <p style={contentStyle}>Discover new relevant content of your choice</p>
                                <p style={contentStyle}>Get updated information and content in your busy schedule - Never miss it again!</p>
                                <p style={contentStyle}>Experience the content by downloading them to your mobile phone</p>
                            </div>
                            <div style={bottomBarStyle}>
                                <p style={learnMoreLabelStyle}>ContentXi makes your content journey smarter. Learn more.</p>
                                <p style={copyrightLabelStyle}>@2018 DigitalXi Inc.</p>
                            </div>
                        </div>
                        <Button style={saveBtnStyle}>Save</Button>
                    </div>
                </Modal>
            </div>
        );
    }
}

const styles = {
    modalContainerStyle:{
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    headerStyle:{
        marginTop:36,
        marginBottom:42,
        fontSize:fonts.h1
    },
    bodyContainerStyle:{
        width:384,
        height:576,
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,0.5)'
    },
    topBarStyle:{
        height:14,
        width:'100%',
        background:colors.blueColor
    },
    imgContainerStyle:{
        marginTop:12,
        marginBottom:30
    },
    imgStyle:{
        display: 'block',
        width: 180,
        height: 78,
    },
    inviteTextStyle:{
        fontSize:fonts.h1,
        margin:'0 30px 30px 30px',
        textAlign:'center'
    },
    acceptBtnStyle:{
        background:colors.blueColor,
        color:colors.whiteColor,
        fontSize: fonts.h2,
        width: 180,
        height: 36,
        textTransform:'none'
    },
    contentContainerStyle:{
        display:'flex',
        flexDirection:'column',
        justifycontent:'center',
        alignItems:'left',
        height:204,
        width:308,
        selfAlign:'center',
        fontSize:fonts.h4,
        marginTop:30,
        marginBottom:30
    },
    contentStyle:{
        marginTop:0,
        marginBottom:18,
    },
    bottomBarStyle:{
        height:42,
        width:'100%',
        background:colors.blackColor,
        fontSize:fonts.h5,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        color:colors.whiteColor
    },
    learnMoreLabelStyle:{
        margin:0
    },
    copyrightLabelStyle:{
        margin:0
    },
    saveBtnStyle:{
        background:colors.blueColor,
        color:colors.whiteColor,
        height:40,
        marginTop:54,
        marginBottom:48,
        width:120,
        textTransform:'none',
        fontSize:fonts.h3
    },
    invitationEditBtnStyle:{
        background:colors.blueColor,
        color:colors.whiteColor,
        height:40,
        width:120,
        marginLeft:66,
        textTransform:'none',
        fontSize:fonts.h3
    },
}
export default InviteModalTemplate;