import React, { Component } from 'react';

// components
import SearchBar from '../../../components/searchBar/SearchBar';

class ExperienceList extends Component{

    render(){
        return(
            <div>
                <SearchBar 
                    isShort={false}
                    placeholder="search for card(s) and page(s)"
                />

            </div>
        )
    }
}

export default ExperienceList;