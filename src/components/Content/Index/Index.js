import React, { Component } from 'react'
import {connect} from 'react-redux'
<<<<<<< HEAD

import {defaultAction} from '../../../redux/actions/actions'

import './index.css'
class Index extends Component {

    constructor(props){
        super(props)
        this.props.defaultAction('Patron')
    }
    render() {

        return (
            <div className="index">
=======

import RecetteCard from './RecetteCard'
import {carouselPos} from '../../../redux/actions/ajouterFormActions'

import imageBanner from '../../../public/images/bannerImage.png'

let ids = ['1','2','3', '4']

class Index extends Component {

    render() {
        let recettes = ids.map((ele,index) =><RecetteCard key={index} recetteid={index}/>)

        return (
            <div className="recette" onScroll={this.indexScroll}>
                <div className="recette__banner">
                    <div className="recette__banner__btn">
                        <h3>Mes Recettes</h3>
                    </div>
                    <div className="recette__banner__image">
                        <img src={imageBanner} alt="banner"/>
                    </div>
                </div>
                <div className="recette__carousel">
                    <span id="left" onClick={this.leftCarouselBtn}></span>
                    <span id="right" onClick={this.rightCarouselBtn}></span>
                    <div className="recette__carousel__inner" style={{left: this.props.pos+'%'}}>
                        {recettes}
                    </div>
                </div>
>>>>>>> 1c9419ff6d90f73afb19f5d5b71f8dbdbe240f27
            </div>
        )
    }

    rightCarouselBtn = (e)=>{
        if(this.props.pos > -300) this.props.carouselPos(this.props.pos - 100)
    }

    leftCarouselBtn = (e)=>{
        if(this.props.pos < 0) this.props.carouselPos(this.props.pos + 100)
    }
}

const mapStateToProps = state=>({
<<<<<<< HEAD
    welcome: state.firstReducer
})

export default connect(mapStateToProps, {defaultAction})(Index)
=======
    pos: state.carouselPos
})

export default connect(mapStateToProps, {carouselPos})(Index)
>>>>>>> 1c9419ff6d90f73afb19f5d5b71f8dbdbe240f27
