import React, { Component } from 'react'
import './CurrentLocationComponent.scss'

class CurrentLocationComponent extends Component {

    render() {

        const { city, country, region } = this.props.currentLocation

        return(
            <div className="current-location">
                <h1> { city } { country } - { region } </h1> 
            </div>
        )
    }
}

export default CurrentLocationComponent;