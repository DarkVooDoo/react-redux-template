import React, { Component } from 'react'

import RecetteCard from './RecetteCard'

import apple from '../../../public/images/005-apple.svg'
import pizza from '../../../public/images/003-pizza.svg'
import coffee from '../../../public/images/002-coffee-cup.svg'
import fish from '../../../public/images/004-fish.svg'
import dish from '../../../public/images/001-dish.svg'
import burger from '../../../public/images/006-burger.svg'

let ids = ['1','2','3', '4']


export default class Index extends Component {

    constructor(props){
        super(props)
        this.state = {
            svg1: this.getRandomInt(),
            svg2: this.getRandomInt(),
            svg3: this.getRandomInt(),
            svg4: this.getRandomInt(),
            svg5: this.getRandomInt(),
            svg6: this.getRandomInt()

            
        }
    }

    getRandomInt() {
        let pos = [];
        pos.push(Math.floor(Math.random() * Math.floor(90)))
        pos.push(Math.floor(Math.random() * Math.floor(90)))
        return pos
    }

    render() {
        let recettes = ids.map((ele,index) =><RecetteCard key={index} recetteid={index}/>)

        return (
            <div className="recette">
                <header ref={ele=>this.indexHeader=ele}>
                    <div id="parallax1"></div>
                    <div id="parallax2"></div>
                </header>
                {recettes}
            </div>
        )
    }
}
