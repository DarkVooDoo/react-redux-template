import React, { Component } from 'react'

import { connect } from 'react-redux';
import {ingredientsList} from '../../../redux/actions/ajouterFormActions'

class AjouterIngredients extends Component {

    constructor(props){
        super(props)
        this.state = {iList: []}

    }

    render() {
        if(this.props.page !== 0){
            return ""
        }

        let list = this.props.iList.map((list, index)=>{
            return (
                <li key={index} className="ajouter__form__ingredientList__item">
                    {list}
                    <span className="item__delete" onClick={this.deleteItem}>X</span>
                </li>
            )
        })
        return (
            <div>
                <h2 className="ajouter__form__box__title">#1: Ingredients</h2>
                <div className="ajouter__form__box__ingredient">
                    <input type="text" autoComplete="off" spellCheck="false" 
                    name="ingredient" ref={ele=>this.ingredientValue = ele} className="ingredient__input"
                    onChange={this.somethingOn} onKeyUp={this.addRecipe}/>
                    <label htmlFor="ingredient" className="ingredient__label" ref={ele=>this.inputLabel = ele}>ex: 2 Tomate</label>
                </div>
                <div className="ajouter__form__addIngredient" onClick={this.addInput} ref={ele=>this.addIngredient = ele}>Add Ingredient</div>
                <div className="ajouter__form__ingredientList">
                    <ul ref={ele=>this.ingredientList = ele}>
                        {list}
                    </ul>
                </div>
            </div>
        )
    }

    addInput = (e)=>{
        if(this.ingredientValue.value.length > 2){
            let list = this.state.iList;
            list.push(this.ingredientValue.value)
            this.setState({iList: list})
            this.props.ingredientsList(list)
            this.ingredientValue.value = ''
        }
    }

    somethingOn = (e)=>{
        if(e.target.value) this.inputLabel.classList.add('somethingOn')
        else this.inputLabel.classList.remove('somethingOn')
    }

    addRecipe = (e)=>{
        if(e.key === 'Enter') {
            this.addIngredient.click()
            e.target.value = ''
        }
    }

    deleteItem = (e)=>{
        let selected = e.target.parentElement.textContent.replace('X', '')
        let every = document.getElementsByClassName('ajouter__form__ingredientList__item')
        let updateList =[]
        for(let i of every){
            updateList.push(i.textContent.replace('X', ''))
        }

        let list = updateList.filter(item=> item !== selected)
        this.props.ingredientsList(list)
        this.setState({iList: list})
    }
}

const mapStateToProps = state=>({
    iList: state.iList,
    page: state.page
})

export default connect(mapStateToProps, { ingredientsList })(AjouterIngredients);