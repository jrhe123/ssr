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
import DxModal from '../../../components/dxModal/DxModal';

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
    dxExperiencePageDeleteElem as dxExperiencePageDeleteElemAction,
    dxExperiencePageCopyElem as dxExperiencePageCopyElemAction,
    dxExperiencePageShuffleElem as dxExperiencePageShuffleElemAction,
    dxExperiencePageSelectElem as dxExperiencePageSelectElemAction,
    dxExperiencePageUpdateElem as dxExperiencePageUpdateElemAction,
    dxExperiencePageSectionConnectPage as dxExperiencePageSectionConnectPageAction,
    dxExperiencePageDeletePage as dxExperiencePageDeletePageAction,
} from '../../actions';
import {
    dxAlert as dxAlertAction,
} from '../../../actions';

// constants
import sizes from '../../../styles/sizes';
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

class ExperiencePages extends Component {

    state = {
        activeTab: 0,
        modalType: null,
        isModalOpen: false,
        modalTitle: '',
        targetSectionGUID: null,
    }

    componentDidMount() {
        this.props.dxExperiencePageTemplateFetchAction(ExperiencePageData.PageTemplates);
    }

    handleErrorMsg = (msg) => {
        this.props.dxAlertAction(true, true, msg);
    }

    handleClickCate = (activeTab) => {
        this.setState({
            activeTab
        })
    }

    renderPhoneElement = () => {
        const {
            NewPage,
            Pages,
        } = this.props.Experience;
        let phone = Pages.map((page, index) => (
            this.renderPhoneElementSection(page.Sections, NewPage.PageGUID == page.PageGUID ? true : false, page.IsDeleted)
        ))
        return phone;
    }

    renderPhoneElementSection = (sections, activePage, deletedPage) => {

        const {
            Experience,
        } = this.props;

        let section;
        section = sections.map((section, i) => (
            <PhoneElement
                deletedPage={deletedPage}
                activePage={activePage}
                isDeleted={section.IsDeleted}
                sectionGUID={section.SectionGUID}
                type={section.Type}
                isActive={section.IsActive}
                htmlContent={section.HtmlContent}
                btnContent={section.BtnContent}
                dropdownOptionArr={this.availablePageOptionList(Experience.Pages, Experience.NewPage.PageGUID, section.ConnectedPageGUID)}
                pdf={section.Pdf}
                splashContent={section.SplashContent}
                splashImg={section.SplashImg}
                splashColor={section.SplashColor}
                videoUrl={section.VideoUrl}
                img={section.Img}

                key={section.SectionGUID}
                index={i}
                moveCard={this.handleMoveCard}
                handleSectionClick={(sectionGUID) => this.handleSectionClick(sectionGUID)}

                handleUpdateHtmlContent={(html) => this.handleUpdateHtmlContent(section.SectionGUID, html)}
                handleBtnInputChange={(e) => this.handleUpdateBtnContent(section.SectionGUID, e)}
                handleBtnConnectPageChange={(pageGUID) => this.handleBtnConnectPageChange(section.SectionGUID, pageGUID)}
                handleDescInputChange={(e) => this.handleUpdateDescContent(section.SectionGUID, e)}
                handleDeleteElem={(sectionGUID) => this.handleDeleteElem(sectionGUID)}
                handleCloneElem={(sectionGUID) => this.handleCloneElem(sectionGUID)}

                handleVideoError={(msg) => this.handleErrorMsg(msg)}
            />
        ))
        return section
    }

    handleAddElem = (template) => {
        // Add section to new page
        this.props.dxExperiencePageAddElemAction(template.Type);
        // Auto scroll
        let dxPhoneArea = this.refs.dx_phone_area;
        if (template.Type == 'SPLASH') {
            dxPhoneArea.scrollTop = 0;
        } else {
            dxPhoneArea.scrollTop = dxPhoneArea.scrollHeight;
        }
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
                SectionGUID: '',
                Title: 'no connect',
            };
            res.push(cancelOption);
        }

        for (let i = 0; i < pages.length; i++) {
            if (pages[i].PageGUID != currentpageGUID
                && !pages[i].IsRoot
                && !pages[i].IsDeleted
                && !pages[i].IsConnected) {
                res.push(pages[i])
            }
        }
        return res;
    }

    findActiveSectionGUID = () => {
        let sections = this.props.Experience.NewPage.Sections;
        let activePageSectionIndex = this.props.Experience.ActivePageSectionIndex;
        let sectionGUID = sections[activePageSectionIndex].SectionGUID;
        return sectionGUID;
    }

    handlePdfChange = (file) => {
        let sectionGUID = this.findActiveSectionGUID();
        this.props.dxExperiencePageUpdateElemAction(sectionGUID, 'EMBED_PDF', file);
    }

    handleUpdateDescContent = (sectionGUID, e) => {
        let value = e.target.value;
        this.props.dxExperiencePageUpdateElemAction(sectionGUID, 'SPLASH_CONTENT', value);
    }

    handleSplashImgChange = (file) => {
        let sectionGUID = this.findActiveSectionGUID();
        this.props.dxExperiencePageUpdateElemAction(sectionGUID, 'SPLASH_IMG', file);
    }

    handleSplashColorChange = (color) => {
        let sectionGUID = this.findActiveSectionGUID();
        this.props.dxExperiencePageUpdateElemAction(sectionGUID, 'SPLASH_COLOR', color.color);
    }

    handleVideoInputChange = (e) => {
        let value = e.target.value;
        let sectionGUID = this.findActiveSectionGUID();
        this.props.dxExperiencePageUpdateElemAction(sectionGUID, 'VIDEO_URL', value);
    }

    handleVideoInsertClick = () => {
        let sectionGUID = this.findActiveSectionGUID();
        this.props.dxExperiencePageUpdateElemAction(sectionGUID, 'VIDEO_CONFIRM');
    }

    handleImageChange = (file) => {
        let sectionGUID = this.findActiveSectionGUID();
        this.props.dxExperiencePageUpdateElemAction(sectionGUID, 'IMAGE', file);
    }

    handleDeleteElem = (sectionGUID) => {
        this.setState({
            modalType: 'DELETE',
            isModalOpen: true,
            modalTitle: 'Confirm Delete Element',
            targetSectionGUID: sectionGUID
        });
    }

    handleCloneElem = (sectionGUID) => {
        this.setState({
            modalType: 'COPY',
            isModalOpen: true,
            modalTitle: 'Confirm Copy Element',
            targetSectionGUID: sectionGUID
        });
    }

    handleCloseModal = () => {
        this.setState({ isModalOpen: false });
    }

    handleConfirmModal = () => {
        const {
            modalType,
            targetSectionGUID
        } = this.state;

        this.handleCloseModal();
        if (modalType == 'DELETE') {
            this.props.dxExperiencePageDeleteElemAction(targetSectionGUID);
        } else if (modalType == 'COPY') {
            this.props.dxExperiencePageCopyElemAction(targetSectionGUID);
            // Auto scroll
            setTimeout(() => {
                let dxPhoneArea = this.refs.dx_phone_area;
                dxPhoneArea.scrollTop = dxPhoneArea.scrollHeight;
            }, 0.1);
        }
    }

    handleCarouselClick = (open) => {
        if (open) {
            this.props.dxExperiencePageCarouselMenuUpdateAction(!this.props.Experience.IsPageCarouselMenuOpen);
        } else {
            this.props.dxExperiencePageCarouselMenuUpdateAction(false);
        }
    }

    handleClickActiveCarouselPage = (pageGUID) => {
        this.props.dxExperiencePageCarouselActivePageAction(pageGUID);
    }

    handleConfirmDeleteCarouselPage = (pageGUID) => {
        this.props.dxExperiencePageDeletePageAction(pageGUID);
    }

    render() {

        const {
            activeTab,
        } = this.state;

        const {
            Experience
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
                <div
                    className={Experience.IsPageTemplateMenuOpen ? "dx_scale_container active_expand" : "dx_scale_container"}
                    style={Experience.IsPageTemplateMenuOpen ? leftContainerStyle : hiddenLeftContainerStyle}
                >
                    <DropdownMenu
                        isOpen={Experience.IsPageTemplateMenuOpen}
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
                                        this.props.PageTemplates.map((template, index) => (
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

                <div className={Experience.IsPageTemplateMenuOpen ? "dx_scale_container" : "dx_scale_container active_expand"}
                    style={rightContainerStyle}>

                    <div style={tableContainerStyle}
                        onClick={() => this.handleCarouselClick(false)}>
                        <div style={Object.assign({}, txtCenterStyle, tableWrapperStyle)}>

                            <div style={toolbarContainerStyle}>
                                <PhoneToolbar
                                    activePageSectionIndex={Experience.ActivePageSectionIndex}
                                    tools={Experience.Tools}
                                    newPage={Experience.NewPage}
                                    pages={Experience.Pages}

                                    handleErrorMsg={(msg) => this.handleErrorMsg(msg)}
                                    handlePdfChange={(file) => this.handlePdfChange(file)}
                                    handleSplashImgChange={(file) => this.handleSplashImgChange(file)}
                                    handleSplashColorChange={(color) => this.handleSplashColorChange(color)}
                                    handleVideoInputChange={(e) => this.handleVideoInputChange(e)}
                                    handleVideoInsertClick={() => this.handleVideoInsertClick()}
                                    handleImageChange={(file) => this.handleImageChange(file)}
                                />
                            </div>
                            <div style={editPhoneContainerStyle}>

                                <div className={Experience.IsPageCarouselMenuOpen ? 'dx_opacity_visible dx_flow' : 'dx_opacity_hidden dx_flow'}
                                    style={pageNumContainerStyle}>
                                    <div style={tableContainerStyle}>
                                        <div style={Object.assign({}, txtCenterStyle, tableWrapperStyle)}>
                                            <p style={pageNumStyle}>{Experience.NewPage.Title}</p>
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
                                <div className={!Experience.IsPageCarouselMenuOpen ? 'dx_opacity_visible dx_flow' : 'dx_opacity_hidden dx_flow'}
                                    style={pageNumContainerStyle}>
                                    <div style={tableContainerStyle}>
                                        <div style={Object.assign({}, txtCenterStyle, tableWrapperStyle)}>
                                            <p style={pageNumStyle}>{Experience.NewPage.Title}</p>
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

                    <div style={Object.assign({}, carouselContainerStyle, { height: !Experience.IsPageCarouselMenuOpen ? carouselHeight : expandCarouselHeight })}
                        className="dx_float_carousel_menu"
                    >
                        <div style={carouselWrapperStyle}>

                            <div
                                style={carouselLabelContainerStyle}
                                onClick={() => this.handleCarouselClick(true)}
                            >
                                <span style={carouselLabelStyle}>{Experience.NewPage.Title}
                                    <KeyboardArrowDown
                                        className={!Experience.IsPageCarouselMenuOpen ? "dx_arrow_up_down active_up" : "dx_arrow_up_down"}
                                        style={carouselIconStyle}
                                    />
                                </span>
                            </div>
                            {
                                Experience.IsPageCarouselMenuOpen ?
                                    (
                                        <div style={carouselSlideContainerStyle}>
                                            <PageCarousel
                                                experience={Experience}
                                                handleClickActivePage={(pageGUID) => this.handleClickActiveCarouselPage(pageGUID)}
                                                handleConfirmDeleteCarouselPage={(pageGUID) => this.handleConfirmDeleteCarouselPage(pageGUID)}
                                            />
                                        </div>
                                    )
                                    :
                                    null
                            }
                        </div>
                    </div>

                </div>
                <DxModal
                    open={this.state.isModalOpen}
                    title={this.state.modalTitle}
                    description="Do you want to proceed?"
                    cancel={true}
                    confirm={true}
                    isDanger={this.state.modalType == 'DELETE' ? true : false}
                    handleConfirm={() => this.handleConfirmModal()}
                    onCloseModal={() => this.handleCloseModal()}
                />
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
        textAlign: 'left',
        boxSizing: 'border-box',
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
        PageTemplates: state.newexperience.PageTemplates,
        Experience: state.newexperience.Experience,
    }
}

const dispatchToProps = {
    dxExperiencePageTemplateFetchAction,

    dxExperiencePageCarouselMenuUpdateAction,
    dxExperiencePageCarouselActivePageAction,

    dxExperiencePageAddElemAction,
    dxExperiencePageDeleteElemAction,
    dxExperiencePageCopyElemAction,
    dxExperiencePageShuffleElemAction,
    dxExperiencePageSelectElemAction,
    dxExperiencePageUpdateElemAction,
    dxExperiencePageSectionConnectPageAction,
    dxExperiencePageDeletePageAction,

    dxAlertAction,
}

export default connect(stateToProps, dispatchToProps)(DragDropContext(HTML5Backend)(ExperiencePages));