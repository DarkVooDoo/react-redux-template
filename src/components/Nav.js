import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <nav>
              <ul>
                  <li><Link to="/about">About</Link></li>
                  <li>Another</li>
                  <li>Less</li>
              </ul>  
            </nav>
        )
    }
}
