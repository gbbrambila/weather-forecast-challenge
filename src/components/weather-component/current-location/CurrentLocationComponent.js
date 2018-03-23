import React, { Component } from 'react'
import './CurrentLocationComponent.scss'

class CurrentLocationComponent extends Component {
    render() {
        return(
            <div className="current-location">
                <h1>{ this.props.currentLocation }</h1> 
            </div>
        )
    }
}

export default CurrentLocationComponent;