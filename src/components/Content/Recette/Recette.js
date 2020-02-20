import React, { Component } from 'react'

import './fullRecette.css'
import burger from '../../../public/images/burger.jpg'
import pizza from '../../../public/images/pizza.jpg'
import close from '../../../public/images/close.svg'

export default class Recette extends Component {

    constructor(props){
        super(props)
        this.state = {id: this.props.id}
    }

    render() {
        return (
            <div className="recetteInfo__container">
                <div className="recetteInfo__container__recette">
                    <h1 className="recetteInfo__container__recette__name">Nom de la recette #{this.state.id}</h1>
                    <div className="recetteInfo__container__recette__ingredientList">
                        <ul className="recetteInfo__container__recette__ingredientList__list">
                            <h3 className="recetteInfo__container__recette__ingredientList__list__haed">Ingredients</h3>
                            <li className="recetteInfo__container__recette__ingredientList__list__item">Lorem ipsum dolor</li>
                            <li className="recetteInfo__container__recette__ingredientList__list__item">NBA</li>
                            <li className="recetteInfo__container__recette__ingredientList__list__item">Me and My Gang</li>
                            <li className="recetteInfo__container__recette__ingredientList__list__item">Tomate</li>
                            <li className="recetteInfo__container__recette__ingredientList__list__item">NBA</li>
                            <li className="recetteInfo__container__recette__ingredientList__list__item">Me and My Gang</li>
                            <li className="recetteInfo__container__recette__ingredientList__list__item">Tomate</li>
                            <li className="recetteInfo__container__recette__ingredientList__list__item">NBA</li>
                            <li className="recetteInfo__container__recette__ingredientList__list__item">Me and My Gang</li>
                        </ul>
                    </div>
                    <div className="recetteInfo__container__recette__suivreList">
                        <ul className="recetteInfo__container__recette__suivreList__list">
                            <h3 className="recetteInfo__container__recette__suivreList__list__head">Suivre</h3>
                            <li className="recetteInfo__container__recette__suivreList__list__item">Premier pas a Suivre</li>
                            <li className="recetteInfo__container__recette__suivreList__list__item">Second Pas a Suivre</li>
                            <li className="recetteInfo__container__recette__suivreList__list__item">Last One</li>
                        </ul>
                    </div>
                    <p className="recetteInfo__container__recette__temps">Temps de preparation: 10min</p>
                </div>
                <div className="recetteInfo__container__images">
                    <img className="recetteInfo__container__images__img" src={burger} onClick={this.imageClick} alt="food"/>
                    <img className="recetteInfo__container__images__img" src={pizza} onClick={this.imageClick} alt="food"/>
                    <img className="recetteInfo__container__images__img" src={burger} onClick={this.imageClick} alt="food"/>
                </div>
                <div className="recetteInfo__container__viewImage" onClick={this.viewImageContainer} ref={ele=>this.viewImage = ele}>
                    <div className="recetteInfo__container__viewImage__image">
                        <div className="recetteInfo__container__viewImage__image__block">
                            <img src={burger} onClick={this.imageClick} ref={ele=>this.displayImage=ele} alt="some"/>
                            <span className="recetteInfo__container__viewImage__image__block__close"><img src={close} onClick={this.viewImageContainer} alt=""/></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    viewImageContainer = ()=>{
        this.viewImage.style.display = "none"
    }

    imageClick = (e)=>{
        if(window.outerWidth > 767){
            this.viewImage.style.display = "block"
            this.displayImage.setAttribute('src', e.target.getAttribute('src'))

        }
    }
}
