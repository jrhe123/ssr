import React, { Component } from 'react';

// components
import NavBar from '../../../components/navBar/NavBar';

// Libraries
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import 'rc-tabs/assets/index.css';

class HeaderNavigator extends Component{

    state = {
        start: 0,
        tabKey: 1,
    };

    onTabClick = (key) => {
        this.setState({
            tabKey: key,
        });
    }

    render(){

        return(
            <div>
                <NavBar />
{/*                 
                <Tabs
                    defaultActiveKey={'2'}
                    renderTabBar={
                        () =>
                            <ScrollableInkTabBar 
                                style={{color: "yellow"}}
                                onTabClick={this.onTabClick} 
                            />
                    }
                    renderTabContent={
                        () =>
                            <TabContent style={{color: 'red'}}/>
                    }
                >
                    <TabPane
                        tab={`tab 1`}
                        key="3"
                    >
                        tab 1 content
                    </TabPane>
                    <TabPane
                        tab={`tab 2`}
                        key="2"
                    >
                        tab 2 content
                    </TabPane>
                </Tabs> */}
            </div>
        )
    }
}

export default HeaderNavigator;