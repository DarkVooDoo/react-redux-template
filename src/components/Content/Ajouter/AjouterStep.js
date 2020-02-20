import React, { Component } from 'react'
import {connect} from 'react-redux'

import {updateStepList} from '../../../redux/actions/ajouterFormActions'

class AjouterStep extends Component {
    constructor(props){
        super(props)
        this.state = {page: this.props.page, iList: [], sList: []};
    }

    componentDidMount(){
        
    }

    render() {

        if(this.props.page !== 1){
            return '';
        }
        
        let list = this.props.sList.map((list, index)=>{
            return (
                <li key={index} className="ajouter__form__ingredientList__item">
                    {list}
                    <span className="item__delete" onClick={this.deleteItem}>X</span>
                </li>
            )
        })

        let recapList = this.props.iList.map((list, index)=>{
            return (
                (
                    <li key={index} className="ajouter__form__recap__list__item">{list}</li>
                )
            )
        })

        return (
            <div className="ajouter__form__box__step">
                <h2 className="ajouter__form__box__title">#{this.props.page + 1}: Preparation</h2>
                <div className="ajouter__form__box__ingredient">
                    <input type="text" autoComplete="off" spellCheck="false" 
                    name="ingredient" ref={ele=>this.ingredientValue = ele} className="ingredient__input"
                    onChange={this.somethingOn} onKeyUp={this.addRecipe}/>
                    <label htmlFor="ingredient" className="ingredient__label" ref={ele=>this.inputLabel = ele}>Melanger Ingredient 1 et 3 </label>
                </div>
                <div className="ajouter__form__addIngredient" onClick={this.addInput} ref={ele=>this.addIngredient = ele}>Ajouter Step</div>
                <div className="ajouter__form__ingredientList">
                    <ul>
                        {list}
                    </ul>
                </div>
                <div className="ajouter__form__recap">
                    <ul className="ajouter__form__recap__list">
                        <h3 className="ajouter__form__recap__list__name">Ingredients:</h3>
                        {recapList}
                    </ul> 
                </div>
            </div>
        )
    }

    addInput = (e)=>{
        if(this.ingredientValue.value.length > 2){
            let list = this.state.sList;
            list.push(this.ingredientValue.value)
            this.props.updateStepList(list)
            this.setState({sList: list})
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
        let name = e.target.parentElement.textContent.replace('X', '')
        const every = document.getElementsByClassName('ajouter__form__ingredientList__item')
        let array = []
        for(let item of every) array.push(item.textContent.replace('X', ''))
        let updatedList = array.filter(item=> item !== name)
        this.props.updateStepList(updatedList)
        this.setState({sList: updatedList})

    }
}

const mapStateToProps = state=>({
    iList: state.iList,
    sList: state.sList,
    page: state.page
})


export default connect(mapStateToProps,{updateStepList})(AjouterStep)