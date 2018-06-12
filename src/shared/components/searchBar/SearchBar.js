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

class SearchBar extends Component {

    state = {
        content: '',
    }

    render() {

        const {
            isShort,
            placeholder,
        } = this.props;

        const {
            iconContainerStyle,
            iconStyle,
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
                        style={iconContainerStyle}
                    >
                        <Search
                            style={iconStyle}
                        />
                    </Grid>
                    <Grid
                        style={{ width: isShort ? 120 : 240 }}
                        item>
                        <Input
                            fullWidth
                            placeholder={placeholder}
                            inputProps={{
                                'aria-label': 'Search',
                            }}
                            endAdornment={
                                <InputAdornment 
                                    position="end">
                                    <IconButton
                                        aria-label="Empty search field"
                                    >
                                        <Close />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const styles = {

    iconContainerStyle: {
        marginRight: -3,
        marginBottom: -3
    },
    iconStyle: {
        color: colors.lightGreyColor
    },
}

export default SearchBar;