import React, { Component } from 'react'
import {connect} from 'react-redux'
import {increment} from '../../../redux/actions/incrementAction'

class Index extends Component {

    async componentWillMount(){
      this.props.increment()
    }

    render() {
        return (
            <div>
                {this.props.name.toString()}
                <h1>This is the Index Page </h1>
            </div>
        )
    }
}

const mapStateToProps = state=>({
    name: state.default
})


export default connect(mapStateToProps,{increment})(Index)
