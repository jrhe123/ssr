import React, { Component } from 'react';

// data
import ExperiencePageData from '../../../../../data/ExperiencePageData';

// components
import SearchBar from '../../../components/searchBar/SearchBar';
import PageTemplate from '../presentation/PageTemplate';
import PageTemplateTitle from '../presentation/PageTemplateTitle';
import PhoneTarget from '../presentation/PhoneTarget';
import PhoneElement from '../presentation/PhoneElement';

// Libraries
import Button from '@material-ui/core/Button';
import DropdownMenu from 'react-dd-menu';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

// redux
import { connect } from 'react-redux';
import {
    dxExperiencePageTemplateFetch as dxExperiencePageTemplateFetchAction
} from '../../actions';

// constants
import sizes from '../../../styles/sizes';
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

const update = require('immutability-helper');

class ExperiencePages extends Component {

    state = {
        activeTab: 0,
        cards: [
            {
                id: 1,
                text: 'Write a cool JS library',
            },
            {
                id: 2,
                text: 'Make it generic enough',
            },
            {
                id: 3,
                text: 'Write README',
            },
            {
                id: 4,
                text: 'Create some examples',
            },
            {
                id: 5,
                text:
                    'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
            },
            {
                id: 6,
                text: '???',
            },
            {
                id: 7,
                text: 'PROFIT',
            },
        ],
    }

    componentDidMount() {
        this.props.dxExperiencePageTemplateFetchAction(ExperiencePageData.PageTemplates);
    }

    handleClickCate = (activeTab) => {
        this.setState({
            activeTab
        })
    }

    deleteItem = () => {
        this.setState(prevState => {
            let cards = prevState.cards;
            cards.push({ id: cards.length + 1, text: `Card ${cards.length + 1}` });
            return { cards };
        });
    }

    moveCard = (dragIndex, hoverIndex) => {
        const { cards } = this.state
        const dragCard = cards[dragIndex]

        this.setState(
            update(this.state, {
                cards: {
                    $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
                },
            }),
        )
    }

    render() {

        const {
            activeTab,
        } = this.state;

        const {
            mainContainerStyle,
            tableContainerStyle,
            tableWrapperStyle,
            hiddenLeftContainerStyle,
            leftContainerStyle,
            leftWrapperStyle,
            cateContainerStyle,
            optionBtnContainerStyle,
            btnStyle,
            itemContainerStyle,
            searchBarContainerStyle,
            templateContainerStyle,

            rightContainerStyle,
            toolbarContainerStyle,
            editPhoneContainerStyle,
            phoneContainerStyle,
            pageNumContainerStyle,
            pageNumStyle,
            controlContainerStyle,
            leftControlContainerStyle,
            leftBtnContainerStyle,
            rightControlContainerStyle,
            rightBtnContainerStyle,
            controlIconStyle,
        } = styles;

        const activeOptionBtnStyle = { backgroundColor: colors.lightBlueColor };

        return (
            <div style={mainContainerStyle}>
                <div
                    className={this.props.experience.isPageTemplateMenuOpen ? "dx_scale_container active_expand" : "dx_scale_container"}
                    style={this.props.experience.isPageTemplateMenuOpen ? leftContainerStyle : hiddenLeftContainerStyle}
                >
                    <DropdownMenu
                        isOpen={this.props.experience.isPageTemplateMenuOpen}
                        close={() => { }}
                        align="center"
                        className="dx-layout-menu"
                        closeOnInsideClick={false}
                    >
                        <div style={leftWrapperStyle}>

                            <div style={cateContainerStyle}>
                                <div>
                                    <Button
                                        className="dx-cat-btn"
                                        style={Object.assign({}, btnStyle, activeTab == 0 ? activeOptionBtnStyle : {})}
                                        variant="Popular"
                                        onClick={() => this.handleClickCate(0)}
                                    >
                                        Popular
                                    </Button>
                                </div>
                                <div style={optionBtnContainerStyle}>
                                    <Button
                                        className="dx-cat-btn"
                                        style={Object.assign({}, btnStyle, activeTab == 1 ? activeOptionBtnStyle : {})}
                                        variant="New"
                                        onClick={() => this.handleClickCate(1)}
                                    >
                                        New
                                    </Button>
                                </div>
                                <div style={optionBtnContainerStyle}>
                                    <Button
                                        className="dx-cat-btn"
                                        style={Object.assign({}, btnStyle, activeTab == 2 ? activeOptionBtnStyle : {})}
                                        variant="Test"
                                        onClick={() => this.handleClickCate(2)}
                                    >
                                        Test
                                    </Button>
                                </div>
                                <div style={optionBtnContainerStyle}>
                                    <Button
                                        className="dx-cat-btn"
                                        style={Object.assign({}, btnStyle, activeTab == 3 ? activeOptionBtnStyle : {})}
                                        variant="Examples"
                                        onClick={() => this.handleClickCate(3)}
                                    >
                                        Examples
                                    </Button>
                                </div>
                            </div>
                            <div style={itemContainerStyle}>
                                <div style={searchBarContainerStyle}>
                                    <SearchBar
                                        isShort={false}
                                        placeholder="search page elements"
                                    />
                                </div>
                                <div style={templateContainerStyle}>
                                    {
                                        this.props.pageTemplates.map((template, index) => (
                                            <div>
                                                <PageTemplateTitle
                                                    title={template.Title}
                                                />
                                                <PageTemplate
                                                    key={template.PageTemplateGUID}
                                                    template={template}
                                                    handleDrop={() => this.deleteItem()}
                                                />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </DropdownMenu>
                </div>

                <div className={this.props.experience.isPageTemplateMenuOpen ? "dx_scale_container" : "dx_scale_container active_expand"}
                    style={rightContainerStyle}>
                    
                    <div style={tableContainerStyle}>
                        <div style={tableWrapperStyle}>

                            <div style={toolbarContainerStyle}>tool bar</div>
                            <div style={editPhoneContainerStyle}>

                                <div style={pageNumContainerStyle}>
                                    <div style={tableContainerStyle}>
                                        <div style={tableWrapperStyle}>
                                            <p style={pageNumStyle}>Page 1</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={phoneContainerStyle}>
                                    {this.state.cards.map((card, i) => (
                                        <PhoneElement
                                            key={card.id}
                                            index={i}
                                            id={card.id}
                                            text={card.text}
                                            moveCard={this.moveCard}
                                        />
                                    ))}
                                    <PhoneTarget />
                                </div>
                                <div style={pageNumContainerStyle}>
                                    <div style={tableContainerStyle}>
                                        <div style={tableWrapperStyle}>
                                            <p style={pageNumStyle}>Page 1</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={controlContainerStyle}>
                                    <div style={leftControlContainerStyle}>
                                        <div style={tableContainerStyle}>
                                            <div style={tableWrapperStyle}>
                                                <a style={leftBtnContainerStyle}>
                                                    <img
                                                        style={controlIconStyle}
                                                        src={require('../../../../../assets/images/build_on_icon.png')} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={rightControlContainerStyle}>
                                        <div style={tableContainerStyle}>
                                            <div style={tableWrapperStyle}>
                                                <a style={rightBtnContainerStyle}>
                                                    <img
                                                        style={controlIconStyle}
                                                        src={require('../../../../../assets/images/eye_off_icon.png')} />
                                                </a>
                                            </div>
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

    mainContainerStyle: {
        width: sizes.dxWidth,
        height: `calc(100vh - ${sizes.headerHeight})`,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
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
    hiddenLeftContainerStyle: {
        width: 0
    },
    leftContainerStyle: {
        flex: 1,
    },
    leftWrapperStyle: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row'
    },
    cateContainerStyle: {
        flex: 1,
    },
    optionBtnContainerStyle: {
        borderTop: '1px solid',
        borderColor: colors.borderColor
    },
    btnStyle: {
        width: 100,
        height: 48,
        fontSize: fonts.h3,
        borderRadius: 0,
        textTransform: 'capitalize'
    },
    itemContainerStyle: {
        flex: 3,
    },
    searchBarContainerStyle: {
        paddingTop: 12,
        paddingLeft: 12,
        height: 42
    },
    templateContainerStyle: {
        overflowY: 'auto',
        height: `calc(100vh - ${sizes.headerHeight} - 54px)`,
    },
    rightContainerStyle: {
        flex: 2,
    },
    toolbarContainerStyle: {
        height: 60,
        width: 360,
        margin: '0 auto',
        border: '1px solid red'
    },
    editPhoneContainerStyle: {
        width: 400,
        margin: '0 auto',
        border: '1px solid red'
    },
    phoneContainerStyle: {
        width: 320,
        height: 500,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: 'transparent',
        margin: '0 auto',
        overflowY: 'auto',
    },
    pageNumContainerStyle: {
        height: 24
    },
    pageNumStyle: {
        textAlign: 'center',
        fontSize: fonts.h4,
        color: colors.lightGreyColor,
        margin: 0
    },
    controlContainerStyle: {
        height: 48,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row'
    },
    leftControlContainerStyle: {
        flex: 1,
    },
    leftBtnContainerStyle: {
        height: 48,
        width: 48,
        margin: '0 auto',
        borderRadius: 6,
        display: 'block',
        cursor: 'pointer'
    },
    rightControlContainerStyle: {
        flex: 1,
    },
    rightBtnContainerStyle: {
        height: 48,
        width: 48,
        margin: '0 auto',
        borderRadius: 6,
        display: 'block',
        cursor: 'pointer'
    },
    controlIconStyle: {
        display: 'block',
        width: 48,
        height: 48,
        borderRadius: 6,
    },
}

const stateToProps = (state) => {
    return {
        pageTemplates: state.newexperience.pageTemplates,
        experience: state.newexperience.experience,
    }
}

const dispatchToProps = {
    dxExperiencePageTemplateFetchAction,
}

export default connect(stateToProps, dispatchToProps)(DragDropContext(HTML5Backend)(ExperiencePages));