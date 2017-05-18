import React from 'react'
import { connect } from 'react-redux'
import Constants from './constants/'

class Scene extends React.Component {
    componentDidMount() {
        this.props.dispatch({type:Constants.START_ANIMATION})
    }
    render() {
        return (
            <svg width="400" height="110">
                <rect width={this.props.x} height="100" className="my-rect" />
            </svg>
        )
    }
}

export default connect((state) => ({
    left: state.x
}))(Scene)
