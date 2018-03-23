import React, { Component } from 'react'
import './SearchBarComponent.scss'

class SearchBarComponent extends Component {
    render() {
        return(
            <div className="search-bar">
                
                <input className="search-city" type="text" placeholder="Search a city" />
                
                <button className="search-button">Search</button>

            </div>
        )
    }
}

export default SearchBarComponent;