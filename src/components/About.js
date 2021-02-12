/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import '../App.css'
import logo from "../AboutmePic.jpg"




export default class About extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-sm col-md col-lg'>
                        <h3 className='mt-3 mb-3'>About Me</h3>
                        <img className="float-left mr-4 mb-4 mt-4 ml-4" src={logo} width="150" height="150" />

                        <p>
                            I'm Kobe Hill Nice to meet you. I am full-stack web developer based is Wellsville,KS. I aslo have my part 107 license which a is a Pilots license for drones. After I got my part 107 I started my own company called AIRSHOT.llc we specialize in real estate photography and videography.
                        </p>

                        <p>
                            With growing up in a family and having a mom that works in the tech industry. I grew up loving
                            technology and working with computers. When I was young I started teaching my self how to build
                            computers. But what really got interested in coding was the class I took in High School. That class
                            had a major impact on my life because I found something that I was good at and enjoyed doing it. So
                            that is why I went to the KU Coding BootCamp.
                        </p>

                        <p>
                            Some of the skills I have are: Html, CSS, jquery, Javascript, Node.js, React.js, PWA, MongoDB,
                            MySql, BootStrap, Bulma, MERN.
                        </p>

                        <p>
                            Here is a link to my Resume. Feel free to click the button to look at the
                            Resume.
                            <a href="https://drive.google.com/file/d/1NmtxrdE4Siam3m6OopJF8_WKhuwEAq25/view?usp=sharing" className='resume'>My Resume</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}