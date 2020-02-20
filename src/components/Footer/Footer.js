import React, { Component } from 'react'

import './footer.css'
import github from '../../public/images/github.svg'
import ig from '../../public/images/instagram.svg'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <h3 className="footer__copyright">Copyright here</h3>
                <p className="footer__author">Creator: Moises</p>
                <ul className="footer__list">
                    <li className="footer__list__item">Home</li>
                    <li className="footer__list__item"><a href="#top">Retour en haut</a></li>
                </ul>
                <div className="footer__social">
                    <div className="footer__social__github">
                        <p onClick={this.externalLien}><img src={github} data-lien="https://github.com/DarkVooDoo/" alt="github"/></p>
                    </div>
                    <div className="footer__social__instagram">
                        <p><img src={ig} alt="instagram"/></p>
                    </div>
                </div>
            </footer>
        )
    }

    externalLien (e){
        let lien = e.target.dataset.lien
        window.location = lien
    }
}
