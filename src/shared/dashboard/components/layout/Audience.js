import React, { Component } from 'react';

// styles
import '../../../../../assets/css/dd-menu/dd_menu.css';

// libraries
import ExpandMore from '@material-ui/icons/ExpandMore';
import Lock from '@material-ui/icons/Lock';
import PersonAdd from '@material-ui/icons/PersonAdd';
import DropdownMenu from 'react-dd-menu';
import Button from '@material-ui/core/Button';
import SearchBar from 'material-ui-search-bar'
import IconButton from '@material-ui/core/IconButton';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import Avatar from '@material-ui/core/Avatar';
import Close from '@material-ui/icons/Close';
import classNames from 'classnames';

// constants
import sizes from '../../../styles/sizes';
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';


class Audience extends Component{
    
    state = {
        isMenuOpen: false,
        isImportOpen: false
    }

    toggleMenu = () => {
        this.setState({ 
            isMenuOpen: !this.state.isMenuOpen 
        });
    }

    closeMenu = () => {
        this.setState({ isMenuOpen: false });
    }

    toggleImport = () => {
        this.setState({ 
            isImportOpen: !this.state.isImportOpen 
        });
    }

    closeImport = () => {
        this.setState({ isImportOpen: false });
    }

    render(){
        const {
            mainContainerStyle,
            mainWrapperStyle,
            targetBodyStyle,
            targetContainerStyle,
            targetTextContainerStyle,
            targetTextContentStyle,
            targetSelectWrapperStyle,
            targetTextWrapperStyle,
            targetLabelStyle,
            targetTextStyle,

            dropdownContainerStyle,
            dropdownBtnStyle,
            dropdownOptionBtnStyle,
            dropdownMobileBtnStyle,
            dropdownWebBtnStyle,
            dropdownBtnImgStyle,
            dropdownBtnTextStyle,
            imgStyle,
            mobileOptionTopLabelStyle,
            mobileOptionBottomLabelStyle,
            comingSoonWrapperStyle,
            comingSoonStyle,
            webOptionTopLabelStyle,
            webOptionBottomLabelStyle,

            channelLabelContainerStyle,
            channelLabelStyle,
            totalLabelStyle,

            channelSearchContainerStyle,
            channelInfoContainerStyle,
            searchBarWrapperStyle,
            searchBarStyle,
            channelInfoWrapperStyle,
            channelInfoStyle,
            channelInfoLeftStyle,
            channelTitleStyle,
            streamLabelStyle,
            channelInfoRightStyle,
            channelInfoIconStyle,


            streamContainerStyle,
            inviteTextContainerStyle,

            channelDetailsContainerStyle,
            channelDetailsWrapperStyle,
            channelNameWrapperStyle,
            channelRegisteredWrapperStyle,
            channelInvitedWrapperStyle,
            channeEditStyle,

            invitaionContainerStyle,
            invitationLabelStyle,
            invitationEditBtnStyle,

            memberListContainerStyle,
            memberListHeaderContainerStyle,
            memberInfocontainerStyle,
            memberInfoWrapperStyle,
            memberLabelStyle,
            invitationUserBtnStyle,
            searchUserWrapperStyle,
            searchUserStyle,
            memberListInfoStyle,
            importContainerStyle,
            importHeaderStyle,
            importTextContentStyle,
            importBtnStyle,

            userAvatarStyle,
            userNameWrapperStyle,
            userNameStyle,
            userEmailStyle,
            userRegisterWrapperStyle,
            userRegisterDateStyle,
            userRegisterStatusStyle,
            resendBtnContainerStyle,
            resendBtnStyle,
            userCloseBtnContainerStyle,

            channelNameStyle,
            channelCreatedStyle,
            channelRegisteredNumberStyle,
            channelRegisteredLabelStyle,
            channelInvitedNumberStyle,
            channelInvitedLabelStyle,

            channelIconStyle,
            channelIconWrapperStyle,

            bodyContainerStyle
        } = styles;

        return(
            <div style={mainContainerStyle}>
                <div style={mainWrapperStyle}>
                    <div style={bodyContainerStyle}>
                        <div style={channelSearchContainerStyle}>
                            <div style={targetContainerStyle}>
                                <p style={targetLabelStyle}>Target</p>
                                <div style={dropdownContainerStyle}>
                                    <DropdownMenu
                                        isOpen={this.state.isMenuOpen}
                                        close={this.closeMenu}
                                        toggle={
                                            <div>
                                                <Button 
                                                    style={dropdownBtnStyle}
                                                    onClick={() => this.toggleMenu()}>
                                                    Mobile (iOS / Android)
                                                    <ExpandMore />
                                                </Button>
                                            </div>
                                        }
                                        align={'right'}
                                        size={'md'}
                                    >
                                        <div>
                                            <Button 
                                                style={dropdownOptionBtnStyle}
                                            >
                                                <div style={dropdownMobileBtnStyle}>
                                                    <div style={dropdownBtnImgStyle}>
                                                        <img 
                                                            style={imgStyle}
                                                            src={require('../../../../../assets/images/mob_icon.png')}
                                                        />
                                                    </div>
                                                    <div style={dropdownBtnTextStyle}>
                                                        <p style={mobileOptionTopLabelStyle}>Mobile (iOS / Android)</p>
                                                        <p style={mobileOptionBottomLabelStyle}>Users viewing streams using native iOS and Android mobile apps</p>
                                                    </div>
                                                </div>
                                            </Button>
                                        </div>
                                        <div>
                                            <Button 
                                                style={dropdownOptionBtnStyle}
                                            >
                                                <div style={comingSoonWrapperStyle}>
                                                    <div style={comingSoonStyle}>
                                                        Coming Soon
                                                    </div>
                                                    <div style={dropdownWebBtnStyle}>
                                                        <div style={dropdownBtnImgStyle}>
                                                            <Lock/>
                                                        </div>
                                                        <div style={dropdownBtnTextStyle}>
                                                            <p style={webOptionTopLabelStyle}>Web application</p>
                                                            <p style={webOptionBottomLabelStyle}>Users viewing streams using their web browsers</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Button>
                                        </div>
                                    </DropdownMenu>
                                </div>
                            </div>
                            <div style={channelLabelContainerStyle}>
                                <p style={channelLabelStyle}>Channel(s)</p>
                                <p style={totalLabelStyle}>3 Total</p>
                            </div>
                            <div style={channelInfoContainerStyle}>
                                <div style={searchBarWrapperStyle}>
                                    <SearchBar
                                        value={this.state.value}
                                        onChange={() => handleSearch()}
                                        style={searchBarStyle}
                                        placeholder={'Type for search'}
                                    />
                                </div>
                                <div style={channelInfoWrapperStyle}>
                                    <div style={channelInfoStyle}>
                                        <div style={channelIconWrapperStyle}>
                                            {/* <Lock style={channelIconStyle}/> */}
                                        </div>
                                        <div style={channelInfoLeftStyle}>
                                            <p style={channelTitleStyle}>General</p>
                                            <p style={streamLabelStyle}>0 live streams</p>
                                        </div>
                                        <div style={channelInfoRightStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle} 
                                            >
                                                <MoreHoriz/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div style={channelInfoStyle}>
                                        <div style={channelIconWrapperStyle}>
                                            <Lock style={channelIconStyle}/>
                                        </div>
                                        <div style={channelInfoLeftStyle}>
                                            <p style={channelTitleStyle}>General</p>
                                            <p style={streamLabelStyle}>0 live streams</p>
                                        </div>
                                        <div style={channelInfoRightStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle} 
                                            >
                                                <MoreHoriz/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div style={channelInfoStyle}>
                                        <div style={channelIconWrapperStyle}>
                                            <Lock style={channelIconStyle}/>
                                        </div>
                                        <div style={channelInfoLeftStyle}>
                                            <p style={channelTitleStyle}>General</p>
                                            <p style={streamLabelStyle}>0 live streams</p>
                                        </div>
                                        <div style={channelInfoRightStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle} 
                                            >
                                                <MoreHoriz/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div style={channelInfoStyle}>
                                        <div style={channelIconWrapperStyle}>
                                            <Lock style={channelIconStyle}/>
                                        </div>
                                        <div style={channelInfoLeftStyle}>
                                            <p style={channelTitleStyle}>General</p>
                                            <p style={streamLabelStyle}>0 live streams</p>
                                        </div>
                                        <div style={channelInfoRightStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle} 
                                            >
                                                <MoreHoriz/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div style={channelInfoStyle}>
                                        <div style={channelIconWrapperStyle}>
                                            <Lock style={channelIconStyle}/>
                                        </div>
                                        <div style={channelInfoLeftStyle}>
                                            <p style={channelTitleStyle}>General</p>
                                            <p style={streamLabelStyle}>0 live streams</p>
                                        </div>
                                        <div style={channelInfoRightStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle} 
                                            >
                                                <MoreHoriz/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div style={channelInfoStyle}>
                                        <div style={channelIconWrapperStyle}>
                                            <Lock style={channelIconStyle}/>
                                        </div>
                                        <div style={channelInfoLeftStyle}>
                                            <p style={channelTitleStyle}>General</p>
                                            <p style={streamLabelStyle}>0 live streams</p>
                                        </div>
                                        <div style={channelInfoRightStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle} 
                                            >
                                                <MoreHoriz/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div style={channelInfoStyle}>
                                        <div style={channelIconWrapperStyle}>
                                            <Lock style={channelIconStyle}/>
                                        </div>
                                        <div style={channelInfoLeftStyle}>
                                            <p style={channelTitleStyle}>General</p>
                                            <p style={streamLabelStyle}>0 live streams</p>
                                        </div>
                                        <div style={channelInfoRightStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle} 
                                            >
                                                <MoreHoriz/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div style={channelInfoStyle}>
                                        <div style={channelIconWrapperStyle}>
                                            <Lock style={channelIconStyle}/>
                                        </div>
                                        <div style={channelInfoLeftStyle}>
                                            <p style={channelTitleStyle}>General</p>
                                            <p style={streamLabelStyle}>0 live streams</p>
                                        </div>
                                        <div style={channelInfoRightStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle} 
                                            >
                                                <MoreHoriz/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div style={channelInfoStyle}>
                                        <div style={channelIconWrapperStyle}>
                                            <Lock style={channelIconStyle}/>
                                        </div>
                                        <div style={channelInfoLeftStyle}>
                                            <p style={channelTitleStyle}>General</p>
                                            <p style={streamLabelStyle}>0 live streams</p>
                                        </div>
                                        <div style={channelInfoRightStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle} 
                                            >
                                                <MoreHoriz/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div style={channelInfoStyle}>
                                        <div style={channelIconWrapperStyle}>
                                            <Lock style={channelIconStyle}/>
                                        </div>
                                        <div style={channelInfoLeftStyle}>
                                            <p style={channelTitleStyle}>General</p>
                                            <p style={streamLabelStyle}>0 live streams</p>
                                        </div>
                                        <div style={channelInfoRightStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle} 
                                            >
                                                <MoreHoriz/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div style={channelInfoStyle}>
                                        <div style={channelIconWrapperStyle}>
                                            <Lock style={channelIconStyle}/>
                                        </div>
                                        <div style={channelInfoLeftStyle}>
                                            <p style={channelTitleStyle}>General</p>
                                            <p style={streamLabelStyle}>0 live streams</p>
                                        </div>
                                        <div style={channelInfoRightStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle} 
                                            >
                                                <MoreHoriz/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div style={channelInfoStyle}>
                                        <div style={channelIconWrapperStyle}>
                                            <Lock style={channelIconStyle}/>
                                        </div>
                                        <div style={channelInfoLeftStyle}>
                                            <p style={channelTitleStyle}>General</p>
                                            <p style={streamLabelStyle}>0 live streams</p>
                                        </div>
                                        <div style={channelInfoRightStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle} 
                                            >
                                                <MoreHoriz/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div style={channelInfoStyle}>
                                        <div style={channelIconWrapperStyle}>
                                            <Lock style={channelIconStyle}/>
                                        </div>
                                        <div style={channelInfoLeftStyle}>
                                            <p style={channelTitleStyle}>General</p>
                                            <p style={streamLabelStyle}>0 live streams</p>
                                        </div>
                                        <div style={channelInfoRightStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle} 
                                            >
                                                <MoreHoriz/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div style={channelInfoStyle}>
                                        <div style={channelIconWrapperStyle}>
                                            <Lock style={channelIconStyle}/>
                                        </div>
                                        <div style={channelInfoLeftStyle}>
                                            <p style={channelTitleStyle}>General</p>
                                            <p style={streamLabelStyle}>0 live streams</p>
                                        </div>
                                        <div style={channelInfoRightStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle} 
                                            >
                                                <MoreHoriz/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div style={channelInfoStyle}>
                                        <div style={channelIconWrapperStyle}>
                                            <Lock style={channelIconStyle}/>
                                        </div>
                                        <div style={channelInfoLeftStyle}>
                                            <p style={channelTitleStyle}>General</p>
                                            <p style={streamLabelStyle}>0 live streams</p>
                                        </div>
                                        <div style={channelInfoRightStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle} 
                                            >
                                                <MoreHoriz/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div style={channelInfoStyle}>
                                        <div style={channelIconWrapperStyle}>
                                            <Lock style={channelIconStyle}/>
                                        </div>
                                        <div style={channelInfoLeftStyle}>
                                            <p style={channelTitleStyle}>General</p>
                                            <p style={streamLabelStyle}>0 live streams</p>
                                        </div>
                                        <div style={channelInfoRightStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle} 
                                            >
                                                <MoreHoriz/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div style={channelInfoStyle}>
                                        <div style={channelIconWrapperStyle}>
                                            <Lock style={channelIconStyle}/>
                                        </div>
                                        <div style={channelInfoLeftStyle}>
                                            <p style={channelTitleStyle}>General</p>
                                            <p style={streamLabelStyle}>0 live streams</p>
                                        </div>
                                        <div style={channelInfoRightStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle} 
                                            >
                                                <MoreHoriz/>
                                            </IconButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={streamContainerStyle}>
                            <div style={inviteTextContainerStyle}>
                                <p>Invite your users directly to this private channel. When the user accepts the invitation, this private channel’s content will be automatically visibile to them on their feed along with the Generic content  (latest posts will be shown first and follows reverse chronological order)</p>
                            </div>
                            <div style={channelDetailsContainerStyle}>
                                <div style={channelDetailsWrapperStyle}>
                                <div style={channelNameWrapperStyle}>
                                    <p style={channelNameStyle}>Cardiology</p>
                                    <p style={channelCreatedStyle}>Created 01.01.1972</p>
                                </div>
                                <div style={channelRegisteredWrapperStyle}>
                                    <p style={channelRegisteredNumberStyle}>246</p>
                                    <p style={channelRegisteredLabelStyle}>Registered</p>
                                </div>
                                <div style={channelInvitedWrapperStyle}>
                                    <p style={channelInvitedNumberStyle}>257</p>
                                    <p style={channelInvitedLabelStyle}>Invited</p>
                                </div>
                                </div>
                                <div style={channeEditStyle}>
                                        <IconButton 
                                            style={channelInfoIconStyle} 
                                        >
                                            <MoreHoriz/>
                                        </IconButton>
                                </div>
                            </div>
                            <div style={invitaionContainerStyle}>
                                <p style={invitationLabelStyle}>Invitation email Template</p>
                                <Button style={invitationEditBtnStyle}>
                                    Edit
                                </Button>
                            </div>
                            <div style={memberListContainerStyle}>
                                <div style={memberListHeaderContainerStyle}>
                                    <p style={memberLabelStyle}>Members list</p>
                                    <Button style={invitationUserBtnStyle}>
                                        <PersonAdd /> Invite New Users
                                    </Button>
                                    <div style={searchUserWrapperStyle}>
                                        <SearchBar
                                            value={this.state.value}
                                            onChange={() => handleSearch()}
                                            style={searchUserStyle}
                                            placeholder={'Search a user'}
                                        />
                                    </div>
                                    <div style={memberListInfoStyle}>
                                        <DropdownMenu 
                                            isOpen={this.state.isImportOpen}
                                            close={this.closeImport}
                                            toggle={
                                                <div>
                                                    <IconButton 
                                                        style={channelInfoIconStyle}
                                                        onClick={() => this.toggleImport()}
                                                    >
                                                        <MoreHoriz/>
                                                    </IconButton>
                                                </div>
                                            }
                                            align={'right'}
                                            size={'md'}                                   
                                        >
                                            <div style={importContainerStyle}>
                                                <p style={importHeaderStyle}>Import CSV file</p>
                                                <p style={importTextContentStyle}>Upload and send all your users using this feature. Save time</p>
                                                <Button color="primary" style={importBtnStyle}>
                                                    Download a sample CSV file
                                                </Button>
                                            </div>
                                        </DropdownMenu>
                                    </div>
                                </div>
                                <div style={memberInfocontainerStyle}>
                                    <div style={memberInfoWrapperStyle}>
                                        <Avatar alt='Roy He' style={userAvatarStyle} src={require('../../../../../assets/images/ava.png')}/>
                                        <div style={userNameWrapperStyle}>
                                            <p style={userNameStyle}>Roy He</p>
                                            <p style={userEmailStyle}>roy@digitalxi.com</p>
                                        </div>
                                        <div style={userRegisterWrapperStyle}>
                                            <p style={userRegisterDateStyle}>10 May 2017</p>
                                            <p style={userRegisterStatusStyle}>Registered</p>
                                        </div>
                                        <div style={resendBtnContainerStyle}>                               
                                            {/* <Button
                                                style={resendBtnStyle}
                                                variant="outlined"
                                            >
                                                Resend Invite
                                            </Button> */}
                                        </div>
                                        <div style={userCloseBtnContainerStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle}
                                            >
                                                <Close/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div style={memberInfoWrapperStyle}>
                                        <Avatar alt='Roy He' style={userAvatarStyle} src={require('../../../../../assets/images/ava.png')}/>
                                        <div style={userNameWrapperStyle}>
                                            <p style={userNameStyle}>Dhaneswar pandian</p>
                                            <p style={userEmailStyle}>dhan@digitalxi.com</p>
                                        </div>
                                        <div style={userRegisterWrapperStyle}>
                                            <p style={userRegisterDateStyle}>10 September 2017</p>
                                            <p style={userRegisterStatusStyle}>invited</p>
                                        </div>
                                        <div style={resendBtnContainerStyle}>                               
                                            <Button
                                                style={resendBtnStyle}
                                                variant="outlined"
                                            >
                                                Resend Invite
                                            </Button>
                                        </div>
                                        <div style={userCloseBtnContainerStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle}
                                            >
                                                <Close/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div style={memberInfoWrapperStyle}>
                                        <Avatar alt='Roy He' style={userAvatarStyle} src={require('../../../../../assets/images/ava.png')}/>
                                        <div style={userNameWrapperStyle}>
                                            <p style={userNameStyle}>Roy He</p>
                                            <p style={userEmailStyle}>roy@digitalxi.com</p>
                                        </div>
                                        <div style={userRegisterWrapperStyle}>
                                            <p style={userRegisterDateStyle}>10 May 2017</p>
                                            <p style={userRegisterStatusStyle}>Registered</p>
                                        </div>
                                        <div style={resendBtnContainerStyle}>                               
                                            {/* <Button
                                                style={resendBtnStyle}
                                                variant="outlined"
                                            >
                                                Resend Invite
                                            </Button> */}
                                        </div>
                                        <div style={userCloseBtnContainerStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle}
                                            >
                                                <Close/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div style={memberInfoWrapperStyle}>
                                        <Avatar alt='Roy He' style={userAvatarStyle} src={require('../../../../../assets/images/ava.png')}/>
                                        <div style={userNameWrapperStyle}>
                                            <p style={userNameStyle}>Roy He</p>
                                            <p style={userEmailStyle}>roy@digitalxi.com</p>
                                        </div>
                                        <div style={userRegisterWrapperStyle}>
                                            <p style={userRegisterDateStyle}>10 May 2017</p>
                                            <p style={userRegisterStatusStyle}>Registered</p>
                                        </div>
                                        <div style={resendBtnContainerStyle}>                               
                                            {/* <Button
                                                style={resendBtnStyle}
                                                variant="outlined"
                                            >
                                                Resend Invite
                                            </Button> */}
                                        </div>
                                        <div style={userCloseBtnContainerStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle}
                                            >
                                                <Close/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div style={memberInfoWrapperStyle}>
                                        <Avatar alt='Roy He' style={userAvatarStyle} src={require('../../../../../assets/images/ava.png')}/>
                                        <div style={userNameWrapperStyle}>
                                            <p style={userNameStyle}>Roy He</p>
                                            <p style={userEmailStyle}>roy@digitalxi.com</p>
                                        </div>
                                        <div style={userRegisterWrapperStyle}>
                                            <p style={userRegisterDateStyle}>10 May 2017</p>
                                            <p style={userRegisterStatusStyle}>Registered</p>
                                        </div>
                                        <div style={resendBtnContainerStyle}>                               
                                            {/* <Button
                                                style={resendBtnStyle}
                                                variant="outlined"
                                            >
                                                Resend Invite
                                            </Button> */}
                                        </div>
                                        <div style={userCloseBtnContainerStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle}
                                            >
                                                <Close/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div style={memberInfoWrapperStyle}>
                                        <Avatar alt='Roy He' style={userAvatarStyle} src={require('../../../../../assets/images/ava.png')}/>
                                        <div style={userNameWrapperStyle}>
                                            <p style={userNameStyle}>Roy He</p>
                                            <p style={userEmailStyle}>roy@digitalxi.com</p>
                                        </div>
                                        <div style={userRegisterWrapperStyle}>
                                            <p style={userRegisterDateStyle}>10 May 2017</p>
                                            <p style={userRegisterStatusStyle}>Registered</p>
                                        </div>
                                        <div style={resendBtnContainerStyle}>                               
                                            {/* <Button
                                                style={resendBtnStyle}
                                                variant="outlined"
                                            >
                                                Resend Invite
                                            </Button> */}
                                        </div>
                                        <div style={userCloseBtnContainerStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle}
                                            >
                                                <Close/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div style={memberInfoWrapperStyle}>
                                        <Avatar alt='Roy He' style={userAvatarStyle} src={require('../../../../../assets/images/ava.png')}/>
                                        <div style={userNameWrapperStyle}>
                                            <p style={userNameStyle}>Roy He</p>
                                            <p style={userEmailStyle}>roy@digitalxi.com</p>
                                        </div>
                                        <div style={userRegisterWrapperStyle}>
                                            <p style={userRegisterDateStyle}>10 May 2017</p>
                                            <p style={userRegisterStatusStyle}>Registered</p>
                                        </div>
                                        <div style={resendBtnContainerStyle}>                               
                                            {/* <Button
                                                style={resendBtnStyle}
                                                variant="outlined"
                                            >
                                                Resend Invite
                                            </Button> */}
                                        </div>
                                        <div style={userCloseBtnContainerStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle}
                                            >
                                                <Close/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div style={memberInfoWrapperStyle}>
                                        <Avatar alt='Roy He' style={userAvatarStyle} src={require('../../../../../assets/images/ava.png')}/>
                                        <div style={userNameWrapperStyle}>
                                            <p style={userNameStyle}>Roy He</p>
                                            <p style={userEmailStyle}>roy@digitalxi.com</p>
                                        </div>
                                        <div style={userRegisterWrapperStyle}>
                                            <p style={userRegisterDateStyle}>10 May 2017</p>
                                            <p style={userRegisterStatusStyle}>Registered</p>
                                        </div>
                                        <div style={resendBtnContainerStyle}>                               
                                            {/* <Button
                                                style={resendBtnStyle}
                                                variant="outlined"
                                            >
                                                Resend Invite
                                            </Button> */}
                                        </div>
                                        <div style={userCloseBtnContainerStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle}
                                            >
                                                <Close/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div style={memberInfoWrapperStyle}>
                                        <Avatar alt='Roy He' style={userAvatarStyle} src={require('../../../../../assets/images/ava.png')}/>
                                        <div style={userNameWrapperStyle}>
                                            <p style={userNameStyle}>Roy He</p>
                                            <p style={userEmailStyle}>roy@digitalxi.com</p>
                                        </div>
                                        <div style={userRegisterWrapperStyle}>
                                            <p style={userRegisterDateStyle}>10 May 2017</p>
                                            <p style={userRegisterStatusStyle}>Registered</p>
                                        </div>
                                        <div style={resendBtnContainerStyle}>                               
                                            {/* <Button
                                                style={resendBtnStyle}
                                                variant="outlined"
                                            >
                                                Resend Invite
                                            </Button> */}
                                        </div>
                                        <div style={userCloseBtnContainerStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle}
                                            >
                                                <Close/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div style={memberInfoWrapperStyle}>
                                        <Avatar alt='Roy He' style={userAvatarStyle} src={require('../../../../../assets/images/ava.png')}/>
                                        <div style={userNameWrapperStyle}>
                                            <p style={userNameStyle}>Roy He</p>
                                            <p style={userEmailStyle}>roy@digitalxi.com</p>
                                        </div>
                                        <div style={userRegisterWrapperStyle}>
                                            <p style={userRegisterDateStyle}>10 May 2017</p>
                                            <p style={userRegisterStatusStyle}>Registered</p>
                                        </div>
                                        <div style={resendBtnContainerStyle}>                               
                                            {/* <Button
                                                style={resendBtnStyle}
                                                variant="outlined"
                                            >
                                                Resend Invite
                                            </Button> */}
                                        </div>
                                        <div style={userCloseBtnContainerStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle}
                                            >
                                                <Close/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div style={memberInfoWrapperStyle}>
                                        <Avatar alt='Roy He' style={userAvatarStyle} src={require('../../../../../assets/images/ava.png')}/>
                                        <div style={userNameWrapperStyle}>
                                            <p style={userNameStyle}>Roy He</p>
                                            <p style={userEmailStyle}>roy@digitalxi.com</p>
                                        </div>
                                        <div style={userRegisterWrapperStyle}>
                                            <p style={userRegisterDateStyle}>10 May 2017</p>
                                            <p style={userRegisterStatusStyle}>Registered</p>
                                        </div>
                                        <div style={resendBtnContainerStyle}>                               
                                            {/* <Button
                                                style={resendBtnStyle}
                                                variant="outlined"
                                            >
                                                Resend Invite
                                            </Button> */}
                                        </div>
                                        <div style={userCloseBtnContainerStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle}
                                            >
                                                <Close/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div style={memberInfoWrapperStyle}>
                                        <Avatar alt='Roy He' style={userAvatarStyle} src={require('../../../../../assets/images/ava.png')}/>
                                        <div style={userNameWrapperStyle}>
                                            <p style={userNameStyle}>Roy He</p>
                                            <p style={userEmailStyle}>roy@digitalxi.com</p>
                                        </div>
                                        <div style={userRegisterWrapperStyle}>
                                            <p style={userRegisterDateStyle}>10 May 2017</p>
                                            <p style={userRegisterStatusStyle}>Registered</p>
                                        </div>
                                        <div style={resendBtnContainerStyle}>                               
                                            {/* <Button
                                                style={resendBtnStyle}
                                                variant="outlined"
                                            >
                                                Resend Invite
                                            </Button> */}
                                        </div>
                                        <div style={userCloseBtnContainerStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle}
                                            >
                                                <Close/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div style={memberInfoWrapperStyle}>
                                        <Avatar alt='Roy He' style={userAvatarStyle} src={require('../../../../../assets/images/ava.png')}/>
                                        <div style={userNameWrapperStyle}>
                                            <p style={userNameStyle}>Roy He</p>
                                            <p style={userEmailStyle}>roy@digitalxi.com</p>
                                        </div>
                                        <div style={userRegisterWrapperStyle}>
                                            <p style={userRegisterDateStyle}>10 May 2017</p>
                                            <p style={userRegisterStatusStyle}>Registered</p>
                                        </div>
                                        <div style={resendBtnContainerStyle}>                               
                                            {/* <Button
                                                style={resendBtnStyle}
                                                variant="outlined"
                                            >
                                                Resend Invite
                                            </Button> */}
                                        </div>
                                        <div style={userCloseBtnContainerStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle}
                                            >
                                                <Close/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div style={memberInfoWrapperStyle}>
                                        <Avatar alt='Roy He' style={userAvatarStyle} src={require('../../../../../assets/images/ava.png')}/>
                                        <div style={userNameWrapperStyle}>
                                            <p style={userNameStyle}>Roy He</p>
                                            <p style={userEmailStyle}>roy@digitalxi.com</p>
                                        </div>
                                        <div style={userRegisterWrapperStyle}>
                                            <p style={userRegisterDateStyle}>10 May 2017</p>
                                            <p style={userRegisterStatusStyle}>Registered</p>
                                        </div>
                                        <div style={resendBtnContainerStyle}>                               
                                            {/* <Button
                                                style={resendBtnStyle}
                                                variant="outlined"
                                            >
                                                Resend Invite
                                            </Button> */}
                                        </div>
                                        <div style={userCloseBtnContainerStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle}
                                            >
                                                <Close/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div style={memberInfoWrapperStyle}>
                                        <Avatar alt='Roy He' style={userAvatarStyle} src={require('../../../../../assets/images/ava.png')}/>
                                        <div style={userNameWrapperStyle}>
                                            <p style={userNameStyle}>Vejey Gandier</p>
                                            <p style={userEmailStyle}>vejey@digitalxi.com</p>
                                        </div>
                                        <div style={userRegisterWrapperStyle}>
                                            <p style={userRegisterDateStyle}>22 June 2018</p>
                                            <p style={userRegisterStatusStyle}>Registered</p>
                                        </div>
                                        <div style={resendBtnContainerStyle}>                               
                                            <Button
                                                style={resendBtnStyle}
                                                variant="outlined"
                                            >
                                                Resend Invite
                                            </Button>
                                        </div>
                                        <div style={userCloseBtnContainerStyle}>
                                            <IconButton 
                                                style={channelInfoIconStyle}
                                            >
                                                <Close/>
                                            </IconButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        )
    }
}

const styles = {
    mainContainerStyle:{
        width: sizes.dxWidth,
        margin: '0 auto',
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        flexDirection:'row'
    },
    mainWrapperStyle:{
        height: `calc(100vh - ${sizes.headerHeight})`,
        flex:1,
        width: '100%',
        //background:'yellow'
    },
    targetBodyStyle:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 33
    },
    targetContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 32,
        width:308,
        justifyContent:'space-between',
        marginBottom:24,
        //background:'green'
    },
    targetTextContainerStyle:{
        display: 'flex',
        flexDirection: 'row',
        // marginTop: 33,
        width:692,
        // marginLeft:48,
        // justifyContent:'space-between',
        marginBottom:0,
        background:'blue'
    },
    targetTextContentStyle:{
        margin:0
    },
    targetLabelStyle:{
        marginTop:0,
        marginBottom:0,
        paddingTop:6,
        fontSize:fonts.h1
    },
    dropdownContainerStyle:{
        marginTop:0,
        marginBottom:0
    },
    dropdownOptionBtnStyle:{
        width:'100%',
        padding:0,
        textTransform: 'none'
    },
    dropdownBtnStyle:{
        padding:0,
        textTransform: 'none'
    },
    dropdownMobileBtnStyle:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        borderWidth:0.25,
        borderColor:'#d2d8de',
        borderStyle:'solid',
        borderLeft:0,
        borderRight:0,
        borderTop:0
    },
    dropdownWebBtnStyle:{
        display:'flex',
        flexDirection:'row',
        width:'100%'
    },
    dropdownBtnImgStyle:{
        flex:1,
        alignSelf:'center',
        marginLeft:12
    },
    dropdownBtnTextStyle:{
        flex:8,
        flexDirection:'column',
        textAlign:'left',
        marginLeft:6,
        marginRight:24
    },
    imgStyle:{
        height:42,
        width:24
    },
    mobileOptionTopLabelStyle:{
        marginTop:12,
        marginBottom:6,
        fontSize: fonts.h3
    },
    mobileOptionBottomLabelStyle:{
        marginTop:0,
        marginBottom:12,
        color:colors.lightGreyColor,
        fontSize: fonts.h4
    },
    webOptionTopLabelStyle:{
        marginTop:0,
        marginBottom:6,
        fontSize: fonts.h3
    },
    webOptionBottomLabelStyle:{
        marginTop:0,
        marginBottom:0,
        color:colors.lightGreyColor,
        fontSize: fonts.h4
    },
    comingSoonWrapperStyle:{
        display:'flex',
        flexDirection:'column',
        width:'100%',
        marginBottom:32
    },
    comingSoonStyle:{
        alignSelf:'flex-end',
        background:colors.blackColor,
        color:colors.whiteColor,
        width:90,
        padding:6,
        margin:0,
        fontSize: fonts.h4
    },
    channelLabelStyle:{
        margin:0
    },
    totalLabelStyle:{
        margin:0,
        fontSize:fonts.h3,
        color:colors.lightGreyColor
    },
    channelSearchContainerStyle: {
        // display: 'flex',
        // flexDirection: 'column',
        width:308,
        //background:'white',
        height:'100%',
        justifyContent:'flex-start',
        marginBottom:0,
    },
    channelInfoContainerStyle:{
        background:'white',
        boxShadow: '0 1px 1px 0 #CED5DB',
        // height:'100%',
        height:'80%'
    },
    channelInfoWrapperStyle:{
        overflowY:'scroll',
        height:'92%'

    },
    channelInfoStyle:{
        background:'#F1F7FE',
        display:'flex',
        flexDirection:'row',
        borderWidth:0.25,
        borderColor:'#d2d8de',
        borderStyle:'solid',
        borderLeft:0,
        borderRight:0,
        borderTop:0,
        paddingBottom:12,
        paddingTop:12
    },
    channelInfoLeftStyle:{
        flex:6,
        // marginLeft:24,
        marginLeft:6,
        fontSize:fonts.h4
    },
    channelTitleStyle:{
        fontSize:fonts.h3,
        marginBottom:6,
        marginTop:0
    },
    streamLabelStyle:{
        fontSize:fonts.h4,
        color:colors.lightGreyColor,
        margin:0
    },
    channelInfoRightStyle:{
        flex:1,
        alignSelf:'center',
        margin:0
    },
    channeEditStyle:{
        marginTop:0,
        marginBottom:0,
        marginRight:30
    },
    channelInfoIconStyle:{
        height:20, 
        width:20
    },
    channelLabelContainerStyle:{
        display:'flex',
        flexDirection:'row',
        marginBottom:12,
        justifyContent:'space-between'
    },
    channelLabelStyle:{
        margin:0
    },
    searchBarWrapperStyle:{
        background:'#F1F7FE',
        display:'flex',
        flexDirection:'row',
        borderWidth:0.25,
        borderColor:'#d2d8de',
        borderStyle:'solid',
        borderLeft:0,
        borderRight:0,
        borderTop:0
    },
    searchUserWrapperStyle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        marginLeft:6,
        // height:36,
        width:240
    },
    searchBarStyle:{
        width:'100%',
        boxShadow:'none',
        borderWidth:0.25,
        borderColor:'#d2d8de',
        borderStyle:'solid',
        borderLeft:0,
        borderRight:0,
        borderTop:0,
        paddingLeft:6,
    },
    searchUserStyle:{
        width:'100%',
        boxShadow:'none',
        borderWidth:1,
        borderColor:'#d2d8de',
        borderStyle:'solid',
        paddingLeft:6,
        // height:36
    },
    memberListInfoStyle:{
        alignSelf:'center',
        marginLeft:24
    },

    streamContainerStyle:{
        height:'100%',
        width:692,
        // marginTop:32,
        // paddingTop:32,
        marginBottom:0,
        marginLeft:48
        //background:'blue'
    },
    inviteTextContainerStyle:{
        width:'auto',
        // marginLeft:48,
        marginTop:42,
        marginBottom:24,
        fontSize: fonts.h3,
        color:colors.lightGreyColor
    },
    channelDetailsContainerStyle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'auto',
        background:'white',
        // marginLeft:48,
        marginTop:0,
        marginBottom:6,
        paddingTop:30,
        paddingLeft:12,
        paddingRight:12,
        paddingBottom:18,
        fontSize: fonts.h4
    },
    channelDetailsWrapperStyle:{
        display:'flex',
        flexDirection:'row'
    },
    invitaionContainerStyle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'auto',
        background:'white',
        // marginLeft:48,
        marginTop:0,
        marginBottom:6,
        paddingTop:12,
        paddingLeft:12,
        paddingRight:12,
        paddingBottom:12,
        fontSize: fonts.h4
    },
    memberListContainerStyle:{
        // display:'flex',
        height:'60%',
        // flexDirection:'row',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'space-between',
        width:'auto',
        background:'white',
        // marginLeft:48,
        marginTop:0,
        marginBottom:12,
        padding:0,
        fontSize: fonts.h4    
    },
    memberListHeaderContainerStyle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        width:'auto',
        paddingTop:12,
        paddingLeft:12,
        paddingRight:12,
        paddingBottom:12,
        borderWidth:0.25,
        borderColor:'#d2d8de',
        borderStyle:'solid',
        borderLeft:0,
        borderRight:0,
        borderTop:0
    },
    memberInfocontainerStyle:{
        overflowY:'scroll',
        minHeight:'10%',
        maxHeight:'82%',
    },
    memberInfoWrapperStyle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        width:'auto',
        paddingTop:12,
        paddingLeft:12,
        paddingRight:12,
        // paddingBottom:12,
        paddingBottom:12,
        borderWidth:0.25,
        borderColor:'#d2d8de',
        borderStyle:'solid',
        borderLeft:0,
        borderRight:0,
        borderTop:0
    },
    invitationLabelStyle:{
        marginLeft:18,
        fontSize: fonts.h3,
        marginTop:0,
        marginBottom:0
    },
    memberLabelStyle:{
        marginLeft:18,
        fontSize: fonts.h2,
        marginTop:0,
        marginBottom:0
    },
    channelNameWrapperStyle:{
        marginLeft:18,
        width:162
    },
    channelRegisteredWrapperStyle:{
        marginLeft:12,
        width:72
    },
    channelInvitedWrapperStyle:{
        marginLeft:12,
        width:60
    },
    channelNameStyle:{
        margin:0,
        fontSize: fonts.h3
    },
    channelCreatedStyle:{
        marginTop:3,
        marginBottom:0,
        color:colors.lightGreyColor,
        fontSize: fonts.h4,
    },
    channelRegisteredNumberStyle:{
        margin:0,
        fontSize: fonts.h3
    },
    channelRegisteredLabelStyle:{
        marginTop:3,
        marginBottom:0,
        fontSize: fonts.h4,
        color:colors.lightGreyColor
    },
    channelInvitedNumberStyle:{
        margin:0,
        fontSize: fonts.h3
    },
    channelInvitedLabelStyle:{
        marginTop:3,
        marginBottom:0,
        fontSize: fonts.h4,
        color:colors.lightGreyColor
    },
    invitationEditBtnStyle:{
        background:colors.blueColor,
        color:colors.whiteColor,
        height:40,
        width:120,
        marginLeft:66
    },
    invitationUserBtnStyle:{
        background:colors.blueColor,
        color:colors.whiteColor,
        height:36,
        // width:120,
        marginLeft:36,
        fontSize: fonts.h5,
        marginRight:12
    },
    bodyContainerStyle:{
        height:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center'
    },
    importContainerStyle:{
        padding:'18px 18px 6px 12px'
    },
    importHeaderStyle:{
        marginTop:0,
        marginBottom:12,
        fontSize:fonts.h3
    },
    importTextContentStyle:{
        marginTop:0,
        marginBottom:0,
        fontSize:fonts.h5
    },
    importBtnStyle:{
        margin:0,
        fontSize:fonts.h5,
        paddingTop:0,
        paddingBottom:0,
        paddingLeft:0,
        paddingRight:0
    },
    userAvatarStyle:{
        marginLeft:18,
        marginRight:12,
        // flex:1
        width:40
    },
    userNameWrapperStyle:{
        // flex:5
        width:180
    },
    userNameStyle:{
        margin:0,
        fontSize:fonts.h3
    },
    userEmailStyle:{
        marginTop:3,
        marginBottom:0,
        color:colors.lightGreyColor,
        fontSize: fonts.h4,
    },
    userRegisterWrapperStyle:{
        marginLeft:6,
        width:180
        // flex:2
    },
    userRegisterDateStyle:{
        margin:0,
        fontSize:fonts.h3
    },
    userRegisterStatusStyle:{
        marginTop:3,
        marginBottom:0,
        color:colors.lightGreyColor,
        fontSize: fonts.h4,
    },
    resendBtnContainerStyle:{
        width:126
    },
    resendBtnStyle:{
        textTransform:'none',
    },
    userCloseBtnContainerStyle:{
        // marginLeft:12
        width: 60,
        display:'flex',
        justifyContent:'center',
        marginLeft:18
    },
    channelIconStyle:{
        height:16,
        width:16
    },
    channelIconWrapperStyle:{
        marginLeft:12,
        width:16
    }

}

export default Audience;