import React, { Component } from 'react'
import {connect} from 'react-redux'


class About extends Component {
    render() {
        return (
            <div>
                <h2>This is the about page</h2>
            </div>
        )
    }

    
}

const mapStateToProps = state=>({
    name: state.default
})

export default connect(mapStateToProps,{})(About)
