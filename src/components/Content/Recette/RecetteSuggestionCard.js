import React, { Component } from 'react'

import pizza from '../../../public/images/pizza.jpg'


export default class RecetteSuggestionCard extends Component {
    render() {
        return (
            <div className="recetteInfo__suggestion__carousel__card">
                <div className="recetteInfo__suggestion__carousel__card__image">
                    <img src={pizza} alt="pizza"/>
                </div>
                <h2 className="recetteInfo__suggestion__carousel__card__name">Name De La Recette</h2>
                <p className="recetteInfo__suggestion__carousel__card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus sunt ipsam totam nisi consequuntur rem beatae quibusdam aliquam quas!
                Non autem rerum magni quo libero quasi laboriosam, nobis voluptas illo!</p>
            </div>
        )
    }
}
