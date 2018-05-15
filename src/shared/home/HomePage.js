import React, { Component } from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import locale from 'date-fns/locale/fr';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { 
    fetchGists as fetchGistsAction,
    addGist as addGistAction,
    removeGist as removeGistAction,
} from './actions';


import GistsList from './GistList';

import {
	FadeInDiv,
} from '../styles/utils';

export class HomePage extends Component {

    componentWillMount() {
        this.props.loadGists();
    }

    handleAddClick(){
        this.props.addGist();
    }

    handleRemoveClick(){
        let { gists } = this.props;
        let target = gists[0];
        let { id } = target;
        this.props.removeGist(id);
    }

    handleTest = () => {
        console.log('hit you');
    }

    render() {
        const { gists } = this.props;
        return (
            <div>
                <Helmet
                    title="Welcome"
                />

                <a onClick={() => this.handleTest()}>arrow</a>
                <br/>
                <a onClick={() => this.handleAddClick()}>add</a>
                <br/>
                <a onClick={() => this.handleRemoveClick()}>remove</a>
                {
                    gists.length > 0 ?

                    <GistsList gists={gists.slice(0, 10)} />
                    :
                    null
                }
            </div>
        );
    }
}

HomePage.propTypes = {
    loadGists: PropTypes.func.isRequired,
    gists: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    })).isRequired,
};

HomePage.defaultProps = {
    gists: [],
};

const stateToProps = (state) => {
    return {
        gists: state.gists.gists
    }
}

const dispatchToPros = { 
    loadGists: fetchGistsAction,
    addGist: addGistAction,
    removeGist: removeGistAction,
}

export default connect(stateToProps, dispatchToPros)(HomePage);
