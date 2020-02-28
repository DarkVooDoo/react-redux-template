import React, { Component } from 'react'
import './ajouter-confirm.css'

import { connect } from 'react-redux';

//let xhr = new XMLHttpRequest();

class AjouterConfirm extends Component {

    render() {
        if(this.props.page !== 4){
            return null
        }
        let ingredientItem = this.props.iList.map((ele,index)=>(
            <li key={index}>{ele}</li>
        ))

        let stepItem = this.props.sList.map((ele,index)=>(
            <li key={index}>{ele}</li>
        ))

        return (
            <div className="ajouter__form__box__confirm">
                <h1 className="ajouter__form__box__confirm__name">Confirmation</h1>
                <ul className="ajouter__form__box__confirm__ingredientList">
                    <h2 className="ajouter__form__box__confirm__ingredientList__name">Ingredients</h2>
                    {ingredientItem}
                </ul>
                <ul className="ajouter__form__box__confirm__stepList">
                    <h2 className="ajouter__form__box__confirm__stepList__name">Preparation</h2>
                    {stepItem}
                </ul>
                <div className="ajouter__form__box__confirm__description">
                    <h2 className="ajouter__form__box__confirm__description__name">Description</h2>
                    <p className="ajouter__form__box__confirm__description__text">{this.props.description}</p>
                </div>
                <button className="validationColor" onClick={this.validerRecette}>Valider</button>
            </div>
        )
    }

    validerRecette = (e)=>{
        /*let ingredientsList = ""
        let stepsList = ""
        this.state.iList.forEach(item=>ingredientsList+=`${item}-`)
        this.state.sList.forEach(item=>stepsList+=`${item}-`)
        xhr.open('POST', '/api/users', true)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(`ingredients=${ingredientsList}&steps=${stepsList}`)*/
    }
}

const mapStateToProps = state=>({
    page: state.page,
    iList: state.iList,
    sList: state.sList,
    description: state.description
})


export default connect(mapStateToProps, {})(AjouterConfirm)