import React, { Component } from 'react';

// data
import ExperienceCardData from '../../../../../data/ExperienceCardData';

// components
import DxCard from '../../../components/dxCard/DxCard';
import SearchBar from '../../../components/searchBar/SearchBar';
import CardTemplate from '../presentation/CardTemplate';
import CardOption from '../presentation/CardOption';

// Libraries
import Button from '@material-ui/core/Button';
import DropdownMenu from 'react-dd-menu';

// redux
import { connect } from 'react-redux';
import {
    dxExperienceCardTemplateFetch as dxExperienceCardTemplateFetchAction,
    dxExperienceCardTemplateSelect as dxExperienceCardTemplateSelectAction,
    dxExperienceCardTemplateUpdateImage as dxExperienceCardTemplateUpdateImageAction,
    dxExperienceCardTemplateUpdateColor as dxExperienceCardTemplateUpdateColorAction,
    dxExperienceCardTemplateUpdateContent as dxExperienceCardTemplateUpdateContentAction,
} from '../../actions';
import {
    dxAlert as dxAlertAction,
} from '../../../actions';

// constants
import sizes from '../../../styles/sizes';
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

class ExperienceCard extends Component {

    state = {
        activeTab: 0,
    }

    componentDidMount() {
        this.props.dxExperienceCardTemplateFetchAction(ExperienceCardData.CardTemplates);
    }

    handleErrorMsg = (msg) => {
        this.props.dxAlertAction(true, true, msg);
    }

    handleClickCate = (activeTab) => {
        this.setState({
            activeTab
        })
    }

    handleSelectCardTemplate = (template) => {
        this.props.dxExperienceCardTemplateSelectAction(template);
    }

    handleImageChange = (imgFile) => {
        this.props.dxExperienceCardTemplateUpdateImageAction(imgFile);
    }

    handleColorChange = (colors, type) => {
        this.props.dxExperienceCardTemplateUpdateColorAction(colors.color, type);
    }

    handleCardTemplateContentChange = (val) => {
        this.props.dxExperienceCardTemplateUpdateContentAction(val);
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
            optionBarContainerStyle,
            optionBarWrapperStyle,
            tableContainerStyle,
            tableWrapperStyle,
            demoCardContainerStyle,
        } = styles;

        const activeOptionBtnStyle = { backgroundColor: colors.lightBlueColor };

        return (
            <div style={mainContainerStyle}>
                <div
                    className={this.props.Experience.IsCardTemplateMenuOpen ? "dx_scale_container active_expand" : "dx_scale_container"}
                    style={this.props.Experience.IsCardTemplateMenuOpen ? leftContainerStyle : hiddenLeftContainerStyle}
                >
                    <DropdownMenu
                        isOpen={this.props.Experience.IsCardTemplateMenuOpen}
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
                                        variant="Image"
                                        onClick={() => this.handleClickCate(1)}
                                    >
                                        Image
                                    </Button>
                                </div>
                                <div style={optionBtnContainerStyle}>
                                    <Button
                                        className="dx-cat-btn"
                                        style={Object.assign({}, btnStyle, activeTab == 2 ? activeOptionBtnStyle : {})}
                                        variant="Text"
                                        onClick={() => this.handleClickCate(2)}
                                    >
                                        Text
                                    </Button>
                                </div>
                                <div style={optionBtnContainerStyle}>
                                    <Button
                                        className="dx-cat-btn"
                                        style={Object.assign({}, btnStyle, activeTab == 3 ? activeOptionBtnStyle : {})}
                                        variant="Video"
                                        onClick={() => this.handleClickCate(3)}
                                    >
                                        Video
                                    </Button>
                                </div>
                                <div style={optionBtnContainerStyle}>
                                    <Button
                                        className="dx-cat-btn"
                                        style={Object.assign({}, btnStyle, activeTab == 4 ? activeOptionBtnStyle : {})}
                                        variant="Stacked"
                                        onClick={() => this.handleClickCate(4)}
                                    >
                                        Stacked
                                    </Button>
                                </div>
                                <div style={optionBtnContainerStyle}>
                                    <Button
                                        className="dx-cat-btn"
                                        style={Object.assign({}, btnStyle, activeTab == 5 ? activeOptionBtnStyle : {})}
                                        variant="Examples"
                                        onClick={() => this.handleClickCate(5)}
                                    >
                                        Examples
                                    </Button>
                                </div>
                            </div>
                            <div style={itemContainerStyle}>
                                <div style={searchBarContainerStyle}>
                                    <SearchBar
                                        isShort={false}
                                        placeholder="search for layout"
                                    />
                                </div>
                                <div style={templateContainerStyle}>
                                    {
                                        this.props.CardTemplates.map((template, index) => (
                                            <CardTemplate
                                                key={index}
                                                isWithTitle={true}
                                                isCenterCard={true}
                                                isEditable={false}
                                                isClickable={true}
                                                isVideoInsertClickable={false}
                                                template={template}
                                                handleSelectCardTemplate={(template) => this.handleSelectCardTemplate(template)}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </DropdownMenu>
                </div>

                <div
                    className={this.props.Experience.IsCardTemplateMenuOpen ? "dx_scale_container" : "dx_scale_container active_expand"}
                    style={rightContainerStyle}>

                    <div style={optionBarContainerStyle}>
                        <div style={optionBarWrapperStyle}>
                            {
                                this.props.Experience.CardTemplate ?
                                    <CardOption
                                        settings={this.props.Experience.CardTemplate.Settings}
                                        imgFile={this.props.Experience.CardTemplate.Settings[0].Default}
                                        handleImageChange={(file) => this.handleImageChange(file)}
                                        handleImageError={(msg) => this.handleErrorMsg(msg)}
                                        handleColorChange={(colors, type) => this.handleColorChange(colors, type)}
                                    />
                                    :
                                    null
                            }
                        </div>
                    </div>
                    <div style={tableContainerStyle}>
                        <div style={tableWrapperStyle}>
                            <div style={demoCardContainerStyle}>
                                {
                                    this.props.Experience.CardTemplate ?
                                        <DxCard
                                            isCenterCard={true}
                                            isEditable={true}
                                            isClickable={false}
                                            isVideoInsertClickable={true}
                                            template={this.props.Experience.CardTemplate}
                                            handleContentChange={(val) => this.handleCardTemplateContentChange(val)}
                                            handleVideoError={(msg) => this.handleErrorMsg(msg)}
                                        />
                                        :
                                        null
                                }
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
        position: 'relative',
    },
    optionBarContainerStyle: {
        position: 'absolute',
        top: 36,
        left: 0,
        zIndex: 99,
        height: 48,
        width: '100%',
    },
    optionBarWrapperStyle: {
        width: 360,
        margin: '0 auto',
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
    demoCardContainerStyle: {
        margin: '0 auto',
        height: 90,
        width: 300,
    },
}

const stateToProps = (state) => {
    return {
        CardTemplates: state.newexperience.CardTemplates,
        Experience: state.newexperience.Experience,
    }
}

const dispatchToProps = {
    dxExperienceCardTemplateFetchAction,
    dxExperienceCardTemplateSelectAction,
    dxExperienceCardTemplateUpdateImageAction,
    dxExperienceCardTemplateUpdateColorAction,
    dxExperienceCardTemplateUpdateContentAction,

    dxAlertAction,
}

export default connect(stateToProps, dispatchToProps)(ExperienceCard);