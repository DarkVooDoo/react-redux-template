import React, { Component } from 'react'
import {connect} from 'react-redux'

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
    pos: state.carouselPos
})

export default connect(mapStateToProps, {carouselPos})(Index)