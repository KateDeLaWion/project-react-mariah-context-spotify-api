import React, { Component } from 'react'

export default class Gallery extends Component {
    render() {
        return (
            <div>
                Gallery of photos of Mariah
                <p><img src={this.props.imageUrl1} /></p>
                <p><img src={this.props.imageUrl2} /></p>
                <p><img src={this.props.imageUrl3} /></p>
                <p><img src={this.props.imageUrl4} /></p>
                <p><img src={this.props.imageUrl5} /></p>
                <p><img src={this.props.imageUrl6} /></p>
                <p><img src={this.props.imageUrl7} /></p>
            </div>
        )
    }
}
