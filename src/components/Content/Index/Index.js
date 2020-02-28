import React, { Component } from 'react'
import {connect} from 'react-redux'

import {defaultAction} from '../../../redux/actions/actions'

import './index.css'

class Index extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state=>({
    default: state.firstReducer
})

export default connect(mapStateToProps, {defaultAction})(Index)
    