import React, { Component } from 'react'
import { connect } from 'react-redux'

import './ajouter-image.css'

//action
import {recetteImage} from '../../../redux/actions/ajouterFormActions'

class AjouterImage extends Component {

    render() {

        if(this.props.page !== 3){
            return null
        }

        return (
            <div className="ajouter__form__image">
                <div className="ajouter__form__image__imageInput">
                    <input type="file" onChange={this.grabImage} accept="image/*" name="image" id="image"/>
                    <label htmlFor="image">{this.props.image[1]}</label>
                </div>
                {this.props.image[0]}
            </div>
        )
    }

    grabImage = (e)=>{
        let file = new FileReader();
        let inputFile = e.target.files[0]
        file.addEventListener('load', (e)=>{
            let x = (
                <div className="ajouter__form__image__preview">
                    <img src={e.target.result} alt="images"/>
                </div>
            )
            this.setState({image: x})
            this.props.recetteImage(x, inputFile.name)
        }, false)

        file.addEventListener('error', (e)=>{
            console.log(e)
        })

        file.readAsDataURL(inputFile)

        
    }
}

const mapStateToProps = state=>({
    page: state.page,
    image: state.image
})

export default connect(mapStateToProps, {recetteImage})(AjouterImage)