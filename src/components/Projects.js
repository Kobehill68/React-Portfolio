import React, { Component } from 'react'
import '../App.css'



export default class Projects extends Component {
    render() {
        return (
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-md-4 well'>
                        <div className='project'>
                            <h3>Travel Planner</h3>
                            <p>We all love to travel, it is a big part of are lives. But trying to plan a
                            trip is a hassel. So we set out to making travel planning easy. Our Web Application does just that, you can say our web site is a one stop shop.
                            </p>
                            <a href="https://benjdg.github.io/Travel_App/" className="btn btn-primary">Travel Planner</a>
                        </div>
                    </div>

                    <div className='col-md-4 well'>
                        <div className='project'>
                            <h3>TPOOPS</h3>
                            <p>We all need toilet paper. But with covid-19 it seems that tp was allways
                            out of supply. So we set out to make a app that allows a user to input where there is tp in stock. Then when you are out of Tp you will be able to see the stores that have tp in stock that way you dont drive out of you way.
                            </p>
                            <a href="https://mkkp-project2.herokuapp.com/" className="btn btn-primary">TPOOPS</a>
                        </div>
                    </div>

                    <div className='col-md-4 well'>
                        <div className='project'>
                            <h3>Progressive Budget</h3>
                            <p>This is my first PWA application I have made. This app will a user to track there budget online and
                            offline as well. The User will be able to add expenses and deposits to their budget with or without a connection.
                            When entering transactions offline, it will populate when they go online again.
                            </p>
                            <a href="https://pacific-atoll-34498.herokuapp.com/" className="btn btn-primary">Progressive Budget</a>
                        </div>
                    </div>

                    <div className='col-md-4 well'>
                        <div className='project'>
                            <h3>Fitness Tracker</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan, erat maximus suscipit congue,
                            diam orci rutrum nisl, vel posuere odio velit semper nibh. Cras vestibulum vestibulum turpis, at consequat
                            ligula rutrum eget. Praesent et pretium metus, vitae egestas mi. </p>
                            <a href="https://gentle-spire-87547.herokuapp.com/" className="btn btn-primary">Fitness Tracker</a>
                        </div>
                    </div>

                    <div className='col-md-4 well'>
                        <div className='project'>
                            <h3>Note Taker</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan, erat maximus suscipit congue,
                            diam orci rutrum nisl, vel posuere odio velit semper nibh. Cras vestibulum vestibulum turpis, at consequat
                            ligula rutrum eget. Praesent et pretium metus, vitae egestas mi.</p>
                            <a href="https://boiling-gorge-62792.herokuapp.com/" className="btn btn-primary">Note Taker</a>
                        </div>
                    </div>

                    <div className='col-md-4 well'>
                        <div className='project'>
                            <h3>YourView</h3>
                            <p>This Website is still in development stage. When it is completed you will be able to make a account after that you will be able to post videos and watch videos on the application. You will aslo be able to subscribe to different accounts you like.</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}