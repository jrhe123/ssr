import React, { Component } from 'react';

// data
import ExperiencePageData from '../../../../../data/ExperiencePageData';

// components
import SearchBar from '../../../components/searchBar/SearchBar';
import PageTemplate from '../presentation/PageTemplate';
import Board from './Board';

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

    render() {

        const {
            activeTab,
        } = this.state;

        const {
            mainContainerStyle,
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
                                            <PageTemplate 
                                                template={template}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </DropdownMenu>
                </div>

                <div
                    className={this.props.experience.isPageTemplateMenuOpen ? "dx_scale_container" : "dx_scale_container active_expand"}
                    style={rightContainerStyle}>

                    <Board />
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