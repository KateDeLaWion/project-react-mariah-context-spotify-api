import React, { Component } from 'react'

export default class Awards extends Component {
    render() {
        return (
            <div>
                <h2>Grammy Awards that Mariah has received:</h2>
                <p>{this.props.award1}</p>
                <p>{this.props.award2}</p>
                <p>{this.props.award3}</p>
                <p>{this.props.award4}</p>
                <p>{this.props.award5}</p>

            </div>
        )
    }
}
