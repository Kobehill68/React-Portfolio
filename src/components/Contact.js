import React, { Component } from 'react'
import '../App.css'



export default class Contact extends Component {
    render() {
        return (
            <div className='container mt-5'>
                <h2 className='mt-3 mb-3'> Contact Me</h2>
                <div className="row">
                    <div className="col">
                        <h4>Github: Link to github</h4>
                        <h4>LinkedIn: </h4>
                        <h4>Email: </h4>
                    </div>
                </div>
            </div>
        )
    }
}