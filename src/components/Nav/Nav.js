import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'

import menuBtn from '../../public/images/menu.svg'
import icon  from '../../public/images/cook.svg'


export default class Nav extends Component {

    menuButton = (e)=>{      
        
        if(e.target.parentElement.id === 'logo-lien') this.navmenulist.classList.remove('navMenuListFade')
        else this.navmenulist.classList.toggle('navMenuListFade')
    }

    render() {
        return (
            <nav>
                <h2 id="logo"><Link to="/" onClick={this.menuButton} id="logo-lien"><img src={icon} alt=""/></Link></h2>
                <div className="navMenuList__btn" onClick={this.menuButton}>
                    <img src={menuBtn} alt="menu btn"/>
                </div>
                <ul className="navMenuList" ref={(ele)=> this.navmenulist = ele}>
                    <li className="navMenuList__item" onClick={this.menuButton}><Link to="/">Link</Link></li>
                    <li className="navMenuList__item" onClick={this.menuButton}><Link to="/Categories">Category</Link></li>
                    <li className="navMenuList__item" onClick={this.menuButton}><Link to="/Ajouter">Ajouter</Link></li>
                    <li className="navMenuList__item" onClick={this.menuButton}><Link to="/About">About</Link></li>
                </ul>
            </nav>
        )
    }
}