import React, { Component } from 'react';

// data
import ExperiencePageData from '../../../../../data/ExperiencePageData';

// components
import SearchBar from '../../../components/searchBar/SearchBar';
import PageTemplate from '../presentation/PageTemplate';
import PageTemplateTitle from '../presentation/PageTemplateTitle';
import PhoneTarget from '../presentation/PhoneTarget';
import PhoneElement from '../presentation/PhoneElement';
import PhoneToolbar from '../presentation/PhoneToolbar';
import PageCarousel from '../presentation/PageCarousel';

// Libraries
import Button from '@material-ui/core/Button';
import DropdownMenu from 'react-dd-menu';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';

// redux
import { connect } from 'react-redux';
import {
    dxExperiencePageTemplateFetch as dxExperiencePageTemplateFetchAction,

    dxExperiencePageCarouselMenuUpdate as dxExperiencePageCarouselMenuUpdateAction,
    dxExperiencePageCarouselActivePage as dxExperiencePageCarouselActivePageAction,

    dxExperiencePageAddElem as dxExperiencePageAddElemAction,
    dxExperiencePageShuffleElem as dxExperiencePageShuffleElemAction,
    dxExperiencePageSelectElem as dxExperiencePageSelectElemAction,
    dxExperiencePageUpdateElem as dxExperiencePageUpdateElemAction,
    dxExperiencePageSectionConnectPage as dxExperiencePageSectionConnectPageAction,
} from '../../actions';

// constants
import sizes from '../../../styles/sizes';
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

class ExperiencePages extends Component {

    state = {
        activeTab: 0,
    }

    componentDidMount() {
        this.props.dxExperiencePageTemplateFetchAction(ExperiencePageData.PageTemplates);
    }

    handleClickCate = (activeTab) => {
        this.setState({
            activeTab
        })
    }

    renderPhoneElement = () => {
        const {
            newPage,
            pages,
        } = this.props.experience;
        let phone = pages.map((page, index) => (
            this.renderPhoneElementSection(page.sections, newPage.pageGUID == page.pageGUID ? true : false)
        ))
        return phone;
    }

    renderPhoneElementSection = (sections, activePage) => {

        const {
            experience,
        } = this.props;

        let section;
        section = sections.map((section, i) => (
            <PhoneElement
                activePage={activePage}
                sectionGUID={section.sectionGUID}
                type={section.type}
                isActive={section.isActive}
                htmlContent={section.htmlContent}
                btnContent={section.btnContent}
                dropdownOptionArr={this.availablePageOptionList(experience.pages, experience.newPage.pageGUID, section.connectedPageGUID)}

                key={section.sectionGUID}
                index={i}
                moveCard={this.handleMoveCard}
                handleSectionClick={(sectionGUID) => this.handleSectionClick(sectionGUID)}

                handleUpdateHtmlContent={(html) => this.handleUpdateHtmlContent(section.sectionGUID, html)}
                handleBtnInputChange={(e) => this.handleUpdateBtnContent(section.sectionGUID, e)}
                handleBtnConnectPageChange={(pageGUID) => this.handleBtnConnectPageChange(section.sectionGUID, pageGUID)}
            />
        ))
        return section
    }

    handleAddElem = (template) => {
        // Add section to new page
        this.props.dxExperiencePageAddElemAction(template.Type);
        // Auto scroll down
        let dxPhoneArea = this.refs.dx_phone_area;
        dxPhoneArea.scrollTop = dxPhoneArea.scrollHeight;
    }

    handleMoveCard = (dragIndex, hoverIndex) => {
        // shuffle order of section
        this.props.dxExperiencePageShuffleElemAction(dragIndex, hoverIndex);
    }

    handleSectionClick = (sectionGUID) => {
        this.props.dxExperiencePageSelectElemAction(sectionGUID);
    }

    handleUpdateHtmlContent = (sectionGUID, html) => {
        this.props.dxExperiencePageUpdateElemAction(sectionGUID, 'EDITOR', html);
    }

    handleUpdateBtnContent = (sectionGUID, e) => {
        let value = e.target.value;
        this.props.dxExperiencePageUpdateElemAction(sectionGUID, 'BUTTON', value);
    }

    handleBtnConnectPageChange = (sectionGUID, pageGUID) => {
        this.props.dxExperiencePageSectionConnectPageAction(sectionGUID, pageGUID);
    }

    availablePageOptionList = (pages, currentpageGUID, targetPageGUID) => {
        let res = [];

        if (pages.length && targetPageGUID) {
            let cancelOption = {
                sectionGUID: '',
                title: 'no connect',
            };
            res.push(cancelOption);
        }

        for (let i = 0; i < pages.length; i++) {
            if (pages[i].pageGUID != currentpageGUID
                && !pages[i].isRoot
                && !pages[i].isConnected) {
                res.push(pages[i])
            }
        }
        return res;
    }

    handleCarouselClick = (open) => {
        if (open) {
            this.props.dxExperiencePageCarouselMenuUpdateAction(!this.props.experience.isPageCarouselMenuOpen);
        } else {
            this.props.dxExperiencePageCarouselMenuUpdateAction(false);
        }
    }

    handleClickActiveCarouselPage = (pageGUID) => {
        this.props.dxExperiencePageCarouselActivePageAction(pageGUID);
    }

    render() {

        const {
            activeTab,
        } = this.state;

        const {
            experience
        } = this.props;

        const {
            mainContainerStyle,
            txtCenterStyle,
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
            phoneWrapperStyle,
            pageNumContainerStyle,
            pageNumStyle,
            controlContainerStyle,
            leftControlContainerStyle,
            leftBtnContainerStyle,
            rightControlContainerStyle,
            rightBtnContainerStyle,
            controlIconStyle,
            carouselContainerStyle,
            carouselWrapperStyle,
            carouselLabelContainerStyle,
            carouselLabelStyle,
            carouselIconStyle,
            carouselSlideContainerStyle,
        } = styles;

        const activeOptionBtnStyle = { backgroundColor: colors.lightBlueColor };

        return (
            <div style={mainContainerStyle}>
                <a onClick={() => console.log(experience)}>click me</a>
                <div
                    className={experience.isPageTemplateMenuOpen ? "dx_scale_container active_expand" : "dx_scale_container"}
                    style={experience.isPageTemplateMenuOpen ? leftContainerStyle : hiddenLeftContainerStyle}
                >
                    <DropdownMenu
                        isOpen={experience.isPageTemplateMenuOpen}
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
                                                    handleDrop={(template) => this.handleAddElem(template)}
                                                    key={template.PageTemplateGUID}
                                                    template={template}
                                                />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </DropdownMenu>
                </div>

                <div className={experience.isPageTemplateMenuOpen ? "dx_scale_container" : "dx_scale_container active_expand"}
                    style={rightContainerStyle}>

                    <div style={tableContainerStyle}
                        onClick={() => this.handleCarouselClick(false)}>
                        <div style={Object.assign({}, txtCenterStyle, tableWrapperStyle)}>

                            <div style={toolbarContainerStyle}>
                                <PhoneToolbar
                                    newPage={experience.newPage}
                                    pages={experience.pages}
                                />
                            </div>
                            <div style={editPhoneContainerStyle}>

                                <div className={experience.isPageCarouselMenuOpen ? 'dx_opacity_visible dx_flow' : 'dx_opacity_hidden dx_flow'}
                                    style={pageNumContainerStyle}>
                                    <div style={tableContainerStyle}>
                                        <div style={Object.assign({}, txtCenterStyle, tableWrapperStyle)}>
                                            <p style={pageNumStyle}>{experience.newPage.title}</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={phoneContainerStyle}
                                    ref="dx_phone_area"
                                >
                                    <div style={phoneWrapperStyle}>
                                        {this.renderPhoneElement()}
                                        <PhoneTarget />
                                    </div>
                                </div>
                                <div className={!experience.isPageCarouselMenuOpen ? 'dx_opacity_visible dx_flow' : 'dx_opacity_hidden dx_flow'}
                                    style={pageNumContainerStyle}>
                                    <div style={tableContainerStyle}>
                                        <div style={Object.assign({}, txtCenterStyle, tableWrapperStyle)}>
                                            <p style={pageNumStyle}>{experience.newPage.title}</p>
                                        </div>
                                    </div>
                                </div>

                                <div style={controlContainerStyle}>
                                    <div style={leftControlContainerStyle}>
                                        <div style={tableContainerStyle}>
                                            <div style={Object.assign({}, txtCenterStyle, tableWrapperStyle)}>
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
                                            <div style={Object.assign({}, txtCenterStyle, tableWrapperStyle)}>
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

                    <div style={Object.assign({}, carouselContainerStyle, { height: !experience.isPageCarouselMenuOpen ? carouselHeight : expandCarouselHeight })}
                        className="dx_float_carousel_menu"
                    >
                        <div style={carouselWrapperStyle}>

                            <div
                                style={carouselLabelContainerStyle}
                                onClick={() => this.handleCarouselClick(true)}
                            >
                                <span style={carouselLabelStyle}>{experience.newPage.title}
                                    <KeyboardArrowDown
                                        className={!experience.isPageCarouselMenuOpen ? "dx_arrow_up_down active_up" : "dx_arrow_up_down"}
                                        style={carouselIconStyle}
                                    />
                                </span>
                            </div>
                            {
                                experience.isPageCarouselMenuOpen ?
                                    (
                                        <div style={carouselSlideContainerStyle}>
                                            <PageCarousel
                                                pages={experience.pages}
                                                newPage={experience.newPage}
                                                handleClickActivePage={(pageGUID) => this.handleClickActiveCarouselPage(pageGUID)}
                                            />
                                        </div>
                                    )
                                    :
                                    null
                            }
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

const carouselHeight = 48;
const expandCarouselHeight = 240;
const phoneHeight = 470;
const styles = {

    mainContainerStyle: {
        width: sizes.dxWidth,
        height: `calc(100vh - ${sizes.headerHeight})`,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    txtCenterStyle: {
        textAlign: 'center'
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
        paddingBottom: carouselHeight,
        position: 'relative',
    },
    toolbarContainerStyle: {
        height: 48,
        width: 722,
        margin: '0 auto',
        marginBottom: 12
    },
    editPhoneContainerStyle: {
        width: 750,
        margin: '0 auto',
    },
    phoneContainerStyle: {
        width: 750,
        height: phoneHeight,
        backgroundColor: 'transparent',
        margin: '0 auto',
        overflowY: 'auto',
    },
    phoneWrapperStyle: {
        width: 320,
        height: phoneHeight,
        margin: '0 auto',
        backgroundColor: colors.lightBlueColor,
        textAlign: 'left'
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
        width: 400,
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
    carouselContainerStyle: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        backgroundColor: colors.blackColor,
        cursor: 'pointer'
    },
    carouselWrapperStyle: {
        position: 'relative',
        height: '100%',
    },
    carouselLabelContainerStyle: {
        paddingTop: 12,
        paddingBottom: 12
    },
    carouselLabelStyle: {
        color: colors.whiteColor,
        fontSize: fonts.h4,
        position: 'relative',
        paddingRight: 24,
        paddingLeft: 18,
    },
    carouselIconStyle: {
        color: colors.whiteColor,
        fontSize: 24,
        position: 'absolute',
        right: 0,
        top: -3
    },
    carouselSlideContainerStyle: {
        position: 'relative',
        height: 180,
        width: 'calc(100% - 60px)',
        margin: '0 auto',
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

    dxExperiencePageCarouselMenuUpdateAction,
    dxExperiencePageCarouselActivePageAction,

    dxExperiencePageAddElemAction,
    dxExperiencePageShuffleElemAction,
    dxExperiencePageSelectElemAction,
    dxExperiencePageUpdateElemAction,
    dxExperiencePageSectionConnectPageAction,
}

export default connect(stateToProps, dispatchToProps)(DragDropContext(HTML5Backend)(ExperiencePages));