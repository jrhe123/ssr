import React from 'react';
import { 
    Route, 
    Switch, 
} from 'react-router-dom';
import Helmet from 'react-helmet';

// redux
import { connect } from 'react-redux';

// components
import * as Routes from './routes';
import AlertBar from '../components/alertBar/AlertBar';
import HomePage from '../home/HomePage';

const App = ({ alertBar }) => (
    <div>
        {/* SEO */}
        <Helmet
            htmlAttributes={{ lang: 'en', amp: undefined }} // amp takes no value
            titleTemplate="%s | DigitalXi - PublishXi "
            titleAttributes={{ itemprop: 'name', lang: 'en' }}
            meta={[
                { name: 'description', content: 'DigitalXi - PublishXi' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            ]}
        />

        {/* <MainMenu /> */}
        {/* config router */}
        <Switch>
            <Route exact path="/" component={Routes.LoginPage} />

            {/* <Route path="/playlists/:playlistId(pl-[a-z]{0,4})" component={Routes.PlaylistPage} />
            <Route path="/playlists" component={Routes.PlayListsPage} />
            <Route path="/search-album" component={Routes.SearchAlbumPage} />
            <Route path="/albums/:albumSlug" component={Routes.AlbumPage} />
            <Route path="/demo" component={Routes.DemoPage} /> */}
        </Switch>

        {/* global alert bar */}
        <HomePage />
        <AlertBar 
            alertBar={alertBar} 
        />
    </div>
);

const stateToProps = (state) => {
    return {
        alertBar: state.root.alertBar
    }
}

export default connect(stateToProps, null)(App);
