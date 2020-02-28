import React, { Component } from 'react'

import Recette from './Recette'
import RecetteSuggestion from './RecetteSuggestion'

export default class FullRecette extends Component {

    constructor(props){
        super(props)
        this.state = {id: this.props.match.params.id}
    }

    async componentDidMount(){
        let res = await getSomething()
        this.setState({title: res.title})
    }

    render() {
        
        return (
            <div className="recetteInfo">
                <Recette id={this.state.id}/>  
                <RecetteSuggestion /> 
            </div>
        )
    }
}

const getSomething = async ()=>{
    let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let json = await res.json()
    return json
}
