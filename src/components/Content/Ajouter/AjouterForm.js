import React, { Component } from 'react'

import AjouterIngredients from './AjouterIngredients'
import AjouterStep from './AjouterStep'
import AjouterDescription from './AjouterDescription'
import AjouterImage from './AjouterImage'
import AjouterConfirm from './AjouterConfirm'

import './ajouter-form.css'
import { connect } from 'react-redux'

import{actualPage} from '../../../redux/actions/ajouterFormActions'

class AjouterForm extends Component {
    render() {
        let isLast = this.isLast()
        let back = ''
        if(this.props.page !== 0) {
                
            back = (<button className='back__form__btn' onClick={this.backComponent}>Back</button>)
            
        }

        return (
            <div className="ajouter__form">
                <AjouterIngredients />
                <AjouterStep  />
                <AjouterDescription />
                <AjouterImage />
                <AjouterConfirm />
                <div className="ajouter__form__buttons">
                    {back}
                    {isLast}
                </div>
            </div>
        )
    }

    isLast = ()=>{
        if(this.props.page === 4) return ""
        else {
            return (
                <button className="ajouter__form__btn" onClick={this.nextComponent}>Next</button>
            )
        }
    }

    backComponent = (e)=>{
        if(this.props.page > 0){
            let index = this.props.page-1
            if(index === 0) {
                this.setState({page: this.props.page-1})
                this.props.actualPage(this.props.page-1, true)
            }
            else {
                this.setState({page: this.props.page-1})
                this.props.actualPage(this.props.page-1, false)
            }
        }
    }

    nextComponent = (e)=>{
        if(this.props.page < 5){
            let index = this.props.page+1
            if(index === 4) {
                this.setState({page: this.props.page+1})
                this.props.actualPage(this.props.page+1, false)
            }
            else {
                this.setState({page: this.props.page+1})
                this.props.actualPage(this.props.page+1)
            }
        }
    }
}

const mapStateToProps = state=>({
    page: state.page
})


export default connect(mapStateToProps,{actualPage})(AjouterForm)