import React, { Component } from 'react';

// Libraries
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import 'rc-tabs/assets/index.css';

// router
import { Link } from 'react-router-dom';

class MainMenu extends Component {

    state = {
        start: 0,
        tabKey: 1,
    };

    onTabClick = (key) => {
        console.log(`onTabClick ${key}`);
        this.setState({
            tabKey: key,
        });
    }

    render() {

        return (
            <Tabs
                defaultActiveKey={'2'}
                renderTabBar={
                    () => 
                    <ScrollableInkTabBar onTabClick={this.onTabClick} />
                }
                renderTabContent={
                    () => 
                    <TabContent />
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
            </Tabs>
        )
    }
}

const styles = {

    navBar: {
        display: 'block',
        position: 'fixed',
    }
}

export default MainMenu;
