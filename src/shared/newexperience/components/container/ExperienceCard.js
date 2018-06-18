import React, { Component } from 'react';

// data
import ExperienceCardData from '../../../../../data/ExperienceCardData';

// components
import SearchBar from '../../../components/searchBar/SearchBar';
import CardTemplate from '../presentation/CardTemplate';

// Libraries
import Button from '@material-ui/core/Button';
import DropdownMenu from 'react-dd-menu';

// redux
import { connect } from 'react-redux';
import {
    dxExperienceCardTemplateSelect as dxExperienceCardTemplateSelectAction
} from '../../actions';

// constants
import sizes from '../../../styles/sizes';
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

class ExperienceCard extends Component {

    state = {
        activeTab: 0,
        cardTemplates: []
    }

    componentDidMount(){
        this.setState({
            cardTemplates: ExperienceCardData.CardTemplates
        })
    }

    handleClickCate = (activeTab) => {
        this.setState({
            activeTab
        })
    }

    handleSelectCardTemplate = (template) => {
        this.props.dxExperienceCardTemplateSelectAction(template);
    }

    render() {

        const {
            activeTab,
        } = this.state;

        const {
            mainContainerStyle,
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

        const activeOptionBtnStyle = {backgroundColor: colors.lightBlueColor};

        return (
            <div style={mainContainerStyle}>
                <div style={leftContainerStyle}>
                    <DropdownMenu
                        isOpen={this.props.experience.isCardTemplateMenuOpen}
                        close={() => {}}
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
                                        this.state.cardTemplates.map((template, index) => (
                                            <CardTemplate 
                                                key={index}
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

                <div style={rightContainerStyle}>right</div>
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
        flexDirection: 'row'
    },
    leftContainerStyle: {
        flex: 1,
    },
    leftWrapperStyle: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        borderTop: '1px solid',
        borderColor: colors.borderColor
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
        experience: state.newexperience.experience,
    }
}

const dispatchToProps = {
    dxExperienceCardTemplateSelectAction,
}

export default connect(stateToProps, dispatchToProps)(ExperienceCard);