import React, { Component } from 'react';

// styles
import '../../../../assets/css/react-dd-menu.css';
import '../../../../assets/css/ui-material/ui-material.css';

// Libraries
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import AddAlert from '@material-ui/icons/AddAlert';
import ExpandMore from '@material-ui/icons/ExpandMore';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import Add from '@material-ui/icons/Add';
import DropdownMenu from 'react-dd-menu';

// constants
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import sizes from '../../styles/sizes';

// components
import DxInput from '../dxInput/DxInput';

// router
import { Link } from 'react-router-dom';

const themeStyles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 770,
    }
});

class NavBar extends Component {

    constructor() {
        super();
        this.state = {
            isMenuOpen: false
        };
    }

    toggle = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }

    close = () => {
        this.setState({ isMenuOpen: false });
    }

    click = () => {
        console.log('You clicked an item');
    }

    handleChange = (index) => {
        this.props.handleChange(index);
    };

    handleInputChange = (e) => {
        this.props.handleInputChange(e);
    }

    render() {

        const {
            isRoute,
            navType,
            classes,

            navArr,

            index,
            experience,
        } = this.props;

        const {
            mainContainerStyle,
            mainWrapperStyle,
            fixTableContainerStyle,
            halfTableContainerStyle,
            tableContainerStyle,
            tableWrapperStyle,
            txtCenterStyle,
            leftContainerStyle,
            imgStyle,
            midContainerStyle,
            midTopContainerStyle,
            smallNavContainerStyle,
            smallNavStyle,
            firstNavStyle,
            notifiNavStyle,
            midBottomContainerStyle,
            tabLabelStyle,
            rightContainerStyle,
            rightTopContainerStyle,
            infoLabelStyle,
            rightBottomContainerStyle,
            userInfoStyle,
            bellStyle,

            mainWrapperV2Style,
            leftBtnContainerStyle,
            leftFixBtnContainerStyle,
            backBtnContainerStyle,
            midContextContainerStyle,
            cardLayoutContainerStyle,
            layoutLabelContainerStyle,
            layoutLabelStyle,
            layoutOptionContainerStyle,
            layoutOptionWrapperStyle,
            menuDownStyle,
            layoutSubLabelStyle,
            rightBtnContainerStyle,
            rightFixBtnContainerStyle,
            btnStyle,

            pageElementContainerStyle,
            activePageElemContainerStyle,
            leftElemContainerStyle,
            pageElemTitleContainerStyle,
            pageElemTitleStyle,
            pageElemSubtitleContainerStyle,
            pageElemSubtitleStyle,
            rightElemContainerStyle,
            flowMenuDownStyle,
            addPageBtnContainerStyle,
            addPageIconStyle,
        } = styles;

        let title, placeholder;
        if (experience) {
            if (experience.index == 0) {
                title = experience.experienceTitle;
                placeholder = 'untitle experience';
            } else if (experience.index == 1) {
                title = experience.cardTitle;
                placeholder = 'untitle card';
            } else if (experience.index == 2) {
                title = experience.newPage.title;
                placeholder = 'untitle page';
            }
        }

        return (

            isRoute ?

                <AppBar
                    position="static"
                    style={mainContainerStyle}>

                    <div style={mainWrapperStyle}>
                        <div style={leftContainerStyle}>
                            <div style={tableContainerStyle}>
                                <div style={Object.assign({}, tableWrapperStyle, txtCenterStyle)}>
                                    <img
                                        style={imgStyle}
                                        src={require('../../../../assets/images/logo.png')}
                                    />
                                </div>
                            </div>
                        </div>

                        <div style={midContainerStyle}>
                            <div style={midTopContainerStyle}>
                                <div style={tableContainerStyle}>
                                    <div style={Object.assign({}, tableWrapperStyle, txtCenterStyle)}>
                                        <div style={smallNavContainerStyle}>
                                            <Link
                                                style={Object.assign({}, smallNavStyle, firstNavStyle)}
                                                to="/features">
                                                NEW FEATURES<span style={notifiNavStyle}></span>
                                            </Link>
                                            <Link style={smallNavStyle} to="/help">HELP & SUPPORT</Link>
                                            <Link style={smallNavStyle} to="/community">COMMUNITY</Link>
                                            <Link style={smallNavStyle} to="/news">NEWS</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={classes.root}
                                style={Object.assign({}, midBottomContainerStyle)}>
                                <Tabs
                                    className="dx-tabs"
                                    value={index}
                                    onChange={
                                        (event, value) => this.handleChange(value)
                                    }
                                    textColor="secondary"
                                    indicatorColor="secondary"
                                    centered
                                >
                                    {
                                        navArr.map((nav, idx) => (
                                            <Tab
                                                className="dx-tab"
                                                key={idx}
                                                label={nav.title}
                                                style={tabLabelStyle}
                                            />
                                        ))
                                    }
                                </Tabs>
                            </div>
                        </div>

                        <div style={rightContainerStyle}>
                            <div style={rightTopContainerStyle}>
                                <div style={tableContainerStyle}>
                                    <div style={Object.assign({}, tableWrapperStyle, txtCenterStyle)}>
                                        <Link style={infoLabelStyle} to="/news">UPGRADE NOW</Link>
                                    </div>
                                </div>
                            </div>
                            <div style={rightBottomContainerStyle}>
                                <div style={tableContainerStyle}>
                                    <div style={Object.assign({}, tableWrapperStyle, txtCenterStyle)}>
                                        <DropdownMenu
                                            isOpen={this.state.isMenuOpen}
                                            close={this.close}
                                            toggle={
                                                <Button style={{ position: 'relative' }} onClick={this.toggle}>
                                                    <AddAlert /><span style={bellStyle} />
                                                    <span style={userInfoStyle}>Roy</span><ExpandMore />
                                                </Button>
                                            }
                                            align='right'
                                        >
                                            <div><Button>Default</Button></div>
                                            <div>
                                                <Button onClick={() => this.props.handleLogoutClick()}>
                                                    logout
                                                </Button>
                                            </div>
                                        </DropdownMenu>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AppBar>

                :

                <AppBar
                    position="static"
                    style={mainContainerStyle}>

                    <div style={mainWrapperV2Style}>

                        <div style={navType == 'EXPERIENCE' ? leftBtnContainerStyle : leftFixBtnContainerStyle}>
                            <div style={fixTableContainerStyle}>
                                <div style={Object.assign({}, tableWrapperStyle, txtCenterStyle)}>
                                    <div style={backBtnContainerStyle}>
                                        <Button
                                            variant="back"
                                            onClick={() => this.props.handleGoback()}
                                        >
                                            <NavigateBefore />
                                            Back
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {
                            navType == 'EXPERIENCE' ? 
                                <div style={midContextContainerStyle}>
                                {
                                    experience.index == 1 ?
                                        (
                                            <div style={cardLayoutContainerStyle}>
                                                <div style={layoutLabelContainerStyle}>
                                                    <p style={layoutLabelStyle}>Card Layout</p>
                                                </div>
                                                <div
                                                    style={layoutOptionContainerStyle}
                                                    onClick={() => this.props.handleCardTemplateMenu()}>
                                                    <div style={layoutOptionWrapperStyle}>
                                                        {
                                                            experience.cardTemplate ?
                                                                <div>
                                                                    <span style={layoutSubLabelStyle}>{experience.cardTemplate.title}</span>
                                                                    <KeyboardArrowDown
                                                                        className={experience.isCardTemplateMenuOpen ? "dx_arrow_up_down active_up" : "dx_arrow_up_down"}
                                                                        style={menuDownStyle} />
                                                                </div>
                                                                :
                                                                <span style={layoutSubLabelStyle}>choose a card below</span>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                        :
                                        null
                                }
                                {
                                    experience.index == 2 ?
                                        (
                                            <div style={pageElementContainerStyle}>
                                                <div className="dx_flow_tab"
                                                    style={Object.assign({}, leftElemContainerStyle, experience.activePageTemplateOptionIndex == 0 ? activePageElemContainerStyle : {})}
                                                >
                                                    <div style={tableContainerStyle}>
                                                        <div style={tableWrapperStyle}>
                                                            <div style={pageElemTitleContainerStyle}
                                                                onClick={() => this.props.handleSelectPageElemOption(0)}>
                                                                <p style={pageElemTitleStyle}>Page Elements</p>
                                                            </div>
                                                            <div style={pageElemSubtitleContainerStyle}>
                                                                <p style={pageElemSubtitleStyle}>Click or Drag & Drop elements to the screen</p>
                                                                <KeyboardArrowDown
                                                                    onClick={() => this.props.handlePageTemplateMenu()}
                                                                    className={experience.isPageTemplateMenuOpen ? "dx_arrow_up_down active_up" : "dx_arrow_up_down"}
                                                                    style={flowMenuDownStyle} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="dx_flow_tab"
                                                    style={Object.assign({}, rightElemContainerStyle, experience.activePageTemplateOptionIndex == 1 ? activePageElemContainerStyle : {})}
                                                >
                                                    <div style={tableContainerStyle}>
                                                        <div style={tableWrapperStyle}>
                                                            <div style={pageElemTitleContainerStyle}
                                                                onClick={() => this.props.handleSelectPageElemOption(1)}>
                                                                <p style={pageElemTitleStyle}>Reference documents</p>
                                                            </div>
                                                            <div style={pageElemSubtitleContainerStyle}>
                                                                <p style={pageElemSubtitleStyle}>Drag & Drop existing documents for reference</p>
                                                                <KeyboardArrowDown
                                                                    onClick={() => this.props.handlePageTemplateMenu()}
                                                                    className={experience.isPageTemplateMenuOpen ? "dx_arrow_up_down active_up" : "dx_arrow_up_down"}
                                                                    style={flowMenuDownStyle} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                        :
                                        null
                                }
                                {
                                    experience.index == 2 ?
                                        (
                                            <div style={addPageBtnContainerStyle}>
                                                <div style={tableContainerStyle}>
                                                    <div style={Object.assign({}, tableWrapperStyle, txtCenterStyle)}>
                                                        <Button
                                                            onClick={() => this.props.handleAddNewPage()}
                                                            variant="add new page"
                                                            style={btnStyle}
                                                        ><Add style={addPageIconStyle}/>ADD PAGE</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                        :
                                        null
                                }
                                <div style={Object.assign({}, experience.index == 2 ? (halfTableContainerStyle, { float: 'right', height: sizes.headerHeight }) : tableContainerStyle)}>
                                    <div style={Object.assign({}, tableWrapperStyle, txtCenterStyle, experience.index == 2 ? { height: sizes.headerHeight, width: 420 } : null)}>
                                        <DxInput
                                            placeholder={placeholder}
                                            handleValChange={(e) => this.handleInputChange(e)}
                                            isDark={true}
                                            width="240px"
                                            disabled={false}
                                            value={title}
                                        />
                                    </div>
                                </div>
                            </div>
                            :
                            null
                        }

                        <div style={navType == 'EXPERIENCE' ? rightBtnContainerStyle : rightFixBtnContainerStyle}>
                            <div style={fixTableContainerStyle}>
                                <div style={Object.assign({}, tableWrapperStyle, txtCenterStyle)}>
                                    <Button
                                        variant="save experience"
                                        style={btnStyle}
                                        onClick={() => this.props.handleSaveBtnClick()}
                                    >Save</Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </AppBar>
        )
    }
}

const styles = {

    mainContainerStyle: {
        background: colors.whiteColor,
        color: colors.blackColor,
        minWidth: sizes.dxWidth,
    },
    mainWrapperStyle: {
        height: sizes.headerHeight,
        width: '100%',
        maxWidth: sizes.dxWidth,
        display: 'flex',
        flexDirection: 'row',
        margin: '0 auto'
    },
    fixTableContainerStyle: {
        position: 'relative',
        display: 'table',
        height: '100%',
    },
    halfTableContainerStyle: {
        position: 'relative',
        display: 'table',
        margin: '0 auto'
    },
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
    txtCenterStyle: {
        textAlign: 'center'
    },
    leftContainerStyle: {
        flex: 1,
        paddingLeft: 12
    },
    imgStyle: {
        display: 'block',
        width: 42,
        height: 42,
        margin: '0 auto'
    },
    midContainerStyle: {
        flex: 5,
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 24,
        paddingRight: 24
    },
    midTopContainerStyle: {
        flex: 2,
    },
    smallNavContainerStyle: {
        display: 'flex'
    },
    smallNavStyle: {
        position: 'relative',
        color: colors.lightGreyColor,
        fontSize: fonts.h5,
        paddingLeft: 18,
        paddingRight: 18,
        textDecoration: 'none',
    },
    firstNavStyle: {
        paddingLeft: 12
    },
    notifiNavStyle: {
        position: 'absolute',
        top: 4,
        right: 9,
        zIndex: 99,
        width: 6,
        height: 6,
        borderRadius: '50%',
        backgroundColor: colors.greenColor
    },
    midBottomContainerStyle: {
        flex: 1,
    },
    tabLabelStyle: {
        color: colors.blackColor,
        fontSize: fonts.h2,
    },
    rightContainerStyle: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        paddingRight: 12
    },
    rightTopContainerStyle: {
        flex: 1,
    },
    infoLabelStyle: {
        color: colors.greenColor,
        fontSize: fonts.h5,
        textDecoration: 'none'
    },
    rightBottomContainerStyle: {
        flex: 2,
    },
    userInfoStyle: {
        paddingLeft: 12,
    },
    bellStyle: {
        position: 'absolute',
        top: 6,
        left: 30,
        zIndex: 99,
        width: 9,
        height: 9,
        borderRadius: '50%',
        backgroundColor: colors.blueColor
    },


    // version 2
    mainWrapperV2Style: {
        height: sizes.headerHeight,
        width: '100%',
        maxWidth: sizes.dxWidth,
        display: 'flex',
        margin: '0 auto',
        flexDirection: 'row',
    },
    leftBtnContainerStyle: {
        flex: '100px 0 0',
    },
    leftFixBtnContainerStyle: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingLeft: 24,
    },
    backBtnContainerStyle: {

    },
    midContextContainerStyle: {
        flex: 1,
        position: 'relative',
    },
    cardLayoutContainerStyle: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 276,
        height: '100%',
        backgroundColor: colors.lightBlueColor,
        paddingLeft: 12,
        paddingRight: 12,
        zIndex: 99
    },
    layoutLabelContainerStyle: {
        marginTop: 12,
        marginBottom: 12
    },
    layoutLabelStyle: {
        fontSize: fonts.h4,
        margin: 0
    },
    layoutOptionContainerStyle: {
        position: 'relative',
    },
    layoutOptionWrapperStyle: {
        cursor: 'pointer'
    },
    menuDownStyle: {
        float: 'right',
        fontSize: 24
    },
    layoutSubLabelStyle: {
        fontSize: fonts.h4,
        fontWeight: 'bold'
    },
    rightBtnContainerStyle: {
        flex: '180px 0 0',
    },
    rightFixBtnContainerStyle: {
        paddingRight: 24,
        justifyContent: 'flex-end'
    },
    btnStyle: {
        backgroundColor: colors.blueColor,
        color: colors.whiteColor,
    },
    pageElementContainerStyle: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 300,
        height: '100%',
        zIndex: 99,
        display: 'flex',
        flexDirection: 'row'
    },
    activePageElemContainerStyle: {
        backgroundColor: colors.lightBlueColor
    },
    leftElemContainerStyle: {
        flex: 1,
        border: '1px solid',
        borderTop: 'none',
        borderColor: colors.borderColor,
        position: 'relative',
    },
    pageElemTitleContainerStyle: {
        flex: 1,
        paddingTop: 9,
        paddingBottom: 9,
        paddingLeft: 9,
        paddingRight: 12,
        cursor: 'pointer',
    },
    pageElemTitleStyle: {
        margin: 0,
        fontSize: fonts.h4,
        fontWeight: 'bold'
    },
    pageElemSubtitleContainerStyle: {
        flex: 1,
        paddingLeft: 9,
        paddingRight: 12,
    },
    pageElemSubtitleStyle: {
        margin: 0,
        fontSize: fonts.h5,
        color: colors.lightGreyColor
    },
    rightElemContainerStyle: {
        flex: 1,
        border: '1px solid',
        borderTop: 'none',
        borderLeft: 'none',
        borderColor: colors.borderColor,
        position: 'relative',
    },
    flowMenuDownStyle: {
        fontSize: 18,
        position: 'absolute',
        bottom: 9,
        right: 0,
        cursor: 'pointer',
    },
    addPageBtnContainerStyle: {
        position: 'absolute',
        left: 300,
        top: 0,
        width: 180,
        height: '100%',
        zIndex: 99,
    },
    addPageIconStyle: {
        fontSize: 17
    }
}

export default withStyles(themeStyles)(NavBar);
