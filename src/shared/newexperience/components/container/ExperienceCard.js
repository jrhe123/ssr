import React, { Component } from 'react';

// data
import ExperienceCardData from '../../../../../data/ExperienceCardData';

// Libraries
import Button from '@material-ui/core/Button';

// constants
import sizes from '../../../styles/sizes';
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

class ExperienceCard extends Component {

    state = {
        activeTab: 0
    }

    componentDidMount() {
        //console.log('check: ', ExperienceCardData);
    }

    render() {

        const {
            activeTab,
        } = this.state;

        const {
            mainContainerStyle,
            leftContainerStyle,
            cateContainerStyle,
            optionBtnContainerStyle,
            btnStyle,
            itemContainerStyle,
            rightContainerStyle,
        } = styles;

        const activeOptionBtnStyle = {backgroundColor: colors.lightBlueColor};

        return (
            <div style={mainContainerStyle}>
                <div style={leftContainerStyle}>
                    <div style={cateContainerStyle}>
                        <div style={optionBtnContainerStyle}>
                            <Button
                                className="dx-cat-btn"
                                style={Object.assign({}, btnStyle, activeTab == 0 ? activeOptionBtnStyle : {})}
                                variant="Popular"
                            >
                                Popular
                            </Button>
                        </div>
                        <div style={optionBtnContainerStyle}>
                            <Button
                                className="dx-cat-btn"
                                style={Object.assign({}, btnStyle, activeTab == 1 ? activeOptionBtnStyle : {})}
                                variant="Image"
                            >
                                Image
                            </Button>
                        </div>
                        <div style={optionBtnContainerStyle}>
                            <Button
                                className="dx-cat-btn"
                                style={Object.assign({}, btnStyle, activeTab == 2 ? activeOptionBtnStyle : {})}
                                variant="Text"
                            >
                                Text
                            </Button>
                        </div>
                        <div style={optionBtnContainerStyle}>
                            <Button
                                className="dx-cat-btn"
                                style={Object.assign({}, btnStyle, activeTab == 3 ? activeOptionBtnStyle : {})}
                                variant="Video"
                            >
                                Video
                            </Button>
                        </div>
                        <div style={optionBtnContainerStyle}>
                            <Button
                                className="dx-cat-btn"
                                style={Object.assign({}, btnStyle, activeTab == 4 ? activeOptionBtnStyle : {})}
                                variant="Stacked"
                            >
                                Stacked
                            </Button>
                        </div>
                        <div style={optionBtnContainerStyle}>
                            <Button
                                className="dx-cat-btn"
                                style={Object.assign({}, btnStyle, activeTab == 5 ? activeOptionBtnStyle : {})}
                                variant="Examples"
                            >
                                Examples
                            </Button>
                        </div>
                    </div>
                    <div style={itemContainerStyle}>items</div>
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
    rightContainerStyle: {
        flex: 2,
    },
}

export default ExperienceCard;