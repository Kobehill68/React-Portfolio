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
                            out of supply. So we set out to make a app that allows a user to input where there is tp in stock.
                            </p>
                            <a href="https://mkkp-project2.herokuapp.com/" className="btn btn-primary">TPOOPS</a>
                        </div>
                    </div>

                    <div className='col-md-4 well'>
                        <div className='project'>
                            <h3>Progressive Budget</h3>
                            <p>This is my first PWA application I have made. This app will a user to track there budget online and
                            offline as well.
                            </p>
                            <a href="https://pacific-atoll-34498.herokuapp.com/" className="btn btn-primary">Progressive Budget</a>
                        </div>
                    </div>

                    <div className='col-md-4 well'>
                        <div className='project'>
                            <h3>Fitness Tracker</h3>
                            <p>This application allows a user to veiw,create and track daily workouts. You can log mulltiple exercises on the current day. You can aslo view stats about the workouts that you have completed. This app makes working out fun. </p>
                            <a href="https://gentle-spire-87547.herokuapp.com/" className="btn btn-primary">Fitness Tracker</a>
                        </div>
                    </div>

                    <div className='col-md-4 well'>
                        <div className='project'>
                            <h3>Note Taker</h3>
                            <p>This program will allow you to record your notes. And save them to a database.If you need help taking noters this is the program for you. You smiply click on the pencil icon in the top right of your screen and this will allow you to create a note.</p>
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