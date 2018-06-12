import React, { Component } from 'react';

// components
import SearchBar from '../../../components/searchBar/SearchBar';

class ExperienceList extends Component {

    render() {

        const {
            searchBarContainerStyle,
            experiencelistContainerStyle,
            experienceSortContainerStyle,
            experiencelistContentContainerStyle,
        } = styles;

        return (
            <div>
                <div style={searchBarContainerStyle}>
                    <SearchBar
                        isShort={false}
                        placeholder="search for card(s) and page(s)"
                    />
                </div>
                <div style={experiencelistContainerStyle}>
                    <div style={experienceSortContainerStyle}>
                        1 Experience(s)
                    </div>
                    <div style={experiencelistContentContainerStyle}>
                        {/* list of experiences */}
                        <div>card</div>
                        <div>flow</div>
                        <div>status</div>
                        {/* new experience */}
                        <div>
                            <img />
                            <p>ADD EXPERIENCE</p>    
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {

    searchBarContainerStyle: {

    },
    experiencelistContainerStyle: {

    },
    experienceSortContainerStyle: {

    },
}

export default ExperienceList;