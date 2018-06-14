import React, { Component } from 'react';

// components
import ExperienceNavigator from '../container/ExperienceNavigator';
import ExperiencePanel from '../container/ExperiencePanel';

// constants
import sizes from '../../../styles/sizes';

class NewExperience extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        console.log('props: ', this.props);
    }

    handleGoback = () => {
        this.props.history.push('/dashboard');
    }

    handleClickOption = () => {

    }

    render() {

        const {
            mainContainerStyle,
        } = styles;

        return (
            <div>
                <ExperienceNavigator 
                    handleGoback={() => this.handleGoback()}
                />
                <div style={mainContainerStyle}>
                    <ExperiencePanel 
                        experienceType={this.props.experienceType}
                        handleClickOption={(val) => this.handleClickOption(val)}
                    />
                </div>
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        height: `calc(100vh - ${sizes.headerHeight})`,
        width: '100%',
        minWidth: sizes.dxWidth,
    },

}

export default NewExperience;