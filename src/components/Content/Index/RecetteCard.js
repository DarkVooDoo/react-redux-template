import React, { Component } from 'react'
import {connect} from 'react-redux'
import './recette-card.css'
import pizza from '../../../public/images/pizza.jpg'
import clock from '../../../public/images/clock.svg'

class RecetteCard extends Component {

    constructor(props){
        super(props)
        this.state = {show: false}
    }

    componentDidMount(){

    }

    render() {

        let show = true;
        if(window.outerWidth < 1100){
            let currentPos = Math.abs(this.props.pos / 100)
            if(currentPos !== this.props.recetteid) show = false
            else show = true
        }

        return (
            <div className="recette__card" style={show ? {transform: "scale(1)"}: {transform: "scale(0)"}}>
                <h1 className="recette__card__name">{this.props.recetteid+1} Nom De La Recette</h1>
                <div className="recette__card__image">
                    <img src={pizza} alt=""/>
                </div>
                <div className="recette__card__ingredient">
                    <a className="reccete__card__lien" href={"/Recette/"+this.props.recetteid}> </a>
                    <ul className="recette__card__ingredientList">
                        <h4 className="recette__card__ingredientList__option">Ingredients</h4>
                        <li className="recette__card__ingredientList__item">Ingredient 1</li>
                        <li className="recette__card__ingredientList__item">Ingredient 2</li>
                        <li className="recette__card__ingredientList__item">Ingredient 3</li>
                        <li className="recette__card__ingredientList__item">Ingredient 4</li>
                        <li className="recette__card__ingredientList__item">Ingredient 5</li>
                    </ul>
                    <ul className="recette__card__ingredientList__steps">
                        <h4 className="recette__card__ingredientList__steps__name">Suivre</h4>
                        <li className="recette__steps__step">Melanger Ingredient 1,3 et 5</li>
                        <li className="recette__steps__step">Mixed le tout</li>
                        <li className="recette__steps__step">Mariner la viande et laisse au fraid pendant 2h</li>
                    </ul> 
                </div>
                <div className="recette__card__about">
                    <div className="recette__card__about__prep">
                        <div className="prep__clock">
                            <img src={clock} alt="clock"/>
                        </div>
                        <p>Prep: 10min</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state=>({
    pos: state.carouselPos
})

export default connect(mapStateToProps, {})(RecetteCard)