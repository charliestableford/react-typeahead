import React, { Component } from 'react'
import BadState from './BadState'


class BadStateContainer extends Component {
    render() {
        return (
            <div className = "container">
                {this.props.illegalStates.map(illegalState => <BadState illegalState = {illegalState}/>)}
            </div>
        )
    }
}
export default BadStateContainer