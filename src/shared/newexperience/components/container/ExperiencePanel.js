import React, { Component } from 'react';

// styles
import '../../../../../assets/css/dd-menu/dd_menu.css';

// Libraries
import Button from '@material-ui/core/Button';
import DropdownMenu from 'react-dd-menu';

// redux
import { connect } from 'react-redux';
import {
    dxExperienceIndexUpdate as dxExperienceIndexUpdateAction,
    dxExperienceTypeUpdate as dxExperienceTypeUpdateAction,
    dxExperiencePagePagesRemove as dxExperiencePagePagesRemoveAction,
} from '../../actions';

// constants
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

// components
import DxInput from '../../../components/dxInput/DxInput';
import DxCard from '../presentation/DxCard';
import DxPage from '../presentation/DxPage';

class ExperiencePanel extends Component {

    state = {
        isMenuOpen: false,
    }

    handleToggle = () => {
        this.setState({
            isMenuOpen: !this.state.isMenuOpen
        });
    }

    handleClose = () => {
        this.setState({ isMenuOpen: false });
    }

    handleChangeProgressIndex = (index) => {
        this.props.dxExperienceIndexUpdateAction(index);
    };

    handleClickOption = (val) => {
        this.props.dxExperienceTypeUpdateAction(val);
    }

    handleRemovePagePages = () => {
        this.props.dxExperiencePagePagesRemoveAction();
    }

    handleFetchHtml = () => {
        console.log('hit here');
    }

    render() {

        const {
            mainContainerStyle,
            optionContainerStyle,
            leftContainerStyle,
            imgStyle,
            labelStyle,
            spanLabelStyle,
            tableContainerStyle,
            tableWrapperStyle,
            rightContainerStyle,
            editContainerStyle,
            btnStyle,
            outlineBtnStyle,
            optionBtnStyle,
            demoCardContainerStyle,
            demoPagesContainerStyle,
        } = styles;

        const {
            experience
        } = this.props;

        return (
            <div style={mainContainerStyle}>
                <a onClick={() => console.log(JSON.stringify(experience))}>click me</a>
                <br/><br/>
                <a onClick={() => this.handleFetchHtml()}>fetch html</a>
                <div style={optionContainerStyle}>
                    <div style={leftContainerStyle}>
                        <p style={labelStyle}>Type</p>
                    </div>
                    <div style={rightContainerStyle}>
                        <p>Select what kind of experience you would like your end user to experience?</p>
                        <DropdownMenu
                            isOpen={this.state.isMenuOpen}
                            close={() => this.handleClose()}
                            toggle={
                                <div>
                                    <DxInput
                                        placeholder="type"
                                        width="120px"
                                        disabled={true}
                                        value={experience.type == 0 ? 'card only' : 'card + page(s)'}
                                    />
                                    <Button
                                        style={outlineBtnStyle}
                                        onClick={() => this.handleToggle()}>
                                        EDIT
                                    </Button>
                                </div>
                            }
                            align='left'
                        >
                            <div onClick={() => this.handleClickOption(0)}>
                                <Button
                                    style={optionBtnStyle}
                                    className="dx-lower-case dx-cat-btn"
                                >
                                    Card only
                                </Button>
                            </div>

                            <div onClick={() => this.handleClickOption(1)}>
                                <Button
                                    style={optionBtnStyle}
                                    className="dx-lower-case dx-cat-btn"
                                >Card + page(s)</Button>
                            </div>
                        </DropdownMenu>
                    </div>
                </div>
                <div style={optionContainerStyle}>
                    <div style={leftContainerStyle}>
                        <img
                            style={imgStyle}
                            src={require('../../../../../assets/images/card_option.png')}
                        />
                        <div style={tableContainerStyle}>
                            <div style={tableWrapperStyle}>
                                <p style={Object.assign({}, labelStyle, spanLabelStyle)}>Card</p>
                            </div>
                        </div>
                    </div>
                    <div style={rightContainerStyle}>
                        <p>Cards are the entry point to your end user's experience</p>
                    </div>
                </div>
                <div style={editContainerStyle}>
                    {
                        !experience.isCardTemplateSaved ?
                            <a style={btnStyle}
                                onClick={() => this.props.handleCreateCard()}
                                variant="Create card"
                            >Create a card</a>
                            :
                            <div style={demoCardContainerStyle}>
                                <DxCard
                                    isWithTitle={false}
                                    isWithBottomBar={true}
                                    isCenterCard={false}
                                    isEditable={false}
                                    isClickable={false}
                                    isVideoInsertClickable={false}
                                    cardTitle={this.props.experience.cardTitle}
                                    template={this.props.experience.card}
                                    handleEditCardTemplateClick={() => this.props.handleEditCardTemplateClick()}
                                    handleConfirmDeleteCard={() => this.props.handleRemoveCardTemplateClick()}
                                />
                            </div>
                    }
                </div>
                {
                    experience.type == 1 ?
                        (
                            <div>
                                <div style={optionContainerStyle}>
                                    <div style={leftContainerStyle}>
                                        <img
                                            style={imgStyle}
                                            src={require('../../../../../assets/images/page_option.png')}
                                        />
                                        <div style={tableContainerStyle}>
                                            <div style={tableWrapperStyle}>
                                                <p style={Object.assign({}, labelStyle, spanLabelStyle)}>Page(s)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={rightContainerStyle}>
                                        <p>Page(s) are the follow-up screens after the end user clicked the above card.<br />Multiple page(s) are linked via sections.</p>
                                    </div>
                                </div>
                                {
                                    !experience.isPagesSaved ?
                                        <div style={editContainerStyle}>
                                            <a style={btnStyle}
                                                onClick={() => this.props.handleCreatePages()}
                                                variant="Create card"
                                            >Create page(s)</a>
                                        </div>
                                        :
                                        <div style={demoPagesContainerStyle}>
                                            <DxPage 
                                                pages={this.props.experience.pages}
                                                handleEditPagePagesClick={() => this.handleChangeProgressIndex(2)}
                                                handleRemovePagePages={() => this.handleRemovePagePages()}
                                            />
                                        </div>
                                }
                            </div>
                        )
                        :
                        null
                }
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        width: 600,
        margin: '0 auto',
    },
    optionContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 36,
    },
    leftContainerStyle: {
        flex: 1,
        color: colors.blackColor,
        fontSize: fonts.h3,
        display: 'flex',
        flexDirection: 'row'
    },
    imgStyle: {
        display: 'block'
    },
    labelStyle: {
        textAlign: 'left',
    },
    spanLabelStyle: {
        paddingLeft: 12
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
        textAlign: 'center'
    },
    rightContainerStyle: {
        flex: 4,
        color: colors.labelColor,
        fontSize: fonts.h4
    },
    editContainerStyle: {
        marginTop: 12,
        marginLeft: 120
    },
    btnStyle: {
        cursor: 'pointer',
        display: 'block',
        backgroundColor: colors.blueColor,
        color: colors.whiteColor,
        borderRadius: '4px',
        padding: '10px 18px',
        width: 120,
        textAlign: 'center'
    },
    outlineBtnStyle: {
        color: colors.blueColor,
    },
    optionBtnStyle: {
        width: 144
    },
    demoCardContainerStyle: {
        height: 120,
        width: 300,
    },
    demoPagesContainerStyle: {
        height: 420,
        width: 276,
        marginTop: 12,
        marginLeft: 120,
    },
}

const stateToProps = (state) => {
    return {
        experience: state.newexperience.experience
    }
}

const dispatchToProps = {
    dxExperienceIndexUpdateAction,
    dxExperienceTypeUpdateAction,
    dxExperiencePagePagesRemoveAction,
}

export default connect(stateToProps, dispatchToProps)(ExperiencePanel);