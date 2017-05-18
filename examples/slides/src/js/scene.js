import React from 'react'
import { connect } from 'react-redux'

class Scene extends React.Component {
    componentDidMount() {
        this.props.dispatch({type: 'HI'})
    }
    render() {
        return (
            <svg width="400" height="110">
                <rect width={this.props.left} height="100" className="my-rect" />
            </svg>
        )
    }
}

export default connect((state) => ({
    left: state.left
}))(Scene)
