import React, { Component } from 'react';

// components
import Experience from '../components/layout/Experience';

class ExperiencePage extends Component{

    render(){
        return(
            <Experience 
                history={this.props.history}
            />
        )
    }
}

export default ExperiencePage;