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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan, erat maximus suscipit congue,
                            diam orci rutrum nisl, vel posuere odio velit semper nibh. Cras vestibulum vestibulum turpis, at consequat
                            ligula rutrum eget. Praesent et pretium metus, vitae egestas mi. Vestibulum at nisl gravida, vehicula elit at,
                            mattis sem. Pellentesque ante nisl, laoreet eget molestie vitae, varius quis nulla. Mauris sed ullamcorper massa.
                            Vestibulum libero sem, elementum ut vehicula vel, placerat at elit.
                        </p>

                        <p>
                            Suspendisse gravida neque elit. Quisque interdum mattis rhoncus. Nulla sit amet pulvinar odio. In dapibus sagittis
                            rhoncus. Nunc imperdiet turpis turpis, id fringilla libero placerat eget. Suspendisse congue porta porta. Duis non
                            eros eu mi efficitur posuere. Pellentesque gravida nunc et ante ornare volutpat. Suspendisse potenti. Phasellus
                            at pretium ex, at luctus enim. Maecenas lobortis neque sit amet ante porta, nec porta nisl sagittis. Ut sollicitudin
                            euismod nibh quis tristique. Cras vulputate nisl facilisis interdum placerat. Nam vehicula dui imperdiet,
                            luctus est eget, maximus velit.
                        </p>

                        <p>
                            Suspendisse gravida neque elit. Quisque interdum mattis rhoncus. Nulla sit amet pulvinar odio. In dapibus sagittis
                            rhoncus. Nunc imperdiet turpis turpis, id fringilla libero placerat eget. Suspendisse congue porta porta. Duis non
                            eros eu mi efficitur posuere. Pellentesque gravida nunc et ante ornare volutpat. Suspendisse potenti. Phasellus
                            at pretium ex, at luctus enim. Maecenas lobortis neque sit amet ante porta, nec porta nisl sagittis. Ut sollicitudin
                            euismod nibh quis tristique. Cras vulputate nisl facilisis interdum placerat. Nam vehicula dui imperdiet,
                            luctus est eget, maximus velit.
                        </p>

                        <p>
                            Here is a link to my Resume. Feel free to click the button to look at the
                            Resume. And feel free to download it aslo.
                            <a href="https://drive.google.com/file/d/1NmtxrdE4Siam3m6OopJF8_WKhuwEAq25/view?usp=sharing" className='resume'>My Resume</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}