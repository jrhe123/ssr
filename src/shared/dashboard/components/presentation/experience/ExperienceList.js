import React, { Component } from 'react';

// components
import SearchBar from '../../../../components/searchBar/SearchBar';

// constatnt
import fonts from '../../../../styles/fonts';
import colors from '../../../../styles/colors';

class ExperienceList extends Component {

    render() {

        const {
            searchBarContainerStyle,
            experiencelistContainerStyle,
            experienceSortContainerStyle,
            experienceSortTitleStyle,
            titleSpanStyle,
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
                        <p style={experienceSortTitleStyle}>1 Experience(s)</p>
                        <span style={titleSpanStyle}/>
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
        marginTop: 48,
        marginBottom: 48,
    },
    experiencelistContainerStyle: {

    },
    experienceSortContainerStyle: {
        position: 'relative',
        height: 36
    },
    experienceSortTitleStyle: {
        fontSize: fonts.h2,
        marginBottom: 6,
    },
    titleSpanStyle: {
        height: 1,
        width: 360,
        backgroundColor: colors.lightGreyColor,
        position: 'absolute',
        left: 0,
        bottom: 9
    },
}

export default ExperienceList;