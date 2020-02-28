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
                <h1 className="recetteInfo__suggestion__head">Suggestion
                    <span className="recetteInfo__suggestion__head__arrow" ref={ele=>this.suggestionArrow = ele}></span>
                </h1>
                <div className="recetteInfo__suggestion__carousel" onScroll={this.suggestionScroll}>
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

    suggestionScroll = (e)=>{
        console.log(e.target.scrollLeft)
        if(e.target.scrollLeft > 150) this.suggestionArrow.style.opacity = '0'
        else this.suggestionArrow.style.opacity = '1'
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