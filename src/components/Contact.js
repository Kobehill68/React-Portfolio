import React, { Component } from 'react'
import '../App.css'



export default class Contact extends Component {
    render() {
        return (
            <div className='container mt-5'>
                <h2 className='mt-3 mb-3'> Contact Me</h2>
                <div className="row">
                    <div className="col">
                        <h4>Github:<a href="https://github.com/Kobehill68" className='github'>github profile</a></h4>
                        <h4>LinkedIn:<a href="https://www.linkedin.com/in/kobe-hill-49b569189/" className='link'>linkedin profile</a> </h4>
                        <h4>Email: kobehill68@gmail.com</h4>
                    </div>
                </div>
            </div>
        )
    }
}