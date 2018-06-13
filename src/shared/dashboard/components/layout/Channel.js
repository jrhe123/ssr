import React, { Component } from 'react';

// libraries
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// constants
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

const themeStyles = theme => ({
    root: {
        // backgroundColor: theme.palette.background.paper,
        width: '227px',
        backgroundColor: '#0071FF',
        textTransform: 'none',
        height:'50px',
        color: colors.whiteColor,
        fontSize: fonts.h1,
        fontFamily: 'Avenir',
        border: '2px',
        boxShadow: 'none',
        // '&:hover': 'none',
        // '&:focus': 'none',
        // '&:active': 'none',
        '&:hover': {
            boxShadow: 'none',
            backgroundColor: '#0071FF',
          },
          '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0071FF',
          },
          '&:focus': {
            boxShadow: 'none',
            backgroundColor: '#0071FF',
          },
    }
});

class Channel extends Component {

    render() {
        const {
            classes,
        } = this.props;

        const {
            mainContainerStyle,
            mainWrapperStyle,
            tableContainerStyle,
            tableWrapperStyle,
            buttonWrapperStyle,
            header1Style,
            header2Style,
            header3Style,
            imgStyle
        } = styles;

        return (
            <div style={mainContainerStyle}>
                <div style={mainWrapperStyle}>
                    <div style={tableContainerStyle}>
                        <div style={tableWrapperStyle}>
                            <div style={header1Style}> Reach your audience via channel.</div>
                            <div>
                                <img 
                                    style={imgStyle}
                                    src={require('../../../../../assets/images/channelPage.png')}
                                />
                            </div>
                            <div style={header2Style}> Let's create a channel to stream your experience(s) </div>
                            <div style={buttonWrapperStyle}>
                                <Button variant="contained" className={classes.root}>
                                    Create a channel
                                </Button>
                            </div>
                            <div style={header3Style}> Your audience can subscribe and follow channel(s). Channel(s) improve content discoverablity.</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    mainContainerStyle: {
        display: 'flex',
        // flexWrap: 'wrap',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height: 'calc(100vh - 84px)',
        // backgroundColor:'yellow'
        backgroundColor: colors.backgroundColor
    },
    mainWrapperStyle:{
        display: 'flex',
        // flexWrap: 'wrap',
        //define width for the content wrapper here
        width:'60%',
        // backgroundColor:'blue'
    },
    tableContainerStyle: {
        position: 'relative',
        display: 'table',
        height: '100%',
        width: '100%',
        // paddingLeft: '10%',
        // paddingRight: '10%',
    },
    tableWrapperStyle: {
        display: 'table-cell',
        verticalAlign: 'middle',
        textAlign: 'center',
    },
    buttonWrapperStyle: {
        marginTop: '38px',
        marginBottom:'27px'
    },
    header1Style: {
        color: colors.headerGreyColor,
        fontSize: fonts.channelHeader,
        fontFamily: 'Avenir',
        fontWeight: '300',
        marginTop:'240px'
    },
    header2Style: {
        color: colors.headerGreyColor,
        fontSize: fonts.channelHeader,
        fontFamily: 'Avenir',
        fontWeight: '300'
    },
    header3Style:{
        color: colors.headerGreyColor,
        fontSize: fonts.h3,
        fontFamily: 'Avenir',
        fontWeight: '300',
        marginBottom:'246px'
    },
    imgStyle:{
        // display:'block',
        height:'131px',
        width:'142px',
        marginTop:'47px',
        marginBottom:'38px'
    }
};

export default withStyles(themeStyles)(Channel);