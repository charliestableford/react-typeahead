
import React, { Component } from 'react'

class BadState extends Component {
    render() {
        return (
            <div>
                {this.props.illegalState}
            </div>
            
        )
    }
}

export default BadState