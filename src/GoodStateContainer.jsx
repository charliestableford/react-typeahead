import React, { Component } from 'react'
import GoodState from './GoodState'


class GoodStateContainer extends Component {
    render() {
        return (
            <div className = "containerTwo">
                {this.props.legalStates.map(legalState => <GoodState legalState = {legalState}/>)}
            </div>
        )
    }
}
export default GoodStateContainer