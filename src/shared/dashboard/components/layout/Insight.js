import React, { Component } from 'react';

// libraries
import Button from '@material-ui/core/Button';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Add from '@material-ui/icons/Add';
import Apps from '@material-ui/icons/Apps'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

// constants
import sizes from '../../../styles/sizes';
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

//component
import Spring from '../presentation/Spring';
import WidgetTemplate from '../presentation/WidgetTemplate';
import GridLay from '../presentation/GridLay';

class Insight extends Component {

    state = {
         elements: [
            {
                src:'ENGAGEMENT',
                // number:'13',
                width:460,
                height:300,
                background:'#FFFFFF',
                marginBottom: 20,
                textMarginTop:21,
                textMarginLeft:27,
                srcSize:14,
                numMarginTop:0
            },
            {
                src:'DIABETES',
                // number:'201',
                width:220,
                height:140,
                background:'#FFFFFF',
                marginBottom: 20,
                srcSize:14,
                textMarginTop:20,
                textMarginLeft:12,
                numMarginTop:0
            },
            {
                src:'TOP PERFORMING CHANNELS',
                // number:'201',
                width:220,
                height:300,
                background:'#FFFFFF',
                key:'2',
                marginBottom: 20,
                srcSize:18,
                textMarginTop:18,
                textMarginLeft:21,
                numMarginTop:0
            },
            {
                src:'HYPERTENSION',
                // number:'201',
                width:220,
                height:140,
                background:'#FFFFFF',
                marginBottom: 20,
                srcSize:14,
                textMarginTop:20,
                textMarginLeft:12,
                numMarginTop:0
            },

    //second row
            {
                src:'LEADERBOARD',
                // number:'13',
                width:300,
                height:300,
                background:'#FFFFFF',
                srcSize:18,
                textMarginTop:21,
                textMarginLeft:18,
                numMarginTop:0,
                marginBottom: 20,
            },
            {
                src:'ENGAGEMENT',
                number:'110,145',
                width:220,
                height:140,
                background:'#FFFFFF',
                marginBottom: 20,
                srcSize:12,
                numberSize:32,
                textMarginTop:21,
                textMarginLeft:15,
                numMarginTop:27
            },
            {
                src:'TRENDING CHANNELS',
                number:'AUDIENCE',
                width:220,
                height:300,
                background:'#FFFFFF',
                key:'2',
                srcSize:18,
                textMarginTop:18,
                textMarginLeft:21,
                numMarginTop:22,
                marginBottom: 20,
            },
            {
                src:'CHANNELS',
                number:'13',
                width:140,
                height:75,
                background:'#FFFFFF',
                marginBottom:5,
                srcSize:14,
                numberSize:32,
                textAlign:'left',
                textMarginTop:6,
                textMarginLeft:6,
                numMarginTop:3,
                
            },
            {
                src:'DISCOVERY',
                number:'201',
                width:220,
                height:140,
                background:'#FFFFFF',
                srcSize:12,
                numberSize:32,
                textMarginTop:21,
                textMarginLeft:15,
                numMarginTop:27,
                marginBottom: 20,
            },
            {
                src:'LIVE EXPERIENCES',
                number:'201',
                width:140,
                height:75,
                background:'#FFFFFF',
                marginBottom:5,
                srcSize:14,
                numberSize:32,
                textAlign:'left',
                textMarginTop:6,
                textMarginLeft:6,
                numMarginTop:6
            },
            {
                src:'Real Time',
                number:'21',
                width:140,
                height:140,
                background:'linear-gradient(90deg, #FF4D43 0%, #FF1E71 100%)',
                color:'white',
                srcSize:14,
                numberSize:32,
                textAlign:'center',
                textMarginTop:18,
                numMarginTop:18,
                marginBottom: 20
            }
        ]
    };

    handleRemove = () => {

        this.setState({
            elements: this.state.elements.splice(1,8)
        });
        console.log(this.state.elements);

    }



    render() {
       
        const {
            mainContainerStyle,
            mainWrapperStyle,
            topContainerStyle,
            addWidgetContainerStyle,
            headerStyle,
            dateBtnStyle,
            addBtnStyle,
            iconStyle,
            addIconStyle,
            arrangeLabelStyle,
            arrangeWrapperStyle,
            arrangeIconStyle,
            imgStyle,
            headerLabelStyle,
            widgetContainerStyle,
            engagementCardStyle,
            performanceCardStyle,
            diabetesCardStyle,
            hypertensionCardStyle,
            middleCardStyle,
            masonContainerStyle,
            springStyle
        } = styles;

        return (
            <div style={mainContainerStyle}>
                <div style={mainWrapperStyle}>
                    <div style={topContainerStyle}>
                        <img 
                            style={imgStyle}
                            src={require('../../../../../assets/images/analysisLogo.png')} 
                        />
                        <p style={headerStyle}>Reports<p style={headerLabelStyle}>for</p></p>
                        <Button style={dateBtnStyle} variant="extendedFab">12.12 - 19.12<ExpandMore style={iconStyle} onClick={() => this.handleRemoveElement()}/></Button>
                    </div>
                    <div style={addWidgetContainerStyle}>
                        <Button style={addBtnStyle} variant="extendedFab" onClick={() => this.handleRemove()}><Add style={addIconStyle}/>Add widget</Button>
                        <div style={arrangeWrapperStyle}>
                            <Apps style={arrangeIconStyle}/>
                            <p style={arrangeLabelStyle}>Arrange</p>
                            {/* <Button>Delete</Button> */}
                        </div>
                    </div>
                    {/* <div style={widgetContainerStyle}>
                        <Card style={engagementCardStyle}>
                            <CardContent>
                                <p>HELLO!</p>
                            </CardContent>
                        </Card>
                        <div style={middleCardStyle}>
                            <Card style={diabetesCardStyle}>
                                <CardContent>
                                    <p>HELLO!</p>
                                </CardContent>
                            </Card>
                            <Card style={hypertensionCardStyle}>
                                <CardContent>
                                    <p>HELLO!</p>
                                </CardContent>
                            </Card>
                        </div>
                        <Card style={performanceCardStyle}>
                            <CardContent>
                                <p>HELLO!</p>
                            </CardContent>
                        </Card>
                    </div> */}
                    {/* <Spring elements={ this.state.elements }/> */}
                    <div style={springStyle}>
                        <WidgetTemplate elements={this.state.elements} />
                        {/* <GridLay elements={this.state.elements}/> */}
                    </div>
                </div>
            </div>

        );
    }
}

const styles = {
    mainContainerStyle:{
        width: sizes.dxWidth,
        margin: '0 auto',
        display:'flex',
        flexDirection:'row',
    },
    mainWrapperStyle:{
        height: `calc(100vh - ${sizes.headerHeight})`,
        flex:1,
        width: '100%',
        //background:'yellow'
    },
    topContainerStyle:{
        height:32,
        display:'flex',
        flexDirection:'row',
        marginTop:30,
        marginLeft:210,
        alignItems:'center',
        justifyContent:'flex-start'
    },
    addWidgetContainerStyle:{
        marginLeft:210,
        marginRight:36,
        // background:'yellow',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:30,
        display:'flex',
        alignItems:'center',
        marginBottom:32
    },
    dateBtnStyle:{
        borderRadius:25,
        height:30,
        width:140,
        paddingLeft:6,
        paddingRight:0,
        paddinRight:0,
        paddingTop:3,
        paddingBottom:3,
        border: '1px solid #979797',
        fontFamily: 'avenir',
        fontSize:fonts.h1,
        fontWeight: 300,
        textAlign:'center'
    },
    iconStyle:{
        marginLeft:6,
        color:colors.lightGreyColor
    },
    addIconStyle:{
        marginRight:6,
        color:colors.blueColor,
        height: 27,
        width: 17,
        fontSize: 20

    },
    headerStyle:{
        margin:0,
        // height:32,
        textAlign:'center',
        // fontSize:fonts.h1,
        fontSize:24,
        fontWeight:300,
        fontFamily:'avenir',
        display:'flex',
        alignItems:'center',
        marginRight:12,
        marginLeft:12
    },
    addBtnStyle:{
        borderRadius:25,
        height:30,
        width:140,
        paddingLeft:0,
        paddingRight:0,
        paddinRight:0,
        paddingTop:3,
        paddingBottom:3,
        boxShadow: '0 1px 3px 0 rgba(0,0,0,0.5)',
        background:colors.whiteColor,
        color:'#818E98',
        textAlign:'center',
        fontSize:fonts.h2,
        fontFamily: 'avenir',
        fontWeight: 300,
        textTransform:'none'
    },
    arrangeLabelStyle:{
        fontFamily:'avenir',
        fontSize:fonts.h3,
        fontWeight:500,
        color:'#CED5DB',
        margin:0
    },
    arrangeWrapperStyle:{
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    arrangeIconStyle:{
        color:'#CED5DB',
        height:18,
        width:18,
        marginRight:3
    },
    imgStyle:{
        display: 'block',
        width: 30,
        height: 18
    },
    headerLabelStyle:{
        color: '#818E98',
        fontSize:24,
        fontWeight:300,
        fontFamily:'avenir',
        marginLeft:12
    },
    widgetContainerStyle:{
        marginLeft:210,
        //background:'yellow',
        height:270,
        display:'flex',
        alignItems:'center'
    },
    engagementCardStyle:{
        width:460,
        height:'100%'
    },
    performanceCardStyle:{
        width:200,
        height:'100%' 
    },
    diabetesCardStyle:{
        width:220,
        height:125,
        marginLeft:21,
        marginRight:21,
        marginBottom:21
    },
    hypertensionCardStyle:{
        width:220,
        height:125,
        marginLeft:21,
        marginRight:21
    },
    middleCardStyle:{
        display:'flex',
        flexDirection:'column'
    },
    masonContainerStyle:{
        height:560
    },
    springStyle:{
        marginLeft:210,
        // width:960,
        // background:'red'
    }
}

export default Insight;
