import React ,{ Component } from 'react'

class Welcome extends Component {
    render() {
        return <h1> {this.props.children}</h1>
    }
}

export default Welcome