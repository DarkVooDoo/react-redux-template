import React, { Component } from 'react'

import AboutHeader from './AboutHeader'
import AboutContent from './AboutContent' 
import './about.css'

export default class About extends Component {
    render() {
        return (
            <div className="about">
                <AboutHeader />
                <AboutContent/>
            </div>
        )
    }
}
