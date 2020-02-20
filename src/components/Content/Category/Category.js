import React, { Component } from 'react'
import CategoryCard from './CategoryCard'

import boeuf from '../../../public/images/beef.svg'
import chicken from '../../../public/images/chicken.svg'

export default class Category extends Component {
    render() {
        return (
            <div className="categorie">
                <CategoryCard img={boeuf}/>
                <CategoryCard img={chicken}/>
            </div>
        )
    }
}
