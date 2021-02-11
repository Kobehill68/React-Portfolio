import React, { Component } from 'react'
import '../App.css'



export default class Projects extends Component {
    render() {
        return (
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-4 well'>
                        <div className='project'>
                            <h3>Travel Planner</h3>
                            <p>We all love to travel, it is a big part of are lives. But trying to plan a
                            trip is a hassel. So we set out to making travel planning easy. Our Web Application does
                            just that, you can say our web site is a one stop shop.</p>
                            <a href="https://benjdg.github.io/Travel_App/" class="btn btn-primary">Travel Planner</a>
                        </div>
                    </div>

                    <div className='col-md-4 well'>
                        <div className='project'>
                            <h3>Project 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan, erat maximus suscipit congue,
                            diam orci rutrum nisl, vel posuere odio velit semper nibh. Cras vestibulum vestibulum turpis, at consequat
                            ligula rutrum eget. Praesent et pretium metus, vitae egestas mi. Vestibulum at nisl gravida, vehicula elit at,
                            mattis sem. Pellentesque ante nisl, laoreet eget molestie vitae, varius quis nulla. Mauris sed ullamcorper massa.
                            Vestibulum libero sem, elementum ut vehicula vel, placerat at elit.</p>
                        </div>
                    </div>

                    <div className='col-md-4 well'>
                        <div className='project'>
                            <h3>Project 3</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan, erat maximus suscipit congue,
                            diam orci rutrum nisl, vel posuere odio velit semper nibh. Cras vestibulum vestibulum turpis, at consequat
                            ligula rutrum eget. Praesent et pretium metus, vitae egestas mi. Vestibulum at nisl gravida, vehicula elit at,
                            mattis sem. Pellentesque ante nisl, laoreet eget molestie vitae, varius quis nulla. Mauris sed ullamcorper massa.
                            Vestibulum libero sem, elementum ut vehicula vel, placerat at elit.</p>
                        </div>
                    </div>



                </div>
            </div>
        )
    }
}