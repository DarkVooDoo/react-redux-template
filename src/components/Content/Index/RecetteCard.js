import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './recette-card.css'
import pizza from '../../../public/images/pizza.jpg'
import clock from '../../../public/images/clock.svg'

export default class RecetteCard extends Component {

    constructor(props){
        super(props)
        this.state = {}
    }

    render() {

        return (
            <div className="recette__card">
                <h1 className="recette__card__name">Nom De La Recette</h1>
                <div className="recette__card__image">
                    <img src={pizza} alt=""/>
                </div>
                <div className="recette__card__ingredient">
                    <Link className="reccete__card__lien" to={"/Recette/"+this.props.recetteid} data-rid="1"></Link>
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
