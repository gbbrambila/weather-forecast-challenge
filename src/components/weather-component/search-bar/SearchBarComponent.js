import React, { Component } from 'react'

class SearchBarComponent extends Component {
    render() {
        return(
            <div class="search-bar">
                
                <input class="search-city" type="text" placeholder="Search a city" />
                
                <button class="search-button">Search</button>

            </div>
        )
    }
}

export default SearchBarComponent;