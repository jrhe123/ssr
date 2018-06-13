import React, { Component } from 'react';

// Libraries
import Button from '@material-ui/core/Button';

// constants
import colors from '../../../styles/colors';

class ExperiencePanel extends Component {

    render() {

        const {
            mainContainerStyle,
            optionContainerStyle,
            leftContainerStyle,
            rightContainerStyle,
            btnStyle,
        } = styles;

        return (
            <div style={mainContainerStyle}>
                <div style={optionContainerStyle}>
                    <div style={leftContainerStyle}>
                        <p>Type</p>
                    </div>
                    <div style={rightContainerStyle}>
                        <p>Select what kind of experience you would like your end user to experience?</p>
                    </div>
                </div>
                <div style={optionContainerStyle}>
                    <div style={leftContainerStyle}>
                        <img
                            src={require('../../../../../assets/images/card_option.png')}
                        />
                        <span>Card</span>
                    </div>
                    <div style={rightContainerStyle}>
                        <p>Cards are the entry point to your end user's experience</p>
                        <Button
                            style={btnStyle}
                            variant="Create card">
                            Create a card
                        </Button>
                    </div>
                </div>
                <div style={optionContainerStyle}>
                    <div style={leftContainerStyle}>
                        <img
                            src={require('../../../../../assets/images/card_option.png')}
                        />
                        <span>Page(s)</span>
                    </div>
                    <div style={rightContainerStyle}>
                        <p>Page(s) are the follow-up screens after the end user clicked the above card.<br />Multiple page(s) are linked via sections.</p>
                        <Button
                            style={btnStyle}
                            variant="Create pages">
                            Create page(s)
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        width: 720,
        margin: '0 auto',
        border: '1px solid red'
    },
    optionContainerStyle: {
        display: 'flex',
        flexDirection: 'row'
    },
    leftContainerStyle: {
        flex: 1
    },
    rightContainerStyle: {
        flex: 3
    },
    btnStyle: {
        backgroundColor: colors.blueColor,
        color: colors.whiteColor,
        textTransform: 'capitalize',
        width: 132
    }
}

export default ExperiencePanel;