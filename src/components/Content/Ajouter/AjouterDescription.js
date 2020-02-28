import React, { Component } from 'react'

import './ajouter-description.css'
import { connect } from 'react-redux'

import {descriptionUpdate} from '../../../redux/actions/ajouterFormActions'

class AjouterDescription extends Component {

    render() {
        if(this.props.page !== 2){
            return null
        }
        let somethingOn = ''
        if(this.props.description) somethingOn = 'descriptionOn'

        return (
            <div className="ajouter__form__description">
                <h1 className="ajouter__form__description__head">#{this.props.page + 1} Description</h1>
                <div className="ajouter__form__description__textarea">
                    <textarea spellCheck="false" name="description" id="description"
                    onChange={this.descriptionChange} value={this.props.description}></textarea>
                    <label htmlFor="description" className={this.props.description ? 'descriptionOn': ''} ref={ele=>this.descriptionLabel=ele}>Ecrire quelque chose sur la recette</label>
                </div>
            </div>
        )
    }
    
    descriptionChange = (e)=>{
        this.setState({description: e.target.value})
        this.props.descriptionUpdate(e.target.value)
        if(e.target.value) this.descriptionLabel.classList.add('descriptionOn')
        else this.descriptionLabel.classList.remove('descriptionOn')
    }
}


const mapStateToProps = state=>{

    return{
        page: state.page,
        iList: state.iList,
        sList: state.sList,
        description: state.description
    }
}

export default connect(mapStateToProps, {descriptionUpdate})(AjouterDescription)