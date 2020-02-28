import React, { Component } from 'react'
import {connect} from 'react-redux'

import {defaultAction} from '../../../redux/actions/actions'

import './index.css'
class Index extends Component {

    constructor(props){
        super(props)
        this.props.defaultAction('Patron')
    }
    render() {

        return (
            <div className="index">
            </div>
        )
    }
}

const mapStateToProps = state=>({
    welcome: state.firstReducer
})

export default connect(mapStateToProps, {defaultAction})(Index)
