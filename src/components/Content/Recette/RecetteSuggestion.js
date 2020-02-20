import React, { Component } from 'react'

import './recette-suggestion.css'

import RecetteSuggestionCard from './RecetteSuggestionCard'


export default class RecetteSuggestion extends Component {

    constructor(props){
        super(props)
        this.state = {pos: 0}
    }

    render() {

        return (
            <div className="recetteInfo__suggestion">
                <h1 className="recetteInfo__suggestion__head">Suggestion</h1>
                <div className="recetteInfo__suggestion__carousel">
                    <span className="recetteInfo__suggestion__carousel__left" onClick={this.carouselLeft}></span>
                    <span className="recetteInfo__suggestion__carousel__right" onClick={this.carouselRight}></span>
                    <div className="recetteInfo__suggestion__carousel__inner" style={{left: this.state.pos+"%"}}>
                        <RecetteSuggestionCard />
                        <RecetteSuggestionCard />
                        <RecetteSuggestionCard />
                        <RecetteSuggestionCard />
                        <RecetteSuggestionCard />
                    </div>
                </div>
            </div>
        )
    }

    carouselRight = (e)=>{
        if(this.state.pos > -400 && window.outerWidth < 768){
            let updatedPos = this.state.pos - 100
            this.setState({pos: updatedPos})
        }else if(this.state.pos > -150 && window.outerWidth > 768){
            let updatedPos = this.state.pos - 50
            this.setState({pos: updatedPos})
        }
    }

    carouselLeft = (e)=>{
        if(this.state.pos < 0 && window.outerWidth > 768){
            let updatedPos = this.state.pos + 100
            this.setState({pos: updatedPos})
        }else if(this.state.pos < -50 && window.outerWidth > 768){
            let updatedPos = this.state.pos + 50
            this.setState({pos: updatedPos})
        }
    }
}
