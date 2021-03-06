import React, { Component } from 'react';

// constants
import colors from '../../styles/colors';

// Libraries
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Search from '@material-ui/icons/Search';
import Close from '@material-ui/icons/Close';
import fonts from '../../styles/fonts';

class SearchBar extends Component {

    handleValueChange = (event) => {
        let val = event.target.value;
        this.props.handleSearchInputChange(val);
    }

    handleClearContent = () => {
        this.props.handleSearchInputChange('');
    }

    render() {

        const {
            isShort,
            placeholder,
            content,
        } = this.props;

        const {
            searchIconContainerStyle,
            iconStyle,
            clearIconContainerStyle,
            inputStyle,
        } = styles;

        return (
            <div>
                <Grid
                    container
                    spacing={8}
                    alignItems="flex-end"
                >
                    <Grid
                        item
                        style={searchIconContainerStyle}
                    >
                        <Search
                            style={iconStyle}
                        />
                    </Grid>
                    <Grid
                        style={{ width: isShort ? 110 : 220 }}
                        item>
                        <Input
                            className="dx_search_input"
                            style={inputStyle}
                            value={content}
                            fullWidth
                            placeholder={placeholder}
                            inputProps={{
                                'aria-label': 'Search',
                            }}
                            onChange={(event) => this.handleValueChange(event)}
                            endAdornment={
                                content ?
                                    (
                                        <InputAdornment
                                            style={clearIconContainerStyle}
                                            position="end">
                                            <IconButton
                                                onClick={() => this.handleClearContent()}
                                                aria-label="Empty search field"
                                            >
                                                <Close />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                    :
                                    null
                            }
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const styles = {

    searchIconContainerStyle: {
        marginLeft: 1,
        marginRight: -3,
        marginBottom: -3,
        paddingLeft: 0,
    },
    iconStyle: {
        color: colors.lightGreyColor
    },
    clearIconContainerStyle: {
        marginRight: -12
    },
    inputStyle: {
        fontSize: fonts.h3,
    }
}

export default SearchBar;