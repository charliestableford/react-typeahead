import React, { Component } from 'react'
import Name from './Name'


class NamesContainer extends Component {
    render() {
        return (
            <div className = "container">
                {this.props.illegalStates.map(illegalState => <Name illegalState = {illegalState}/>)}
            </div>
        )
    }
}
export default NamesContainer