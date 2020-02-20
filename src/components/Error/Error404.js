import React, { Component } from 'react'

export default class Error404 extends Component {
    render() {

        let myStyle = {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"

        }

        return (
            <div style={{position: "relative", minHeight: "72vh"}}>
                <h1 style={myStyle}>
                    404 NOT FOUND
                </h1>
            </div>
        )
    }
}
