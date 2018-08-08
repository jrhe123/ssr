import React, { Component } from 'react';

// styles
import '../../../../../assets/css/dd-menu/dd_menu.css';

// libraries
import SearchBar from 'material-ui-search-bar';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Lock from '@material-ui/icons/Lock';
import DropdownMenu from 'react-dd-menu';
import Button from '@material-ui/core/Button';
import Slide from 'react-reveal/Slide';

// constants
import sizes from '../../../styles/sizes';
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

// component
import ReadyToStreamTemplate from '../presentation/streams/ReadyToStreamTemplate';
import LiveStreamTemplate from '../presentation/streams/LiveStreamTemplate';
import ChannelStreamsTemplate from '../presentation/streams/ChannelStreamsTemplate'


class Stream extends Component {

    state = {
        isMenuOpen: false,
    }

    handleToggleMenu = () => {
        this.setState({
            isMenuOpen: !this.state.isMenuOpen
        });
    }

    handleCloseMenu = () => {
        this.setState({ isMenuOpen: false });
    }

    handleSearch = (value) => {
        console.log(value)
    }

    // componentDidMount() {
    //     this.div.addEventListener("scroll", this.handleScroll);
    //   }
    
    //   handleScroll = e => {
    //     console.log(this.div.scrollTop);
    //   };
    

    render() {

        const {
            mainContainerStyle,
            topContainerStyle,
            topWrapperStyle,
            targetWrapperStyle,
            targetLabelStyle,
            dropdownWrapperStyle,
            dropdownBtnStyle,
            expandIconStyle,
            dropdownOptionBtnStyle,
            dropdownMobileBtnStyle,
            dropdownWebBtnStyle,
            dropdownBtnImgStyle,
            dropdownBtnTextStyle,
            imgStyle,
            mobileOptionTopLabelStyle,
            mobileOptionBottomLabelStyle,
            comingSoonWrapperStyle,
            comingSoonStyle,
            comingSoonLabelStyle,
            webOptionTopLabelStyle,
            webOptionBottomLabelStyle,


            middleContainerstyle,
            middleWrapperStyle,
            ChannelLabelWrapperStyle,
            totalChannelWrapperStyle,
            totalNumberStyle,
            channelLabelStyle,
            totalLabelstyle,         


            bottomContainerStyle,
            leftContainerStyle,
            channelSearchContainerStyle,
            channelInfoWrapperStyle,
            searchBarWrapperStyle,
            searchBarStyle,
            tipsWrapperStyle,
            tipsHeaderStyle,
            tipsLabelStyle,
            clickHereLinkStyle,

            rightContainerStyle,
            streamsContainerStyle,
            generalwrapperStyle,
            generalHeaderStyle,
            generalContentStyle,
            liveStreamLabelStyle,
            liveStreamNumberStyle,
            liveStreamWrapperStyle,
            liveStreamLabelContainerStyle,
            readyToStreamLabelWrapperStyle,
            readyToStreamLabelStyle,
            readyToStreamNumberStyle,
            readyToStreamWrapperStyle,

        } = styles;

        const {
            active
        } = this.props;

        if (!active) {
            return null;
        }

        return (
            <Slide right>
                
            </Slide>
        )
    }
}

const styles = {
    mainContainerStyle: {
        height: `calc(100vh - ${sizes.headerHeight})`,
        position: 'relative',
        width: '100%',
    },
    topContainerStyle: {
        height: 66,
        display:'flex',
        paddingTop:18
    },
    topWrapperStyle:{
        flex:'320px 0 0',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
    },
    targetWrapperStyle:{

    },
    targetLabelStyle:{
        margin:0,
        fontSize:fonts.h1
    },
    dropdownWrapperStyle: {
    
    },
    dropdownBtnStyle: {
        padding: 0,
        textTransform: 'none',
        fontSize: fonts.h1
    },
    expandIconStyle: {
        color: colors.lightGreyColor
    },
    dropdownOptionBtnStyle: {
        width: '100%',
        padding: 0,
        textTransform: 'none'
    },
    dropdownMobileBtnStyle: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        borderBottom:'0.25px solid #D9DDE2',
        paddingLeft:12,
        paddingRight:24
    },
    dropdownWebBtnStyle: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
    dropdownBtnImgStyle: {
        flex: 1,
        alignSelf: 'center',
    },
    dropdownBtnTextStyle: {
        flex: 8,
        flexDirection: 'column',
        textAlign: 'left',
        marginLeft: 6,
    },
    imgStyle: {
        height: 42,
        width: 24
    },
    mobileOptionTopLabelStyle: {
        marginTop: 12,
        marginBottom: 6,
        fontSize: fonts.h3
    },
    mobileOptionBottomLabelStyle: {
        marginTop: 0,
        marginBottom: 12,
        color: colors.lightGreyColor,
        fontSize: fonts.h4
    },
    webOptionTopLabelStyle: {
        marginTop: 0,
        marginBottom: 6,
        fontSize: fonts.h3
    },
    webOptionBottomLabelStyle: {
        margin:0,
        color: colors.lightGreyColor,
        fontSize: fonts.h4
    },
    comingSoonWrapperStyle: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginBottom: 32,
        marginLeft:12
    },
    comingSoonStyle: {
        alignSelf: 'flex-end',
        background: colors.blackColor,
        width: 90,
        padding: 6,

    },
    comingSoonLabelStyle:{
        margin: 0,
        fontSize: fonts.h4,
        color: colors.whiteColor,
    },




    middleContainerstyle:{
        height: 48,
        display:'flex',
    },
    middleWrapperStyle:{
        flex:'320px 0 0',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
    },
    ChannelLabelWrapperStyle:{

    },
    channelLabelStyle:{
        margin:0,
        fontSize:fonts.h1
    },
    totalChannelWrapperStyle:{
        paddingRight:6,
        display:'flex',
    },
    totalNumberStyle:{
        margin:0,
        fontSize:fonts.h3,
        color: colors.lightGreyColor
    },
    totalLabelstyle:{
        margin:0,
        fontSize:fonts.h3,
        color: colors.lightGreyColor,
        marginLeft:3
    },


    bottomContainerStyle:{
        height:`calc(100% - 240px)`,
        position:'relative',
        display:'flex'
    },
    leftContainerStyle:{
        background:colors.whiteColor,
        height:'100%',
        flex:'320px 0 0',
    },
    channelSearchContainerStyle: {
        height:'100%'
    },
    searchBarWrapperStyle: {
        borderBottom:'1px solid #D9DDE2',
        height: 48
    },
    searchBarStyle: {
        boxShadow: 'none',
        paddingLeft: 6,
        height: '100%'
    },
    channelInfoWrapperStyle: {
        height: 'calc(100% - 174px)',
        flexDirection: 'column',
        overflowY: 'scroll',
    },
    tipsWrapperStyle: {
        height:114,
        padding:'12px 12px 0px 12px'
    },
    tipsHeaderStyle: {
        marginBottom: 12,
        marginTop:0,
        fontSize:fonts.h4
    },
    tipsLabelStyle: {
        fontSize:fonts.h4,
        margin:0,
    },
    clickHereLinkStyle: {
        color: colors.blueColor
    },



    rightContainerStyle:{
        height:'100%',
        flex:'832px 0 0',
        paddingLeft:48,

    },
    streamsContainerStyle:{
        height:'100%'
    },
    generalwrapperStyle:{
        width: 'auto',
        background: 'white',
        padding:12,
        height:78,
    },
    generalHeaderStyle: {
        margin: 0,
        paddingBottom: 12,
        fontSize: fonts.h2
    },
    generalContentStyle: {
        margin: 0,
        color: colors.lightGreyColor,
        fontSize: fonts.h3
    },
    liveStreamLabelContainerStyle:{
        height:48,
        display:'table'
    },
    liveStreamLabelStyle: {
        display: 'table-cell',
        verticalAlign: 'middle',
        margin:0
    },
    liveStreamNumberStyle:{
        paddingLeft:24,
        display: 'table-cell',
        verticalAlign: 'middle',
        marginTop:0,
        marginBottom:0
    },
    liveStreamWrapperStyle: {
        overflowY: 'scroll',
        height:`calc((100% - 198px)/2)`,
    },
    readyToStreamLabelWrapperStyle:{
        height:48,
        display:'table'
    },
    readyToStreamLabelStyle: {
        display: 'table-cell',
        verticalAlign: 'middle',
        margin:0
    },
    readyToStreamNumberStyle:{
        display: 'table-cell',
        verticalAlign: 'middle',
        margin:0,
        paddingLeft:24
    },
    readyToStreamWrapperStyle: {
        overflowY: 'scroll',
        height:`calc((100% - 198px)/2)`,
    },
}

export default Stream;