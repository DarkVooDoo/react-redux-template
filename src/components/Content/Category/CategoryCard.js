import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './category-card.css'

export default class CategoryCard extends Component {

    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="categorie__card">
                <Link to="#" className="categorie__card__lien"></Link>
                <div className="categorie__card__image">
                    <img src={this.props.img} alt="boeuf"/>
                </div>
                <div className="categorie__card__description">
                    <p className="name">Recette Boeuf</p>
                    <div className="items">10 Recettes</div>
                </div>
            </div>
        )
    }
}
